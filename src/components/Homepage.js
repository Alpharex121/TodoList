import React, { useEffect, useState } from "react";
import addSymbol from "../assests/add-symbol.png";
import crossSymbol from "../assests/cross.png";
import AddTodo from "./AddTodo";
import editLogo from "../assests/edit.png";
import deleteLogo from "../assests/delete.png";
import TodoBox from "./TodoBox";
import DummyData from "./DummyData";
import EditTodo from "./EditTodo";
import { toast } from "react-toastify";
const Homepage = () => {
  //Initialized various useState to keep track of AddTask, EditTask box state.
  const [openAddtodo, setOpenAddtodo] = useState(false);
  const [isAddopen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [showDummyData, setShowDummyData] = useState(true);
  const [editId, setEditId] = useState();

  //Retrieving the data from local state for mapping.
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todoData"))
  );

  //Function to handle AddTask box state.
  const handleOpen = () => {
    setIsAddOpen(!isAddopen);
    setOpenAddtodo(!openAddtodo);
  };

  //Functon to handle DeleteButton. It takes data from local storage -> and loop through data ->if index found it slice the array -> push back updated data to localStorage
  const handleDelete = (index) => {
    var newData = JSON.parse(localStorage.getItem("todoData"));
    for (var i = 0; i < index || i < data.length; i++) {
      if (i === index) {
        newData.splice(i, 1);
        localStorage.setItem("todoData", JSON.stringify(newData));
        window.dispatchEvent(new Event("storage"));
        toast.success("Task deleted Successfully!", {
          position: "top-right",
          theme: "colored",
          autoClose: 1000,
        });
        break;
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTodo = e.target.searchTodo.value;
    const origionalData = JSON.parse(localStorage.getItem("todoData"));
    if (!searchTodo) {
      origionalData && setData(origionalData);
      setShowDummyData(true);
    } else {
      const searchResult = origionalData.filter((dataa) =>
        dataa.title.toLowerCase().includes(searchTodo.toLowerCase())
      );
      setShowDummyData(false);
      searchResult.length == 0 ? setData(null) : setData(searchResult);
    }
  };

  useEffect(() => {
    //Added EventListener which listen to the event "storage" which is used by useEffect to continuously monitor change in localStorage and update the data.
    const addData = () => {
      const newData = JSON.parse(localStorage.getItem("todoData"));
      setIsAddOpen(false);
      setOpenAddtodo(false);
      setIsEditOpen(false);
      setData(newData);
    };
    window.addEventListener("storage", addData);

    return () => {
      window.removeEventListener("storage", addData);
    };
  }, []);

  //Page frontend started.
  return (
    <>
      <div
        id="main-bg"
        className=" h-full w-full flex  flex-col items-center  "
      >
        <h1 className="font-bold mt-[10vh] text-5xl text-white">
          TODO <span className="text-blue-500">LIST </span>
        </h1>
        <div
          id="addTask"
          className="bg-white h-[8vh] s-[70%]  md:w-[35vw] lg:w-[25%] xl:w-[15%] rounded-3xl justify-around flex mt-[5vh] cursor-pointer select-none "
          onClick={handleOpen}
        >
          {isAddopen ? (
            <>
              <img src={crossSymbol} alt="" className="h-full" />
              <span className="my-auto mr-6  text-2xl font-bold select-none">
                Close Todo
              </span>
            </>
          ) : (
            <>
              <img src={addSymbol} alt="" className="h-full" />
              <span className="my-auto mr-6  text-2xl font-bold select-none">
                Add Todo
              </span>
            </>
          )}
        </div>
        {/* Checking is isAddOpen state is true -> if true -> show the addTask card */}
        {openAddtodo && <AddTodo />}
        <form
          action=""
          onSubmit={handleSearch}
          className="bg-red-100 w-1/3 mt-8 rounded-lg flex justify-between "
        >
          <div className=" w-full bg-green-100  flex justify-between rounded-lg">
            <input
              type="text"
              name="searchTodo"
              className=" bg-white rounded-l-lg p-3 w-[75%] focus:outline-none"
            />
            <button className=" w-[25%] font-bold text-xl bg-blue-300 p-3 rounded-r-lg">
              Search
            </button>
          </div>
        </form>
        <div className=" w-[80%] sm:w-[80vw] md:w-50%  md:w-[50vw] h-full mt-10 flex flex-col items-center  rounded-lg relative">
          {/* Hardcoded Dummy Data */}
          {showDummyData && <DummyData />}
          {/* Mapping the data */}
          {!data && !showDummyData && (
            <h1 className="font-bold text-3xl">NO RESULT FOUND!</h1>
          )}
          {data &&
            data.map((todos, index) => {
              return (
                <li key={index} className="w-full list-none bg m-2 sm:m-2">
                  <div className="sm:h-[13vh]  mb-5  bg-white  rounded-lg w-[100%]  p-3 flex">
                    <TodoBox
                      title={todos.title}
                      decsription={todos.description}
                    />
                    <div className="flex w-[30%]  justify-end ">
                      {/* Logic to show cross image or edit image. if edit box is open  -> cross image -> else edit image */}
                      {isEditOpen && editId === index ? (
                        <img
                          src={crossSymbol}
                          alt=""
                          className="h-[30%] sm:h-[50%]   my-auto   cursor-pointer"
                          onClick={() => {
                            if (editId !== index) {
                              setIsEditOpen(true);
                              setEditId(index);
                            } else {
                              setIsEditOpen(false);
                              setEditId(null);
                            }
                          }}
                        />
                      ) : (
                        <img
                          src={editLogo}
                          alt=""
                          className="h-[30%] sm:h-[40%] my-auto  cursor-pointer"
                          onClick={() => {
                            if (editId !== index) {
                              setIsEditOpen(true);
                              setEditId(index);
                            } else {
                              setIsEditOpen(false);
                              setEditId(null);
                            }
                          }}
                        />
                      )}

                      <img
                        src={deleteLogo}
                        alt=""
                        className="h-[30%] sm:h-[40%] mx-7 my-auto cursor-pointer"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  </div>

                  {/* Showing only the component whose index matched the clicked index. */}
                  {isEditOpen && editId === index && (
                    <div className="float-right ml-auto ">
                      <EditTodo
                        title={data[index].title}
                        description={data[index].description}
                        index={index}
                      />
                    </div>
                  )}
                </li>
              );
            })}
        </div>
        ;
      </div>
    </>
  );
};

export default Homepage;
