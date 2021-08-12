const plugin = require('tailwindcss/plugin')

const tailwindBase = plugin(function ({ e, addUtilities, theme }) {
  colors = theme('colors');

  const utility = Object.keys(colors).reduce((acc, key) => {

    if (typeof colors[key] === 'string') {
      return {
        ...acc,
        [`.link-${e(key)}`]: {
          color: colors[key],
          fontWeight: theme('fontWeight.medium'),
        },
        [`.link-${e(key)}:hover`]: {
          color: colors[key],
        },
      };
    }

    return {
      ...acc,
      [`.link-${e(key)}`]: {
        color: colors[key]['600'],
        fontWeight: theme('fontWeight.medium'),
      },
      [`.link-${e(key)}:hover`]: {
        color: colors[key]['500'],
      },
      [`.dark .link-${e(key)}`]: {
        color: colors[key]['500'],
        fontWeight: theme('fontWeight.medium'),
      },
      [`.dark .link-${e(key)}:hover`]: {
        color: colors[key]['400'],
      },
    };
  }, {});

  addUtilities(utility);
})

module.exports = tailwindBase
