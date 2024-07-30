import React, { useState } from "react";

const EditTodo = ({ title, description, index }) => {
  // eslint-disable-next-line
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todoData"))
  );
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    const newDescription = e.target.description.value;
    data[index].title = newTitle;
    data[index].description = newDescription;
    localStorage.setItem("todoData", JSON.stringify(data));
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <>
      <form
        className="text-black  h-1/2 bg-white w-[25vw] rounded-lg border border-black-300 mt-1 flex flex-col "
        onSubmit={handleOnSubmit}
      >
        <h1 className="font-bold mt-[2vh] mb-[1vh] text-2xl underline mx-auto text-amber-800">
          Edit the Todo List
        </h1>
        <label htmlFor="title" className="text-1xl ml-[5%] font-bold ">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="border border-black w-[80%]  m-3  ml-[5%] rounded-md p-2"
          defaultValue={title}
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
          defaultValue={description}
          required
        />
        <button className="bg-green-500 px-7 py-2 mb-3 rounded-md font-bold text-1xl w-1/3 mx-auto cursor-pointer">
          EDIT
        </button>
      </form>
    </>
  );
};

export default EditTodo;
