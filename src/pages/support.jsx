import Footer from "../components/footer";
import HeaderAuthorizade from "../components/header_authorizade";
import {useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";
import {useNavigate} from "react-router-dom";

const SupportPage = () => {
    const navigate = useNavigate();
    const EMAIL_CLAIMS_TMP = {
        "sender": "",
        "message": ""
    }

    const [emailClaims, setEmailClaims] = useState(EMAIL_CLAIMS_TMP)

    const postEmail = async () => {
        try {
            const r = await axios.post(API_URL_ENDPOINTS.EMAIL, emailClaims)
            if (r.status == 201) {
                console.log("accepted", r)
                setEmailClaims(EMAIL_CLAIMS_TMP)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleClaimChange = (e) => {
        setEmailClaims(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="support-page">
                    <div className="wrapper">
                        <form action="" className="support-form">
                            <div className="support-form__title">
                                <span>Поддержка</span>
                            </div>
                            <span className="support-form__blockTitle">От кого:</span>
                            <input
                                className="support-page__input"
                                type="text" placeholder="Введите Вашу почту"
                                value={emailClaims.sender}
                                name="sender"
                                onChange={handleClaimChange}
                            />
                            <span className="support-form__blockTitle">Кому:</span>
                            <input
                                className="support-page__input"
                                type="text" value="pmk.company2023@yandex.ru"
                                readOnly
                            />
                            <span className="support-form__blockTitle">Ваше обращение:</span>
                            <textarea
                                className="support-page__input_1"
                                placeholder="Введите ваше обращение"
                                value={emailClaims.message}
                                name="message"
                                onChange={handleClaimChange}
                            />
                            <button
                                className="support-page__btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    postEmail();
                                    navigate("/");
                                }}
                            >Отправить
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SupportPage;