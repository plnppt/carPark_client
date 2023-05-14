import Header from "../components/header";
import Footer from "../components/footer";

export default function ResetPage() {
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
                            <input className="resetPage__input" type="text" placeholder="Слово “секрет” "/>
                            <button style={{marginTop: '70px'}} className="resetPage__btn">Сбросить пароль</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
