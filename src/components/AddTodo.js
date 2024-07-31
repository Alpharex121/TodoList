import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTodo = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todoData"))
  );

  //Logic for add new Task in a todo List.
  // Extracting title and description from form -> retrieving data from local storage -> update data state with localStorage data -> push new form data to the array and push it back to the localStorage -> Triggering "storage event to update data in main component."
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const currentdate = new Date();
    const todoData = {
      title: title,
      description: description,
      complete: false,
      lastUpdated:
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds(),
    };
    var stored = JSON.parse(localStorage.getItem("todoData"));
    setData(stored);
    if (!stored) stored = [];
    stored.push(todoData);
    localStorage.setItem("todoData", JSON.stringify(stored));
    window.dispatchEvent(new Event("storage"));

    //Success toast message
    toast.success("New task added!", {
      position: "top-right",
      theme: "colored",
      autoClose: 1000,
    });
  };

  // Add Task box UI.
  return (
    <>
      <form
        className=" text-black mt-5 h-1/2 bg-gray-200 w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw]  rounded-lg flex flex-col "
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
