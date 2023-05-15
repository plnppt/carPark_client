import Header from "../components/header";
import Footer from "../components/footer";

export default function AccountPage(){
    return (
        <>
            <Header/>
            <main>
                <section className="accountPage">
                    <div className="wrapper">
                        <span className="accountPage__title">Личный кабинет</span>
                        <span className="accountPage__line"></span>
                        <ul className="accountPage__refsBlock">
                            <li className="accountPage__ref"><a href="edit">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</a></li>
                            <li className="accountPage__ref"><a href="#"> ВЫБРАТЬ МАШИНУ</a></li>
                            <li className="accountPage__ref"><a href="curr_order"> ТЕКУЩИЙ ЗАКАЗ</a></li>
                            <li className="accountPage__ref"><a href="history">ИСТОРИЯ ЗАКАЗОВ</a></li>
                        </ul>
                    </div>
                    <img className="accountPage__img" src={require("../assets/img/account/dec.png")} alt="РМК"/>
                </section>
            </main>
            <Footer/>
        </>
    )
}