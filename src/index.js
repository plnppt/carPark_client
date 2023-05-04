import React from "react";
import ReactDOM from 'react-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import './css/index.css';
import './css/dropstyle.css';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
