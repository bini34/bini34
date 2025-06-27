module.exports = {
    theme: {
      extend: {
        animation: {
          slideDown: 'slideDown 300ms ease-out',
        },
        keyframes: {
          slideDown: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
        },
      },
    },
  }
  