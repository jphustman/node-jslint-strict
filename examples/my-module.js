/*global provide: true */
(function () {
  "use strict";
  /*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true */

  require('require-kiss');  // adds `provide` as `global.provide`

  function stringToInt() {
    /*jslint bitwise:false */
    return "hello" >> 0;
  }

  module.exports = stringToInt;
  provide('my-module', module.exports);
}());
