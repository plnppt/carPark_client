import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";
import authHeader from "../../auth_header";

const HistoryPage = () => {
    const [historyOrders, setHistoryOrders] = useState([])
    const fetchOrders = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.ORDERS + "?is_past=true", {headers: authHeader()})
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
            const r = await axios.get(API_URL_ENDPOINTS.CARS + `${id}` + "/")
            return r.data.name;
        } catch (err) {
            console.log(err)
        }
    }

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
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

    return (<>
            <HeaderAuthorizade/>
            <main>
                <section className="historyPage">
                    <div className="wrapper">
                        <span className="accountPage__title">ИСТОРИЯ ЗАКАЗОВ</span>
                        <span className="accountPage__line"></span>
                        <ul className="accountPage__refsBlock">
                            <li className="accountPage__ref"><a href="edit">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</a></li>
                            <li className="accountPage__ref"><a href="/catalog"> ВЫБРАТЬ МАШИНУ</a></li>
                            <li className="accountPage__ref"><a href="curr_order"> ТЕКУЩИЙ ЗАКАЗ</a></li>
                            <li className="accountPage__ref selected"><a href="history">ИСТОРИЯ ЗАКАЗОВ</a></li>
                        </ul>
                        {historyOrders.map((value, index) => (<div className="deliverymanLine_his" key={index}>
                <span className="deliverymanLine__inf_his">
                  {formatDate(new Date(value.start_date))} | {value.rental_days} д. | {value.carName} | {value.delivery_type}
                </span>
                            </div>))}
                    </div>
                </section>
            </main>
            <Footer/>
        </>)
}

export default HistoryPage;