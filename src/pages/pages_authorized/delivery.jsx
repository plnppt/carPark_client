import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";

export default function DeliveryPage() {
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="delivPage">
                    <div className="wrapper">
                        <span className="accountPage__title">Доставка</span>
                        <span className="accountPage__line"></span>
                        <div className="deliverymanLine_order">
                            <span className="deliverymanLine__inf"> 30.05.2023 | 12:00 | 3 д. | Ferrari 488 | ул. Цветочная д. 10 |  Доставка     </span>
                            <div className="deliverymanLine__btns">
                                <button className="transparentBtn" style={{marginLeft: '235px'}}>В процессе</button>
                            </div>
                            <div className="deliverymanLine__btns">
                                    <button className="darkBtn" >Завершено</button>
                                </div>
                        </div>
                        <div className="deliverymanLine_order">
                            <span className="deliverymanLine__inf"> 30.05.2023 | 9:00 | 1 д. | Ferrari 488 | ул. Цветочная д. 10 |  Доставка     </span>
                            <div className="deliverymanLine__btns">
                                <button className="darkBtn" style={{marginLeft: '255px'}}>В процессе</button>
                            </div>
                            <div className="deliverymanLine__btns">
                                <button className="darkBtn" >Завершено</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}