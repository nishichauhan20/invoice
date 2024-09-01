import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
      },
    ],
  },
]);
