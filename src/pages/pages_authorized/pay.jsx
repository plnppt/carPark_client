import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const PayPage = () => {
    const navigate = useNavigate();
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [isCardValid, setIsCardValid] = useState(true);
    const [isExpiryValid, setIsExpiryValid] = useState(true);
    const [isCCVValid, setIsCCVValid] = useState(true);

    const INVALID_CARD = {
        cardNumber: "1111 1111 1111 1111",
        expiryDate: "01/2040",
        cvv: "111",
    };

    const handlePayment = (e) => {
        e.preventDefault();
        const cardNumber = e.target.elements.cardNumber.value;
        const expiryDate = e.target.elements.expiryDate.value;
        const ccv = e.target.elements.ccv.value;


        const isCardNumberValid = isValidCardNumber(cardNumber);
        const isExpiryDateValid = isValidExpiryDate(expiryDate);
        const isCCVValid = isValidCCV(ccv);

        setIsCardValid(isCardNumberValid);
        setIsExpiryValid(isExpiryDateValid);
        setIsCCVValid(isCCVValid);

        if (
            cardNumber === INVALID_CARD.cardNumber &&
            expiryDate === INVALID_CARD.expiryDate &&
            ccv === INVALID_CARD.cvv
        ) {
            navigate("/pay_error")
            return;
        }

        if (isCardNumberValid && isExpiryDateValid && isCCVValid) {
            setIsPaymentSuccessful(true);
            navigate("/pay_success");
        } else {
            setIsPaymentSuccessful(false);
        }
    };

    const handleCardNumberChange = (e) => {
        const cardNumber = e.target.value;
        setIsCardValid(isValidCardNumber(cardNumber));
    };

    const handleExpiryDateChange = (e) => {
        const expiryDate = e.target.value;
        setIsExpiryValid(isValidExpiryDate(expiryDate));
    };

    const handleCCVChange = (e) => {
        const ccv = e.target.value;
        setIsCCVValid(isValidCCV(ccv));
    };

    const isValidCardNumber = (cardNumber) => {
        const cardNumberRegex = /^(\d{1,4}\s?){3}\d{1,4}$|^\d{16}$/;
        return cardNumberRegex.test(cardNumber);
    };

    const isValidExpiryDate = (expiryDate) => {
        const currentDate = new Date();
        const [expiryMonth, expiryYear] = expiryDate.split("/");
        const cardExpiry = new Date(expiryYear, expiryMonth - 1);
        const isDateFormatValid = /^\d{2}\/\d{4}$/.test(expiryDate);
        return isDateFormatValid && cardExpiry >= currentDate;
    };

    const isValidCCV = (ccv) => {
        const cvvRegex = /^[0-9]{3,4}$/;
        return cvvRegex.test(ccv);
    };

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="pay-page">
                    <div className="wrapper">
                        <form action="" className="pay-form" onSubmit={handlePayment}>
                            <div className="pay-form__title">
                                Оплата
                            </div>
                            <input
                                className={`payPage__input ${isCardValid ? "" : "error"}`}
                                type="text"
                                name="cardNumber"
                                placeholder="Номер карты"
                                onChange={handleCardNumberChange}
                            />
                            <input
                                className={`payPage__input ${isExpiryValid ? "" : "error"}`}
                                type="text"
                                name="expiryDate"
                                placeholder="Срок действия (ММ/ГГГГ)"
                                onChange={handleExpiryDateChange}
                            />
                            <input className={`payPage__input ${isCCVValid ? "" : "error"}`}
                                   type="text"
                                   name="ccv"
                                   placeholder="CCV/CVC"
                                   onChange={handleCCVChange}
                            />
                            <button type="submit"
                                    className="pay-page__btn"

                                    disabled={!isCardValid || !isExpiryValid || !isCCVValid}
                            >
                                Оплатить
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default PayPage;