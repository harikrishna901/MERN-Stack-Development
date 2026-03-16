import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/About.css";

export default function About() {
    const [count, setCount] = useState({
        projects: 0,
        clients: 0,
        years: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => ({
                projects: prev.projects < 120 ? prev.projects + 2 : 120,
                clients: prev.clients < 75 ? prev.clients + 1 : 75,
                years: prev.years < 10 ? prev.years + 1 : 10
            }));
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />

            {/* PARALLAX HERO */}
            <section className="about-hero">
                <motion.div
                    className="hero-overlay"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        About Outpro.India
                    </motion.h1>

                    <motion.p whileHover={{ scale: 1.05 }}>
                        Innovating Digital Solutions for the Future
                    </motion.p>
                </motion.div>
            </section>

            {/* MISSION & VISION */}
            <section className="mission-section">
                <div className="mission-grid">
                    <motion.div
                        className="mission-card"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>Our Mission</h3>
                        <p>
                            To deliver scalable, innovative, and high-performance digital
                            solutions that empower businesses globally.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mission-card"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>Our Vision</h3>
                        <p>
                            To become a globally recognized digital transformation partner
                            driving innovation and excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* STATS COUNTER */}
            <section className="stats-section">
                <div className="stats-grid">
                    <div>
                        <h2>{count.projects}+</h2>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h2>{count.clients}+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h2>{count.years}+</h2>
                        <p>Years Experience</p>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="timeline-section">
                <h2 className="section-title">Our Journey</h2>

                <div className="timeline">
                    {[
                        { year: "2016", text: "Company Founded" },
                        { year: "2018", text: "Expanded to International Clients" },
                        { year: "2022", text: "Reached 100+ Projects" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            whileHover={{ scale: 1.08 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span>{item.year}</span>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TEAM */}
            <section className="team-section">
                <h2 className="section-title">Our Leadership</h2>

                <div className="team-grid">
                    {[
                        {
                            name: "Arjun Kumar",
                            role: "CEO & Founder",
                            img: "https://randomuser.me/api/portraits/men/41.jpg"
                        },
                        {
                            name: "Sneha Patel",
                            role: "Creative Director",
                            img: "https://randomuser.me/api/portraits/women/50.jpg"
                        },
                        {
                            name: "Rohan Sharma",
                            role: "Lead Developer",
                            img: "https://randomuser.me/api/portraits/men/60.jpg"
                        }
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 3
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img src={member.img} alt={member.name} />
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
