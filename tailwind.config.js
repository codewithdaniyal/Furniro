/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#FFF3E3",
        primary2: "#B88E2F",
        primary3: "#F4F5F7",
        primary4: "#FCF8F3",
        primary5: "#F9F1E7",
        textColor1: "#333333",
        textColor2: "#666666",
        textColor3: "#3A3A3A",
        textColor4: "#9F9F9F",
      },
    },
  },
  plugins: [],
};
