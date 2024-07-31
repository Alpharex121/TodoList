import React from "react";

// structure and styling of list box.
const TodoBox = ({ title, decsription, isCompleted }) => {
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
          <h1 className="cursor-pointer w-[22%] rounded-lg text-sm font-semibold text-white bg-[#288449] px-3 mr-3">
            Mark As done.
          </h1>
          <h1 className="cursor-pointer w-[10%] rounded-lg text-sm text-white font-semibold bg-gray-500 px-3 ">
            View
          </h1>
        </div>
      </div>
    </>
  );
};

export default TodoBox;
