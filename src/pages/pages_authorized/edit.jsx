import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";
import authHeader from "../../auth_header";

const EditPage = () => {
    const navigate = useNavigate();
    const [userClaims, setUserClaims] = useState(null)

    const fetchUserClaims = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.USER_ME, {headers: authHeader()})
            if (r.status == 200) {
                setUserClaims((prev) => {
                    return {
                            first_name: prev?.first_name || r.data.first_name,
                            last_name: prev?.last_name || r.data.last_name,
                            patronymic: prev?.patronymic || r.data.patronymic,
                            email: prev?.email || r.data.email || ""
                        }
                })
                console.log("accepted", userClaims)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const putUserClaims = async () => {
        try {
            const r = await axios.put(API_URL_ENDPOINTS.USER_ME, userClaims, {headers: authHeader()})
            if (r.status == 200) {
                console.log("accepted", userClaims)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUserClaims()
    }, [])

    const handleClaimChange = (e) => {
        setUserClaims(prevState => {
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
                <section className="editPage">
                    <div className="wrapper">
                        <span className="accountPage__title">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</span>
                        <span className="accountPage__line"></span>
                        <ul className="accountPage__refsBlock">
                            <li className="accountPage__ref selected"><a href="edit">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</a></li>
                            <li className="accountPage__ref"><a href="/catalog"> ВЫБРАТЬ МАШИНУ</a></li>
                            <li className="accountPage__ref"><a href="curr_order"> ТЕКУЩИЙ ЗАКАЗ</a></li>
                            <li className="accountPage__ref "><a href="history">ИСТОРИЯ ЗАКАЗОВ</a></li>
                        </ul>
                        {
                            userClaims ? (
                                <form action="" className="edit-form">
                                    <input
                                        className="editPage__input"
                                        type="text"
                                        value={userClaims.last_name}
                                        name="last_name"
                                        onChange={handleClaimChange}
                                        placeholder="Фамилия"/>
                                    <input
                                        className="editPage__input"
                                        type="text"
                                        value={userClaims.first_name}
                                        name="first_name"
                                        onChange={handleClaimChange}
                                        placeholder="Имя"/>
                                    <input
                                        className="editPage__input"
                                        type="text"
                                        value={userClaims.patronymic}
                                        name="patronymic"
                                        onChange={handleClaimChange}
                                        placeholder="Отчество (при наличии)"/>
                                    <input
                                        className="editPage__input"
                                        type="text"
                                        value={userClaims.email}
                                        name="email"
                                        onChange={handleClaimChange}
                                        placeholder="Email"/>
                                    <button style={{marginTop: '40px'}}
                                            className="editPage__btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        putUserClaims();
                                        navigate("/account")
                                    }}>
                                        Сохранить</button>
                                </form>
                            ) : null
                        }

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default EditPage;