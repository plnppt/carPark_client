import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import DateTime from "react-datetime";
import authHeader from "../../auth_header";

const RentStep1Page = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [carClaims, setCarClaims] = useState(null)
    const [currStep, setCurrStep] = useState(1)

    const ORDER_CLAIMS_TMP = {
        "car": parseInt(id),
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
        "delivery_address": "",
        "pickup_address": "",
        "start_date": "",
        "rental_days": "",
        "payment_method": ""
    }

    const [orderClaims, setOrderClaims] = useState(ORDER_CLAIMS_TMP)

    function isInteger(value) {
        return /^\d+$/.test(value);
    }

    const fetchCar = async (carId) => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + carId)
            if (r.status == 200) {
                setCarClaims(r.data)
                setOrderClaims(prevState => ({
                    ...prevState,
                    car: r.data.id
                }));
                console.log("accepted", r.data)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (isInteger(id)) {
            fetchCar(parseInt(id))
        }
    }, [])

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
        const selectedOption = event.target.value === "Доставка";
        setDeliveryOption(selectedOption);
        if (!selectedOption) {
            setDeliveryAddress("Университетская площадь, 1");
        }
    };

    const postOrder = async () => {
        try {
            const r = await axios.post(API_URL_ENDPOINTS.ORDERS, orderClaims, {headers: authHeader()})
            if (r.status === 201) {
                console.log("accepted", r)
                setOrderClaims(orderClaims)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const [cashOption, setCashOption] = useState(false);

    const handleOptionChange2 = (event) => {
        const selectedOption = event.target.value === "qr-код";
        setCashOption(selectedOption);
    };

    return (
        <>
            {
                currStep == 1 ? (
                    <>
                        <HeaderAuthorizade/>
                        {
                            carClaims == null ? null : (
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
                                                <span
                                                    className="rent1-form__blockTitle">Водительское удостоверение</span>
                                                <input
                                                    className="rent1-page__input"
                                                    type="text" placeholder="Серия и номер"
                                                    value={orderClaims.driver_license_number}
                                                    name="driver_license_number"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    type="radio"
                                                    value="Самовывоз"
                                                    checked={!deliveryOption}
                                                    onChange={handleOptionChange}
                                                    id="pickup"
                                                />
                                                <input
                                                    type="radio"
                                                    value="Доставка"
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
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCurrStep(2);
                                                    }} className="rent1-page__btn">Далее
                                                </button>
                                            </form>
                                        </div>
                                    </section>
                                </main>
                            )
                        }
                        <Footer/>
                    </>
                ) : null
            }
            {
                currStep == 2 ? (
                    <>
                        <HeaderAuthorizade/>
                        <main>
                            <section className="rent2-page">
                                <div className="wrapper">
                                    <form action="" className="rent2-form">
                                        <div className="rent2-form__title">
                                            <span>Аренда</span>
                                            <span>{orderClaims.car}</span>
                                        </div>

                                        <span className="rent2-form__blockTitle">С какого числа хотите арендовать машину?</span>
                                        <DateTime
                                            className="rent2-page__input"
                                            inputProps={{ placeholder: "Дата и время" }}
                                            value={orderClaims.start_date}
                                            name="start_date"
                                            onChange={(dateTime) => handleClaimChange({ target: { name: "start_date", value: dateTime } })}
                                        />

                                        <span className="rent2-form__blockTitle"></span>
                                        <span className="rent2-form__blockTitle">На сколько дней собираетесь арендовать?</span>
                                        <input
                                            className="rent2-page__input"
                                            type="text" placeholder="Количество дней"
                                            value={orderClaims.rental_days}
                                            name="rental_days"
                                            onChange={handleClaimChange}
                                        />

                                        <span className="rent2-form__blockTitle">Выберите способ оплаты</span>

                                        <input
                                            type="radio"
                                            value="Наличные"
                                            checked={!cashOption}
                                            onChange={handleOptionChange2}
                                            id="cash"
                                        />
                                        <input
                                            type="radio"
                                            value="qr-код"
                                            checked={cashOption}
                                            onChange={handleOptionChange2}
                                            id="qr-code"
                                        />

                                        <button type="button" onClick={(e) => {
                                            e.preventDefault();
                                            postOrder();
                                            navigate('/feedback')
                                        }} className="rent2-page__btn">Забронировать</button>

                                        <span className="rent2-form__blockTitle1">точную цену и возможность аренды Вам сообщит администратор после нажатия кнопки «забронировать»</span>
                                    </form>
                                </div>
                            </section>
                        </main>
                        <Footer/>
                    </>
                ) : null
            }
        </>
    )
}

export default RentStep1Page;