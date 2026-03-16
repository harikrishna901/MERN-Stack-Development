import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const navRef = useRef();
    const profileRef = useRef();

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    /* SCROLL EFFECT */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setScrollProgress((window.scrollY / totalHeight) * 100);
        };

        const handleOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            {/* Scroll Progress */}
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
            />

            <header className={`header ${scrolled ? "scrolled" : ""}`}>

                <div className="logo">
                    Outpro<span>.India</span>
                </div>

                {/* HAMBURGER */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* NAVIGATION */}
                <nav
                    ref={navRef}
                    className={`nav ${menuOpen ? "open" : ""}`}
                >
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
                    <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
                    <NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink>

                    {/* ===== AUTH AREA ===== */}
                    {!user ? (
                        <NavLink
                            to="/signup"
                            className="btn-primary"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Started
                        </NavLink>
                    ) : (
                        <div className="profile-wrapper" ref={profileRef}>

                            {/* PROFILE AVATAR */}
                            <div
                                className="profile-avatar"
                                onClick={() => setProfileOpen(!profileOpen)}
                            >
                                {user.name.charAt(0).toUpperCase()}
                            </div>

                            {/* DROPDOWN */}
                            {profileOpen && (
                                <div className="profile-dropdown">

                                    <div className="profile-header">
                                        <div className="avatar-large">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>

                                        <div className="profile-info">
                                            <p className="profile-name">{user.name}</p>
                                            <p className="profile-email">{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="profile-divider"></div>

                                    <button
                                        className="logout-btn"
                                        onClick={handleLogout}
                                    >
                                        🚪 Logout
                                    </button>

                                </div>
                            )}
                        </div>
                    )}

                    {/* THEME BUTTON */}
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>
                </nav>
            </header>
        </>
    );
}