import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "./pages/main";
import CatalogPage from "./pages/catalog";
import ErrorPage from "./pages/error-page";
import './css/index.css';
import './css/dropstyle.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/catalog",
        element: <CatalogPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);