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
  var linksLength = links.length;
  for (var i = 0; i < linksLength; i++) {
    if (links[i].rel && links[i].rel.toLowerCase() === 'canonical') {
      return links[i].href;
    }
  }
  return null;
};
