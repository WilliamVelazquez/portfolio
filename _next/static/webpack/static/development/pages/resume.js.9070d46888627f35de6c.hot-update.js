webpackHotUpdate("static\\development\\pages\\resume.js",{

/***/ "./components/ui/RibbonPanel.js":
/*!**************************************!*\
  !*** ./components/ui/RibbonPanel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ui\\RibbonPanel.js";



function RibbonPanel(props) {
  var title = props.title,
      children = props.children,
      img = props.img,
      panelColor = props.panelColor,
      width = props.width,
      textColor = props.textColor,
      ribbonColor = props.ribbonColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["58599581", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["58599581", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "ribbon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), children, img && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/".concat(img),
    alt: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["58599581", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "58599581",
    css: ".content.__jsx-style-dynamic-selector{background:".concat(panelColor || "#eaeaea", ";width:85%;min-height:3.750em;margin:2em auto;padding:1.250em;border-radius:0.313em;box-shadow:0 2px 5px 0 rgba(0,0,0,0.5);line-height:1.5em;color:#292929;}.ribbon.__jsx-style-dynamic-selector{position:relative;padding:0 0.5em;font-size:2.000em;margin:0 0 0 -0.625em;line-height:1.875em;color:").concat(textColor || "#fff", ";background:").concat(ribbonColor || "#183352", ";border-radius:0 0.156em 0.156em 0;box-shadow:-1px 2px 3px rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{position:absolute;content:'';display:block;}.ribbon.__jsx-style-dynamic-selector:before{width:0.469em;height:100%;padding:0 0 0.438em;top:0;left:-0.469em;background:inherit;border-radius:0.313em 0 0 0.313em;}.ribbon.__jsx-style-dynamic-selector:after{width:0.313em;height:0.313em;background:rgba(0,0,0,0.35);bottom:-0.313em;left:-0.313em;border-radius:0.313em 0 0 0.313em;box-shadow:inset -1px 2px 2px rgba(0,0,0,0.3);}img.__jsx-style-dynamic-selector{width:100%;height:400px;object-fit:cover;}@media (max-width:667px){.content.__jsx-style-dynamic-selector{width:85%;}.ribbon.__jsx-style-dynamic-selector{line-height:1.143em;padding:0.5em;}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{font-size:0.714em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxSaWJib25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHa0QsQUFXdEIsQUFXQSxBQUtILEFBU0EsQUFTSCxBQU9DLEFBR1UsQUFJRixVQU5wQixDQVBhLEdBbEJELEFBU0csSUF6QkMsQUFXTCxBQXFDWCxFQUpnQixJQVRDLEVBbEJHLEdBTE4sQUFjYyxLQXpCWCxBQTRDakIsTUF4RFUsQ0ErQ1osRUF2QkEsR0FLTyxJQTVCYyxFQVlHLEFBaUJSLEtBUUUsU0FQRSxHQTdCRixJQXFDRixDQXpCTSxXQVhKLEFBNkJrQixFQVFBLE9BekJDLE9BWGIsa0JBNkJ4QixFQVFnRCxFQXBDUCxNQVdDLGlDQVZ0QixLQW9DcEIsRUF6Qm9DLFdBVnBCLGNBQ2hCLFNBVTBDLHdDQUMxQyIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcUmliYm9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUmliYm9uUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiwgaW1nLCBwYW5lbENvbG9yLCB3aWR0aCwgdGV4dENvbG9yLCByaWJib25Db2xvciAgfSA9IHByb3BzO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicmliYm9uXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge1xyXG4gICAgICAgIGltZyAmJlxyXG4gICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy8ke2ltZ31gfSBhbHQ9e3RpdGxlfS8+XHJcbiAgICAgIH1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDoke3BhbmVsQ29sb3J8fFwiI2VhZWFlYVwifTtcclxuICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzLjc1MGVtOyBcclxuICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjI1MGVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zMTNlbTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9ue1xyXG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOjIuMDAwZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIC0wLjYyNWVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODc1ZW07XHJcbiAgICAgICAgICBjb2xvcjogJHt0ZXh0Q29sb3J8fFwiI2ZmZlwifTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cmliYm9uQ29sb3J8fFwiIzE4MzM1MlwifTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC4xNTZlbSAwLjE1NmVtIDA7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9uOmJlZm9yZSwgLnJpYmJvbjphZnRlcntcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpYmJvbjpiZWZvcmV7XHJcbiAgICAgICAgICB3aWR0aDogMC40NjllbTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjQzOGVtO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICBsZWZ0OiAtMC40NjllbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6aW5oZXJpdDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEzZW0gMCAwIDAuMzEzZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib246YWZ0ZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMC4zMTNlbTtcclxuICAgICAgICAgIGhlaWdodDogMC4zMTNlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICAgICAgICBib3R0b206IC0wLjMxM2VtO1xyXG4gICAgICAgICAgbGVmdDogLTAuMzEzZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjMxM2VtIDAgMCAwLjMxM2VtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAycHggMnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcclxuICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpYmJvbntcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTQzZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpYmJvbjpiZWZvcmUsIC5yaWJib246YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43MTRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpYmJvblBhbmVsOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\RibbonPanel.js */"),
    dynamic: [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RibbonPanel);

/***/ })

})
//# sourceMappingURL=resume.js.9070d46888627f35de6c.hot-update.js.map