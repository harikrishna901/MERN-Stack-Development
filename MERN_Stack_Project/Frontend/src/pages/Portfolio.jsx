import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";

const portfolioItems = [
    {
        title: "FinTech Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
        title: "E-Commerce Platform",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
        title: "Corporate Branding Website",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    }
];

export default function Portfolio() {
    return (
        <>
            <Header />

            <section className="portfolio-section">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Portfolio
                </motion.h2>

                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="portfolio-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={item.image} alt={item.title} />
                            <div className="overlay">
                                <h3>{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
