import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/Header.css';
import logOut from '../assets/img/logout.svg';

function HeaderAuthorizade() {
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
                            <li><a href="/" className="menu__element">Контакты</a></li>

                            <li><a href="/" className="menu__element">Личный кабинет</a></li>
                            <li><a href="/logout" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000';
                            }} className="menu__element">Выход</a></li>

                            <li><a href="/logout" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000';
                            }} className="menu__element_logo"> <img src={logOut}/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default HeaderAuthorizade;