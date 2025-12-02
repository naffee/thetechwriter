
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D0D',
          white: '#FAFAFA',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          neutral: '#F5F5F7',
          blush: '#FECACA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
