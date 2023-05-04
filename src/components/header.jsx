import React from 'react';
import logo from '../img/logo.svg';
function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__main">
                    <div className="header-logo">
                        <a><img src={logo} alt="РМК"/></a>
                        <p className="header-text">PMK</p>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li><a href="/" className="menu__element">Главная</a></li>
                            <li><a href="/" className="menu__element">Каталог</a></li>
                            <li><a href="/" className="menu__element">Условия аренды</a></li>
                            <li><a href="/" className="menu__element">Поддержка</a></li>
                            <li><a href="/" className="menu__element">Контакты</a></li>
                            <li><a href="/" className="menu__element">Личный кабинет</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;