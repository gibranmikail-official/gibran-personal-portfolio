"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    location: string;
    description: string;
    courses: string[];
}

interface WorkExperience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
    responsibilities: string[];
    images: string[];
}

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
    const [selectedEducation, setSelectedEducation] = useState<string>("edu1");
    const [selectedExperience, setSelectedExperience] = useState<string>("work1");
    const [imageModal, setImageModal] = useState<{ isOpen: boolean; images: string[]; currentIndex: number }>(
        {
            isOpen: false,
            images: [],
            currentIndex: 0,
        }
    );

    const educationData: Education[] = [
        {
            id: "edu1",
            institution: "STMIK Jakarta STI&K",
            degree: "Bachelor of Computer Science • Information System",
            period: "2021 - 2026",
            location: "Jakarta, Indonesia",
            description:
                "Learned on Software Development include Frontend and Relational Database fundamental, Information System Management & Business, Network Architecture, etc. Gained hands-on experience in software development focusing on C++ and JavaScript, with a solid understanding of frontend development, relational databases, and structured information systems.",
            courses: [
                "Information System Management",
                "Business and Technology Modelling",
                "Database Modelling and Query Languages",
                "Web Client Development",
                "UI/UX Design Principles",
                "Object Oriented Programming",
            ],
        },
        {
            id: "edu2",
            institution: "SMK Nusantara 01 Ciputat",
            degree: "Vocational High School • Software Engineering",
            period: "2017 - 2020",
            location: "Tangerang Selatan, Indonesia",
            description:
                "Focused on software development, algorithmic thinking, and programming fundamentals. Developed strong skills in designing, building, testing, and deploying software applications using various tools and technologies.",
            courses: [
                "Fundamentals of Programming",
                "Object-Oriented Programming (OOP)",
                "Web Development (Frontend & Backend)",
                "Database Design and SQL",
                "UI/UX Design Principles",
                "Mobile App Development",
            ],
        },
    ];

    const workData: WorkExperience[] = [
        {
            id: "work1",
            company: "PT. Asia Sistem Indonesia",
            position: "Freelance UI/UX Designer & Technical Writer - IT",
            period: "September 2024 - Present",
            description:
                "Responsible for designing user-centric interfaces, enhancing user experience, and creating clear, structured technical documentation.",
            responsibilities: [
                "Designed intuitive UI/UX prototypes and wireframes using tools such as Figma and Adobe XD",
                "Conducted user research and usability testing to improve interface efficiency",
                "Created and maintained technical documentation including SOPs, user guides, and system manuals",
                "Collaborated with development teams to align interface designs with backend functionality",
            ],
            images: [
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-1.png",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-2.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-3.jpg",
                "/02-section-about/work-experience/asia-sistem-indonesia/asi-4.jpg",
            ],
        },
        {
            id: "work2",
            company: "Youtube Horas Inang Irma Hutabarat",
            position: "Video Editor & Live Stream Operator",
            period: "September 2022 - January 2025",
            description:
                "Responsible for producing high-quality video content and managing live streaming sessions for YouTube broadcasts.",
            responsibilities: [
                "Edited video content using Adobe Premiere Pro, After Effects and Capcut",
                "Designed video thumbnails, overlays, and visual assets to enhance viewer engagement",
                "Set up and managed live streaming equipment (cameras, OBS, audio interfaces)",
                "Operated live stream sessions, ensuring smooth transitions and broadcast quality",
            ],
            images: [
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-3.png",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-1.png",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-2.png",
                "/02-section-about/work-experience/youtube-horas-inang/YTHS-7.jpg",
            ],
        },
        {
            id: "work3",
            company: "PT. Garuda Visi Nusantara",
            position: "Internship as Backend Developer - IT",
            period: "January 2019 - March 2019",
            description:
                "Contributed to backend development tasks in a collaborative environment. Assisted in building and maintaining server-side logic.",
            responsibilities: [
                "Assisted in developing RESTful APIs using Node.js and Express",
                "Contributed to backend logic for web applications and internal tools",
                "Worked with relational databases (MySQL, PostgreSQL) for data storage and queries",
                "Participated in designing database schema and optimizing SQL queries",
            ],
            images: ["/02-section-about/work-experience/garuda-visi-nusantara/gvn-1.png"],
        },
        {
            id: "work4",
            company: "Eat Sweet Space",
            position: "Baker - Pastry",
            period: "August 2017 - March 2025",
            description:
                "Responsible for preparing high-quality pastry products through precise dough preparation, baking, and packaging.",
            responsibilities: [
                "Prepared various types of dough for cookies with attention to recipe accuracy",
                "Operated baking equipment such as ovens, mixers, and proofing machines safely",
                "Monitored baking times and temperatures to ensure consistent product quality",
                "Maintained cleanliness and hygiene standards throughout the production area",
            ],
            images: [
                "/02-section-about/work-experience/sweet-space/SS-1.png",
                "/02-section-about/work-experience/sweet-space/SS-2.jpg",
                "/02-section-about/work-experience/sweet-space/SS-3.jpg",
                "/02-section-about/work-experience/sweet-space/SS-4.jpg",
                "/02-section-about/work-experience/sweet-space/SS-5.jpg",
            ],
        },
    ];

    const openImageModal = (images: string[], index = 0) => {
        setImageModal({ isOpen: true, images, currentIndex: index });
    };

    const closeImageModal = () => {
        setImageModal({ isOpen: false, images: [], currentIndex: 0 });
    };

    const nextImage = () => {
        setImageModal((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length,
        }));
    };

    const prevImage = () => {
        setImageModal((prev) => ({
            ...prev,
            currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
        }));
    };

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        ABOUT <span className="text-orange-400">ME</span>
                    </h2>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === "education"
                                    ? "bg-orange-400 text-white"
                                    : "text-white hover:bg-white/10"
                            }`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === "experience"
                                    ? "bg-orange-400 text-white"
                                    : "text-white hover:bg-white/10"
                            }`}
                        >
                            Work Experience
                        </button>
                    </div>
                </div>

                {/* Education Section */}
                {activeTab === "education" && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Education List */}
                        <div className="space-y-4">
                            {educationData.map((edu) => (
                                <motion.div
                                    key={edu.id}
                                    onClick={() => setSelectedEducation(edu.id)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                        selectedEducation === edu.id
                                            ? "bg-orange-400/20 border-2 border-orange-400"
                                            : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                                    <p className="text-orange-400 font-semibold">{edu.degree}</p>
                                    <p className="text-gray-300">{edu.period}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education Details */}
                        <motion.div
                            key={selectedEducation}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                        >
                            {educationData.find((edu) => edu.id === selectedEducation) && (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {
                                            educationData.find((edu) => edu.id === selectedEducation)
                                                ?.institution
                                        }
                                    </h3>
                                    <p className="text-orange-400 font-semibold mb-2">
                                        {educationData.find((edu) => edu.id === selectedEducation)?.degree}
                                    </p>
                                    <p className="text-gray-300 mb-2">
                                        {educationData.find((edu) => edu.id === selectedEducation)?.period}
                                    </p>
                                    <p className="text-gray-300 mb-6">
                                        {educationData.find((edu) => edu.id === selectedEducation)?.location}
                                    </p>
                                    <p className="text-gray-300 mb-6">
                                        {
                                            educationData.find((edu) => edu.id === selectedEducation)
                                                ?.description
                                        }
                                    </p>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">
                                            Key Courses:
                                        </h4>
                                        <ul className="space-y-2">
                                            {educationData
                                                .find((edu) => edu.id === selectedEducation)
                                                ?.courses.map((course, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-gray-300 flex items-center"
                                                    >
                                                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                                        {course}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}

                {/* Work Experience Section */}
                {activeTab === "experience" && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Experience List */}
                        <div className="space-y-4">
                            {workData.map((work) => (
                                <motion.div
                                    key={work.id}
                                    onClick={() => setSelectedExperience(work.id)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                        selectedExperience === work.id
                                            ? "bg-orange-400/20 border-2 border-orange-400"
                                            : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">{work.company}</h3>
                                    <p className="text-orange-400 font-semibold">{work.position}</p>
                                    <p className="text-gray-300">{work.period}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Experience Details */}
                        <motion.div
                            key={selectedExperience}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                        >
                            {workData.find((work) => work.id === selectedExperience) && (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {workData.find((work) => work.id === selectedExperience)?.company}
                                    </h3>
                                    <p className="text-orange-400 font-semibold mb-2">
                                        {workData.find((work) => work.id === selectedExperience)?.position}
                                    </p>
                                    <p className="text-gray-300 mb-6">
                                        {workData.find((work) => work.id === selectedExperience)?.period}
                                    </p>
                                    <p className="text-gray-300 mb-6">
                                        {workData.find((work) => work.id === selectedExperience)?.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-3">
                                            Responsibilities:
                                        </h4>
                                        <ul className="space-y-2">
                                            {workData
                                                .find((work) => work.id === selectedExperience)
                                                ?.responsibilities.map((resp, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-gray-300 flex items-start"
                                                    >
                                                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                        {resp}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>

                                    {/* Project Images */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">
                                            Project Screenshots:
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {workData
                                                .find((work) => work.id === selectedExperience)
                                                ?.images.map((image, index) => (
                                                    <motion.img
                                                        key={index}
                                                        src={image}
                                                        alt={`Project ${index + 1}`}
                                                        className="w-full aspect-video object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                                        onClick={() =>
                                                            openImageModal(
                                                                workData.find(
                                                                    (work) => work.id === selectedExperience
                                                                )?.images || [],
                                                                index
                                                            )
                                                        }
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}

                {/* Image Modal */}
                {imageModal.isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeImageModal}
                    >
                        <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closeImageModal}
                                className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-orange-400"
                            >
                                ×
                            </button>

                            <img
                                src={imageModal.images[imageModal.currentIndex] || "/placeholder.svg"}
                                alt="Project preview"
                                className="w-full aspect-video object-cover rounded-lg"
                            />

                            {imageModal.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-orange-400"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-orange-400"
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
