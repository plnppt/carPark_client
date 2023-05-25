import Footer from "../components/footer";
import React, { useState } from "react";
import "axios";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";
import HeaderAuthorizade from "../components/header_authorizade";
import {useNavigate} from "react-router-dom";

const RegPage = () => {
    const navigate = useNavigate();
    const USER_CLAIMS_TMP = {
        "phone_number": "",
        "secret_word": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "patronymic": ""
      }
    const [userClaims, setUserClaims] = useState(USER_CLAIMS_TMP)
    const [errors, setErrors] = useState({});

    const postCustomer = async () => {
        try {
            const r = await axios.post(API_URL_ENDPOINTS.CUSTOMERS, userClaims)
            if (r.status == 201) {
                console.log("accepted", r)
                setUserClaims(USER_CLAIMS_TMP)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleClaimChange = (e) => {
        setUserClaims(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="reg-page">
                    <div className="wrapper">
                        <form action="" className="reg-form">
                            <div className="reg-form__title">
                                Регистрация
                            </div>
                            <input
                                className={`regPage__input ${errors.last_name ? 'error' : ''}`}
                                type="text" placeholder="Фамилия"
                                value={userClaims.last_name}
                                name="last_name"
                                onChange={handleClaimChange}
                            />
                            <input
                                className={`regPage__input ${errors.first_name ? 'error' : ''}`}
                                type="text" placeholder="Имя"
                                value={userClaims.first_name}
                                name="first_name"
                                onChange={handleClaimChange}
                            />
                            <input
                                className={`regPage__input ${errors.patronymic ? 'error' : ''}`}
                                type="text"
                                placeholder="Отчество (при наличии)"
                                value={userClaims.patronymic}
                                name="patronymic"
                                onChange={handleClaimChange}
                            />
                            <input
                                className={`regPage__input ${errors.phone_number ? 'error' : ''}`}
                                type="text"
                                placeholder="Телефон"
                                value={userClaims.phone_number}
                                name="phone_number"
                                onChange={handleClaimChange}
                            />
                            <input
                                className={`regPage__input ${errors.password ? 'error' : ''}`}
                                type="text"
                                placeholder="Пароль"
                                value={userClaims.password}
                                name="password"
                                onChange={handleClaimChange}
                            />
                            <span
                                className="rent-form__blockTitle"
                                style={{marginBottom: '17px'}}>Придумайте секретное слово,<br/> на случай, если пароль будет утерян
                            </span>
                            <input
                                className={`regPage__input ${errors.secret_word ? 'error' : ''}`}
                                type="text"
                                placeholder="Секретное слово"
                                value={userClaims.secret_word}
                                name="secret_word"
                                onChange={handleClaimChange}
                            />
                            <button
                                type="button"
                                style={{marginTop: '40px'}}
                                className="regPage__btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const validationErrors = {};
                                    if (userClaims.last_name.trim() === '') {
                                        validationErrors.last_name = 'Введите дату начала аренды';
                                    }
                                    if (userClaims.first_name.trim() === '') {
                                        validationErrors.first_name = 'Введите количество дней аренды';
                                    }
                                    if (userClaims.patronymic.trim() === '') {
                                        validationErrors.patronymic = 'Введите количество дней аренды';
                                    }
                                    if (userClaims.phone_number.trim() === '') {
                                        validationErrors.phone_number = 'Введите количество дней аренды';
                                    }
                                    if (userClaims.password.trim() === '') {
                                        validationErrors.password = 'Введите количество дней аренды';
                                    }
                                    if (userClaims.secret_word.trim() === '') {
                                        validationErrors.secret_word = 'Введите количество дней аренды';
                                    }
                                    if (Object.keys(validationErrors).length > 0) {
                                        setErrors(validationErrors);
                                    } else {
                                        postCustomer();
                                        navigate("/account");
                                    }
                                }} className="entPage__btn">Зарегистрироваться
                            </button>
                            <span className="regPage__btn_after">Нажимая данную кнопку, вы соглашаетесь с обработкой персональных данных</span>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default RegPage;