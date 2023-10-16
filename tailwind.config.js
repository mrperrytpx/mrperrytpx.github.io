/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/**/*.{html,js}"],
    theme: {
        extend: {
            gridTemplateRows: {
                twoRows: "1fr, 2rem",
                oneRow: "1fr, 1rem",
            },
            maxWidth: {
                "responsive-screen-sm": "40rem",
                "responsive-screen-md": "48rem",
                "responsive-screen-lg": "64rem",
                "responsive-screen-xl": "80rem",
                "responsive-screen-2xl": "96rem",
            },
        },
        screens: {
            sm: "40rem",
            // => @media (min-width: 640px) { ... }

            md: "48rem",
            // => @media (min-width: 768px) { ... }

            lg: "64rem",
            // => @media (min-width: 1024px) { ... }

            xl: "80rem",
            // => @media (min-width: 1280px) { ... }

            "2xl": "96rem",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
