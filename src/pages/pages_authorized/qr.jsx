import Header from "../../components/header";
import Footer from "../../components/footer";

export default function QRPage() {
    return (
        <>
            <Header/>
            <main>
                <section className="qrPage">
                    <div className="wrapper">
                        <div className="qr_code">
                            <a href="/"><img src={require("../../assets/img/qr_code/qr.png")} alt="QR" className="qr_code-img"/></a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}