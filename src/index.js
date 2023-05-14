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
import './assets/css/Support.css';
import './assets/css/Learn_More_Without_Authorization.css';
import './assets/css/Learn_More_With_Authorization.css';
import './assets/css/Rent_Step1.css';
import './assets/css/Rent_Step2.css';
import './assets/css/Feedback.css';

import App from './App';
import Main from "./pages/main";
import CatalogPage from "./pages/catalog";
import ErrorPage from "./pages/error-page";
import reportWebVitals from './reportWebVitals';
import RentalConditionsPage from "./pages/rental_conditions";
import RegPage from "./pages/reg";
import SupportPage from "./pages/support";
import LearnMorePage from "./pages/learn_more_without_authorization";
import LearnMore1Page from "./pages/learn_more_with_authorization";
import RentStep1Page from "./pages/rent_step1";
import RentStep2Page from "./pages/rent_step2";
import FeedbackPage from "./pages/feedback";

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
        path: "/learnMore",
        element: <LearnMorePage/>,
    },
    {
        path: "/learnMore1",
        element: <LearnMore1Page/>,
    },
    {
        path: "/rentStep1",
        element: <RentStep1Page/>,
    },
    {
        path: "/rentStep2",
        element: <RentStep2Page/>,
    },
    {
        path: "/feedback",
        element: <FeedbackPage/>,
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
