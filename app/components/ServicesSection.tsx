"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPalette, FaCode, FaVideo, FaGamepad, FaSmile, FaTrophy } from "react-icons/fa";

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    images: string[];
}

export default function ServicesSection() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const services: Service[] = [
        {
            id: "uiux",
            title: "UI/UX Design",
            description:
                "Creating beautiful and functional user interfaces with modern design principles. From wireframes to high-fidelity prototypes, I deliver designs that enhance user experience and drive engagement.",
            icon: FaPalette,
            images: [
                "/03-section-service/ui-ux-design/ui-ux-1.png",
                "/03-section-service/ui-ux-design/ui-ux-2.jpg",
                "/03-section-service/ui-ux-design/ui-ux-3.jpg",
                "/03-section-service/ui-ux-design/ui-ux-4.jpg",
                "/03-section-service/ui-ux-design/ui-ux-5.jpg",
                "/03-section-service/ui-ux-design/ui-ux-6.jpg",
                "/03-section-service/ui-ux-design/ui-ux-7.jpg",
            ],
        },
        {
            id: "frontend",
            title: "Front End Development",
            description:
                "Building responsive and interactive web applications using modern technologies like React, Next.js, and TypeScript. Clean code, optimized performance, and pixel-perfect implementations.",
            icon: FaCode,
            images: [
                "/04-section-portfolio/gibran-mikail-porto/pp-2.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-3.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-5.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-6.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-7.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-8.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-9.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-10.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-11.png",
            ],
        },
        {
            id: "video",
            title: "Video Editing",
            description:
                "Professional video editing for social media, YouTube, and marketing content. Creating engaging visual stories that captivate your audience.",
            icon: FaVideo,
            images: ["/03-section-service/video-edit/vemd-1.png"],
        },
        {
            id: "valorant",
            title: "Joki Valorant",
            description:
                "Professional Valorant boosting service to help you reach your desired rank. Safe, fast, and reliable service with experienced players.",
            icon: FaGamepad,
            images: [
                "/03-section-service/joki-valorant/jv-1.png",
                "/03-section-service/joki-valorant/jv-2.png",
                "/03-section-service/joki-valorant/jv-3.png",
                "/03-section-service/joki-valorant/jv-4.png",
                "/03-section-service/joki-valorant/jv-5.png",
            ],
        },
        {
            id: "Discord",
            title: "Discord Server Develpoment",
            description:
                "I offer professional and engaging Discord server creation and development services — from channel setup and role management to bot integration and custom design tailored to your community’s needs.",
            icon: FaCode,
            images: [
                "/03-section-service/server-dev/sd.png",
                "/03-section-service/server-dev/sd-15.png",
                "/03-section-service/server-dev/sd-16.png",
                "/03-section-service/server-dev/sd-1.png",
                "/03-section-service/server-dev/sd-2.png",
                "/03-section-service/server-dev/sd-3.png",
                "/03-section-service/server-dev/sd-4.png",
                "/03-section-service/server-dev/sd-5.png",
                "/03-section-service/server-dev/sd-6.png",
                "/03-section-service/server-dev/sd-7.png",
                "/03-section-service/server-dev/sd-8.png",
                "/03-section-service/server-dev/sd-9.png",
                "/03-section-service/server-dev/sd-10.png",
                "/03-section-service/server-dev/sd-11.png",
                "/03-section-service/server-dev/sd-12.png",
                "/03-section-service/server-dev/sd-13.png",
                "/03-section-service/server-dev/sd-14.png",
            ],
        },
        {
            id: "genshin",
            title: "Joki Genshin Impact",
            description:
                "Genshin Impact account boosting and farming service. Level up your characters, complete quests, and farm materials efficiently.",
            icon: FaGamepad,
            images: ["/03-section-service/joki-genshin/jgi-1.png"],
        },
    ];

    const openServiceModal = (service: Service) => {
        setSelectedService(service);
        setCurrentImageIndex(0);
    };

    const closeServiceModal = () => {
        setSelectedService(null);
    };

    const nextImage = () => {
        if (selectedService) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
        }
    };

    const prevImage = () => {
        if (selectedService) {
            setCurrentImageIndex((prev) => (prev === 0 ? selectedService.images.length - 1 : prev - 1));
        }
    };

    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        <span className="text-orange-400">SERVICES</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => openServiceModal(service)}
                            className="group cursor-pointer"
                        >
                            <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-orange-400/20 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 h-80 flex flex-col">
                                {/* Liquid Glass Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full bg-orange-400/20 group-hover:bg-orange-400 transition-colors duration-300 flex-shrink-0">
                                        <service.icon className="w-full h-full text-orange-400 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-orange-100 transition-colors duration-300 flex-shrink-0">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 text-center group-hover:text-orange-50 transition-colors duration-300 flex-grow text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Service Modal */}
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeServiceModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeServiceModal}
                                className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-orange-400 transition-colors"
                            >
                                ×
                            </button>

                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 p-3 rounded-full bg-orange-400 mr-4">
                                        <selectedService.icon className="w-full h-full text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                                </div>

                                {/* Main Image */}
                                <div className="relative mb-6">
                                    <img
                                        src={selectedService.images[currentImageIndex] || "/placeholder.svg"}
                                        alt={selectedService.title}
                                        className="w-full aspect-video object-cover rounded-lg"
                                    />

                                    {selectedService.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-orange-400 transition-colors"
                                            >
                                                ‹
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-orange-400 transition-colors"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnail Images */}
                                <div className="flex space-x-4 mb-6 overflow-x-auto">
                                    {selectedService.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image || "/placeholder.svg"}
                                            alt={`${selectedService.title} ${index + 1}`}
                                            className={`w-32 aspect-video object-cover rounded cursor-pointer transition-all flex-shrink-0 ${
                                                index === currentImageIndex
                                                    ? "border-2 border-orange-400"
                                                    : "border border-white/20 hover:border-orange-400/50"
                                            }`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-relaxed">{selectedService.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
