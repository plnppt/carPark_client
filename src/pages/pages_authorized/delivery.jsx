import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";
import authHeader from "../../auth_header";

const DeliveryPage = () => {
    const [historyOrders, setHistoryOrders] = useState([])
    const fetchOrders = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.ORDERS + "?is_delivery=true")
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
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const formattedDate = date.toLocaleDateString('ru-RU', options);
        return formattedDate;
    };

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        const fetchCarNames = async () => {
            if (historyOrders.length > 0 && !isDataLoaded) {
                const ordersWithCarNames = await Promise.all(
                    historyOrders.map(async (order) => {
                        const carName = await fetchCarById(order.car);
                        return { ...order, carName };
                    })
                );
                setHistoryOrders(ordersWithCarNames);
                setIsDataLoaded(true);
            }
        };

        fetchCarNames();
    }, [historyOrders, isDataLoaded]);

    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="delivPage">
                    <div className="wrapper">
                        <span className="accountPage__title">Доставка</span>
                        <span className="accountPage__line"></span>
                {/*        {historyOrders.map((value, index) => (<div className="deliverymanLine_order" key={index}>*/}
                {/*<span className="deliverymanLine__inf">*/}
                {/*  {formatDate(new Date(value.start_date))} | {value.rental_days} д. | {value.carName} | {value.delivery_address} |{value.delivery_type}*/}
                {/*</span>*/}
                            <div className="deliverymanLine_order">
                                <span className="deliverymanLine__inf"> 30.05.2023 | 12:00 | 3 д. | Ferrari 488 | ул. Цветочная д. 10 |  Доставка     </span>
                                <div className="deliverymanLine__btns">
                                    <button className="transparentBtn" style={{marginLeft: '235px'}}>В процессе</button>
                                </div>
                                <div className="deliverymanLine__btns">
                                    <button className="darkBtn">Завершено</button>
                                </div>
                            </div>
                        {/*</div>))}*/}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default DeliveryPage;