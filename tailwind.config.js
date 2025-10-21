module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220, 10%, 25%)",
        input: "hsl(220, 10%, 25%)",
        ring: "hsl(280, 80%, 60%)",
        background: "hsl(255, 55%, 14%)",
        foreground: "hsl(0, 0%, 100%)",
        primary: {
          DEFAULT: "hsl(260, 70%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(260, 70%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(195, 80%, 55%)",
          foreground: "hsl(255, 55%, 14%)",
        },
        neutral: {
          DEFAULT: "hsl(220, 25%, 10%)",
          foreground: "hsl(0, 0%, 96%)",
        },
        success: "hsl(145, 50%, 48%)",
        warning: "hsl(35, 90%, 55%)",
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(220, 10%, 25%)",
          foreground: "hsl(220, 8%, 65%)",
        },
        accent: {
          DEFAULT: "hsl(195, 80%, 55%)",
          foreground: "hsl(255, 55%, 14%)",
        },
        popover: {
          DEFAULT: "hsl(220, 25%, 10%)",
          foreground: "hsl(0, 0%, 96%)",
        },
        card: {
          DEFAULT: "hsl(220, 25%, 10%)",
          foreground: "hsl(0, 0%, 96%)",
        },
        gray: {
          50: "hsl(220, 20%, 96%)",
          100: "hsl(220, 15%, 90%)",
          200: "hsl(220, 10%, 80%)",
          300: "hsl(220, 8%, 65%)",
          400: "hsl(220, 6%, 55%)",
          500: "hsl(220, 6%, 45%)",
          600: "hsl(220, 8%, 35%)",
          700: "hsl(220, 10%, 25%)",
          800: "hsl(220, 15%, 15%)",
          900: "hsl(220, 20%, 10%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        headline: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'headline-lg': ['34px', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'headline-md': ['24px', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'headline-sm': ['17px', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'body-lg': ['20px', { lineHeight: '1.5' }],
        'body-base': ['16px', { lineHeight: '1.5' }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(250, 70%, 55%), hsl(280, 70%, 45%))',
        'gradient-2': 'linear-gradient(135deg, hsl(195, 75%, 55%), hsl(260, 70%, 55%))',
        'button-gradient': 'linear-gradient(135deg, hsl(260, 75%, 55%), hsl(280, 70%, 45%))',
        'button-border-gradient': 'linear-gradient(90deg, hsl(260, 80%, 60%), hsl(195, 85%, 55%))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
