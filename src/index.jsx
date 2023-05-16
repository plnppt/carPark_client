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
import HistoryPage from "./pages/pages_authorized/history";
import AccountPage from "./pages/pages_authorized/account";
import CurrOrderPage from "./pages/pages_authorized/curr_order";
import EditPage from "./pages/pages_authorized/edit";
import QRPage from "./pages/pages_authorized/qr";
import PayPage from "./pages/pages_authorized/pay";

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
    },
    {
        path: "/history",
        element: <HistoryPage/>,
    },
    {
        path: "/account",
        element: <AccountPage/>
    },
    {
        path: "/curr_order",
        element: <CurrOrderPage/>
    },
    {
        path: "/edit",
        element: <EditPage/>
    },
    {
        path: "/qr",
        element: <QRPage/>
    },
    {
        path: "/pay",
        element: <PayPage/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);