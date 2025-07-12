"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        SEND ME AN <span className="text-orange-400">EMAIL</span>
                    </h2>
                    <p className="text-xl text-gray-300">I'M VERY RESPONSIVE TO MESSAGES</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-4">
                                        <FaEnvelope className="text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Email</p>
                                        <p className="text-white font-semibold">
                                            gibranmikail.work@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-4">
                                        <FaWhatsapp className="text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">WhatsApp</p>
                                        <p className="text-white font-semibold">-</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-4">
                                        <FaMapMarkerAlt className="text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Address</p>
                                        <p className="text-white font-semibold">
                                            Jl. Kemang Barat, Bangka, Mampang, South Jakarta, Indonesia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white/20 transition-all duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white/20 transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white/20 transition-all duration-300"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white/20 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-2xl hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
