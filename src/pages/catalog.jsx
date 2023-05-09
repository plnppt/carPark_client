import Header from "../components/header";
import Footer from "../components/footer";
import CarCard from "../components/carCard";

export default function CatalogPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="presentation-block-catalog"></section>
                <div className="wrapper">
                    <p className="presentation-block-catalog-1__text">К</p>
                </div>
                <div className="wrapper">
                    <p className="presentation-block-catalog-2__text">аталог</p>
                </div>
                <div className="wrapper">
                    <p className="presentation-block-catalog-3__text">аждая поездка - новые открытия с комфортом</p>
                </div>
                <div className="wrapper">
                    <section className="productCards">
                        <CarCard srcImg={require("../assets/img/catalog/Audi R8 V10 performance II (4S).png")} carName={"Audi R8 V10 performance II (4S)"}/>
                        <CarCard srcImg={require("../assets/img/catalog/Maserati Ghibli.png")} carName={"Maserati Ghibli"}/>
                        <CarCard srcImg={require("../assets/img/catalog/Ferrari SF90 Stradale I.png")} carName={"Ferrari SF90 Stradale I"}/>
                        <CarCard srcImg={require("../assets/img/catalog/Chevrolet Corvette Stingray C8.png")} carName={"Chevrolet Corvette Stingray C8"}/>
                        <CarCard srcImg={require("../assets/img/catalog/BMW i8 Coupe.png")} carName={"BMW i8 Coupe"}/>
                        <CarCard srcImg={require("../assets/img/catalog/Ferrari 488.png")} carName={"Ferrari 488"}/>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}