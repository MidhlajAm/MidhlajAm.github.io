/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                white: '#FFFFFF',
            },
            fontFamily: {
                'press-start': ['"Press Start 2P"', 'cursive'],
                'vt323': ['"VT323"', 'monospace'],
                'courier': ['"Courier Prime"', 'monospace'],
            },
            animation: {
                'flicker': 'flicker 0.15s infinite',
            },
            keyframes: {
                flicker: {
                    '0%': { opacity: '0.97' },
                    '50%': { opacity: '1' },
                    '100%': { opacity: '0.98' },
                }
            }
        },
    },
    plugins: [],
}
