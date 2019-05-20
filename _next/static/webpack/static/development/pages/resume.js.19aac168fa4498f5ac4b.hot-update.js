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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1426781036", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1426781036", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "ribbon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), children, img && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/".concat(img),
    alt: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1426781036", [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1426781036",
    css: ".content.__jsx-style-dynamic-selector{background:".concat(panelColor || "#eaeaea", ";width:95.5%;min-height:3.750em;margin:2em auto;padding:1.250em;border-radius:0.313em;box-shadow:0 2px 5px 0 rgba(0,0,0,0.5);line-height:1.5em;color:#292929;}.ribbon.__jsx-style-dynamic-selector{position:relative;padding:0 0.5em;font-size:2.000em;margin:0 0 0 -0.625em;line-height:1.875em;color:").concat(textColor || "#fff", ";background:").concat(ribbonColor || "#183352", ";border-radius:0 0.156em 0.156em 0;box-shadow:-1px 2px 3px rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{position:absolute;content:'';display:block;}.ribbon.__jsx-style-dynamic-selector:before{width:0.469em;height:100%;padding:0 0 0.438em;top:0;left:-0.469em;background:inherit;border-radius:0.313em 0 0 0.313em;}.ribbon.__jsx-style-dynamic-selector:after{width:0.313em;height:0.313em;background:rgba(0,0,0,0.35);bottom:-0.313em;left:-0.313em;border-radius:0.313em 0 0 0.313em;box-shadow:inset -1px 2px 2px rgba(0,0,0,0.3);}img.__jsx-style-dynamic-selector{width:100%;height:400px;object-fit:cover;}@media (max-width:667px){.content.__jsx-style-dynamic-selector{width:85%;}.ribbon.__jsx-style-dynamic-selector{line-height:1.143em;padding:0.5em;}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{font-size:0.714em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxSaWJib25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHa0QsQUFXdEIsQUFXQSxBQUtILEFBU0EsQUFTSCxBQU9DLEFBR1UsQUFJRixVQU5wQixDQVBhLEdBbEJELEFBU0csSUF6QkMsQUFXTCxBQXFDWCxFQUpnQixJQVRDLEVBbEJHLEdBTE4sQUFjYyxLQXpCWCxBQTRDakIsTUF4RFksQ0ErQ2QsRUF2QkEsR0FLTyxNQTVCYyxBQVlHLEFBaUJSLEtBUUUsU0FQRSxLQTdCRixFQXFDRixDQXpCTSxXQWtCYyxFQTdCbEIsQUFxQ2tCLE9BekJDLFNBWGIsZ0JBNkJ4QixFQVFnRCxJQXBDUCxJQVdDLG1DQVZ0QixHQW9DcEIsRUF6Qm9DLGFBVnBCLGNBQ2hCLE9BVTBDLHdDQUMxQyIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcUmliYm9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUmliYm9uUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiwgaW1nLCBwYW5lbENvbG9yLCB3aWR0aCwgdGV4dENvbG9yLCByaWJib25Db2xvciAgfSA9IHByb3BzO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicmliYm9uXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge1xyXG4gICAgICAgIGltZyAmJlxyXG4gICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy8ke2ltZ31gfSBhbHQ9e3RpdGxlfS8+XHJcbiAgICAgIH1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDoke3BhbmVsQ29sb3J8fFwiI2VhZWFlYVwifTtcclxuICAgICAgICAgIHdpZHRoOiA5NS41JTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNzUwZW07IFxyXG4gICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMjUwZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjMxM2VtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib257XHJcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgICAgICBmb250LXNpemU6Mi4wMDBlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTAuNjI1ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44NzVlbTtcclxuICAgICAgICAgIGNvbG9yOiAke3RleHRDb2xvcnx8XCIjZmZmXCJ9O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHtyaWJib25Db2xvcnx8XCIjMTgzMzUyXCJ9O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjE1NmVtIDAuMTU2ZW0gMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib246YmVmb3JlLCAucmliYm9uOmFmdGVye1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9uOmJlZm9yZXtcclxuICAgICAgICAgIHdpZHRoOiAwLjQ2OWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwIDAuNDM4ZW07XHJcbiAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgIGxlZnQ6IC0wLjQ2OWVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDppbmhlcml0O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zMTNlbSAwIDAgMC4zMTNlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpYmJvbjphZnRlcntcclxuICAgICAgICAgIHdpZHRoOiAwLjMxM2VtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwLjMxM2VtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgICAgICAgIGJvdHRvbTogLTAuMzEzZW07XHJcbiAgICAgICAgICBsZWZ0OiAtMC4zMTNlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEzZW0gMCAwIDAuMzEzZW07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xyXG4gICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmliYm9ue1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNDNlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmliYm9uOmJlZm9yZSwgLnJpYmJvbjphZnRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjcxNGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmliYm9uUGFuZWw7Il19 */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\RibbonPanel.js */"),
    dynamic: [panelColor || "#eaeaea", textColor || "#fff", ribbonColor || "#183352"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RibbonPanel);

/***/ })

})
//# sourceMappingURL=resume.js.19aac168fa4498f5ac4b.hot-update.js.map