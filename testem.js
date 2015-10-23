module.exports = {
  'framework': 'mocha',
  'before_tests': 'npm run clear:test-bundled && npm run build:test-bundled',
  'src_files': [
    'index.js',
    'test.js'
  ],
  'on_exit': 'npm run clear:test-bundled',
  'serve_files': [
    './node_modules/power-assert/build/power-assert.js',
    './test-bundled.js'
  ],
  test_page: './mocharunner.mustache',
  'launch_in_dev': ['Firefox', 'Chrome', 'IE', 'Safari']
};
