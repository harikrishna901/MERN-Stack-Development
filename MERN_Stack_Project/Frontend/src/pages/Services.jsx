import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "../styles/Services.css";

const services = [
    {
        title: "Web Development",
        description:
            "High-performance, scalable, and secure web applications tailored to business needs.",
        icon: "💻"
    },
    {
        title: "UI/UX Design",
        description:
            "Modern, intuitive, and user-focused design systems that elevate digital experiences.",
        icon: "🎨"
    },
    {
        title: "Mobile App Development",
        description:
            "Cross-platform mobile applications built with performance and scalability in mind.",
        icon: "📱"
    },
    {
        title: "Digital Marketing",
        description:
            "Data-driven strategies to boost brand visibility and customer engagement.",
        icon: "📊"
    }
];

export default function Services() {
    return (
        <>
            <Header />

            <section className="services-section">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Services
                </motion.h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
