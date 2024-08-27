import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/core/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:"gradient-to-r from-blue-500 via-pink-500"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      'pulse-dot': 'pulse-dot 0.9s ease-in-out infinite',
    },
    keyframes: {
      'pulse-dot': {
        '0%, 100%': {
          transform: 'scale(0)',
          opacity: '0.5',
        },
        '50%': {
          transform: 'scale(1)',
          opacity: '1',
        },
      },
    },
  },
  plugins: [
    function({ addComponents, theme }: PluginAPI): void {
      addComponents({
        '.dot-spinner__dot': {
          '&::before': {
            content: "''",
            height: '20%',
            width: '20%',
            borderRadius: '50%',
            backgroundColor: '#183153',
            transform: 'scale(0)',
            opacity: '0.5',
            animation: 'pulse-dot 0.9s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(18, 31, 53, 0.3)',
          },
          '&:nth-child(2)::before': {
            animationDelay: 'calc(0.9s * -0.875)',
          },
          '&:nth-child(3)::before': {
            animationDelay: 'calc(0.9s * -0.75)',
          },
          '&:nth-child(4)::before': {
            animationDelay: 'calc(0.9s * -0.625)',
          },
          '&:nth-child(5)::before': {
            animationDelay: 'calc(0.9s * -0.5)',
          },
          '&:nth-child(6)::before': {
            animationDelay: 'calc(0.9s * -0.375)',
          },
          '&:nth-child(7)::before': {
            animationDelay: 'calc(0.9s * -0.25)',
          },
          '&:nth-child(8)::before': {
            animationDelay: 'calc(0.9s * -0.125)',
          },
        },
      });
    },
  ],
};
export default config;
