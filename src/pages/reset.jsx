import Footer from "../components/footer";
import React from "react";
import HeaderAuthorizade from "../components/header_authorizade";

const ResetPage = () => {
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
                            <input className="resetPage__input" type="text" placeholder="Слово “секрет” "/>
                            <button style={{marginTop: '70px'}} type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='/new_pass';
                            }} className="resetPage__btn">Сбросить пароль</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default ResetPage;