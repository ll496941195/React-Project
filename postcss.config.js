/**
 * @file postcss.config.js
 */

module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-pxtorem')({
      rootValue: 192,
      propWhiteList: [],
      selectorBlackList: ['ant-calendar', 'ant-message', '!ant-calendar-picker*'],
    })
  ]
}
