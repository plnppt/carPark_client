import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";

const PayErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="pay-page">
                    <div className="wrapper">
                        <form action="" className="pay_e-form">
                            <div className="pay_s-form__title">
                                Оплата не прошла.
                            </div>
                            <div className="ok_code">
                                <img src={require("../../assets/img/pay/cancel.png")} alt="Cancel" className="ok_code-img"/>
                            </div>
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                navigate("/pay");
                            }} className="pay-page__btn">Попробовать ещё раз</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default PayErrorPage;