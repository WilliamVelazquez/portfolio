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
      textAlign = props.textAlign,
      textColor = props.textColor,
      ribbonColor = props.ribbonColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1487727427", [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1487727427", [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"]]]) + " " + "ribbon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), children, img && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/".concat(img),
    alt: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1487727427", [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1487727427",
    css: ".content.__jsx-style-dynamic-selector{width:89%;padding:1.250em;margin:2em auto;line-height:1.5em;min-height:3.750em;border-radius:0.313em;color:".concat(contentColor || "#292929", ";background:").concat(panelColor || "#eaeaea", ";box-shadow:0 2px 5px 0 rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector{text-align:").concat(textAlign || "left", ";padding:0 0.5em;font-size:2.000em;position:relative;line-height:1.875em;margin:0 0 0 -0.625em;color:").concat(textColor || "#fff", ";border-radius:0 0.156em 0.156em 0;background:").concat(ribbonColor || "#183352", ";box-shadow:-1px 2px 3px rgba(0,0,0,0.5);}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{content:'';display:block;position:absolute;}.ribbon.__jsx-style-dynamic-selector:before{top:0;height:100%;left:-0.469em;width:0.469em;background:inherit;padding:0 0 0.438em;border-radius:0.313em 0 0 0.313em;}.ribbon.__jsx-style-dynamic-selector:after{left:-0.313em;width:0.313em;height:0.313em;bottom:-0.313em;background:rgba(0,0,0,0.35);border-radius:0.313em 0 0 0.313em;box-shadow:inset -1px 2px 2px rgba(0,0,0,0.3);}img.__jsx-style-dynamic-selector{width:100%;height:400px;object-fit:cover;}@media only screen and (max-width :768px){.content.__jsx-style-dynamic-selector{width:85%;}}@media (max-width:667px){.ribbon.__jsx-style-dynamic-selector{padding:0.5em;line-height:1.143em;}.ribbon.__jsx-style-dynamic-selector:before,.ribbon.__jsx-style-dynamic-selector:after{font-size:0.714em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxSaWJib25QYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHcUIsQUFXOEIsQUFZN0IsQUFLTixBQVNTLEFBU0gsQUFNQyxBQUtJLEFBSUksTUFoQ1IsSUE1QkksQUFvRGhCLENBN0JjLEFBdUJELEdBVEMsQUFvQlEsSUE1QlIsQUFnQ2QsTUFkaUIsQ0F2QkEsQ0F2QkQsRUFxQ0QsSUFSRCxFQTRCZCxNQS9DZ0IsQ0FxQ2xCLENBOUNvQixDQXVCcEIsQUFja0IsR0FSRSxVQW5CRCxHQTRCVyxDQXJDVCxLQTZCQyxTQW5CSCxLQVRLLE1BNkJZLEVBUUEsS0EzQmQsU0FUZSxXQVViLE9BbUJ4QixFQVFnRCxhQTFCWCxFQVZJLCtCQXFDekMsRUExQm9DLE9BVkssMkJBV0MsWUFWMUMsNEJBVzBDLHdDQUMxQyIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcUmliYm9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUmliYm9uUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiwgaW1nLCBjb250ZW50Q29sb3IsIHBhbmVsQ29sb3IsIHRleHRBbGlnbiwgdGV4dENvbG9yLCByaWJib25Db2xvciAgfSA9IHByb3BzO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicmliYm9uXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge1xyXG4gICAgICAgIGltZyAmJlxyXG4gICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy8ke2ltZ31gfSBhbHQ9e3RpdGxlfS8+XHJcbiAgICAgIH1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgd2lkdGg6IDg5JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMjUwZW07XHJcbiAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMy43NTBlbTsgXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjMxM2VtO1xyXG4gICAgICAgICAgY29sb3I6ICR7Y29udGVudENvbG9yfHxcIiMyOTI5MjlcIn07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiR7cGFuZWxDb2xvcnx8XCIjZWFlYWVhXCJ9O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9ue1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogJHt0ZXh0QWxpZ258fFwibGVmdFwifTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgICAgICBmb250LXNpemU6Mi4wMDBlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODc1ZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIC0wLjYyNWVtO1xyXG4gICAgICAgICAgY29sb3I6ICR7dGV4dENvbG9yfHxcIiNmZmZcIn07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAuMTU2ZW0gMC4xNTZlbSAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHtyaWJib25Db2xvcnx8XCIjMTgzMzUyXCJ9O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogLTFweCAycHggM3B4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpYmJvbjpiZWZvcmUsIC5yaWJib246YWZ0ZXJ7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWJib246YmVmb3Jle1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAtMC40NjllbTtcclxuICAgICAgICAgIHdpZHRoOiAwLjQ2OWVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDppbmhlcml0O1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwIDAuNDM4ZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjMxM2VtIDAgMCAwLjMxM2VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmliYm9uOmFmdGVye1xyXG4gICAgICAgICAgbGVmdDogLTAuMzEzZW07XHJcbiAgICAgICAgICB3aWR0aDogMC4zMTNlbTtcclxuICAgICAgICAgIGhlaWdodDogMC4zMTNlbTtcclxuICAgICAgICAgIGJvdHRvbTogLTAuMzEzZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zMTNlbSAwIDAgMC4zMTNlbTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMnB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG4gICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xyXG4gICAgICAgICAgLnJpYmJvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE0M2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpYmJvbjpiZWZvcmUsIC5yaWJib246YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43MTRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpYmJvblBhbmVsOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\RibbonPanel.js */"),
    dynamic: [contentColor || "#292929", panelColor || "#eaeaea", textAlign || "left", textColor || "#fff", ribbonColor || "#183352"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RibbonPanel);

/***/ })

})
//# sourceMappingURL=resume.js.0dd2469d4968c0367506.hot-update.js.map