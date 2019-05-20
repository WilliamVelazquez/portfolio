webpackHotUpdate("static\\development\\pages\\resume.js",{

/***/ "./components/ui/List.js":
/*!*******************************!*\
  !*** ./components/ui/List.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ui\\List.js";


function List(props) {
  var data = props.data,
      titleColor = props.titleColor,
      titlePosition = props.titlePosition,
      descriptionColor = props.descriptionColor,
      descriptionPosition = props.descriptionPosition;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.id,
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "\u2022 ".concat(item.title).concat(item.date ? " | " + item.date : "")), item.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item.description));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\n        .container{\n          width: 100%;\n        }\n        .title{\n          font-weight: bold;\n          color: ".concat(titleColor || "#fff", ";\n          text-align: ").concat(titlePosition || "left", ";\n        }\n        .description{\n          margin: 10px 10px;\n          color: ").concat(descriptionColor || "#fff", ";\n          text-align: ").concat(descriptionPosition || "justify", ";\n        }\n      ")));
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=resume.js.3ebfd0d5892711efd3cc.hot-update.js.map