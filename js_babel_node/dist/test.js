"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hello = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Hello = /*#__PURE__*/function () {
  function Hello() {
    (0, _classCallCheck2["default"])(this, Hello);
  }

  (0, _createClass2["default"])(Hello, [{
    key: "greet",
    value: function greet(name) {
      return "hello ".concat(name, "!");
    }
  }]);
  return Hello;
}();

exports.Hello = Hello;
//# sourceMappingURL=test.js.map