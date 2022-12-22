/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    colors: {
      primary: "#29334A",
      "background": "#131826",
      "light-green": "#B5EC5B",
      "dark-purple": "#1B1439",
      "light-gray": "rgba(106, 112, 128, 0.8)",
      "gray": "#D6DCEC",
      "light-blue": "#44C6E2",
      "yankees-blue": "#1C2438",
      "space-gray": "#6A7080",
      "blue-chaos": "rgba(87, 154, 255, 0.09)",
      "blue": "rgba(87, 154, 255, 1)",
      "nouveau": "rgba(106, 112, 127, 0.2)",
      "nouveau-main": "#6A707F",
      "space-gray-rgb": "rgba(106, 112, 128, 0.64)",
      "light-blue-rgb": "rgba(68, 198, 226, 0.08)",
      "gradient": "radial-gradient(93.14% 50% at 50% 100%, #29334A 0%, rgba(19, 24, 38, 0) 100%)",
      "image-gradient-top": "#336CFF",
      "image-gradient-bottom": "#2DCBEE",
      "light-blue": '#579AFF'
    },
    minWidth: {
      '1/2': '240px',
    },
    minHeight: {
      '1/2': '224px',
    },
    // screens: {
    //   'xs': '580px',
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    // fontSize: {
    //   xs: ['12px', '16px'],
    //   sm: ['14px', '24px'],
    //   base: ['16px', '24px'],
    //   md: ['18px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
    extend: {
      rotate: {
        '17': '17deg',
      },
      hueRotate: {
        '-160.8': '-168.8deg',
        // 270: '270deg',
      },
      opacity: {
        '8': '0.08',
        // '56': '0.56'
      },
      inset: {
        '3px': '3px',
      },
    },
  },
  plugins: [],
}
