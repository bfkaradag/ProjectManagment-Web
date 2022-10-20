module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },

    extend: {
      colors: {
        "brand-blue": {
          primary: "#00BAD3",
          light: "#F0FBFD",
          secondary: "#DAFBFF",
        },
        "brand-gray": {
          primary: "#333333",
          secondary: "#8D939C",
          border: "#E5E7E9",
          background: "#F3F6FA",
        },
        "brand-status": {
          error: "#F34133",
          success: "#4CAF50",
        },
      },

      animation: {
        fade: "fadeIn 0.2s ease-in-out",
      },
    },
  },
};
