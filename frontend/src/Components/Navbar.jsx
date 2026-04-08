import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: "Skills", id: "skills", type: "scroll" },
        { name: "Projects", id: "projects", type: "scroll" },
        { name: "Portfolio", id: "portfolio", type: "route", path: "/portfolio" },
        { name: "Experience", id: "experience", type: "scroll" },
        { name: "Contact", id: "contact", type: "scroll" },
    ];

    const isPortfolioPage = location.pathname === "/portfolio";

    const handleNavClick = (link) => {
        setMenuOpen(false);
        if (link.type === "route") {
            navigate(link.path);
        } else {
            if (isPortfolioPage) {
                navigate(`/#${link.id}`);
            } else {
                const element = document.getElementById(link.id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/5" />
            
            <div className="max-w-[75rem] mx-auto px-6 py-4 relative z-10 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/images/logo-vector.svg" alt="AAR Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-300" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => handleNavClick(link)}
                                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }} className="w-6 h-0.5 bg-white rounded-full" />
                    <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white rounded-full" />
                    <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }} className="w-6 h-0.5 bg-white rounded-full" />
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[90] md:hidden bg-[#0a0a0a] flex flex-col items-center justify-center gap-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
                        
                        <ul className="relative z-10 flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <button
                                        onClick={() => handleNavClick(link)}
                                        className="text-3xl font-extrabold text-white hover:text-blue-500 transition-colors tracking-tighter"
                                    >
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Social/Bottom info could go here */}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}