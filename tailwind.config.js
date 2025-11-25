/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Amarelo metálico principal
          light: '#FFF200',   // Tom claro para gradientes e destaques
          dark: '#B8860B',    // Amarelo ouro escuro para contrastes e hovers
        },
        secondary: {
          DEFAULT: '#000000', // Preto sólido
          light: '#1C1C1C',   // Preto suave / fundo de contraste
          dark: '#0A0A0A',    // Preto absoluto / background profundo
        },
        neutral: {
          100: '#F8FAFC', // Fundo geral claro
          200: '#F1F5F9', // Fundo de seções alternadas
          300: '#E2E8F0', // Bordas suaves
          400: '#CBD5E1', // Bordas
          500: '#94A3B8', // Texto desabilitado
          600: '#64748B', // Texto secundário
          700: '#475569', // Texto
          800: '#262626', // Fundo do footer / elementos escuros
          900: '#0D0D0D', // Fundo muito escuro / modo dark
        },
        accent: {
          gold: '#FFD700', // Acentos e highlights em dourado
          metallic: '#BFA100', // Detalhes metálicos
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}