import Header from "../components/header";
import Footer from "../components/footer";

export default function CurrOrderPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="curr_orderPage">
                    <div className="wrapper">
                        <span className="accountPage__title">ТЕКУЩИЙ ЗАКАЗ</span>
                        <span className="accountPage__line"></span>
                        <ul className="accountPage__refsBlock">
                            <li className="accountPage__ref"><a href="edit">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</a></li>
                            <li className="accountPage__ref"><a href="#"> ВЫБРАТЬ МАШИНУ</a></li>
                            <li className="accountPage__ref selected"><a href="#"> ТЕКУЩИЙ ЗАКАЗ</a></li>
                            <li className="accountPage__ref"><a href="history">ИСТОРИЯ ЗАКАЗОВ</a></li>
                        </ul>
                        <div className="deliverymanLine_order">
                            <span className="deliverymanLine__inf"> 05.02.2023 | 12:00 | 3 д. | Ferrari 488 | ул. Цветочная д. 10 |  Доставка     </span>
                            <div className="deliverymanLine__btns">
                                <button type="button" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='http://localhost:3000/qr';
                                }} className="darkBtn">Оплатить</button>
                            </div>
                        </div>
                        <div className="deliverymanLine_order">
                            <span className="deliverymanLine__inf"> 31.04.2023 | 9:00 | 1 д. | Ferrari 488 | ул. Цветочная д. 10 |  Доставка     </span>
                            <div className="deliverymanLine__btns">
                                <button className="transparentBtn">Оплачено</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}