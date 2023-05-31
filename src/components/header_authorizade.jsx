import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/Header.css';
import AuthService from "../auth_service";

const HeaderAuthorizade = () => {

    const handleScrollToContacts = () => {
        const element = document.getElementById('contacts');
        if (element) {
            scrollToElement(element, 1000);
        }
    };

    const scrollToElement = (element, duration) => {
        const startPosition = window.pageYOffset;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) {
                startTime = currentTime;
            }
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) {
                return (c / 2) * t * t + b;
            }
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__main">
                    <div className="header-logo">
                        <img src={logo} alt="РМК"/>
                        <p className="header-text">PMK</p>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li><a href="/" className="menu__element">Главная</a></li>
                            <li><a href="/catalog" className="menu__element">Каталог</a></li>
                            <li><a href="/rental" className="menu__element">Условия аренды</a></li>
                            <li><a href="/support" className="menu__element">Поддержка</a></li>
                            <li><a href="/#contacts" className="menu__element" onClick={handleScrollToContacts}>Контакты</a></li>
                            <li><a href="/ent" className="menu__element">Личный кабинет</a></li>
                            {
                                AuthService.isLoggedIn() ? (
                                    <li><a href="/" onClick={(e) => {
                                        e.preventDefault();
                                        AuthService.logout()
                                    }} className="menu__element">Выход</a></li>
                                ) : null
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default HeaderAuthorizade;