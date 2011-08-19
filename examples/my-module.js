/*global provide: true */
(function () {
  "use strict";
  /*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true */

  function stringToInt() {
    /*jslint bitwise:false */
    return "hello" >> 0;
  }

  module.exports = stringToInt;
}());
