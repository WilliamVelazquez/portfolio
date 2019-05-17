webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/ErrorContent.js":
/*!************************************!*\
  !*** ./components/ErrorContent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var _ui_TitleBand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/TitleBand */ "./components/ui/TitleBand.js");
/* harmony import */ var _ui_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/LinkButton */ "./components/ui/LinkButton.js");
/* harmony import */ var _ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/UnderlinedLink */ "./components/ui/UnderlinedLink.js");
/* harmony import */ var _sections_SocialMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/SocialMedia */ "./components/sections/SocialMedia.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ErrorContent.js";









function ErrorContent(props) {
  var msg = props.msg,
      error = props.error;
  var GA_CATEGORY = "NotFound";
  var GA_ACTION = "Visit Contact Page";
  var GA_LABEL = "Message:".concat(msg).concat(error ? " || Error:" + error : "");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4183959499" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_TitleBand__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rounded: true,
    position: "center",
    title: "The content of the page will be available soon!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-4183959499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4183959499" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, msg), error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-4183959499" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Error ", error), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_SocialMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "#111317",
    hoverColor: "#BF0404",
    size: 32,
    titleColor: "#111317",
    title: "Get in touch!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "mailto:info@williamvelazquez.com",
    text: "info@williamvelazquez.com",
    color: "#111317",
    hoverColor: "#BF0404",
    lineColor: "#BF0404",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/contact",
    text: "Contact",
    color: "#fff",
    backgroundColor: "#111317",
    borderColor: "#070708",
    hoverColor: "#111317",
    hoverBackgroundColor: "#fff",
    handleClick: function handleClick() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_3__["logEvent"])(GA_CATEGORY, GA_ACTION, GA_LABEL);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4183959499",
    css: ".container.jsx-4183959499{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;margin-top:-30px;height:100%;text-align:center;color:#111317;}.text.jsx-4183959499{margin:10px;}img.jsx-4183959499{width:22%;margin-top:25px;cursor:pointer;}@media only screen and (max-width :768px){img.jsx-4183959499{width:50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXEVycm9yQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBRzhCLEFBVVAsQUFHRixBQU1FLFVBTEksQUFNaEIsRUFURixPQVZxQixPQWNMLFlBYkQsR0FjZixVQWJjLFlBQ0ssaUJBQ0wsWUFDTSxrQkFDSixjQUNoQiIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxFcnJvckNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uL3V0aWxzL2FuYWx5dGljcyc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi91aS9MaW5rQnV0dG9uJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi9zZWN0aW9ucy9Tb2NpYWxNZWRpYSc7XHJcblxyXG5mdW5jdGlvbiBFcnJvckNvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IG1zZywgZXJyb3IgfSA9IHByb3BzXHJcbiAgY29uc3QgR0FfQ0FURUdPUlk9XCJOb3RGb3VuZFwiO1xyXG4gIGNvbnN0IEdBX0FDVElPTj1cIlZpc2l0IENvbnRhY3QgUGFnZVwiO1xyXG4gIGNvbnN0IEdBX0xBQkVMPWBNZXNzYWdlOiR7bXNnfSR7ZXJyb3I/XCIgfHwgRXJyb3I6XCIrZXJyb3I6XCJcIn1gXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPFRpdGxlQmFuZCBcclxuICAgICAgICByb3VuZGVkPXt0cnVlfVxyXG4gICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcclxuICAgICAgICB0aXRsZT1cIlRoZSBjb250ZW50IG9mIHRoZSBwYWdlIHdpbGwgYmUgYXZhaWxhYmxlIHNvb24hXCJcclxuICAgICAgLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvTG9nb181MTIucG5nXCIgYWx0PVwiV2lsbGlhbSBWZWxhenF1ZXogTG9nb1wiLz5cclxuICAgICAgPC9MaW5rPiBcclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0XCI+e21zZ308L2gxPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGVycm9yICYmXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5FcnJvciB7ZXJyb3J9PC9oMj5cclxuICAgICAgfVxyXG5cclxuICAgICAgPFNvY2lhbE1lZGlhIGNvbG9yPVwiIzExMTMxN1wiIGhvdmVyQ29sb3I9XCIjQkYwNDA0XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjMTExMzE3XCIgdGl0bGU9XCJHZXQgaW4gdG91Y2ghXCIvPlxyXG4gICAgICA8VW5kZXJsaW5lZExpbmsgXHJcbiAgICAgICAgaHJlZj1cIm1haWx0bzppbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCJcclxuICAgICAgICB0ZXh0PVwiaW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgY29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgICBob3ZlckNvbG9yPVwiI0JGMDQwNFwiXHJcbiAgICAgICAgbGluZUNvbG9yPVwiI0JGMDQwNFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxMaW5rQnV0dG9uXHJcbiAgICAgICAgaHJlZj1cIi9jb250YWN0XCJcclxuICAgICAgICB0ZXh0PVwiQ29udGFjdFwiXHJcbiAgICAgICAgY29sb3I9XCIjZmZmXCJcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgICBib3JkZXJDb2xvcj1cIiMwNzA3MDhcIlxyXG4gICAgICAgIGhvdmVyQ29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgIGhhbmRsZUNsaWNrPXsoKT0+bG9nRXZlbnQoR0FfQ0FURUdPUlksR0FfQUNUSU9OLEdBX0xBQkVMKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAyMiU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckNvbnRlbnQ7Il19 */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ErrorContent.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ErrorContent);

/***/ })

})
//# sourceMappingURL=_error.js.96f49ecbbb82d0ee9058.hot-update.js.map