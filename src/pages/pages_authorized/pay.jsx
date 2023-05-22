import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";

const PayPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="pay-page">
                    <div className="wrapper">
                        <form action="" className="pay-form">
                            <div className="pay-form__title">
                                Оплата
                            </div>
                            <input className="payPage__input" type="text" placeholder="Номер карты"/>
                            <input className="payPage__input" type="text" placeholder="Срок действия"/>
                            <input className="payPage__input" type="text" placeholder="CCV/CVC"/><button type="button" onClick={(e) => {
                                e.preventDefault();
                                navigate("/pay_success");
                            }} className="pay-page__btn">Оплатить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default PayPage;