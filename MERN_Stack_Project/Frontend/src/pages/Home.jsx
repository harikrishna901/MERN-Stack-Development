import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../styles/Home.css";

export default function Home() {
    const fullText = "Build Your Digital Future With Outpro.India";
    const [text, setText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /* ================= CHECK LOGIN STATUS ================= */
    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);

    /* ================= TYPEWRITER ================= */
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 40);
        return () => clearInterval(interval);
    }, []);

    /* ================= SCROLL PROGRESS ================= */
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = (scrollTop / height) * 100;
            const bar = document.getElementById("progress-bar");
            if (bar) bar.style.width = progress + "%";
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <>
            <div id="progress-bar"></div>
            <Header />

            {/* ================= HERO ================= */}
            <section className="home-hero">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: { color: "transparent" },
                        particles: {
                            number: { value: 50 },
                            size: { value: 3 },
                            move: { enable: true, speed: 1 },
                            opacity: { value: 0.3 },
                            links: { enable: true, distance: 150, opacity: 0.2 },
                        },
                    }}
                />

                <div className="blob blob1"></div>
                <div className="blob blob2"></div>

                <div className="hero-container">
                    <p className="hero-subtitle">🚀 Digital Innovation Partner</p>
                    <h1 className="typewriter">{text}</h1>
                    <p className="hero-description">
                        We design and develop modern, scalable and high-performance digital
                        platforms that empower startups and enterprises globally.
                        Our expertise ensures secure, fast and future-ready solutions.
                    </p>

                    <div className="hero-buttons">
                        <a href="/services" className="btn-primary">Explore Services</a>
                        <a href="/portfolio" className="btn-outline">View Portfolio</a>
                    </div>

                    <div className="hero-stats">
                        <div><h3>120+</h3><span>Projects</span></div>
                        <div><h3>75+</h3><span>Clients</span></div>
                        <div><h3>10+</h3><span>Years</span></div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="features-section">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="features-grid">
                    {["Modern Design", "Fast Performance", "Secure Solutions"].map(
                        (title, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <h3>{title}</h3>
                                <p>
                                    Premium enterprise-level solutions crafted with latest technologies and industry standards.
                                </p>
                            </motion.div>
                        )
                    )}
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="process-section">
                <h2 className="section-title">Our Process</h2>
                <div className="process-grid">
                    {[
                        { step: "01", title: "Discover", text: "We analyze your goals and requirements." },
                        { step: "02", title: "Design", text: "We craft premium user experiences." },
                        { step: "03", title: "Develop", text: "We build scalable and secure solutions." },
                        { step: "04", title: "Deploy", text: "We launch and optimize your product." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="process-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="process-step">{item.step}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= CLIENTS ================= */}
            <section className="clients-section">
                <h2 className="section-title">Trusted By Leading Brands</h2>
                <div className="clients-grid">
                    {["Google", "Microsoft", "Amazon", "Adobe", "Meta", "Netflix"].map(
                        (client, index) => (
                            <div key={index} className="client-logo">{client}</div>
                        )
                    )}
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section className="pricing-section">
                <h2 className="section-title">Flexible Pricing Plans</h2>
                <p className="pricing-subtitle">
                    Choose the perfect plan tailored to your business needs.
                </p>

                <div className="pricing-grid">

                    <div className="pricing-card">
                        <h3>Starter</h3>
                        <div className="price">₹9,999</div>
                        <p className="price-desc">Perfect for small businesses</p>
                        <ul>
                            <li>✔ Responsive Website</li>
                            <li>✔ Basic SEO Setup</li>
                            <li>✔ Contact Form</li>
                            <li>✔ 1 Month Support</li>
                        </ul>
                        <a href="/signup" className="btn-pricing">Get Started</a>
                    </div>

                    <div className="pricing-card popular">
                        <div className="popular-badge">Most Popular</div>
                        <h3>Professional</h3>
                        <div className="price">₹24,999</div>
                        <p className="price-desc">Best for growing brands</p>
                        <ul>
                            <li>✔ Custom UI/UX Design</li>
                            <li>✔ Advanced SEO</li>
                            <li>✔ Performance Optimization</li>
                            <li>✔ 3 Months Support</li>
                        </ul>
                        <a href="/signup" className="btn-pricing">Choose Plan</a>
                    </div>

                    <div className="pricing-card">
                        <h3>Enterprise</h3>
                        <div className="price">Custom</div>
                        <p className="price-desc">For large-scale businesses</p>
                        <ul>
                            <li>✔ Full Stack Development</li>
                            <li>✔ Dedicated Team</li>
                            <li>✔ Cloud Deployment</li>
                            <li>✔ 24/7 Premium Support</li>
                        </ul>
                        <a href="/signup" className="btn-pricing">Contact Sales</a>
                    </div>

                </div>
            </section>

            {/* ================= BLOG ================= */}
            <section className="blog-section">
                <h2 className="section-title">Latest Insights</h2>
                <p className="blog-subtitle">
                    Stay updated with trends, strategies and digital innovation.
                </p>

                <div className="blog-grid">
                    {[
                        {
                            title: "Top Web Design Trends 2026",
                            text: "Explore the latest UI/UX trends shaping the digital world.",
                            img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                        },
                        {
                            title: "Why Performance Matters",
                            text: "Speed and optimization are critical for higher conversions.",
                            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                        },
                        {
                            title: "Scaling Your Digital Presence",
                            text: "How modern technology helps businesses grow faster.",
                            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                        }
                    ].map((post, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-image">
                                <img src={post.img} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <h3>{post.title}</h3>
                                <p>{post.text}</p>
                                <a href="/blog" className="read-more">
                                    Read More <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA (HIDDEN AFTER LOGIN) ================= */}
            {!isLoggedIn && (
                <section className="cta-section">
                    <div className="cta-container">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Let’s collaborate and build something extraordinary together.
                            Our team is ready to deliver world-class digital solutions.
                        </p>
                        <a href="/signup" className="btn-primary">
                            Get Started Today
                        </a>
                    </div>
                </section>
            )}

            <Footer />
        </>
    );
}

