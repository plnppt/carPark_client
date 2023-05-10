import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "./pages/main";
import CatalogPage from "./pages/catalog";
import ErrorPage from "./pages/error-page";
import RentalConditionsPage from "./pages/rental_conditions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/catalog",
        element: <CatalogPage/>,
    },
    {
        path: "/rental",
        element: <RentalConditionsPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);