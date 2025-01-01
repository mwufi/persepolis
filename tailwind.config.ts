import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'heart-burst': {
          '0%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.3)' },
          '25%': { transform: 'scale(1)' },
          '35%': { transform: 'scale(1.2)' },
          '45%': { transform: 'scale(1)' },
          '55%': { transform: 'scale(1.1)' },
          '65%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.05)' },
          '85%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' }
        },
        'heart-ping': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        }
      },
      animation: {
        'heart-burst': 'heart-burst 0.8s ease-in-out',
        'heart-ping': 'heart-ping 0.3s ease-out'
      }
    },
  },
  plugins: [],
} satisfies Config;
