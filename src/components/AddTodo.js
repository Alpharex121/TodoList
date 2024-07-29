import React from "react";

const AddTodo = () => {
  return (
    <>
      <form className="text-black mt-5 h-1/2 bg-gray-100 w-[25vw] rounded-lg flex flex-col ">
        <h1 className="font-bold mt-[2vh] mb-[1vh] text-2xl underline mx-auto text-amber-800">
          ADD A NEW TODO
        </h1>
        <label htmlFor="title" className="text-1xl ml-[5%] font-bold ">
          Title
        </label>
        <input
          type="text"
          className="border border-black w-[80%]  m-3  ml-[5%] rounded-md p-2"
          placeholder="Enter the title"
        />
        <label htmlFor="title" className="text-1xl ml-[5%] font-bold ">
          Description
        </label>
        <textarea
          rows={3}
          type="text"
          className="border border-black w-[80%] mb-3 ml-[5%] rounded-md p-2 "
          placeholder="Enter the short Description"
        />
        <button className="bg-blue-500 px-7 py-2 mb-3 rounded-md font-bold text-1xl w-1/3 mx-auto cursor-pointer">
          ADD
        </button>
      </form>
    </>
  );
};

export default AddTodo;
