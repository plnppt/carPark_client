import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import React from "react";
import {useNavigate} from "react-router-dom";

const FeedbackPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="feedback-page">
                    <div className="wrapper">
                        <form action="" className="feedback-form">
                            <p className="feedback-form__title">Спасибо за заявку!</p>
                            <p className="feedback-form__title">В течение часа с вами свяжется наш администратор</p>

                            <div className="feedback-block">
                                <img src={require("../../assets/img/rent/working 1.png")} alt="РБК"
                                     className="feedback-block-img"/>
                            </div>

                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }} className="feedback-page__btn">Главная</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default FeedbackPage;