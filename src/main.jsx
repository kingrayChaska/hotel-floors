import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Room from "./components/Room.jsx";
import Room2 from "./components/Room2.jsx";
import Room3 from "./components/Room3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/room2",
    element: <Room2 />,
  },
  {
    path: "/room3",
    element: <Room3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
