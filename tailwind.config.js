/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      backgroundImage: {
        "cloud-gradient":
          "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.25), transparent 50%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.25), transparent 55%)"
      }
    }
  },
  plugins: []
};
