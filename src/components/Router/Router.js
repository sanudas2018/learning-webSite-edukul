import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Statistics from "../Statistics/Statistics";
import Blog from "../Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
