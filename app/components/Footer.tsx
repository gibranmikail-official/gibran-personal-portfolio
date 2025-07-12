"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaLinkedin, FaDiscord, FaHeart } from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        { icon: FaInstagram, url: "https://www.instagram.com/gibranmikail_", color: "hover:text-pink-400" },
        { icon: FaTiktok, url: "https://www.tiktok.com/@gibranmikail_", color: "hover:text-black" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/gibranmikail/", color: "hover:text-blue-400" },
        { icon: FaDiscord, url: "https://discord.gg/Ash5eZMVxM", color: "hover:text-indigo-400" },
    ];

    const sections = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "portfolio", label: "Portfolio" },
        { id: "gallery", label: "Gallery" },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="py-16 border-t bg-black/20 border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold text-white mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            GIBRAN MIKAIL
                        </motion.h3>
                        <p className="text-gray-300 leading-relaxed">
                            Passionate UI/UX designer and front-end developer creating digital experiences
                            that make a difference. Let's build something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {sections.map((section) => (
                                <motion.button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                                    whileHover={{ x: 5 }}
                                >
                                    {section.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white ${social.color} transition-all duration-300 hover:bg-white/20`}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-300 mb-2">© 2025 Gibran Mikail. All rights reserved.</p>
                    <p className="text-gray-400 flex items-center justify-center">
                        Built with <FaHeart className="text-red-400 mx-2" /> for my personal portfolio
                    </p>
                </div>
            </div>
        </footer>
    );
}
