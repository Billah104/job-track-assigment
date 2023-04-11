import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componets/Home/Home";
import JobDetails from "./Componets/jobDetails/JobDetails";
import ErrorPage from "./Componets/ErrorPage/ErrorPage";
import Blog from "./Componets/Blog/Blog";
import Statistics from "./Componets/StatisticsPage/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Home></Home>,

        loader: () => fetch("/jobCategory.json"),
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch("/featureJobs.json"),
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path : "/chart",
        element :<Statistics></Statistics>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);