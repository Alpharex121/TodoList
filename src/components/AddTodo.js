import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTodo = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todoData"))
  );
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const todoData = { title: title, description: description };
    var stored = JSON.parse(localStorage.getItem("todoData"));
    setData(stored);
    if (!stored) stored = [];
    stored.push(todoData);
    localStorage.setItem("todoData", JSON.stringify(stored));
    window.dispatchEvent(new Event("storage"));
    toast.success("New task added!", {
      position: "top-right",
      theme: "colored",
      autoClose: 1000,
    });
  };

  return (
    <>
      <form
        className="text-black mt-5 h-1/2 bg-gray-100 w-[25vw] rounded-lg flex flex-col "
        onSubmit={handleOnSubmit}
      >
        <h1 className="font-bold mt-[2vh] mb-[1vh] text-2xl underline mx-auto text-amber-800">
          ADD A NEW TODO
        </h1>
        <label htmlFor="title" className="text-1xl ml-[5%] font-bold ">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="border border-black w-[80%]  m-3  ml-[5%] rounded-md p-2"
          placeholder="Enter the title"
          required
        />
        <label htmlFor="title" className="text-1xl ml-[5%] font-bold ">
          Description
        </label>
        <textarea
          rows={3}
          type="text"
          name="description"
          className="border border-black w-[80%] mb-3 ml-[5%] rounded-md p-2 "
          placeholder="Enter the short Description"
          required
        />
        <button className="bg-blue-500 px-7 py-2 mb-3 rounded-md font-bold text-1xl w-1/3 mx-auto cursor-pointer">
          ADD
        </button>
      </form>
    </>
  );
};

export default AddTodo;
