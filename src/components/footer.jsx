import React from 'react';
import logo from '../img/logo.svg';

function Footer() {
    return (
        <footer className="footer">
                <a><img src={logo} alt="РМК"/></a>
                <p className="footer-text">2023 © ООО “ПМК”</p>
        </footer>
    );
}
export default Footer;