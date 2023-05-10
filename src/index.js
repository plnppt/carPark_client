import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/css/App.css';
import './assets/css/Main.css';
import './assets/css/Catalog.css';
import './assets/css/Rental_Conditions.css';
import './assets/css/Reg.css';
import App from './App';
import Main from "./pages/main";
import CatalogPage from "./pages/catalog";
import ErrorPage from "./pages/error-page";
import reportWebVitals from './reportWebVitals';
import RentalConditionsPage from "./pages/rental_conditions";
import RegPage from "./pages/reg";

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
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
