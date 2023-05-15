import Header from "../components/header";
import Footer from "../components/footer";

export default function PayPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="pay-page">
                    <div className="wrapper">
                        <form action="" className="pay-form">
                            <div className="pay-form__title">
                                Оплата
                            </div>
                            <input className="payPage__input" type="text" placeholder="Номер карты"/>
                            <input className="payPage__input" type="text" placeholder="Срок действия"/>
                            <input className="payPage__input" type="text" placeholder="CCV/CVC"/>
                            <button className="pay-page__btn">Оплатить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}