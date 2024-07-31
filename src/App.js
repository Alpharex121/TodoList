import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Homepage from "./components/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewTodo from "./components/ViewTodo";

//CREATED A ROUTING USING BROWSER ROUTER.
const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/view/:todoId",
    element: <ViewTodo />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={browerRouter} />
      <ToastContainer />
    </>
  );
};

export default App;
