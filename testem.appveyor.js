var base = require('./testem');
module.exports = Object.assign({}, base, {
  'launch_in_ci': ['Firefox', 'Chrome', 'IE']
});
