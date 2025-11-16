import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import Login from "../Pages/Login/Login";
import Categories from "../Pages/Categories/Categories";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'categories',
        Component: Categories
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "productDetails/:productId",
        loader: ()=> fetch('/product.json'),
        Component: ProductsDetails
      },
      {
        path: '/login',
        Component: Login
      }
    ],
  },
]);
