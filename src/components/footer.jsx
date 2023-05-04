import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/Footer.css';


function Footer() {
    return (
        <footer className="footer">
                <img src={logo} alt="РМК"/>
                <p className="footer-text">2023 © ООО “ПМК”</p>
        </footer>
    );
}
export default Footer;