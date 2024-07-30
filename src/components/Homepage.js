import React, { useEffect, useState } from "react";
import addSymbol from "../assests/add-symbol.png";
import crossSymbol from "../assests/cross.png";
import AddTodo from "./AddTodo";
import editLogo from "../assests/edit.png";
import deleteLogo from "../assests/delete.png";
import TodoBox from "./TodoBox";
import DummyData from "./DummyData";
import EditTodo from "./EditTodo";
const Homepage = () => {
  const [openAddtodo, setOpenAddtodo] = useState(false);
  const [isAddopen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editId, setEditId] = useState();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todoData"))
  );

  const handleOpen = () => {
    setIsAddOpen(!isAddopen);
    setOpenAddtodo(!openAddtodo);
  };

  const handleDelete = (index) => {
    var newData = JSON.parse(localStorage.getItem("todoData"));
    for (var i = 0; i < index || i < data.length; i++) {
      if (i === index) {
        newData.splice(i, 1);
        localStorage.setItem("todoData", JSON.stringify(newData));
        window.dispatchEvent(new Event("storage"));
        break;
      }
    }
  };

  useEffect(() => {
    const addData = () => {
      const newData = JSON.parse(localStorage.getItem("todoData"));
      setIsAddOpen(false);
      setOpenAddtodo(false);
      setData(newData);
    };
    window.addEventListener("storage", addData);

    return () => {
      window.removeEventListener("storage", addData);
    };
  }, []);

  return (
    <>
      <div
        id="main-bg"
        className="bg-black h-full w-full flex  flex-col items-center  "
      >
        <h1 className="font-bold mt-[10vh] text-5xl text-white">
          TODO <span className="text-blue-500">LIST </span>
        </h1>
        <div
          id="addTask"
          className="bg-white h-[8vh] w-[15vw] rounded-3xl justify-around flex mt-[5vh] cursor-pointer select-none "
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
        {openAddtodo && <AddTodo />}
        <div className="w-1/2 h-full mt-10 flex flex-col items-center  rounded-lg relative">
          <DummyData />
          {data &&
            data.map((todos, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="h-[13vh] m-5  bg-white rounded-lg w-[100%] p-3 flex"
                  >
                    <TodoBox
                      title={todos.title}
                      decsription={todos.description}
                      key={index}
                    />
                    <div className="flex w-[25%] justify-end ">
                      <img
                        src={editLogo}
                        alt=""
                        className="h-[60%]  my-auto   cursor-pointer"
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
                      <img
                        src={deleteLogo}
                        alt=""
                        className="h-[60%] mx-7 my-auto cursor-pointer"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  </li>
                  {isEditOpen && editId === index && (
                    <li key={index} className="float-right ml-auto ">
                      <EditTodo
                        title={data[index].title}
                        description={data[index].description}
                        index={index}
                      />
                    </li>
                  )}
                </>
              );
            })}
        </div>
        ;
      </div>
    </>
  );
};

export default Homepage;
