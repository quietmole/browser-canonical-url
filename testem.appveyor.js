var base = require('./testem');
var objectAssign = require('object-assign');
module.exports = objectAssign({}, base, {
  'launch_in_ci': ['Firefox', 'Chrome', 'IE']
});
