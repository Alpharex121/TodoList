import React from "react";

const TodoBox = ({ title, decsription }) => {
  return (
    <>
      <div className="w-[80%]">
        <h1 className="font-bold text-2xl ">{title}</h1>
        <h4>{decsription}</h4>
      </div>
    </>
  );
};

export default TodoBox;
