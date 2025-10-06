import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import { HashLoader } from "react-spinners";
import Loading from "../Componets/Loading/Loading";
import Product from "../Componets/AllProducts/Product";
import ProductDetails from "../Componets/ProductDetails/ProductDetails";
import Cart from "../Componets/Cart/Cart";

// const Routers = () => {
//   return <div></div>;
// };
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        loader: () => fetch("/furnitureData.json"),
        Component: Home,
      },
      {
        path: "products",
        loader: () => fetch("/furnitureData.json"),
        Component: Product,
      },
      {
        path: "products/:id",
        loader: () => fetch("/furnitureData.json"),
        Component: ProductDetails,
      },
      {
        path: "cart",
        loader: () => fetch("/furnitureData.json"),
        Component: Cart,
      },
    ],
  },
]);

// export default Routers;
