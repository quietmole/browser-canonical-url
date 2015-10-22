'use strict';
var assert = require('power-assert');
var browserCanonicalUrl = require('./');

it('should ', function () {
  assert.strictEqual(browserCanonicalUrl('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(browserCanonicalUrl('unicorns'), 'unicorns & wrong');
});
