import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaCheckCircle
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    // "" | "invalid" | "exists" | "success"
    const [subscribedEmails, setSubscribedEmails] = useState([]);

    // Load emails from localStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("subscribers")) || [];
        setSubscribedEmails(stored);
    }, []);

    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleSubscribe = () => {

        const formattedEmail = email.toLowerCase().trim();

        if (!validateEmail(formattedEmail)) {
            setStatus("invalid");
            return;
        }

        if (subscribedEmails.includes(formattedEmail)) {
            setStatus("exists");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            const updatedEmails = [...subscribedEmails, formattedEmail];
            localStorage.setItem("subscribers", JSON.stringify(updatedEmails));
            setSubscribedEmails(updatedEmails);

            setLoading(false);
            setStatus("success");
            setEmail("");
        }, 1200);
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* COMPANY */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="footer-logo">
                        Outpro<span>.India</span>
                    </h2>
                    <p>
                        We build scalable, high-performance digital solutions for startups
                        and enterprises worldwide.
                    </p>

                    <div className="social-icons">
                        <a href="#" className="facebook"><FaFacebookF /></a>
                        <a href="#" className="linkedin"><FaLinkedinIn /></a>
                        <a href="#" className="instagram"><FaInstagram /></a>
                        <a href="#" className="twitter"><FaTwitter /></a>
                    </div>
                </motion.div>

                {/* QUICK LINKS */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/signup">Signup</a></li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>SEO Optimization</li>
                        <li>Cloud Deployment</li>
                        <li>Performance Tuning</li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe to get latest insights and updates.</p>

                    <div className="newsletter">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setStatus("");
                            }}
                        />

                        <button
                            className={`subscribe-btn ${status}`}
                            onClick={handleSubscribe}
                            disabled={loading}
                        >
                            {loading ? (
                                "Subscribing..."
                            ) : status === "success" ? (
                                <>
                                    <FaCheckCircle className="check-icon" />
                                    Subscribed
                                </>
                            ) : status === "exists" ? (
                                "Already Subscribed"
                            ) : (
                                "Subscribe"
                            )}
                        </button>
                    </div>

                    {/* Error Message */}
                    {status === "invalid" && (
                        <p className="subscribe-message error">
                            Please enter a valid email address.
                        </p>
                    )}

                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Outpro.India | All Rights Reserved
            </div>
        </footer>
    );
}
