import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import React from "react";

export default function RentStep2Page() {
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="rent2-page">
                    <div className="wrapper">
                        <form action="" className="rent2-form">
                            <div className="rent2-form__title">
                                <span>Аренда</span>
                                <span>Audi R8 V10 performance II (4S)</span>
                            </div>

                            <span className="rent2-form__blockTitle">С какого числа хотите арендовать машину?</span>
                            <input className="rent2-page__input" type="text" placeholder="Дата"/>
                            <input className="rent2-page__input" type="text" placeholder="Время"/>

                            <span className="rent2-form__blockTitle">На сколько дней собираетесь арендовать?</span>
                            <input className="rent2-page__input" type="text" placeholder="Количество дней"/>

                            <span className="rent2-form__blockTitle">Выберите способ оплаты</span>

                            <input type="radio" id="cash"/>
                            <input type="radio" id="qr-code"/>

                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000/feedback';
                            }} className="rent2-page__btn">Забронировать</button>

                            <span className="rent2-form__blockTitle1">точную цену и возможность аренды Вам сообщит администратор после нажатия кнопки «забронировать»</span>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}