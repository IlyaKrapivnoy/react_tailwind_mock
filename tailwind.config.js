module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                newBlack: '#252F3F',
            },
            backgroundImage: {
                sidebarCardBg: "url('./images/pic-suggestion.png')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
