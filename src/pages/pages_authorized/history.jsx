import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../../API_URLS";

const HistoryPage = () => {
    const [historyOrders, setHistoryOrders] = useState([])
    const fetchOrders = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.ORDERS + "?limit=1&offset=0")
            if (r.status == 200) {
                setHistoryOrders(r.data.results)
                console.log("accepted", r.data)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <>
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
                        <div className="deliverymanLine_his">
                            <span className="deliverymanLine__inf_his">
                                {
                                    historyOrders && historyOrders.map((value, index) => (
                                        <div key={index}>
                                            <span>{value.start_date} | {value.rental_days} | {value.car} | {value.delivery_type}</span>
                                            <span></span>
                                        </div>
                                    ))}
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default HistoryPage;