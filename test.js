'use strict';
var assert = require('power-assert');
var browserCanonicalUrl = require('./');

it('should be canonical', function () {
  assert(browserCanonicalUrl() === 'Current page title');
});
