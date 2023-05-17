import Header from "../components/header";
import Footer from "../components/footer";
import React, {useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";
import {useParams} from "react-router-dom";

const LearnMorePage = () => {
    const {id} = useParams()
    const [carClaims, setCarClaims] = useState(null)

    function isInteger(value) {
        return /^\d+$/.test(value);
    }

    const fetchCar = async (carId) => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + carId)
            if (r.status == 200) {
                setCarClaims(r.data)
                console.log("accepted", r.data)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (isInteger(id)) {
        fetchCar(parseInt(id))
    }

    return (
        <>
            <Header/>
            {
                carClaims == null ? null : (
                    <main>
                        <section className="learn-more-page">
                            <div className="wrapper">
                                <form action="" className="learn-more-form">
                                    <div className="learn-more-form__title">
                                        <span>{carClaims.carName}</span>
                                    </div>

                                    <span className="learn-more-form__blockTitle">Год выпуска</span>
                                    <span className="learn-more-form__blockTitle">Пробег</span>
                                    <span className="learn-more-form__blockTitle">Объем</span>
                                    <span className="learn-more-form__blockTitle">Мощность</span>
                                    <span className="learn-more-form__blockTitle">Коробка</span>
                                    <span className="learn-more-form__blockTitle">Тип двигателя</span>
                                    <span className="learn-more-form__blockTitle">Топливо</span>
                                    <span className="learn-more-form__blockTitle">Привод</span>
                                    <span className="learn-more-form__blockTitle">Разгон</span>
                                    <span className="learn-more-form__blockTitle">Цена</span>

                                    <span className="learn-more1-form__blockTitle1">{carClaims.year_release}</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.mileage} км</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.volume} л</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.power} л.с.</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.box}</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.engine_type}</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.fuel}</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.drive}</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.overclocking} с</span>
                                    <span className="learn-more1-form__blockTitle1">{carClaims.price} руб/сутки</span>

                                    <span
                                        className="learn-more-form__blockTitle2">Для того, чтобы арендовать машину,</span>
                                    <span
                                        className="learn-more-form__blockTitle3">вам необходимо войти в личный кабинет</span>

                                    <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'http://localhost:3000/ent';
                                    }} className="learn-more-page__btn">Личный кабинет
                                    </button>
                                </form>
                            </div>
                        </section>
                    </main>
                )
            }
            <Footer/>
        </>
    );
}
export default LearnMorePage;