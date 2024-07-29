import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Homepage from "./components/Homepage";

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
    </>
  );
};

export default App;
