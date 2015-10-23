'use strict';
/**
  * http://upa-pc.blogspot.jp/2015/03/javascript-canonical-url-get.html
  * Copyright © 2012-2015 Dr.ウーパ
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
