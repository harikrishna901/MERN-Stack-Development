import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServiceDetail() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <section className="section">
                <h2 className="section-title">Service Detail {id}</h2>
                <p className="center-text">
                    Detailed information about selected service.
                </p>
            </section>
            <Footer />
        </>
    );
}
