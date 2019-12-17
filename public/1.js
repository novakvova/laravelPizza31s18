(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./resources/js/src/components/auth/Register/RegisterPage.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/auth/Register/RegisterPage.js ***!
  \*******************************************************************/
/*! exports provided: RegisterPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/TextFieldGroup */ "./resources/js/src/components/common/TextFieldGroup.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RegisterPage =
/*#__PURE__*/
function (_Component) {
  _inherits(RegisterPage, _Component);

  function RegisterPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RegisterPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegisterPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {//email: 'Поле є пустим'
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setStateByErrors", function (name, value) {
      var errors = _this.state.errors;

      if (!!errors[name]) {
        var _this$setState;

        var new_errors = Object.assign({}, errors);
        delete new_errors[name];

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "errors", new_errors), _this$setState));
      } else {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setStateByErrors(e.target.name, e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      console.log('--register submit--');
      var email = _this.state.email;
      var errors = {};
      if (email === "") errors.email = "Поле не може бути пустим!";
      var isValid = Object.keys(errors).length === 0;

      if (isValid) {
        console.log('Model is Valid'); //ajax axios post
      } else {
        _this.setState({
          errors: errors
        });
      }
    });

    return _this;
  }

  _createClass(RegisterPage, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          passwordConfirm = _this$state.passwordConfirm,
          errors = _this$state.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "d-flex justify-content-center"
      }, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "email",
        label: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",
        value: email,
        error: errors.email,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary"
      }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F"))));
    }
  }]);

  return RegisterPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ }),

/***/ "./resources/js/src/components/auth/Register/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/components/auth/Register/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage */ "./resources/js/src/components/auth/Register/RegisterPage.js");

var Register = _RegisterPage__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./resources/js/src/components/common/TextFieldGroup.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/common/TextFieldGroup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var TextFieldGroup = function TextFieldGroup(_ref) {
  var field = _ref.field,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      checkUserExists = _ref.checkUserExists;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: field
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onChange,
    onBlur: checkUserExists,
    value: value,
    type: type,
    id: field,
    name: field,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', {
      'is-invalid': !!error
    })
  }), !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, error));
};

TextFieldGroup.propTypes = {
  field: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  checkUserExists: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
TextFieldGroup.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["default"] = (TextFieldGroup);

/***/ })

}]);