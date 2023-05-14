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
import RegPage from "./pages/reg";
import SupportPage from "./pages/support";
import EntrancePage from "./pages/entrance";
import EntranceErrorPage from "./pages/entrance_error";
import ResetPage from "./pages/reset";
import NewPassPage from "./pages/new_pass";

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
    },
    {
        path: "/reg",
        element: <RegPage/>,
    },
    {
        path: "/support",
        element: <SupportPage/>,
    },
    {
        path: "/ent",
        element: <EntrancePage/>,
    },
    {
        path: "/entr_error",
        element: <EntranceErrorPage/>,
    },
    {
        path: "/reset",
        element: <ResetPage/>,
    },
    {
        path: "/new_pass",
        element: <NewPassPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);