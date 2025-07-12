"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface Testimonial {
    id: string;
    name: string;
    service: string;
    rating: number;
    photo: string;
    testimonial: string;
}

export default function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        {
            id: "testimonial1",
            name: "Adzra Fatikha W.",
            service: "UI/UX Design",
            rating: 5,
            photo: "/06-section-testimony/Adzra.png",
            testimonial:
                "Fast learner, tipikal orang yang mau belajar dan cepat nangkep ilmunya. kreatif dan satset juga kalo tiba-tiba di mintain tolong soal kerjaan dari bos atau gue hehe. hobinya becanda, jadi kalau dikantor gaada ini orang jadi sepi abisss.",
        },
        {
            id: "testimonial2",
            name: "Brigita Lucrecia T. V. Sihombing",
            service: "Technical Writer",
            rating: 5,
            photo: "/06-section-testimony/brigita.png",
            testimonial:
                "helpfull abies, sangat talkactive mau itu penting atau ngga penting. ps. kalau ngga ada gua humor lu mau nyambung ama siapa coba, anjay",
        },
        {
            id: "testimonial3",
            name: "Marsha Nadia A.",
            service: "Human Resources",
            rating: 5,
            photo: "/06-section-testimony/Masrha.png",
            testimonial: "Have a nice personality, kerjanya cepet & cekatan, dan bisa diandalkan.",
        },
        {
            id: "testimonial4",
            name: "Azka Abdillah",
            service: "IT Support",
            rating: 5,
            photo: "/06-section-testimony/Azka.png",
            testimonial: "Fast learner dan tidak sombong, meski terkadang seperti 💩!!!",
        },
        {
            id: "testimonial5",
            name: "Margaretha G. A. Naibaho",
            service: "IT - Programmer",
            rating: 5,
            photo: "/06-section-testimony/Martha.png",
            testimonial: "Rajin pol brow, suka tinju. Awas ditumbbuk kalo kau macam-macam.",
        },
        {
            id: "testimonial6",
            name: "Andrew Nehemia Hutapea",
            service: "IT - Programmer",
            rating: 5,
            photo: "/06-section-testimony/Andrew.png",
            testimonial: "Fast learner and steadfast. Tanggung jawab banget sama kerjaan 👌",
        },
        {
            id: "testimonial7",
            name: "Syafa Alifiya Adzani",
            service: "Accounting",
            rating: 5,
            photo: "/06-section-testimony/Syafa.png",
            testimonial:
                "Teliti dan super sabar ngajarin orang yang gaptek. Gaya kerjanya kalem tapi hasilnya rapi dan cepet. Kalau ada masalah, dia tuh tipe yang nyari solusi dulu sebelum panik. Seru juga buat diajak ngobrol pas istirahat 😄.",
        },
        {
            id: "testimonial8",
            name: "Deija Shakina Ayu",
            service: "Business Analyst",
            rating: 5,
            photo: "/06-section-testimony/Deija.png",
            testimonial:
                "Cepat tanggap, gak banyak bacot langsung eksekusi. Kadang suka ngilang tapi pas muncul bawa solusi. gaul banget sih 😎.",
        },
        {
            id: "testimonial9",
            name: "Aranda Christine",
            service: "Finance & Tax",
            rating: 5,
            photo: "/06-section-testimony/Aranda.png",
            testimonial:
                "Multitalenta banget, dari desain, nulis, sampe coding bisa semua. Udah kayak AI versi manusia. Tapi kalau udah ngemil, susah diajak fokus 🍟😂.",
        },
        {
            id: "testimonial10",
            name: "Moh. Andika Karsa",
            service: "IT - Support",
            rating: 5,
            photo: "/06-section-testimony/Karsa.png",
            testimonial: "Sigap, bisa di andalkan, bertanggung jawab, dan asik dalam bergaul.",
        },
        {
            id: "testimonial11",
            name: "David Daffa Aditya",
            service: "Business Sales Executive",
            rating: 5,
            photo: "/06-section-testimony/David.png",
            testimonial:
                "Dokumentasi dia rapi parah, kayak skripsi dosen. Kerjaannya selalu ahead of deadline. Kalo dia yang pegang, auto tenang sih timnya.",
        },
        {
            id: "testimonial12",
            name: "Fahmi Ichwanurrohman",
            service: "IT - Programmer",
            rating: 5,
            photo: "/06-section-testimony/Fahmi.png",
            testimonial:
                "Jarang ngomong tapi sekali ngomong bikin semua langsung mikir. Kerjanya tenang, tapi hasilnya selalu wow. Ini orang cocok jadi CTO sih.",
        },
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`${
                    index < rating ? "text-orange-400" : "text-gray-400"
                } transition-colors duration-200`}
            />
        ));
    };

    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        TEAM'S <span className="text-orange-400">TESTIMONIALS</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 h-80 flex flex-col">
                                {/* Liquid Glass Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Client Photo */}
                                    <div className="flex items-center mb-6 flex-shrink-0">
                                        <img
                                            src={testimonial.photo || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-orange-400/50 mr-4"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-orange-400 text-sm font-semibold">
                                                {testimonial.service}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex space-x-1 mb-4 flex-shrink-0">
                                        {renderStars(testimonial.rating)}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-300 leading-relaxed group-hover:text-orange-50 transition-colors duration-300 flex-grow text-sm">
                                        "{testimonial.testimonial}"
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
