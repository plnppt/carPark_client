import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";

const EditPage = () => {
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="editPage">
                    <div className="wrapper">
                        <span className="accountPage__title">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</span>
                        <span className="accountPage__line"></span>
                        <ul className="accountPage__refsBlock">
                            <li className="accountPage__ref selected"><a href="edit">РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ</a></li>
                            <li className="accountPage__ref"><a href="/catalog"> ВЫБРАТЬ МАШИНУ</a></li>
                            <li className="accountPage__ref"><a href="curr_order"> ТЕКУЩИЙ ЗАКАЗ</a></li>
                            <li className="accountPage__ref "><a href="history">ИСТОРИЯ ЗАКАЗОВ</a></li>
                        </ul>
                        <form action="" className="edit-form">
                            <input className="editPage__input" type="text" placeholder="Фамилия"/>
                            <input className="editPage__input" type="text" placeholder="Имя"/>
                            <input className="editPage__input" type="text" placeholder="Отчество (при наличии)"/>
                            <input className="editPage__input" type="text" placeholder="Телефон"/>
                            <input className="editPage__input" type="text" placeholder="Email"/>
                            <button style={{marginTop: '40px'}} className="editPage__btn">Сохранить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default EditPage;