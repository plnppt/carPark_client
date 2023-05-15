import Header from "../components/header";
import Footer from "../components/footer";

export default function NewPassPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="new_pass-page">
                    <div className="wrapper">
                        <form action="" className="new_pass-form">
                            <div className="new_pass-form__title">
                                Придумайте новый
                                пароль
                            </div>
                            <input className="new_pass__input" type="password" placeholder="Пароль"/>
                            <button style={{marginTop: '70px'}} className="new_passPage__btn">Сохранить</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}