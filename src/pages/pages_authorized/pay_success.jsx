import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";

const PaySuccessPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="pay-page">
                    <div className="wrapper">
                        <form action="" className="pay_s-form">
                            <div className="pay_s-form__title">
                                Оплата прошла<br/>успешно!
                            </div>
                            <div className="ok_code">
                                <img src={require("../../assets/img/pay/ok.png")} alt="OK" className="ok_code-img"/>
                            </div>
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }} className="pay-page__btn">Главная</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default PaySuccessPage;