webpackHotUpdate("static\\development\\pages\\resume.js",{

/***/ "./components/ui/List.js":
/*!*******************************!*\
  !*** ./components/ui/List.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ui\\List.js";



function List(props) {
  var data = props.data,
      titleColor = props.titleColor,
      titlePosition = props.titlePosition,
      descriptionColor = props.descriptionColor,
      descriptionPosition = props.descriptionPosition;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3204393834", [titleColor || "#fff", titlePosition || "left", descriptionColor || "#fff", descriptionPosition || "justify"]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3204393834", [titleColor || "#fff", titlePosition || "left", descriptionColor || "#fff", descriptionPosition || "justify"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3204393834", [titleColor || "#fff", titlePosition || "left", descriptionColor || "#fff", descriptionPosition || "justify"]]]) + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "\u2022 ".concat(item.title).concat(item.date ? " | " + item.date : "")), item.description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3204393834", [titleColor || "#fff", titlePosition || "left", descriptionColor || "#fff", descriptionPosition || "justify"]]]) + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item.description));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3204393834",
    css: ".container.__jsx-style-dynamic-selector{width:100%;}.title.__jsx-style-dynamic-selector{font-weight:bold;color:".concat(titleColor || "#fff", ";text-align:").concat(titlePosition || "left", ";}.description.__jsx-style-dynamic-selector{margin:10px 10px;color:").concat(descriptionColor || "#fff", ";text-align:").concat(descriptionPosition || "justify", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IsQUFHc0IsQUFHTSxBQUtBLFdBUG5CLE1BR3FDLEFBS0EsbUNBSkssQUFLQSx3Q0FKMUMsQUFLQSIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XHJcblx0Y29uc3QgeyBkYXRhLCB0aXRsZUNvbG9yLCB0aXRsZVBvc2l0aW9uLCBkZXNjcmlwdGlvbkNvbG9yLCBkZXNjcmlwdGlvblBvc2l0aW9uIH0gPSBwcm9wcztcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntg4oCiICR7aXRlbS50aXRsZX0ke2l0ZW0uZGF0ZT9cIiB8IFwiK2l0ZW0uZGF0ZTpcIlwifWB9PC9wPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogJHt0aXRsZUNvbG9yIHx8IFwiI2ZmZlwifTtcclxuICAgICAgICAgIHRleHQtYWxpZ246ICR7dGl0bGVQb3NpdGlvbiB8fCBcImxlZnRcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICR7ZGVzY3JpcHRpb25Db2xvciB8fCBcIiNmZmZcIn07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiAke2Rlc2NyaXB0aW9uUG9zaXRpb24gfHwgXCJqdXN0aWZ5XCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\List.js */"),
    dynamic: [titleColor || "#fff", titlePosition || "left", descriptionColor || "#fff", descriptionPosition || "justify"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=resume.js.9b304fc1e99d279c9b87.hot-update.js.map