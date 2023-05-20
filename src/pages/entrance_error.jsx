import Footer from "../components/footer";
import React from "react";
import HeaderAuthorizade from "../components/header_authorizade";

export default function EntranceErrorPage() {
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="entr_error-page">
                    <div className="wrapper">
                        <form action="" className="ent-form">
                            <div className="ent-form__title">
                                Вход в кабинет
                            </div>
                            <span className="entr-form__blockTitle" style={{marginBottom: '17px'}}>Неверный телефон или пароль.<br/>Проверьте правильность заполненных данных.</span>
                            <input className="entPage__input" type="text" placeholder="Номер телефона"/>
                            <input className="entPage__input" type="password" placeholder="Пароль"/>

                           <button style={{marginTop: '70px'}} type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000/account';
                            }} className="entPage__btn">Сохранить</button>

                            <a href="/reset" className="entrPage__btn_reg">Забыли пароль?</a>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}