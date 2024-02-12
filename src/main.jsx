import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Rank1 from "./components/Ranks/Rank1.jsx";
import Rank2 from "./components/Ranks/Rank2.jsx";
import Rank3 from "./components/Ranks/Rank3.jsx";
import ExecRoom1 from "./components/Rooms/category/executive/ExecRoom1.jsx";
import ExecRoom2 from "./components/Rooms/category/executive/ExecRoom2.jsx";
import ExecRoom3 from "./components/Rooms/category/executive/ExecRoom3.jsx";
import StandRoom1 from "./components/Rooms/category/standard/StandRoom1.jsx";
import StandRoom2 from "./components/Rooms/category/standard/StandRoom2.jsx";
import StandRoom3 from "./components/Rooms/category/standard/StandRoom3.jsx";
import Suite1 from "./components/Rooms/category/suite/Suite1.jsx";
import Suite2 from "./components/Rooms/category/suite/Suite2.jsx";
import Suite3 from "./components/Rooms/category/suite/Suite3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rank1",
    element: <Rank1 />,
  },
  {
    path: "/rank2",
    element: <Rank2 />,
  },
  {
    path: "/rank3",
    element: <Rank3 />,
  },
  {
    path: "/execroom1",
    element: <ExecRoom1 />,
  },
  {
    path: "/execroom2",
    element: <ExecRoom2 />,
  },
  {
    path: "/execroom3",
    element: <ExecRoom3 />,
  },
  {
    path: "/standroom1",
    element: <StandRoom1 />,
  },
  {
    path: "/standroom2",
    element: <StandRoom2 />,
  },
  {
    path: "/standroom3",
    element: <StandRoom3 />,
  },
  {
    path: "/suite1",
    element: <Suite1 />,
  },
  {
    path: "/suite2",
    element: <Suite2 />,
  },
  {
    path: "/suite3",
    element: <Suite3 />,
  },
  // {
  //   path: "/rank1",
  //   element: <Suite1 />,
  // },
  // {
  //   path: "/suite2",
  //   element: <Suite2 />,
  // },
  // {
  //   path: "/suite3",
  //   element: <Suite3 />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
