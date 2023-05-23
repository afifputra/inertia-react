/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./resources/js/**/*.{jsx,js,ts,tsx}",
        "./resources/views/**/*.blade.php",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
});
