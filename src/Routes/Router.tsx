import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";


export const router = createBrowserRouter([
    {
        path : "/", 
        Component: Root,
        children: [
            {
                index : true,
                Component: Root
            }
        ]
    }
])