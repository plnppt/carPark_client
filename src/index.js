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
import './assets/css/css_authorized/Learn_More_With_Authorization.css';
import './assets/css/css_authorized/Rent_Step1.css';
import './assets/css/css_authorized/Rent_Step2.css';
import './assets/css/css_authorized/Feedback.css';
import './assets/css/Entrance.css';
import './assets/css/Resert.css';
import './assets/css/NewPass.css';
import './assets/css/css_authorized/History.css';
import './assets/css/css_authorized/Account.css';
import './assets/css/css_authorized/Curr_Order.css';
import './assets/css/css_authorized/Edit.css';
import './assets/css/css_authorized/QR.css';
import './assets/css/css_authorized/Pay.css';
import './assets/css/css_authorized/PaySuccess_Error.css';
import './assets/css/css_authorized/Delivery.css';



import App from './App';
import Main from "./pages/main";
import CatalogPage from "./pages/catalog";
import ErrorPage from "./pages/error-page";
import reportWebVitals from './reportWebVitals';
import RentalConditionsPage from "./pages/rental_conditions";
import RegPage from "./pages/reg";
import SupportPage from "./pages/support";
import LearnMorePage from "./pages/learn_more_without_authorization";
import LearnMore1Page from "./pages/pages_authorized/learn_more_with_authorization";
import RentStep1Page from "./pages/pages_authorized/rent_step1";
import RentStep2Page from "./pages/pages_authorized/rent_step2";
import FeedbackPage from "./pages/pages_authorized/feedback";
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
import PaySuccessPage from "./pages/pages_authorized/pay_success";
import PayErrorPage from "./pages/pages_authorized/pay_error";
import ResetErrorPage from "./pages/reset_error";
import DeliveryPage from "./pages/pages_authorized/delivery";

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
    },
    {
        path: "/pay_success",
        element: <PaySuccessPage/>
    },
    {
        path: "/pay_error",
        element: <PayErrorPage/>
    },
    {
        path: "/reset_error",
        element: <ResetErrorPage/>
    },
    {
        path: "/delivery",
        element: <DeliveryPage/>
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
