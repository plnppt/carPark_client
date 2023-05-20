import Footer from "../components/footer";
import CarCard from "../components/carCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL_ENDPOINTS} from "../API_URLS";
import HeaderAuthorizade from "../components/header_authorizade";

const CatalogPage = () => {

    const [previewCars, setPreviewCars] = useState([])
    const fetchCars = async () => {
        try {
            const r = await axios.get(API_URL_ENDPOINTS.CARS + "?limit=6&offset=0")
            if (r.status == 200) {
                setPreviewCars(r.data.results)
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

    return (
        <>
            <HeaderAuthorizade/>
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
                        {
                            previewCars.map((value, index) => (
                                <CarCard
                                    objId={value.id}
                                    key={index}
                                    srcImg={value.car_image}
                                    carName={value.name}/>
                            ))
                        }
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default CatalogPage;