/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "mobile": "url('/bg_mobile.png')",
                "home": "url('/bg_home.png')",
                "home-xl": "url('/bg_home_xl.png')",
            },
            colors: {
                "primary": {
                    400: "#01C6A5",
                    500: "#04D1CA"
                }
            }
        },
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        }
    },
    plugins: [],
};
