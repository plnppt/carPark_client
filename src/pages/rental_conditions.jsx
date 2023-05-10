import Header from "../components/header";
import Footer from "../components/footer";

export default function RentalConditionsPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="presentation-block-rent-cond"></section>
                <div className="wrapper">
                    <p className="presentation-block-rent-cond-1__text">Условия</p>
                    <p className="presentation-block-rent-cond-2__text">аренды</p>
                </div>

                <div className="wrapper">
                    <div className="block-rent-cond">
                        <img src={require("../assets/img/rental_conditions/rentCard.jpg")} alt="РБК"
                             className="block-rent-cond-img"/>
                    </div>
                    <p className="block-rent-cond-1__text">Возраст:</p>
                    <p className="block-rent-cond-2__text">от 21 года</p>
                    <p className="block-rent-cond-3__text">Документы:</p>
                    <p className="block-rent-cond-4__text">Паспорт, ВУ</p>
                    <p className="block-rent-cond-5__text">Водительский стаж:</p>
                    <p className="block-rent-cond-6__text">от 3 лет</p>
                </div>

                <div className="wrapper">
                    <p className="rent-cond-1__text">Залог 15% от стоимости аренды машины</p>
                    <p className="rent-cond-2__text">Залог возвращается через 15 дней в полном размере, если:</p>
                    <p className="rent-cond-3__text">- на машину не зафиксированно штрафов во время вашего использования; </p>
                    <p className="rent-cond-4__text">- машина не попадала в аварии.</p>
                </div>
            </main>
            <Footer/>
        </>
    );
}