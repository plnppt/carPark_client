import Header from "../components/header";
import Footer from "../components/footer";
import CarCard from "../components/carCard";

export default function Main() {
    return (
        <>
            <Header/>
            <main>
                <section className="presentation-block">
                    <div className="wrapper">
                        <p className="presentation-block__text">Наши машины – Ваши впечатления</p>
                    </div>
                </section>
                <section className="auto-park">
                    <div className="wrapper">
                        <h3 className="sectionName">Автопарк</h3>
                        <p className="sectionDis">Мы работаем для вас</p>
                        <div className="auto-park__main">
                            <div className="auto-park__block">
                                <img src={require("../assets/img/main/car2_main.jpg")} alt="РБК"
                                     className="auto-park__block-img"/>
                                <div className="auto-park__blockText">
                                    <p className="auto-park__blockTextTitle">Надёжность и чистота</p>
                                    <p className="auto-park__blockTextDis">Перед использованием, автомобиль проходит:
                                        диагностику ходовой части и двигателя, тщательную чистку салона с bio
                                        средствами</p>
                                </div>
                            </div>
                            <div className="auto-park__block">
                                <img src={require("../assets/img/main/car3_main.jpg")} alt="РБК"
                                     className="auto-park__block-img"/>
                                <div className="auto-park__blockText">
                                    <p className="auto-park__blockTextTitle">Доставка</p>
                                    <p className="auto-park__blockTextDis">Наши водители пригонят машину по нужному
                                        адресу в назначенное время</p>
                                    <p className="auto-park__blockTextSubDis">Цена доставки уточняется у администратора</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="carSelect">
                    <div className="wrapper">
                        <h3 className="sectionName">Выбрать машину</h3>
                        <div className="carSelect__main">
                            <CarCard srcImg={require("../assets/img/catalog/Audi R8 V10 performance II (4S).png")} carName={"Audi R8 V10 performance II (4S)"}/>
                            <CarCard srcImg={require("../assets/img/catalog/Ferrari 488.png")} carName={"Ferrari 488"}/>
                            <a href="/catalog" className="openCatalogBtn">Весь каталог</a>
                        </div>
                    </div>
                </section>
                <section className="contacts">
                    <div className="wrapper">
                        <div className="contacts__block">
                            <span className="contacts__blockDis">Остались вопросы?</span>
                            <span className="contacts__blockDis">Свяжитесь с нами</span>
                            <div className="contacts__blockInf">
                                <a href="tel:+78001234567">8 (800) 123-45-67</a>
                                <p>г. Воронеж, Университетская</p>
                                <p>площадь, 1</p>
                                <p>pmk_company@gmail.ru</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}