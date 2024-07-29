import React, { useState } from "react";
import addSymbol from "../assests/add-symbol.png";
import crossSymbol from "../assests/cross.png";
import AddTodo from "./AddTodo";
import TodoBox from "./TodoBox";
import dummyData from "../Data//dummyData.json";

const Homepage = () => {
  const [openAddtodo, setOpenAddtodo] = useState(false);
  const [isAddopen, setIsAddOpen] = useState(false);

  const handleOpen = () => {
    setIsAddOpen(!isAddopen);
    setOpenAddtodo(!openAddtodo);
  };

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
        <div className="w-1/2 h-full mt-10 flex flex-col items-center  rounded-lg">
          {dummyData.map((todos) => {
            return (
              <>
                <TodoBox title={todos.title} decsription={todos.Description} />;
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
