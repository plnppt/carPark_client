import HeaderAuthorizade from "../../components/header_authorizade";
import Footer from "../../components/footer";

const QRPage = () => {
    return (
        <>
            <HeaderAuthorizade/>
            <main>
                <section className="qrPage">
                    <div className="wrapper">
                        <div className="qr_code">
                            <a href="/pay"><img src={require("../../assets/img/qr_code/qr.png")} alt="QR" className="qr_code-img"/></a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default QRPage;