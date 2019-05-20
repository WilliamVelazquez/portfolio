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
      textColor = props.textColor,
      ribbonColor = props.ribbonColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["293791205", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["293791205", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "ribbon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), children, img && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/".concat(img),
    alt: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["293791205", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "293791205",
    css: ".content.__jsx-style-dynamic-selector{background:".concat(panelColor || "#eaeaea", ";width:89%;min-height:3.750em;margin:2em auto;padding:1.250em;border-radius:0.313em;box-shadow:0 2px 5px 0 rgba(0,0,0,0.5);line-height:1.5em;color:#292929;}.ribbon.__jsx-style-dynamic-selector{position:relative;padding:0 0.5em;font-size:2.000em;margin:0 0 0 -0.625em;line-height:1.875em;color:").concat(textColor || "#fff", ";background:").concat(ribbonColor || "#183352", ";border-radius:0 0.156em 0.156em 0;box-shadow:-1px 2px 3px rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{position:absolute;content:'';display:block;}.ribbon.__jsx-style-dynamic-selector:before{width:0.469em;height:100%;padding:0 0 0.438em;top:0;left:-0.469em;background:inherit;border-radius:0.313em 0 0 0.313em;}.ribbon.__jsx-style-dynamic-selector:after{width:0.313em;height:0.313em;background:rgba(0,0,0,0.35);bottom:-0.313em;left:-0.313em;border-radius:0.313em 0 0 0.313em;box-shadow:inset -1px 2px 2px rgba(0,0,0,0.3);}img.__jsx-style-dynamic-selector{width:100%;height:400px;object-fit:cover;}@media only screen and (max-width :768px){.content.__jsx-style-dynamic-selector{width:85%;}}@media (max-width:667px){.ribbon.__jsx-style-dynamic-selector{line-height:1.143em;padding:0.5em;}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{font-size:0.714em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxSaWJib25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHa0QsQUFXdEIsQUFXQSxBQUtILEFBU0EsQUFTSCxBQU1DLEFBS1UsQUFJRixVQVJwQixDQU5hLEdBbEJELEFBU0csSUF6QkMsQUFXTCxBQXNDWCxFQUpnQixJQVZDLEVBbEJHLEdBTE4sQUFjYyxLQXpCWCxBQTZDakIsTUF6RFUsQ0ErQ1osRUF2QkEsR0FLTyxJQTVCYyxFQVlHLEFBaUJSLEtBUUUsU0FQRSxHQTdCRixJQXFDRixDQXpCTSxXQVhKLEFBNkJrQixFQVFBLE9BekJDLE9BWGIsa0JBNkJ4QixFQVFnRCxFQXBDUCxNQVdDLGlDQVZ0QixLQW9DcEIsRUF6Qm9DLFdBVnBCLGNBQ2hCLFNBVTBDLHdDQUMxQyIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcUmliYm9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUmliYm9uUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiwgaW1nLCBwYW5lbENvbG9yLCB0ZXh0Q29sb3IsIHJpYmJvbkNvbG9yICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJyaWJib25cIj57dGl0bGV9PC9oMT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nICYmXHJcbiAgICAgICAgPGltZyBzcmM9e2Avc3RhdGljLyR7aW1nfWB9IGFsdD17dGl0bGV9Lz5cclxuICAgICAgfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiR7cGFuZWxDb2xvcnx8XCIjZWFlYWVhXCJ9O1xyXG4gICAgICAgICAgd2lkdGg6IDg5JTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNzUwZW07IFxyXG4gICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMjUwZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjMxM2VtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib257XHJcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgICAgICBmb250LXNpemU6Mi4wMDBlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTAuNjI1ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44NzVlbTtcclxuICAgICAgICAgIGNvbG9yOiAke3RleHRDb2xvcnx8XCIjZmZmXCJ9O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHtyaWJib25Db2xvcnx8XCIjMTgzMzUyXCJ9O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjE1NmVtIDAuMTU2ZW0gMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVye1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9uOmJlZm9yZXtcclxuICAgICAgICAgIHdpZHRoOiAwLjQ2OWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwIDAuNDM4ZW07XHJcbiAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgIGxlZnQ6IC0wLjQ2OWVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDppbmhlcml0O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zMTNlbSAwIDAgMC4zMTNlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpYmJvbjphZnRlcntcclxuICAgICAgICAgIHdpZHRoOiAwLjMxM2VtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwLjMxM2VtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgICAgICAgIGJvdHRvbTogLTAuMzEzZW07XHJcbiAgICAgICAgICBsZWZ0OiAtMC4zMTNlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEzZW0gMCAwIDAuMzEzZW07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcclxuICAgICAgICAgIC5yaWJib257XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE0M2VtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzE0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWJib25QYW5lbDsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\RibbonPanel.js */"),
    dynamic: [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RibbonPanel);

/***/ })

})
//# sourceMappingURL=resume.js.26aa81c8aa2e6df7a064.hot-update.js.map