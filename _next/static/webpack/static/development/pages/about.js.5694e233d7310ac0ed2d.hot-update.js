webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/ui/LinkButton.js":
/*!*************************************!*\
  !*** ./components/ui/LinkButton.js ***!
  \*************************************/
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
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ui\\LinkButton.js";




function LinkButton(props) {
  var href = props.href,
      handleClick = props.handleClick,
      text = props.text,
      color = props.color,
      backgroundColor = props.backgroundColor,
      borderColor = props.borderColor,
      hoverColor = props.hoverColor,
      hoverBackgroundColor = props.hoverBackgroundColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1825852582", [color || "#fff", backgroundColor || "#111317", borderColor || "#070708", hoverColor || "#111317", hoverBackgroundColor || "#fff"]]]) + " " + "link-btn-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    onClick: handleClick || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1825852582", [color || "#fff", backgroundColor || "#111317", borderColor || "#070708", hoverColor || "#111317", hoverBackgroundColor || "#fff"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1825852582",
    css: ".link-btn-container.__jsx-style-dynamic-selector{margin:10px;display:grid;margin-top:20px;-webkit-column-gap:50px;column-gap:50px;grid-auto-flow:column;}button.__jsx-style-dynamic-selector{color:".concat(color || "#fff", ";padding:10px;cursor:pointer;font-size:18px;font-weight:bold;border-radius:5px;background:").concat(backgroundColor || "#111317", ";border:3px solid ").concat(borderColor || "#070708", ";-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.__jsx-style-dynamic-selector:hover,button.__jsx-style-dynamic-selector:active{color:").concat(hoverColor || "#111317", ";background:").concat(hoverBackgroundColor || "#fff", ";}@media only screen and (max-width :667px){.btnContainer.__jsx-style-dynamic-selector{grid-row-gap:15px;grid-auto-flow:row;grid-template-columns:1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxMaW5rQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVlLEFBR2tCLEFBTzRCLEFBZ0JBLEFBS3JCLFlBM0JELE1BNEJRLE9BM0JWLFVBTUUsQUFnQjJCLEVBTVosSUEzQlosT0FNRCxlQUNBLEFBcUJmLFlBTk4sR0FkdUIsR0FQQSxjQVFDLFFBUHhCLFVBUThDLHdDQUNNLDhDQUNyQiwwREFDRyw0QkFDRSw4QkFDRyxpQ0FDbkMiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcdWlcXExpbmtCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTGlua0J1dHRvbihwcm9wcykge1xyXG5cdGNvbnN0IHsgaHJlZiwgaGFuZGxlQ2xpY2ssIHRleHQsIGNvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGJvcmRlckNvbG9yLCBob3ZlckNvbG9yLCBob3ZlckJhY2tncm91bmRDb2xvciB9ID0gcHJvcHM7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5rLWJ0bi1jb250YWluZXJcIj5cclxuXHRcdFx0PExpbmsgaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t8fG51bGx9PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiPnt0ZXh0fTwvYnV0dG9uPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQubGluay1idG4tY29udGFpbmVye1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBjb2x1bW4tZ2FwOiA1MHB4O1xyXG5cdFx0XHRcdFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnV0dG9ue1xyXG4gICAgICAgICAgY29sb3I6ICR7Y29sb3J8fFwiI2ZmZlwifTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZENvbG9yfHxcIiMxMTEzMTdcIn07XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAke2JvcmRlckNvbG9yfHxcIiMwNzA3MDhcIn07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogT3BlcmEgKi9cclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogTW96aWxsYSAqL1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIGJ1dHRvbjphY3RpdmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2xvcjogJHtob3ZlckNvbG9yfHxcIiMxMTEzMTdcIn07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2hvdmVyQmFja2dyb3VuZENvbG9yfHxcIiNmZmZcIn07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDY2N3B4KSB7XHJcbiAgICAgICAgICAuYnRuQ29udGFpbmVye1xyXG5cdFx0XHRcdFx0XHRncmlkLXJvdy1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua0J1dHRvbjsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\LinkButton.js */"),
    dynamic: [color || "#fff", backgroundColor || "#111317", borderColor || "#070708", hoverColor || "#111317", hoverBackgroundColor || "#fff"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkButton);

/***/ })

})
//# sourceMappingURL=about.js.5694e233d7310ac0ed2d.hot-update.js.map