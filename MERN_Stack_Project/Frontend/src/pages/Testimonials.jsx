import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/Testimonials.css";

const testimonials = [
    {
        name: "Jane Smith",
        role: "CEO, FinTech Global",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "Outpro transformed our digital infrastructure completely. Their team delivered a scalable and secure platform."
    },
    {
        name: "Michael Brown",
        role: "Founder, EcoEnergy Systems",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Working with Outpro was seamless. The final product exceeded our expectations in performance and design."
    },
    {
        name: "Priya Reddy",
        role: "Marketing Director",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Their digital strategies significantly boosted our brand visibility within three months."
    }
];

export default function Testimonials() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header />

            <section
                className="testimonial-section"
                style={{ backgroundPositionY: offsetY * 0.3 }}
            >
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What Our Clients Say
                </motion.h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="testimonial-card"
                                whileHover={{
                                    rotateY: 8,
                                    rotateX: 4,
                                    scale: 1.05
                                }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="quote-icon">“</div>

                                <img src={t.image} alt={t.name} />

                                <p>{t.text}</p>

                                <div className="stars">
                                    {"⭐".repeat(t.rating)}
                                </div>

                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <Footer />
        </>
    );
}
