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
  var GA_LABEL = "Message->".concat(msg).concat(error ? " || Error->" + error : "");
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
    css: ".container.jsx-4183959499{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;margin-top:-30px;height:100%;text-align:center;color:#111317;}.text.jsx-4183959499{margin:10px;}img.jsx-4183959499{width:22%;margin-top:25px;cursor:pointer;}@media only screen and (max-width :768px){img.jsx-4183959499{width:50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXEVycm9yQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBRzhCLEFBVVAsQUFHRixBQU1FLFVBTEksQUFNaEIsRUFURixPQVZxQixPQWNMLFlBYkQsR0FjZixVQWJjLFlBQ0ssaUJBQ0wsWUFDTSxrQkFDSixjQUNoQiIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxFcnJvckNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uL3V0aWxzL2FuYWx5dGljcyc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi91aS9MaW5rQnV0dG9uJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi9zZWN0aW9ucy9Tb2NpYWxNZWRpYSc7XHJcblxyXG5mdW5jdGlvbiBFcnJvckNvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IG1zZywgZXJyb3IgfSA9IHByb3BzXHJcbiAgY29uc3QgR0FfQ0FURUdPUlk9XCJOb3RGb3VuZFwiO1xyXG4gIGNvbnN0IEdBX0FDVElPTj1cIlZpc2l0IENvbnRhY3QgUGFnZVwiO1xyXG4gIGNvbnN0IEdBX0xBQkVMPWBNZXNzYWdlLT4ke21zZ30ke2Vycm9yP1wiIHx8IEVycm9yLT5cIitlcnJvcjpcIlwifWBcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIFxyXG4gICAgICAgIHJvdW5kZWQ9e3RydWV9XHJcbiAgICAgICAgcG9zaXRpb249XCJjZW50ZXJcIlxyXG4gICAgICAgIHRpdGxlPVwiVGhlIGNvbnRlbnQgb2YgdGhlIHBhZ2Ugd2lsbCBiZSBhdmFpbGFibGUgc29vbiFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICA8L0xpbms+IFxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHRcIj57bXNnfTwvaDE+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgZXJyb3IgJiZcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkVycm9yIHtlcnJvcn08L2gyPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8U29jaWFsTWVkaWEgY29sb3I9XCIjMTExMzE3XCIgaG92ZXJDb2xvcj1cIiNCRjA0MDRcIiBzaXplPXszMn0gdGl0bGVDb2xvcj1cIiMxMTEzMTdcIiB0aXRsZT1cIkdldCBpbiB0b3VjaCFcIi8+XHJcbiAgICAgIDxVbmRlcmxpbmVkTGluayBcclxuICAgICAgICBocmVmPVwibWFpbHRvOmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIHRleHQ9XCJpbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCJcclxuICAgICAgICBjb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGhvdmVyQ29sb3I9XCIjQkYwNDA0XCJcclxuICAgICAgICBsaW5lQ29sb3I9XCIjQkYwNDA0XCJcclxuICAgICAgLz5cclxuICAgICAgPExpbmtCdXR0b25cclxuICAgICAgICBocmVmPVwiL2NvbnRhY3RcIlxyXG4gICAgICAgIHRleHQ9XCJDb250YWN0XCJcclxuICAgICAgICBjb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGJvcmRlckNvbG9yPVwiIzA3MDcwOFwiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgaGFuZGxlQ2xpY2s9eygpPT5sb2dFdmVudChHQV9DQVRFR09SWSxHQV9BQ1RJT04sR0FfTEFCRUwpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQ29udGVudDsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ErrorContent.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ErrorContent);

/***/ })

})
//# sourceMappingURL=_error.js.994a0236d4101a2af794.hot-update.js.map