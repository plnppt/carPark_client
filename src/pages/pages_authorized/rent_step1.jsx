import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import React, {useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";

const RentStep1Page = () => {
    const CAR_CLAIMS_TMP = {
        "name": ""
    }
    const ORDER_CLAIMS_TMP = {
        "car": "",
        "first_name": "",
        "last_name": "",
        "patronymic": "",
        "date_birth": "",
        "phone_number": "",
        "passport_number": "",
        "passport_issued_by": "",
        "passport_issue_date": "",
        "registration_address": "",
        "driver_license_number": "",
        "delivery_type": "",
        "delivery_address": "Университетская площадь, 1",
        "pickup_address": "",
        "start_date": "",
        "rental_days": 0,
        "payment_method": ""
    }

    const [carClaims, setCarClaims] = useState(CAR_CLAIMS_TMP)
    const [orderClaims, setOrderClaims] = useState(ORDER_CLAIMS_TMP)

    const fetchCar = async (carId) => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + carId)
            if (r.status == 200) {
                setCarClaims(r.data)
                console.log("accepted", r.data)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    fetchCar(1)

    const postOrder = async () => {
        try {
            const r = await axios.post(API_URL_ENDPOINTS.CUSTOMERS, orderClaims)
            if (r.status === 201) {
                console.log("accepted", r)
                setOrderClaims(ORDER_CLAIMS_TMP)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleClaimChange = (e) => {
        setOrderClaims(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const [deliveryOption, setDeliveryOption] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const handleOptionChange = (event) => {
        const selectedOption = event.target.value === 'delivery';
        setDeliveryOption(selectedOption);
        if (!selectedOption) {
            setDeliveryAddress('');
        }
    };

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="rent1-page">
                    <div className="wrapper">
                        <form action="" className="rent1-form">
                            <div className="rent1-form__title">
                                <span>Аренда</span>
                                <span>{carClaims.name}</span>
                            </div>
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Фамилия"
                                value={orderClaims.last_name}
                                name="last_name"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Имя"
                                value={orderClaims.first_name}
                                name="first_name"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Отчество (при наличии)"
                                value={orderClaims.patronymic}
                                name="patronymic"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Дата рождения"
                                value={orderClaims.date_birth}
                                name="date_birth"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Телефон"
                                value={orderClaims.phone_number}
                                name="phone_number"
                                onChange={handleClaimChange}
                            />
                            <span className="rent1-form__blockTitle">Паспорт</span>
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Серия и номер"
                                value={orderClaims.passport_number}
                                name="passport_number"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Кем выдан"
                                value={orderClaims.passport_issued_by}
                                name="passport_issued_by"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Дата выдачи"
                                value={orderClaims.passport_issue_date}
                                name="passport_issue_date"
                                onChange={handleClaimChange}
                            />
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Адрес регистрации"
                                value={orderClaims.registration_address}
                                name="registration_address"
                                onChange={handleClaimChange}
                            />
                            <span className="rent1-form__blockTitle">Водительское удостоверение</span>
                            <input
                                className="rent1-page__input"
                                type="text" placeholder="Серия и номер"
                                value={orderClaims.driver_license_number}
                                name="driver_license_number"
                                onChange={handleClaimChange}
                            />
                            <input
                                type="radio"
                                value="pickup"
                                checked={!deliveryOption}
                                onChange={handleOptionChange}
                                id="pickup"
                            />
                            <input
                                type="radio"
                                value="delivery"
                                checked={deliveryOption}
                                onChange={handleOptionChange}
                                id="delivery"
                            />
                            {deliveryOption && (
                                <input
                                    className="rent1-page__input"
                                    type="text" placeholder="Адрес"
                                    value={orderClaims.delivery_address}
                                    name="delivery_address"
                                    onChange={handleClaimChange}
                                />
                            )}

                            {!deliveryOption && (
                                <span className="rent1-form__blockTitle">Машину забирать по адресу: Университетская площадь, 1</span>

                            )}
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'http://localhost:3000/rentStep2';
                            }} className="rent1-page__btn">Далее
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default RentStep1Page;