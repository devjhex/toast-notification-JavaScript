/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "app.js"
  ],
  theme: {
    extend: {
      screens:{
        'medium':"500px",
      }, 
      keyframes:{
        'show-toast':{
          '0%':{transform:'translateX(100%)'},
          '40%':{transform:'translateX(-5%)'},
          '80%':{transform:'translateX(3%)'},
          '100%':{transform:'translateX(0%)'}
        },
        'hide-toast':{
          '0%':{transform:'translateX(0%)'
           },
          '40%':{transform:'translateX(3%)'},
          '80%':{transform:'translateX(-5%)'},
          '100%':{transform:'translateX(120%)'}
        },
        'progress':{
          '100%':{width:'0%'},
        }
      },
      animation:{
        showToast: 'show-toast .3s linear forwards',
        progress: 'progress 5s linear forwards',
        hideToast: 'hide-toast .3s linear forwards',
      }
    },
  },
  plugins: [],
}

