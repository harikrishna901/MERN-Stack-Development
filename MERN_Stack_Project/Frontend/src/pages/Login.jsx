import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    /* ================= AUTO REDIRECT IF ALREADY LOGGED IN ================= */
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            navigate("/");
        }
    }, [navigate]);

    /* ================= HANDLE INPUT CHANGE ================= */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* ================= HANDLE SUBMIT ================= */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.message || "Invalid credentials");
                setLoading(false);
                return;
            }

            /* ✅ STORE USER */
            localStorage.setItem("user", JSON.stringify(data.user));

            /* ✅ SHOW SUCCESS ANIMATION */
            setSuccess(true);

            /* ✅ REDIRECT AFTER SUCCESS */
            setTimeout(() => {
                navigate("/");
            }, 1400);

        } catch (err) {
            setMessage("Server error. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className={`auth-page fade-in ${success ? "page-blur" : ""}`}>
            <div className="auth-container">
                <form className="auth-card" onSubmit={handleSubmit}>

                    {!success ? (
                        <>
                            <h2>Welcome Back</h2>

                            {message && (
                                <p className="auth-error">{message}</p>
                            )}

                            {/* EMAIL */}
                            <div className="floating-group">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label>Email</label>
                            </div>

                            {/* PASSWORD */}
                            <div className="floating-group">
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <label>Password</label>
                            </div>

                            <button type="submit" disabled={loading}>
                                {loading ? (
                                    <span className="spinner"></span>
                                ) : (
                                    "Login"
                                )}
                            </button>

                            <p className="auth-switch">
                                Don't have an account?
                                <Link to="/signup"> Sign Up</Link>
                            </p>
                        </>
                    ) : (
                        /* ✅ SUCCESS CHECK UI */
                        <div className="success-box">
                            <div className="checkmark"></div>
                            <p>Login Successful</p>
                        </div>
                    )}

                </form>
            </div>
        </div>
    );
}