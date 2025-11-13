import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import ProductsLoadProvider from "./Providers/ProductsLoadProvider/ProductsLoadProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsLoadProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductsLoadProvider>
  </StrictMode>
);
