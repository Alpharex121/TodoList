import React from "react";
import editLogo from "../assests/edit.png";
import deleteLogo from "../assests/delete.png";

const TodoBox = ({ title, decsription }) => {
  console.log(title);
  return (
    <>
      <div className=" h-[13vh] m-5 bg-white rounded-lg w-[100%] p-3 flex">
        <div className="w-[80%]">
          <h1 className="font-bold text-2xl ">{title}</h1>
          <h4>{decsription}</h4>
        </div>
        <div className="flex w-[25%] justify-end ">
          <img
            src={editLogo}
            alt=""
            className="h-[60%]  my-auto   cursor-pointer"
          />
          <img
            src={deleteLogo}
            alt=""
            className="h-[60%] mx-7 my-auto cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default TodoBox;
