import Header from "../components/header";
import Footer from "../components/footer";

export default function SupportPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="support-page">
                    <div className="wrapper">
                        <form action="" className="support-form">
                            <div className="support-form__title">
                                <span>Поддержка</span>
                            </div>
                            <span className="support-form__blockTitle">От кого:</span>
                            <input className="support-page__input" type="text" placeholder="Введите Вашу почту"/>
                            <span className="support-form__blockTitle">Кому:</span>
                            <input className="support-page__input" type="text" value="pmk_company@gmail.ru" readOnly/>
                            <span className="support-form__blockTitle">Ваше обращение:</span>
                            <textarea className="support-page__input_1" placeholder="Введите ваше обращение"/>
                            <button className="support-page__btn">Отправить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}