import Header from "../components/header";
import Footer from "../components/footer";

export default function PaySuccessPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="pay-page">
                    <div className="wrapper">
                        <form action="" className="pay_s-form">
                            <div className="pay_s-form__title">
                                Оплата прошла<br/>успешно!
                            </div>
                            <div className="ok_code">
                                <img src={require("../assets/img/pay/ok.png")} alt="OK" className="ok_code-img"/>
                            </div>
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000';
                            }} className="pay-page__btn">Главная</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}