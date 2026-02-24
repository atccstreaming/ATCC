/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0F19',
          900: '#101828',
          800: '#1D2939'
        },
        parchment: {
          50: '#FFFBF2',
          100: '#FDF3D7',
          200: '#F7E6B5'
        },
        cinnabar: {
          500: '#E23D28',
          600: '#C83422'
        },
        jade: {
          500: '#1F8A70',
          600: '#17745E'
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'sans-serif'],
        serif: ['ui-serif', 'Songti SC', 'STSong', 'Noto Serif SC', 'serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,24,40,0.10)'
      }
    }
  },
  plugins: []
};
