/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/**/*.{html,js}"],
    theme: {
        extend: {
            gridTemplateRows: {
                layout: "1fr, 16px",
            },
        },
    },
    plugins: [],
};
