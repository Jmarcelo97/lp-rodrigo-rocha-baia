/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
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
            "2xl": "1536px",
        }
    },
    plugins: [],
};
