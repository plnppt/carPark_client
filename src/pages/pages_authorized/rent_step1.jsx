import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import authHeader from "../../auth_header";

const RentStep1Page = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [carClaims, setCarClaims] = useState(null)
    const [currStep, setCurrStep] = useState(1)
    const [errors, setErrors] = useState({});

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
        "delivery_type": "Самовывоз",
        "delivery_address": "",
        "pickup_address": "Университетская площадь, 1",
        "start_date": "",
        "rental_days": "",
        "payment_method": "Наличные"
    }

    const [orderClaims, setOrderClaims] = useState(ORDER_CLAIMS_TMP)

    function isInteger(value) {
        return /^\d+$/.test(value);
    }

    const fetchUser = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.USER_ME, {headers: authHeader()})
            if (r.status == 200) {
                console.log("accepted", r.data.id)
                return r.data.id
            } else {
                console.log(r)
                return null;
            }
        } catch (err) {
            console.log(err)
            return null;
        }
    }

    const fetchCar = async (carId) => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + carId + "/")
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
        if (selectedOption) {
            setOrderClaims((prevClaims) => ({
                ...prevClaims,
                delivery_type: "Доставка",
                pickup_address: ""
            }));
        }
        setDeliveryOption(selectedOption);
    };

    const postOrder = async () => {
        try {
            let owner = await fetchUser();
            const r = await axios.post(API_URL_ENDPOINTS.ORDERS,
                {...orderClaims, owner: owner}, {headers: authHeader()})
            if (r.status === 201) {
                console.log("accepted", r)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const [cashOption, setCashOption] = useState(false);

    const handleOptionChange2 = (event) => {
        const selectedOption = event.target.value === "QR-код";
        if (selectedOption) {
            setOrderClaims((prevClaims) => ({
                ...prevClaims,
                payment_method: "QR-код",
            }));
        }
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
                                                    className={`rent1-page__input ${errors.last_name ? 'error' : ''}`}
                                                    type="text" placeholder="Фамилия"
                                                    value={orderClaims.last_name}
                                                    name="last_name"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.first_name ? 'error' : ''}`}
                                                    type="text" placeholder="Имя"
                                                    value={orderClaims.first_name}
                                                    name="first_name"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.patronymic ? 'error' : ''}`}
                                                    type="text" placeholder="Отчество (при наличии)"
                                                    value={orderClaims.patronymic}
                                                    name="patronymic"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.date_birth ? 'error' : ''} gray-text`}
                                                    type="date" placeholder="Дата рождения"
                                                    value={orderClaims.date_birth}
                                                    name="date_birth"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.phone_number ? 'error' : ''}`}
                                                    type="text" placeholder="Телефон"
                                                    value={orderClaims.phone_number}
                                                    name="phone_number"
                                                    onChange={handleClaimChange}
                                                />
                                                <span className="rent1-form__blockTitle">Паспорт</span>
                                                <input
                                                    className={`rent1-page__input ${errors.passport_number ? 'error' : ''}`}
                                                    type="text" placeholder="Серия и номер"
                                                    value={orderClaims.passport_number}
                                                    name="passport_number"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.passport_issued_by ? 'error' : ''}`}
                                                    type="text" placeholder="Кем выдан"
                                                    value={orderClaims.passport_issued_by}
                                                    name="passport_issued_by"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.passport_issue_date ? 'error' : ''}  gray-text`}
                                                    type="date" placeholder="Дата выдачи"
                                                    value={orderClaims.passport_issue_date}
                                                    name="passport_issue_date"
                                                    onChange={handleClaimChange}
                                                />
                                                <input
                                                    className={`rent1-page__input ${errors.registration_address ? 'error' : ''}`}
                                                    type="text" placeholder="Адрес регистрации"
                                                    value={orderClaims.registration_address}
                                                    name="registration_address"
                                                    onChange={handleClaimChange}
                                                />
                                                <span
                                                    className="rent1-form__blockTitle">Водительское удостоверение</span>
                                                <input
                                                    className={`rent1-page__input ${errors.driver_license_number ? 'error' : ''}`}
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
                                                        const validationErrors = {};
                                                        if (orderClaims.last_name.trim() === '') {
                                                            validationErrors.last_name = 'Введите Фамилию';
                                                        }
                                                        if (orderClaims.first_name.trim() === '') {
                                                            validationErrors.first_name = 'Введите Имя';
                                                        }
                                                        if (orderClaims.patronymic.trim() === '') {
                                                            validationErrors.patronymic = 'Введите Отчество';
                                                        }
                                                        if (orderClaims.date_birth.trim() === '') {
                                                            validationErrors.date_birth = 'Введите дату рождения';
                                                        }
                                                        if (orderClaims.phone_number.trim() === '') {
                                                            validationErrors.phone_number = 'Введите телефон';
                                                        }
                                                        if (orderClaims.passport_number.trim() === '') {
                                                            validationErrors.passport_number = 'Введите серию и номер';
                                                        }
                                                        if (orderClaims.passport_issued_by.trim() === '') {
                                                            validationErrors.passport_issued_by = 'Введите кем выдан ';
                                                        }
                                                        if (orderClaims.passport_issue_date.trim() === '') {
                                                            validationErrors.passport_issue_date = 'Введите когда выдан';
                                                        }
                                                        if (orderClaims.registration_address.trim() === '') {
                                                            validationErrors.registration_address = 'Введите адрес регистрации';
                                                        }
                                                        if (orderClaims.driver_license_number.trim() === '') {
                                                            validationErrors.driver_license_number = 'Введите серию и номер';
                                                        }
                                                        if (Object.keys(validationErrors).length > 0) {
                                                            setErrors(validationErrors);
                                                        } else {
                                                            setCurrStep(2);
                                                        }
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
                                            <span>{carClaims.name}</span>
                                        </div>

                                        <span className="rent2-form__blockTitle">С какого числа хотите арендовать машину?</span>
                                        <input
                                            className={`rent1-page__input ${errors.start_date ? 'error' : ''}  gray-text`}
                                            type="date" placeholder="Дата"
                                            value={orderClaims.start_date}
                                            name="start_date"
                                            onChange={handleClaimChange}
                                        />
                                        <span className="rent2-form__blockTitle"></span>
                                        <span
                                            className="rent2-form__blockTitle">На сколько дней собираетесь арендовать?</span>
                                        <input
                                            className={`rent1-page__input ${errors.rental_days ? 'error' : ''}`}
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
                                            value="QR-код"
                                            checked={cashOption}
                                            onChange={handleOptionChange2}
                                            id="qr-code"
                                        />

                                        <button type="button" onClick={(e) => {
                                            e.preventDefault();
                                            const validationErrors = {};
                                            if (orderClaims.start_date.trim() === '') {
                                                validationErrors.start_date = 'Введите дату начала аренды';
                                            }
                                            if (orderClaims.rental_days.trim() === '') {
                                                validationErrors.rental_days = 'Введите количество дней аренды';
                                            }
                                            if (Object.keys(validationErrors).length > 0) {
                                                setErrors(validationErrors);
                                            } else {
                                                postOrder();
                                                navigate('/feedback')
                                            }
                                        }} className="rent2-page__btn">Забронировать
                                        </button>

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