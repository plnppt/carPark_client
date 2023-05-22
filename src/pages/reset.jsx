import Footer from "../components/footer";
import React, {useState} from "react";
import HeaderAuthorizade from "../components/header_authorizade";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";

const ResetPage = () => {
    const [secretWord, setSecretWord] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(API_URL_ENDPOINTS.CUSTOMERS);
            if (response.data.valid) {
                navigate("/new_pass");
            } else {
                setError(true);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };


    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="reset-page">
                    <div className="wrapper">
                        <form action="" className="reset-form">
                            <div className="reset-form__title">
                                Введите секретное слово
                            </div>
                            {error ? (
                                <span className="reset-form__blockTitle" style={{marginBottom: "17px"}}>
                  {error} Попробуйте ещё раз или зарегистрируйтесь заново.
                </span>
                            ) : null}
                            <input
                                className="resetPage__input" type="text"
                                placeholder="Слово “секрет” "
                                onChange={(e) => setSecretWord(e.target.value)}
                            />
                            <button style={{ marginTop: "70px" }} type="button"
                                    onClick={handleResetPassword}
                                    className="resetPage__btn">
                                Сбросить пароль
                            </button>
                            {error && <a href="/reg" className="resetPage__btn_reg">Регистрация</a>}
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default ResetPage;