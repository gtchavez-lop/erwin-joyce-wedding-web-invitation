module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: '#BCB88A',
          secondary: '#DE5D83',
          accent: '#E3D64D',
          neutral: '#a8a29e',
          'base-100': '#f5f5f4',
          info: '#67e8f9',
          success: '#86efac',
          warning: '#ea580c',
          error: '#f43f5e',
        },
      },
    ],
  },
};
