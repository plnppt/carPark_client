import Header from "../components/header";
import Footer from "../components/footer";

export default function HistoryPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="historyPage">
                    <div className="wrapper">
                        <span className="accountPage__title">ИСТОРИЯ ЗАКАЗОВ</span>
                        <span className="accountPage__line"></span>
                        <ul className="accountPage__refsBlock">
                            <li className="accountPage__ref"><a href="edit">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</a></li>
                            <li className="accountPage__ref"><a href="#"> ВЫБРАТЬ МАШИНУ</a></li>
                            <li className="accountPage__ref"><a href="curr_order"> ТЕКУЩИЙ ЗАКАЗ</a></li>
                            <li className="accountPage__ref selected"><a href="history">ИСТОРИЯ ЗАКАЗОВ</a></li>
                        </ul>
                        <div className="deliverymanLine_his">
                            <span className="deliverymanLine__inf_his"> 05.02.2023 | 1 день | Maserati Ghibli | Доставка   </span>
                        </div>
                        <div className="deliverymanLine_his">
                            <span className="deliverymanLine__inf_his"> 01.01.2023 | 3 д. | Ferrari 488 | Самовывоз      </span>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}