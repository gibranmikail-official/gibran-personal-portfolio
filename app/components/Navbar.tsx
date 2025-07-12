"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GIBRAN MIKAIL
        </motion.button>

        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === section.id ? "text-orange-400" : "text-white hover:text-orange-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.nav>
  )
}
