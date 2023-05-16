import Header from "../components/header";
import Footer from "../components/footer";

export default function ResetErrorPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="reset-page">
                    <div className="wrapper">
                        <form action="" className="reset-form">
                            <div className="reset-form__title">
                                Введите секретное слово
                            </div>
                            <span className="reset-form__blockTitle" style={{marginBottom: '17px'}}>Слово "секрет" не верно.<br/>Попробуйте ещё раз или зарегистрируйтесь заново.</span>
                            <input className="resetPage__input" type="text" placeholder="Слово “секрет” "/>
                            <a href="/reg" className="resetPage__btn_reg">Регистрация</a>
                            <button  className="reset_er_Page__btn">Сбросить пароль</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}