import Footer from "../components/footer";
import CarCard from "../components/carCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";
import HeaderAuthorizade from "../components/header_authorizade";

const Main = () => {
    const [previewCars, setPreviewCars] = useState([])
    const fetchCars = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + "?limit=6&offset=0")
            if (r.status == 200) {
                setPreviewCars(getRandomElements(r.data.results, 2))
                console.log("accepted", r.data)
            } else {
                console.log(r)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCars()
    }, [])

    function getRandomElements(arr, count) {
        var randomElements = [];

        while (randomElements.length < count) {
            var randomIndex = Math.floor(Math.random() * arr.length);
            var randomElement = arr[randomIndex];

            if (!randomElements.includes(randomElement)) {
                randomElements.push(randomElement);
            }
        }
        return randomElements;
    }

    useEffect(() => {
        const href = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1
        );
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <HeaderAuthorizade/>
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
                            {
                                previewCars.map((value, index) => (
                                    <CarCard
                                        objId={value.id}
                                        key={index}
                                        srcImg={value.car_image}
                                        carName={value.name}/>
                                ))
                            }
                            <a href="/catalog" className="openCatalogBtn">Весь каталог</a>
                        </div>
                    </div>
                </section>
                <section className="contacts">
                    <div className="wrapper">
                        <div id="contacts" className="contacts__block">
                            <span className="contacts__blockDis">Остались вопросы?</span>
                            <span className="contacts__blockDis">Свяжитесь с нами</span>
                            <div className="contacts__blockInf">
                                <a href="tel:+78001234567">8 (800) 123-45-67</a>
                                <p>г. Воронеж, Университетская</p>
                                <p>площадь, 1</p>
                                <p>pmk.company2023@yandex.ru</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Main;