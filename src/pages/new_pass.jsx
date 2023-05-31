import Footer from "../components/footer";
import React, {useState} from "react";
import HeaderAuthorizade from "../components/header_authorizade";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";

const NewPassPage = () => {
    const navigate = useNavigate();
    const [pass, setPass] = useState("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const myTel = queryParams.get('tel');
    const secret  = queryParams.get('secret')

    const handleResetNewPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL_ENDPOINTS.NEWPASS, {
                tel: myTel,
                secret: secret,
                pass: pass
            });
            if (response.status === 200) {
                navigate("/ent");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="new_pass-page">
                    <div className="wrapper">
                        <form action="" className="new_pass-form">
                            <div className="new_pass-form__title">
                                Придумайте новый
                                пароль
                            </div>
                            <input
                                className="new_pass__input"
                                type="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Пароль"/>

                            <button style={{marginTop: '70px'}} type="button" onClick={(e) => {
                                e.preventDefault();
                                handleResetNewPassword(e);
                            }} className="new_passPage__btn">Сохранить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default NewPassPage;