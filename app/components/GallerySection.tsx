"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Gallery {
    id: string;
    company: string;
    period: string;
    thumbnail: string;
    images: string[];
}

export default function GallerySection() {
    const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleries: Gallery[] = [
        {
            id: "gallery1",
            company: "PT. Asia Sistem Indonesia",
            period: "September 2024 - Present",
            thumbnail: "/02-section-about/work-experience/asia-sistem-indonesia/asi-1.png",
            images: [
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-1.png",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-2.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-3.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-4.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-5.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-6.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-7.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-8.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-9.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-10.jpg",
            ],
        },
        {
            id: "gallery2",
            company: "Youtube Horas Inang Irma Hutabarat",
            period: "September 2022 - January 2025",
            thumbnail: "/02-section-about/work-experience/youtube-horas-inang/YTHS-3.png",
            images: [
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-3.png",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-1.png",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-2.png",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-4.jpg",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-5.jpg",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-6.jpg",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-7.jpg",
            ],
        },
        {
            id: "gallery3",
            company: "PT. Garuda Visi Nusantara",
            period: "January 2019 - March 2019",
            thumbnail: "/02-section-about/work-experience/garuda-visi-nusantara/gvn-1.png",
            images: ["/02-section-about/work-experience/garuda-visi-nusantara/gvn-1.png"],
        },
    ];

    const openGalleryModal = (gallery: Gallery) => {
        setSelectedGallery(gallery);
        setCurrentImageIndex(0);
    };

    const closeGalleryModal = () => {
        setSelectedGallery(null);
    };

    const nextImage = () => {
        if (selectedGallery) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.images.length);
        }
    };

    const prevImage = () => {
        if (selectedGallery) {
            setCurrentImageIndex((prev) => (prev === 0 ? selectedGallery.images.length - 1 : prev - 1));
        }
    };

    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        WORK <span className="text-orange-400">GALLERY</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleries.map((gallery, index) => (
                        <motion.div
                            key={gallery.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => openGalleryModal(gallery)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 h-80 flex flex-col">
                                {/* Thumbnail Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={gallery.thumbnail || "/placeholder.svg"}
                                        alt={gallery.company}
                                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-100 transition-colors duration-300 flex-shrink-0">
                                        {gallery.company}
                                    </h3>

                                    <p className="text-gray-300 group-hover:text-orange-50 transition-colors duration-300 flex-grow">
                                        {gallery.period}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Modal */}
                {selectedGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeGalleryModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeGalleryModal}
                                className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-orange-400 transition-colors"
                            >
                                ×
                            </button>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                    {selectedGallery.company}
                                </h3>

                                {/* Main Image */}
                                <div className="relative mb-6">
                                    <img
                                        src={selectedGallery.images[currentImageIndex] || "/placeholder.svg"}
                                        alt={`${selectedGallery.company} ${currentImageIndex + 1}`}
                                        className="w-full aspect-video object-cover rounded-lg"
                                    />

                                    {selectedGallery.images.length > 1 && (
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
                                <div className="flex space-x-2 overflow-x-auto pb-4">
                                    {selectedGallery.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image || "/placeholder.svg"}
                                            alt={`${selectedGallery.company} ${index + 1}`}
                                            className={`w-24 aspect-video object-cover rounded cursor-pointer transition-all flex-shrink-0 ${
                                                index === currentImageIndex
                                                    ? "border-2 border-orange-400"
                                                    : "border border-white/20 hover:border-orange-400/50"
                                            }`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
