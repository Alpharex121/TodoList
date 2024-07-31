import React from "react";
import { Link, useNavigate } from "react-router-dom";

// structure and styling of list box.
const TodoBox = ({ title, decsription, index, isCompleted }) => {
  const Navigate = useNavigate();
  const handleComplete = (index) => {
    if (index === undefined) return;
    const todoData = JSON.parse(localStorage.getItem("todoData"));
    todoData[index].isComplete = true;
    localStorage.setItem("todoData", JSON.stringify(todoData));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className="w-[80%] mr-3  ">
        <h1 className="font-bold text-2xl ">{title}</h1>
        <h4 className="font-semibold">
          {decsription.length > 70
            ? decsription.slice(0, 70) + "......"
            : decsription.slice(0, 70)}
        </h4>
        <div className="flex ">
          <h1
            className={`cursor-pointer w-[22%] rounded-lg text-sm font-semibold text-white ${
              isCompleted ? "bg-[#4D7AB6]" : "bg-[#288449]"
            } px-3 mr-3`}
            onClick={() => handleComplete(index)}
          >
            {isCompleted ? "✅ Completed" : "Mark As Done"}
          </h1>
          <Link
            to={"/view/" + index}
            className="cursor-pointer w-[10%] rounded-lg text-sm text-white font-semibold bg-gray-500 px-3"
          >
            <h1>View</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoBox;
