module.exports = {
  content: [
    './templates/**/*.{js,liquid,json}',
    './snippets/**/*.{js,liquid,json}',
    './sections/**/*.{js,liquid,json}',
    './layout/**/*.{js,liquid,json}',
    './assets/**/*.{js,liquid,json}',
  ],
  safelist: [
    'pt-3/2',
    'font-jost'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: '715px',
        lg: '715px',
        xl: '715px',
        '2xl': '715px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '0',
      },
    },
    extend: {
      spacing: {
        '15px': '15px',
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.66667%',
        '5/6': '83.33333%',
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.50%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
        '5/4': '125%',
        '3/2': '150%',
        '4/3': '133.33333%',
        '16/9': '177.77778%',
        'full': '100%'
      },
      colors: {
        'blue'    : '#0000EE',
        'silver'  : 'silver',
        'buttonface' : 'buttonface'
      },
      fontSize: {
        '38px-40px': ['2.375rem', '2.5rem'],
        '16px-24px': ['1rem', '1.5rem']
      },
      fontFamily: {
        'jost': ['Jost, sans-serif'],
        'helvetica': ['Helvetica Neue, Helvetica, sans-serif'],
        'proggy-vector': ['Proggy Vector', 'monospace']
      },
    },
  },
  plugins: [],
}
