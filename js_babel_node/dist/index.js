"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _test = require("./test");

var hello = new _test.Hello();
var greet = hello.greet('John Doe');
console.log('GREET IS|: ', greet);
//# sourceMappingURL=index.js.map