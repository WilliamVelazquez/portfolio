webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

var dev = "development" !== 'production';
var initGA = function initGA() {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-130499063-1', {
    debug: dev
  }); //ReactGA.initialize('UA-129009818-1');
};
var logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  }); //For Search Query also add window.location.search

  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (category && action) {
    console.log("Logging event for Category:".concat(category, ", Action:").concat(action, " and Label:").concat(label));
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category: category,
      action: action,
      label: label
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    console.log("Logging event for exception ".concat(description, " | ").concat(fatal));
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description: description,
      fatal: fatal
    });
  }
};

/***/ })

})
//# sourceMappingURL=index.js.5d8e0f1f0fcad9c5a5ed.hot-update.js.map