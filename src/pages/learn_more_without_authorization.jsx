import Header from "../components/header";
import Footer from "../components/footer";

export default function LearnMorePage() {
    return (
        <>
            <Header/>
            <main>
                <section className="support-page">
                    <div className="wrapper">
                        <form action="" className="support-form">
                            <div className="support-form__title">
                                <span>Audi R8 V10 performance II (4S)</span>
                            </div>

                            <span className="support-form__blockTitle">Год выпуска</span>
                            <span className="support-form__blockTitle">Пробег</span>
                            <span className="support-form__blockTitle">Объем</span>
                            <span className="support-form__blockTitle">Мощность</span>
                            <span className="support-form__blockTitle">Коробка</span>
                            <span className="support-form__blockTitle">Тип двигателя</span>
                            <span className="support-form__blockTitle">Топливо</span>
                            <span className="support-form__blockTitle">Привод</span>
                            <span className="support-form__blockTitle">Разгон</span>
                            <span className="support-form__blockTitle">Цена</span>

                            <span className="support-form__blockTitle1">2019</span>
                            <span className="support-form__blockTitle1">15 000 км</span>
                            <span className="support-form__blockTitle1">5.2 л</span>
                            <span className="support-form__blockTitle1">620 л.с.</span>
                            <span className="support-form__blockTitle1">Робот</span>
                            <span className="support-form__blockTitle1">Бензиновый</span>
                            <span className="support-form__blockTitle1">АИ-98</span>
                            <span className="support-form__blockTitle1">Полный</span>
                            <span className="support-form__blockTitle1">3.1 с</span>
                            <span className="support-form__blockTitle1">8000 руб/сутки</span>

                            <span className="support-form__blockTitle2">Для того, чтобы арендовать машину,</span>
                            <span className="support-form__blockTitle3">вам необходимо войти в личный кабинет</span>

                            <button className="support-page__btn">Личный кабинет</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}