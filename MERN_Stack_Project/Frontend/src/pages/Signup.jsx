import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Signup.css";

export default function Signup() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [strength, setStrength] = useState(0);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [serverMessage, setServerMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    /* PASSWORD STRENGTH */
    useEffect(() => {
        const password = form.password;
        let score = 0;

        if (password.length >= 6) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        setStrength(score);
    }, [form.password]);

    /* LIVE VALIDATION */
    useEffect(() => {
        let newErrors = {};

        if (form.name && form.name.length < 3)
            newErrors.name = "Name must be at least 3 characters";

        if (form.email && !/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Enter valid email";

        if (form.password && form.password.length < 6)
            newErrors.password = "Minimum 6 characters";

        if (form.confirmPassword && form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
    }, [form]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setServerMessage("");
    };

    /* SUBMIT */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        if (Object.keys(errors).length !== 0) return;

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/auth/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        password: form.password,
                    }),
                }
            );

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                login(data.user, data.token);
                setSuccess(true);

                setTimeout(() => {
                    navigate("/");
                }, 1200);
            } else {
                setMessageType("error");
                setServerMessage(data.message);
            }

        } catch {
            setLoading(false);
            setMessageType("error");
            setServerMessage("Server error. Please try again.");
        }
    };

    return (
        <>
            <Header />

            <section className="signup-section">
                <motion.div
                    className="signup-container"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                >

                    {!success ? (
                        <>
                            <h2>Create Your Account</h2>
                            <p className="signup-subtitle">
                                Join Outpro.India and start transforming your business.
                            </p>

                            <form className="signup-form" onSubmit={handleSubmit}>

                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Full Name</label>
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </div>

                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Email Address</label>
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </div>

                                <div className="input-group password-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Password</label>

                                    <span
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "👁"}
                                    </span>

                                    <div className="strength-meter">
                                        <div className={`strength-bar strength-${strength}`}></div>
                                    </div>

                                    {errors.password && (
                                        <span className="error">{errors.password}</span>
                                    )}
                                </div>

                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Confirm Password</label>
                                    {errors.confirmPassword && (
                                        <span className="error">{errors.confirmPassword}</span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="signup-btn"
                                    disabled={loading}
                                >
                                    {loading ? "Creating..." : "Create Account"}
                                </button>

                                {serverMessage && (
                                    <div className={`server-message ${messageType}`}>
                                        {serverMessage}
                                    </div>
                                )}

                                {/* ✅ NEW LOGIN LINK */}
                                <p className="auth-switch">
                                    Already have an account?
                                    <Link to="/login"> Login</Link>
                                </p>

                            </form>
                        </>
                    ) : (
                        <motion.div
                            className="success-box"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <h3>🎉 Account Created Successfully!</h3>
                            <p>Redirecting to Home...</p>
                        </motion.div>
                    )}

                </motion.div>
            </section>

            <Footer />
        </>
    );
}