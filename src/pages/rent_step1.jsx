import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";

export default function RentStep1Page() {
    return (
        <>
            <Header/>
            <main>
                <section className="rent1-page">
                    <div className="wrapper">
                        <form action="" className="rent1-form">
                            <div className="rent1-form__title">
                                <span>Аренда</span>
                                <span>Audi R8 V10 performance II (4S)</span>
                            </div>
                            <input className="rent1-page__input" type="text" placeholder="Фамилия"/>
                            <input className="rent1-page__input" type="text" placeholder="Имя"/>
                            <input className="rent1-page__input" type="text" placeholder="Отчество (при наличии)"/>
                            <input className="rent1-page__input" type="text" placeholder="Дата рождения"/>
                            <input className="rent1-page__input" type="text" placeholder="Телефон"/>
                            <span className="rent1-form__blockTitle">Паспорт</span>
                            <input className="rent1-page__input" type="text" placeholder="Серия и номер"/>
                            <input className="rent1-page__input" type="text" placeholder="Кем выдан"/>
                            <input className="rent1-page__input" type="text" placeholder="Дата выдачи"/>
                            <input className="rent1-page__input" type="text" placeholder="Адрес регистрации"/>
                            <span className="rent1-form__blockTitle">Водительское удостоверение</span>
                            <input className="rent1-page__input" type="text" placeholder="Серия и номер"/>

                            <input type="radio" id="delivery"/>
                            <input type="radio" id="pickup"/>

                            <input className="rent1-page__input" type="text" placeholder="Адрес"/>

                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000/rentStep2';
                            }} className="rent1-page__btn">Далее</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}