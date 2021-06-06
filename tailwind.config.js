module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bginput: "#28292A",
        mainColor: "#181A27",
        grad: "#181A27",
        grad2: "#202338",
        blue: "#8796F2",
        bgPlaybar: "#1F1F1F",
        bgPlayerMobile:
          "linear-gradient(346.15deg, rgba(0, 0, 0, 1), rgba(54, 56, 57, 0.89) 124.64%)",
      },
    },
  },
  variants: {
    extend: {
      outline: ["active", "focus"],
    },
  },
  plugins: [],
};
