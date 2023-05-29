import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";
import authHeader from "../../auth_header";

const DeliveryPage = () => {
    const [historyOrders, setHistoryOrders] = useState([])
    const [isDelivered, setIsDelivered] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const fetchOrders = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.ORDERS + "?is_delivery=true", {headers: authHeader()})
            if (r.status == 200) {
                setHistoryOrders(r.data)
                console.log("accepted", r.data)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const fetchCarById = async (id) => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + `${id}`)
            return r.data.name;
        } catch (err) {
            console.log(err)
        }
    }

    const formatDate = (date) => {
        const options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        const formattedDate = date.toLocaleDateString('ru-RU', options);
        return formattedDate;
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        const fetchCarNames = async () => {
            if (historyOrders.length > 0 && !isDataLoaded) {
                const ordersWithCarNames = await Promise.all(
                    historyOrders.map(async (order) => {
                        const carName = await fetchCarById(order.car);
                        return {...order, carName};
                    })
                );
                setHistoryOrders(ordersWithCarNames);
                setIsDataLoaded(true);
            }
        };

        fetchCarNames();
    }, [historyOrders, isDataLoaded]);

    const updateDeliveryStatus = async (orderId, isDelivered) => {
        try {
            const response = await axios.patch(
                API_URL_ENDPOINTS.ORDERS + `${orderId}/`,
                {is_delivered: isDelivered},
                {headers: authHeader()}
            );
            if (response.status === 200) {
                console.log("Delivery status updated");
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeliveryStatusChange = async (orderId, isDelivered) => {
        updateDeliveryStatus(orderId, isDelivered);
        const updatedOrders = historyOrders.map((order) => {
            if (order.id === orderId) {
                return { ...order, is_delivered: isDelivered };
            }
            return { ...order, is_delivered: false };
        });
        setHistoryOrders(updatedOrders);
    };

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="delivPage">
                    <div className="wrapper">
                        <span className="accountPage__title">Доставка</span>
                        <span className="accountPage__line"></span>
                        {historyOrders.map((value, index) => (<div className="deliverymanLine_order" key={index}>
                <span className="deliverymanLine__inf">
                  {formatDate(new Date(value.start_date))} | {value.rental_days} д. | {value.carName} | {value.delivery_address}
                </span>
                            <div className="deliverymanLine__btns">
                                <button
                                    className={`transparentBtn ${
                                        value.is_delivered ? "darkBtn" : ""
                                    }`}
                                    style={{marginLeft: "235px"}}
                                    onClick={() =>
                                        handleDeliveryStatusChange(value.id, false)
                                    }
                                    disabled={value.is_delivered}
                                >
                                    В процессе
                                </button>
                            </div>
                            <div className="deliverymanLine__btns">
                                <button
                                    className={`darkBtn ${value.is_delivered ? "transparentBtn" : ""}`}
                                    onClick={() =>
                                        handleDeliveryStatusChange(value.id, true)
                                    }
                                    disabled={value.is_delivered}
                                >
                                    Завершено
                                </button>
                            </div>
                        </div>))}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default DeliveryPage;