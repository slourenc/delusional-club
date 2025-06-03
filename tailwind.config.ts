import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#CCCCCC",
        'blood-red': '#DC143C',
        'dark-red': '#8B0000',
        'crimson': '#B22222',
        'black-red': '#1A0505',
        'void-black': '#000000',
        'deep-black': '#0A0A0A',
        'dark-gray': '#1A1A1A',
        'light-gray': '#CCCCCC',
        'black': '#000000',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'system': ['Arial', 'sans-serif'],
        'creepy': ['Times New Roman', 'serif'],
      },
      textShadow: {
        'red': '2px 2px 4px #DC143C, -1px -1px 2px #8B0000',
        'dark-red': '0 0 10px #8B0000, 0 0 20px #8B0000',
        'crimson': '0 0 10px #B22222, 0 0 20px #B22222',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'flicker': 'flicker 1.5s infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'pulse-red': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(220, 20, 60, 0.7)'
          },
          '70%': {
            opacity: '0.8',
            boxShadow: '0 0 0 10px rgba(220, 20, 60, 0)'
          }
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow-red': {
          textShadow: '2px 2px 4px #DC143C, -1px -1px 2px #8B0000',
        },
        '.text-shadow-dark-red': {
          textShadow: '0 0 10px #8B0000, 0 0 20px #8B0000',
        },
        '.text-shadow-crimson': {
          textShadow: '0 0 10px #B22222, 0 0 20px #B22222',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
export default config; 