import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Homepage from "./components/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
