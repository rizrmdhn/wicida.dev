const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#772E71',
                secondary: '#FAFAFA',
                accent: '#0F0F0F',
                primaryHover: '#A23E9A',
                cardBorder: '#E6E8EC',
                textMuted: '#6B7280',
            },
            height: {
                135: '135%',
                160: '160%',
            },
            width: {
                44: '44%',
            },
        },
    },
    plugins: [],
}
