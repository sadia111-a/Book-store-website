import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/book/:_id",
        element: <SingleBook></SingleBook>,
        loader: () => fetch(`http://localhost:5000/book`),
      },
    ],
  },
]);
