import Footer from "../components/footer";
import React from "react";
import HeaderAuthorizade from "../components/header_authorizade";
import {useNavigate} from "react-router-dom";

const NewPassPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="new_pass-page">
                    <div className="wrapper">
                        <form action="" className="new_pass-form">
                            <div className="new_pass-form__title">
                                Придумайте новый
                                пароль
                            </div>
                            <input className="new_pass__input" type="password" placeholder="Пароль"/>

                            <button style={{marginTop: '70px'}} type="button" onClick={(e) => {
                                e.preventDefault();
                                navigate("/account");
                            }} className="new_passPage__btn">Сохранить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default NewPassPage;