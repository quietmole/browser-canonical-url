(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.browserCanonicalUrl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';
/**
  * @license
  * http://upa-pc.blogspot.jp/2015/03/javascript-canonical-url-get.html
  * Copyright © 2012-2015 Dr.ウーパ
  *
  * @return {?string} canonical url.
  */
module.exports = function () {
  var links = document.getElementsByTagName('link');
  for (var i = 0; i < links.length; i++) {
    if (links[i].rel && links[i].rel.toLowerCase() === 'canonical') {
      return links[i].href;
    }
  }
  return null;
};

},{}]},{},[1])(1)
});