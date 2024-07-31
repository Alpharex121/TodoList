import React from "react";
import TodoBox from "./TodoBox";
import editLogo from "../assests/edit.png";
import deleteLogo from "../assests/delete.png";
import dummyData from "../Data//dummyData.json";

//Dummy Hardcoded data UI.
const DummyData = () => {
  return (
    <li className="sm:h-[13vh] m-5 mt-1 bg-white rounded-lg w-[100%] p-3  flex">
      <TodoBox
        title={dummyData[0].title}
        decsription={dummyData[0].Description}
      />
      <div className="flex w-[25%] justify-end ">
        <img
          src={editLogo}
          alt=""
          className="h-[30%] sm:h-[40%]  my-auto   cursor-pointer"
        />
        <img
          src={deleteLogo}
          alt=""
          className="h-[30%] sm:h-[40%] mx-7 my-auto cursor-pointer"
        />
      </div>
    </li>
  );
};

export default DummyData;
