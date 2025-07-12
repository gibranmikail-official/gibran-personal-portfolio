"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function HeroSection() {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = ["UI/UX Designer", "Front-end Developer", "Discord Server Developer", "Gamer"];

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const current = texts[currentIndex];

                if (isDeleting) {
                    setCurrentText(current.substring(0, currentText.length - 1));
                } else {
                    setCurrentText(current.substring(0, currentText.length + 1));
                }

                if (!isDeleting && currentText === current) {
                    setTimeout(() => setIsDeleting(true), 1000);
                } else if (isDeleting && currentText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, texts]);

    const socialLinks = [
        { icon: FaInstagram, url: "https://www.instagram.com/gibranmikail_", color: "hover:text-pink-400" },
        { icon: FaTiktok, url: "https://www.tiktok.com/@gibranmikail_", color: "hover:text-black" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/gibranmikail/", color: "hover:text-blue-400" },
        { icon: FaDiscord, url: "https://discord.gg/Ash5eZMVxM", color: "hover:text-indigo-400" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hi, It's{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Gibran
                            </span>
                        </motion.h1>

                        <div className="text-2xl md:text-3xl text-white">
                            <span>I'm a </span>
                            <span className="text-orange-400 font-semibold">
                                {currentText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                    }}
                                    className="inline-block w-1 h-8 bg-orange-400 ml-1"
                                />
                            </span>
                        </div>

                        <motion.p
                            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Hi, I'm Gibran Mikail. I'm passionate about UI/UX design and front-end
                            development. I've honed my skills in Figma, HTML, CSS, JavaScript, Microsoft
                            Office Suite (Word, Excel, PowerPoint), and Adobe Creative Suite (Photoshop,
                            Premiere, InDesign). I'm a UI/UX, front-end and game enthusiast looking to build a
                            career in this exciting field. I am always eager to learn new things.
                        </motion.p>

                        {/* Social Media Buttons */}
                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                            onClick={() => scrollToSection("about")}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See More
                        </motion.button>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                                <Image
                                    src="/01-section-hero/gibran-ava.png"
                                    alt="Gibran Mikail"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
