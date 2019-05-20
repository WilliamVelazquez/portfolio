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
      contentColor = props.contentColor,
      panelColor = props.panelColor,
      textColor = props.textColor,
      ribbonColor = props.ribbonColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1894762541", [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1894762541", [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "ribbon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), children, img && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/".concat(img),
    alt: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1894762541", [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1894762541",
    css: ".content.__jsx-style-dynamic-selector{width:89%;padding:1.250em;margin:2em auto;line-height:1.5em;min-height:3.750em;border-radius:0.313em;color:".concat(contentColor || "#292929", ";background:").concat(panelColor || "#eaeaea", ";box-shadow:0 2px 5px 0 rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector{text-align:").concat(textAlign || "left", " padding:0 0.5em;font-size:2.000em;position:relative;line-height:1.875em;margin:0 0 0 -0.625em;color:").concat(textColor || "#fff", ";border-radius:0 0.156em 0.156em 0;background:").concat(ribbonColor || "#183352", ";box-shadow:-1px 2px 3px rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{content:'';display:block;position:absolute;}.ribbon.__jsx-style-dynamic-selector:before{top:0;height:100%;left:-0.469em;width:0.469em;background:inherit;padding:0 0 0.438em;border-radius:0.313em 0 0 0.313em;}.ribbon.__jsx-style-dynamic-selector:after{left:-0.313em;width:0.313em;height:0.313em;bottom:-0.313em;background:rgba(0,0,0,0.35);border-radius:0.313em 0 0 0.313em;box-shadow:inset -1px 2px 2px rgba(0,0,0,0.3);}img.__jsx-style-dynamic-selector{width:100%;height:400px;object-fit:cover;}@media only screen and (max-width :768px){.content.__jsx-style-dynamic-selector{width:85%;}}@media (max-width:667px){.ribbon.__jsx-style-dynamic-selector{padding:0.5em;line-height:1.143em;}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{font-size:0.714em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxSaWJib25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHcUIsQUFZTSxBQVdMLEFBS04sQUFTUyxBQVNILEFBTUMsQUFLSSxBQUlJLE1BaENSLElBNUJJLEFBb0RoQixDQTdCYyxBQXVCRCxHQVRDLEFBb0JRLElBNUJSLEFBZ0NkLE1BZGlCLENBdkJBLENBdkJELEVBcUNELElBUkQsRUE0QmQsT0FWRixDQTlDb0IsQ0F1QnBCLEFBY2tCLEdBUkUsVUFuQkQsR0E0QlcsQ0FyQ1QsS0E2QkMsU0FuQkgsS0FUSyxNQTZCWSxFQVFBLEtBM0JkLFNBVGUsV0FVYixPQW1CeEIsRUFRZ0QsYUExQlgsRUFWSSwrQkFxQ3pDLEVBMUJvQyxPQVZLLDJCQVdDLFlBVjFDLDRCQVcwQyx3Q0FDMUMiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcdWlcXFJpYmJvblBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFJpYmJvblBhbmVsKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4sIGltZywgY29udGVudENvbG9yLCBwYW5lbENvbG9yLCB0ZXh0Q29sb3IsIHJpYmJvbkNvbG9yICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJyaWJib25cIj57dGl0bGV9PC9oMT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nICYmXHJcbiAgICAgICAgPGltZyBzcmM9e2Avc3RhdGljLyR7aW1nfWB9IGFsdD17dGl0bGV9Lz5cclxuICAgICAgfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICB3aWR0aDogODklO1xyXG4gICAgICAgICAgcGFkZGluZzogMS4yNTBlbTtcclxuICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzLjc1MGVtOyBcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEzZW07XHJcbiAgICAgICAgICBjb2xvcjogJHtjb250ZW50Q29sb3J8fFwiIzI5MjkyOVwifTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6JHtwYW5lbENvbG9yfHxcIiNlYWVhZWFcIn07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib257XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiAke3RleHRBbGlnbnx8XCJsZWZ0XCJ9XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOjIuMDAwZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg3NWVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCAtMC42MjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAke3RleHRDb2xvcnx8XCIjZmZmXCJ9O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjE1NmVtIDAuMTU2ZW0gMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cmliYm9uQ29sb3J8fFwiIzE4MzM1MlwifTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9uOmJlZm9yZXtcclxuICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbGVmdDogLTAuNDY5ZW07XHJcbiAgICAgICAgICB3aWR0aDogMC40NjllbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6aW5oZXJpdDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwLjQzOGVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zMTNlbSAwIDAgMC4zMTNlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpYmJvbjphZnRlcntcclxuICAgICAgICAgIGxlZnQ6IC0wLjMxM2VtO1xyXG4gICAgICAgICAgd2lkdGg6IDAuMzEzZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDAuMzEzZW07XHJcbiAgICAgICAgICBib3R0b206IC0wLjMxM2VtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEzZW0gMCAwIDAuMzEzZW07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcclxuICAgICAgICAgIC5yaWJib257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNDNlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzE0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWJib25QYW5lbDsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\RibbonPanel.js */"),
    dynamic: [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RibbonPanel);

/***/ })

})
//# sourceMappingURL=resume.js.47d279c8e3e11947d85c.hot-update.js.map