import Header from "../components/header";
import Footer from "../components/footer";

export default function EntrancePage() {
    return (
        <>
            <Header/>
            <main>
                <section className="ent-page">
                    <div className="wrapper">
                        <form action="" className="ent-form">
                            <div className="ent-form__title">
                                Вход в кабинет
                            </div>
                            <input className="entPage__input" type="text" placeholder="Номер телефона"/>
                            <input className="entPage__input" type="password" placeholder="Пароль"/>
                            <a href="/reg" className="entPage__btn_reg">Регистрация</a>
                            <button style={{marginTop: '40px'}} className="entPage__btn">Сохранить</button>

                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}