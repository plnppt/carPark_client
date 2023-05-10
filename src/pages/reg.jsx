import Header from "../components/header";
import Footer from "../components/footer";

export default function RegPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="reg-page">
                    <div className="wrapper">
                        <form action="" className="reg-form">
                            <div className="reg-form__title">
                                Регистрация
                            </div>
                            <input className="regPage__input" type="text" placeholder="Фамилия"/>
                            <input className="regPage__input" type="text" placeholder="Имя"/>
                            <input className="regPage__input" type="text" placeholder="Отчество (при наличии)"/>
                            <input className="regPage__input" type="text" placeholder="Дата рождения"/>
                            <input className="regPage__input" type="text" placeholder="Телефон"/>
                            <span className="rent-form__blockTitle" style={{marginBottom: '17px'}}>Придумайте секретное слово,<br/> на случай, если пароль будет утерян</span>
                            <input className="regPage__input" type="text" placeholder="Секретное слово"/>
                            <button style={{marginTop: '40px'}} className="regPage__btn">Зарегистрироваться</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
