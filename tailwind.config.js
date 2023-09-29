module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      backgroundOpacity: ['hover'],
    },
  },
  plugins: [],
};
