/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['selector', '[data-mode="dark"]'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                "accent": "#C93400",
                "dark-accent": "#FBBF24",
                "secondary": "#404040",
                "fade-1": "#C01432",
                "fade-2": "#240B34"
            },
            backgroundColor: {
                "primary": "#EBEBF0",
                "dark-primary": "#101010",

                "section": "#D8D8DC",
                "dark-section": "#18181B",
            },
            borderColor: {
                "section": "#D8D8DC",
                "dark-section": "#27272A",
            },
        },
    },
    plugins: [],
}
