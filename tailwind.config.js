/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#f97316",
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                },
                secondary: {
                    DEFAULT: "#a855f7",
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7c3aed",
                    800: "#6b21a8",
                    900: "#581c87",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "slide-down": "slideDown 0.5s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
