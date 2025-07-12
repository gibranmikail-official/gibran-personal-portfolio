"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Portfolio {
    id: string;
    title: string;
    type: string;
    description: string;
    thumbnail: string;
    images: string[];
    features: string[];
    technologies: string[];
    integrations: string[];
    previewLink: string;
}

export default function PortfolioSection() {
    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const portfolios: Portfolio[] = [
        {
            id: "portfolio1",
            title: "Gibran Mikail Website Portfolio",
            type: "UI/UX Design & Frontend Dev",
            description:
                "Website ini merupakan portofolio digital milik saya pribadi. Dirancang sebagai media untuk menampilkan profil profesional, keahlian, serta hasil karya desain dan pengembangan front-end yang telah dikerjakan. Tujuan project ini adalah untuk Membangun personal branding sebagai desainer UI/UX dan pengembang front-end dan Mempermudah komunikasi dengan calon klien atau rekan kerja melalui fitur kontak langsung.",
            thumbnail: "/04-section-portfolio/gibran-mikail-porto/pp-1.png",
            images: [
                "/04-section-portfolio/gibran-mikail-porto/pp-2.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-3.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-4.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-5.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-6.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-7.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-8.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-9.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-10.png",
                "/04-section-portfolio/gibran-mikail-porto/pp-11.png",
            ],
            features: [
                "Home",
                "About Education & Work Experience",
                "Service",
                "Portfolio",
                "Gallery",
                "Testimonial",
                "Conact",
            ],
            technologies: ["Figma", "Visual Studio Code", "React", "Next.js", "Tailwind CSS", "TypeScript"],
            integrations: ["Visual Studio Code", "GitHub", "Netlify"],
            previewLink: "https://gibranmikail.netlify.app",
        },
        {
            id: "portfolio2",
            title: "Beyond 9 To 5 Community",
            type: "Discord Server Development",
            description:
                "Proyek pengembangan server Discord yang komprehensif untuk komunitas freelancer dengan sistem manajemen yang canggih. Server ini dilengkapi dengan bot custom, sistem role otomatis, dan berbagai fitur engagement untuk member.",
            thumbnail: "/04-section-portfolio/beyond-925/b925-1.png",
            images: [
                "/04-section-portfolio/beyond-925/b925-1.png",
                "/04-section-portfolio/beyond-925/b925-2.png",
                "/04-section-portfolio/beyond-925/b925-3.png",
                "/04-section-portfolio/beyond-925/b925-4.png",
                "/04-section-portfolio/beyond-925/b925-5.png",
                "/04-section-portfolio/beyond-925/b925-6.png",
                "/04-section-portfolio/beyond-925/b925-7.png",
            ],
            features: [
                "Bot management system dengan 50+ commands",
                "Automated role assignment berdasarkan Community preference",
                "Event scheduling dan reminder system",
                "Customer Management",
                "Voice channel management dengan auto-create rooms",
                "Moderation tools dengan warning system",
            ],
            technologies: ["Discord", "Discord BOT", "Canva"],
            integrations: ["Webhook", "Discohook", "Videolabs.ID", "Websitemaker.ID"],
            previewLink: "https://discord.gg/YKF8ye34Yp",
        },
        {
            id: "portfolio3",
            title: "GGENK Official Website",
            type: "UI/UX Design & Frontend Dev",
            description:
                "Proyek produksi multimedia yang berfokus pada pembuatan konten video berkualitas tinggi dan pengelolaan sesi live streaming untuk penayangan di YouTube. Menangani seluruh alur kerja produksi video, mulai dari pra-produksi hingga pasca-produksi, guna memastikan penyampaian cerita visual yang menarik dan eksekusi siaran langsung yang lancar.",
            thumbnail: "/04-section-portfolio/ggenk/gg.png",
            images: [
                "/04-section-portfolio/ggenk/gg-1.png",
                "/04-section-portfolio/ggenk/gg-2.png",
                "/04-section-portfolio/ggenk/gg-3.png",
                "/04-section-portfolio/ggenk/gg-4.png",
                "/04-section-portfolio/ggenk/gg-5.png",
                "/04-section-portfolio/ggenk/gg-6.png",
                "/04-section-portfolio/ggenk/gg-7.png",
                "/04-section-portfolio/ggenk/gg-8.png",
                "/04-section-portfolio/ggenk/gg-9.png",
            ],
            features: [
                "Editing video (Adobe Premiere Pro, After Effects, Capcut)",
                "Pengaturan & pengelolaan live streaming (kamera, OBS, audio interface)",
                "Desain thumbnail, overlay, dan elemen visual",
                "Pengelolaan media dan arsip file",
                "Penanganan masalah teknis saat siaran langsung",
                "Time Management",
            ],
            technologies: ["Figma", "Visual Studio Code", "React", "Next.js", "Tailwind CSS", "TypeScript"],
            integrations: ["Visual Studio Code", "GitHub", "Netlify"],
            previewLink: "https://ggenkofficial.com",
        },
        {
            id: "portfolio4",
            title: "Dashbord 360 GIS",
            type: "UI/UX Design",
            description:
                "Dashboard 360 adalah platform visualisasi data interaktif berbasis web yang saya kembangkan untuk memantau dan menganalisis data Food Estate, bencana alam, perumahan rakyat, dan hasil survei masyarakat di seluruh wilayah Indonesia. Dashboard ini menyajikan informasi berbasis peta, grafik, dan tabel yang responsif dan user-friendly. Peran Saya dalam Proyek Ini adalah Mendesain dan mengembangkan seluruh tampilan antarmuka pengguna (UI)",
            thumbnail: "/04-section-portfolio/dashboard-360/d360.png",
            images: [
                "/04-section-portfolio/dashboard-360/d360-1.png",
                "/04-section-portfolio/dashboard-360/d360-2.png",
                "/04-section-portfolio/dashboard-360/d360-3.png",
                "/04-section-portfolio/dashboard-360/d360-4.png",
                "/04-section-portfolio/dashboard-360/d360-5.png",
                "/04-section-portfolio/dashboard-360/d360-6.png",
                "/04-section-portfolio/dashboard-360/d360-7.png",
                "/04-section-portfolio/dashboard-360/d360-8.png",
                "/04-section-portfolio/dashboard-360/d360-9.png",
                "/04-section-portfolio/dashboard-360/d360-10.png",
                "/04-section-portfolio/dashboard-360/d360-11.png",
                "/04-section-portfolio/dashboard-360/d360-12.png",
                "/04-section-portfolio/dashboard-360/d360-13.png",
                "/04-section-portfolio/dashboard-360/d360-14.png",
                "/04-section-portfolio/dashboard-360/d360-15.png",
            ],
            features: [
                "Access: Admin, enumerator",
                "Data data Food estate & Bencana Realtime",
                "Data BPS",
                "Data BMKG",
                "Data BNPB",
                "earthquake notifications",
                "Berita Terkait Bencana",
                "Create QRcode for survey",
                "Survei Masyarakat",
                "Statistik & Analisis Pangan Spesifik Wilayah",
            ],
            technologies: ["Figma, NodeJs, React Js, PostgreSql"],
            integrations: ["BMKG, BNPB, BPS"],
            previewLink: "#",
        },
        {
            id: "portfolio5",
            title: "Horas Inang - Irma Hutabarat",
            type: "Video Editing & Live Stream Operator",
            description:
                "Proyek produksi multimedia yang berfokus pada pembuatan konten video berkualitas tinggi dan pengelolaan sesi live streaming untuk penayangan di YouTube. Menangani seluruh alur kerja produksi video, mulai dari pra-produksi hingga pasca-produksi, guna memastikan penyampaian cerita visual yang menarik dan eksekusi siaran langsung yang lancar.",
            thumbnail: "/04-section-portfolio/youtube-horas-inang/YTHS-1.png",
            images: [
                "/04-section-portfolio/youtube-horas-inang/YTHS-1.png",
                "/04-section-portfolio/youtube-horas-inang/YTHS-2.png",
                "/04-section-portfolio/youtube-horas-inang/YTHS-3.png",
            ],
            features: [
                "Editing video (Adobe Premiere Pro, After Effects, Capcut)",
                "Pengaturan & pengelolaan live streaming (kamera, OBS, audio interface)",
                "Desain thumbnail, overlay, dan elemen visual",
                "Pengelolaan media dan arsip file",
                "Penanganan masalah teknis saat siaran langsung",
                "Time Management",
            ],
            technologies: ["Adobe Premiere Pro", "Capcut", "OBS Studio", "Camera", "Audio Interface"],
            integrations: ["YouTube Live", "Google Drive", "Kamera & Audio Eksternal"],
            previewLink: "https://www.youtube.com/@irmahutabaratofficial",
        },
        {
            id: "portfolio6",
            title: "Document Management System",
            type: "UI/UX Design",
            description:
                "Landing page ini didesain untuk menampilkan informasi tentang sistem pengelolaan dokumen digital (Document Management System) yang dikembangkan oleh PT. Asia Sistem Indonesia. Dengan gaya visual modern dan warna dominan ungu-putih, halaman ini fokus pada penyampaian fungsi, manfaat, dan komponen utama sistem untuk membantu perusahaan dalam pengelolaan arsip secara efisien dan aman.",
            thumbnail: "/04-section-portfolio/dcument-management-system/dms.png",
            images: [
                "/04-section-portfolio/dcument-management-system/dms-1.png",
                "/04-section-portfolio/dcument-management-system/dms-2.png",
                "/04-section-portfolio/dcument-management-system/dms-3.png",
            ],
            features: [
                "Desain Modern",
                "Informasi Terstruktur",
                "Fokus Keamanan Data",
                "Fitur Analisis Data",
                "Multi Format Support",
                "Sistem Kearsipan Dinamis (SIKD)",
                "Dukungan Langsung",
                "Integrasi dengan Knowledge Management",
            ],
            technologies: ["Figma"],
            integrations: ["-"],
            previewLink: "#",
        },
        {
            id: "portfolio7",
            title: "PT. Multi Lumbung Artha",
            type: "UI/UX Design",
            description:
                "Landing page ini dirancang untuk menampilkan profil profesional PT. Multi Lumbung Artha (MLA), sebuah perusahaan yang menyediakan solusi digital dan teknologi jaringan. Halaman ini menyampaikan citra modern, profesional, dan bersih, dengan penekanan pada keandalan dan inovasi layanan yang ditawarkan perusahaan.",
            thumbnail: "/04-section-portfolio/multi-lumbung-artha/mla.png",
            images: [
                "/04-section-portfolio/multi-lumbung-artha/mla-1.png",
                "/04-section-portfolio/multi-lumbung-artha/mla-2.png",
                "/04-section-portfolio/multi-lumbung-artha/mla-3.png",
                "/04-section-portfolio/multi-lumbung-artha/mla-4.png",
                "/04-section-portfolio/multi-lumbung-artha/mla-5.png",
                "/04-section-portfolio/multi-lumbung-artha/mla-6.png",
            ],
            features: [
                "Desain Responsif",
                "Navigasi Simpel",
                "Company Profile Ringkas",
                "Layanan dan Solusi",
                "Galeri Proyek Terbaru",
                "Integrasi Google Maps",
                "Kontak Langsung",
                "Fokus pada Keamanan",
            ],
            technologies: ["Adobe Premiere Pro", "Capcut", "OBS Studio", "Camera", "Audio Interface"],
            integrations: ["YouTube Live", "Google Drive", "Kamera & Audio Eksternal"],
            previewLink: "#",
        },
    ];

    const openPortfolioModal = (portfolio: Portfolio) => {
        setSelectedPortfolio(portfolio);
        setCurrentImageIndex(0);
    };

    const closePortfolioModal = () => {
        setSelectedPortfolio(null);
    };

    const nextImage = () => {
        if (selectedPortfolio) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedPortfolio.images.length);
        }
    };

    const prevImage = () => {
        if (selectedPortfolio) {
            setCurrentImageIndex((prev) => (prev === 0 ? selectedPortfolio.images.length - 1 : prev - 1));
        }
    };

    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        FEATURED <span className="text-orange-400">PORTFOLIO</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((portfolio, index) => (
                        <motion.div
                            key={portfolio.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => openPortfolioModal(portfolio)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 h-96 flex flex-col">
                                {/* Thumbnail Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={portfolio.thumbnail || "/placeholder.svg"}
                                        alt={portfolio.title}
                                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-2 flex-shrink-0">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-400 bg-orange-400/20 rounded-full">
                                            {portfolio.type}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors duration-300 flex-shrink-0">
                                        {portfolio.title}
                                    </h3>

                                    <p className="text-gray-300 mb-4 group-hover:text-orange-50 transition-colors duration-300 flex-grow text-sm leading-relaxed line-clamp-3">
                                        {portfolio.description}
                                    </p>

                                    <p className="text-orange-400 font-semibold group-hover:text-orange-300 transition-colors duration-300 flex-shrink-0 mt-auto">
                                        Click to view details
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Modal */}
                {selectedPortfolio && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closePortfolioModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closePortfolioModal}
                                className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-orange-400 transition-colors"
                            >
                                ×
                            </button>

                            <div className="p-8">
                                {/* Main Image */}
                                <div className="relative mb-6">
                                    <img
                                        src={
                                            selectedPortfolio.images[currentImageIndex] || "/placeholder.svg"
                                        }
                                        alt={selectedPortfolio.title}
                                        className="w-full aspect-video object-cover rounded-lg"
                                    />

                                    {selectedPortfolio.images.length > 1 && (
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
                                <div className="flex space-x-4 mb-8 overflow-x-auto">
                                    {selectedPortfolio.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image || "/placeholder.svg"}
                                            alt={`${selectedPortfolio.title} ${index + 1}`}
                                            className={`w-32 aspect-video object-cover rounded cursor-pointer transition-all flex-shrink-0 ${
                                                index === currentImageIndex
                                                    ? "border-2 border-orange-400"
                                                    : "border border-white/20 hover:border-orange-400/50"
                                            }`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>

                                {/* Project Details */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4">
                                            {selectedPortfolio.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {selectedPortfolio.description}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-white mb-3">
                                                Features:
                                            </h4>
                                            <ul className="space-y-2">
                                                {selectedPortfolio.features.map((feature, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-gray-300 flex items-center"
                                                    >
                                                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <a
                                            href={selectedPortfolio.previewLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                                        >
                                            View Live Project
                                        </a>
                                    </div>

                                    <div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-white mb-3">
                                                Technologies:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPortfolio.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-sm bg-orange-400/20 text-orange-400 rounded-full border border-orange-400/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">
                                                Integrations:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPortfolio.integrations.map((integration, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-sm bg-purple-400/20 text-purple-400 rounded-full border border-purple-400/30"
                                                    >
                                                        {integration}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
