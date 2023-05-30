import Footer from "../components/footer";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../auth_service"
import HeaderAuthorizade from "../components/header_authorizade";

const EntrancePage = () => {
    const navigate = useNavigate();

    const USER_CLAIMS_TMP = {
        "phone_number": "",
        "password": "",
    }
    const [userClaims, setUserClaims] = useState(USER_CLAIMS_TMP)
    const [error, setError] = useState(false);

    const handleLogin = () => {
        AuthService.login(userClaims.phone_number, userClaims.password)
            .then((role) => {
                if (role === "client") {
                    navigate("/account");
                } else if (role === "driver") {
                    navigate("/delivery")
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                setError(true);
            });
    };

    const handleClaimChange = (e) => {
        setUserClaims(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        if (AuthService.isLoggedIn()) {
            navigate('/account')
        }
    }, [])


    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="ent-page">
                    <div className="wrapper">
                        <form action="" className="ent-form">
                            <div className="ent-form__title">
                                Вход в кабинет
                            </div>
                            {error && (
                                <span
                                    className="entr-form__blockTitle"
                                    style={{marginBottom: "17px"}}>
                  Неверный телефон или пароль. Проверьте правильность заполненных данных.
                </span>
                            )}
                            <input
                                className="entPage__input"
                                type="text"
                                placeholder="Номер телефона"
                                value={userClaims.phone_number}
                                name="phone_number"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="entPage__input"
                                type="password"
                                placeholder="Пароль"
                                value={userClaims.password}
                                name="password"
                                onChange={handleClaimChange}
                            />
                            {!error && (
                                <a href="/reg" className="entPage__btn_reg">Регистрация</a>
                            )}
                            <button
                                style={{marginTop: '40px'}}
                                type="button" onClick={(e) => {
                                e.preventDefault();
                                handleLogin();
                            }} className="entPage__btn">Вход
                            </button>
                            {error && (
                                <a href="/reset" className="entrPage__btn_reg">Забыли пароль?</a>
                            )}
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default EntrancePage;