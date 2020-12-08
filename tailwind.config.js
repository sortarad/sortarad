module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      colors: {
        'tan': '#FFFCF0',
        'black': '#001A1A',
        'white': '#FFFFFF',
        'blue': '#0006ED',
      },
      fontFamily: {
        body: ['toronto', 'sans-serif'],
        display: ['chicago', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 0 rgba(0, 0, 0, 0.3)',
        DEFAULT: '4px 4px 0 rgba(0, 0, 0, 0.3)',
        none: 'none',
      },
      extend: {
        fontSize: {
          base: '13px',
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['group-focus', 'group-hover'],
        textColor: ['group-focus', 'group-hover'],
      }
    },
    plugins: [],
  }