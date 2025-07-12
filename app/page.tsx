"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import PortfolioSection from "./components/PortfolioSection"
import GallerySection from "./components/GallerySection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "gallery", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-x-hidden">
      <ParticleBackground />
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
