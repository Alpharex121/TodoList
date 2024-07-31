import React from "react";
import { Link, useNavigate } from "react-router-dom";

// structure and styling of list box.
const TodoBox = ({ title, decsription, index, isCompleted }) => {
  const Navigate = useNavigate();

  //FUNCTION TO HANDLE MARK AS DONE
  const handleComplete = (index) => {
    //IF INDEX IS UNDEFINED RETURN (For disabling dummy data "Mark As Complete" button)
    if (index === undefined) return;
    const todoData = JSON.parse(localStorage.getItem("todoData"));
    //MARKING DATA[INDEX] ISCOMPLETE TO TRUE IF CLICKED ON "MARK AS DONE"
    todoData[index].isComplete = true;
    //Pushing it back to localStorage
    localStorage.setItem("todoData", JSON.stringify(todoData));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className="w-[80%] mr-3   ">
        <h1 className="font-bold text-2xl  ">{title}</h1>
        <h4 className="font-semibold text-wrap">
          {decsription.length > 70
            ? decsription.slice(0, 70) + "......"
            : decsription.slice(0, 70)}
        </h4>
        <div
          className={`flex mt-3 sm:mt-4 ${
            index == undefined ? "md:mt-0 lg:mt-1 " : "md:mt-3 lg:mt-1"
          } w-full`}
        >
          <h1
            className={`cursor-pointer w-[80%] sm:w-[35%] md:w-[40%] lg:w-[23%]  rounded-lg text-sm font-semibold select-none text-white ${
              isCompleted ? "bg-[#4D7AB6]" : "bg-[#288449]"
            } ${isCompleted ? "px-5" : " px-3"} mr-3`}
            onClick={() => handleComplete(index)}
          >
            {isCompleted ? " Completed" : "Mark As Done"}
          </h1>
          {index == undefined ? (
            <h1 className="cursor-pointer w-[30%] sm:w-[15%] md:w-[20%] lg:w-[10%]  rounded-lg text-sm text-white font-semibold bg-gray-500 px-3">
              View
            </h1>
          ) : (
            <Link
              to={"/view/" + index}
              className="cursor-pointer w-[30%] sm:w-[15%] md:w-[20%] lg:w-[10%] rounded-lg text-sm text-white font-semibold bg-gray-500 px-3"
            >
              <h1>View</h1>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoBox;
