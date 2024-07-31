import React, { useEffect } from "react";
import crossLogo from "../assests/cross.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewTodo = () => {
  //USING USE PARAM HOOK TO EXTRACT TODOID FROM URL
  const { todoId } = useParams();
  const data = JSON.parse(localStorage.getItem("todoData"));

  const Navigate = useNavigate();
  useEffect(() => {
    //HANDLING UNCERTAIN EVENT
    if (todoId === "undefined" || todoId > data.length - 1) {
      Navigate("/");
    }
  }, []);

  return (
    <>
      <div className=" w-[100%] sm:w-[70%] mx-auto mt-[3vh] lg:w-[50%] flex flex-col align-middle ">
        <h1 className="font-bold mt-[10vh] text-5xl text-white cursor-pointer mx-auto ">
          TODO <span className="text-blue-500">LIST </span>
        </h1>
        <div className="  sm:h-[30%]  w-2/3 mx-auto mt-9  flex justify-end">
          <Link to={"/"} className="h-full w-[15%] sm:w-[20%]  md:w-[8%] ">
            <img src={crossLogo} alt="" />
          </Link>
        </div>
        <div className="bg-[#cecece] w-2/3 mx-auto rounded-xl h-full mt-5 p-4">
          <div className=" m-3   flex ">
            <h1 className="font-bold text-2xl">Title: </h1>
            <h4 className="font-semibold text-1xl my-1.5 ml-3">
              {data[todoId].title}
            </h4>
          </div>
          <div className=" m-3">
            <h1 className="font-bold text-2xl">Description: </h1>
            <h4 className="font-semibold text-1xl">
              {data[todoId].description}
            </h4>
          </div>
          <div className=" m-3">
            <h1 className="font-bold text-2xl">Status: </h1>{" "}
            <span>
              <h4 className="font-semibold text-1xl">
                {data[todoId].isComplete ? "Completed" : "Not Complete"}
              </h4>
            </span>
          </div>
          <div className=" m-3 mb-6">
            <h1 className="font-bold text-2xl">Last Update: </h1>
            <h4 className="font-semibold text-1xl">
              {data[todoId].lastUpdated}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTodo;
