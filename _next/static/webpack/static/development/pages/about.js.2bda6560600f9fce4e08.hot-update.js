webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/ui/skewed/SkewedList.js":
/*!********************************************!*\
  !*** ./components/ui/skewed/SkewedList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SkewedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkewedSection */ "./components/ui/skewed/SkewedSection.js");
/* harmony import */ var _icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/ChevronIcon */ "./components/icons/ChevronIcon.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/functions */ "./utils/functions.js");
var _jsxFileName = "C:\\Projects\\portfolio\\components\\ui\\skewed\\SkewedList.js";






function SkewedList(props) {
  var data = props.data,
      titleColor = props.titleColor,
      contentColor = props.contentColor,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-552673642" + " " + "se-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data && //index starts at 0
  data.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SkewedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      id: "skewedSection".concat(item.id),
      title: item.title,
      text: item.text,
      odd: !(index % 2) ? true : false,
      titleColor: titleColor || null,
      contentColor: contentColor || null,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.content, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      title: index + 1 >= data.length ? 'Back to the top' : '' //`${data[index+1].title} section`
      ,
      onClick: function onClick() {
        return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_4__["scrollToId"])(index + 1 >= data.length ? "skewedSection".concat(data[0].id) : "skewedSection".concat(item.id + 1), !(index % 2) ? 30 : -80);
      } //90
      ,
      className: "jsx-552673642" + " " + "skewed-section-caret-down".concat(index + 1 >= data.length ? " inverse" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_ChevronIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      direction: index + 1 >= data.length ? 'up' : 'down',
      color: "#fff",
      hoverColor: item.id % 2 ? secondaryColor : primaryColor,
      size: 32,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "552673642",
    css: ".se-container.jsx-552673642{display:block;width:100%;overflow:hidden;padding-top:198px;}.skewed-section-caret-down.jsx-552673642{display:grid;bottom:-30px;margin:0 auto;cursor:pointer;position:relative;justify-items:center;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}.skewed-section-caret-down.jsx-552673642:hover{bottom:-40px;}.skewed-section-caret-down.inverse.jsx-552673642:hover{bottom:-20px;}@media only screen and (max-width :768px){.skewed-section-caret-down.jsx-552673642{bottom:-10px;}.skewed-section-caret-down.jsx-552673642:hover{bottom:-20px;}.skewed-section-caret-down.inverse.jsx-552673642:hover{bottom:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcc2tld2VkXFxTa2V3ZWRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHeUIsQUFNRCxBQWNBLEFBR0EsQUFJRSxBQUdBLEFBR0YsV0FDYixFQTFCYSxBQWFmLEFBR0EsQUFJRSxBQUdBLENBOUJXLFdBQ0ssQ0FPRixjQUNDLENBUEcsY0FRQSxJQVBwQixjQVF1QixxQkFDSSwwREFDRyw0QkFDRSw4QkFDRyxpQ0FDbkMiLCJmaWxlIjoiQzpcXFByb2plY3RzXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxza2V3ZWRcXFNrZXdlZExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNrZXdlZFNlY3Rpb24gZnJvbSAnLi9Ta2V3ZWRTZWN0aW9uJztcclxuaW1wb3J0IENoZXZyb25JY29uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb25JY29uJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9JZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTa2V3ZWRMaXN0KHByb3BzKSB7XHJcblx0Y29uc3Qge2RhdGEsIHRpdGxlQ29sb3IsIGNvbnRlbnRDb2xvciwgcHJpbWFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvcn0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2UtY29udGFpbmVyXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhICYmXHJcbiAgICAgICAgLy9pbmRleCBzdGFydHMgYXQgMFxyXG4gICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG5cdFx0XHRcdFx0XHQ8U2tld2VkU2VjdGlvbiBcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XHJcblx0XHRcdFx0XHRcdFx0aWQ9e2Bza2V3ZWRTZWN0aW9uJHtpdGVtLmlkfWB9XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU9e2l0ZW0udGl0bGV9IFxyXG5cdFx0XHRcdFx0XHRcdHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICBvZGQ9eyEoaW5kZXglMik/dHJ1ZTpmYWxzZX1cclxuICAgICAgICAgICAgICB0aXRsZUNvbG9yPXt0aXRsZUNvbG9yfHxudWxsfVxyXG4gICAgICAgICAgICAgIGNvbnRlbnRDb2xvcj17Y29udGVudENvbG9yfHxudWxsfVxyXG5cdFx0XHRcdFx0XHRcdHByaW1hcnlDb2xvcj17cHJpbWFyeUNvbG9yfVxyXG5cdFx0XHRcdFx0XHRcdHNlY29uZGFyeUNvbG9yPXtzZWNvbmRhcnlDb2xvcn1cclxuXHRcdFx0XHRcdFx0PlxyXG4gICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aW5kZXgrMT49ZGF0YS5sZW5ndGg/J0JhY2sgdG8gdGhlIHRvcCc6Jyd9Ly9gJHtkYXRhW2luZGV4KzFdLnRpdGxlfSBzZWN0aW9uYFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2tld2VkLXNlY3Rpb24tY2FyZXQtZG93biR7aW5kZXgrMT49ZGF0YS5sZW5ndGg/XCIgaW52ZXJzZVwiOlwiXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zY3JvbGxUb0lkKGluZGV4KzE+PWRhdGEubGVuZ3RoP2Bza2V3ZWRTZWN0aW9uJHtkYXRhWzBdLmlkfWA6YHNrZXdlZFNlY3Rpb24ke2l0ZW0uaWQrMX1gLCEoaW5kZXglMik/MzA6LTgwKX0vLzkwXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoZXZyb25JY29uIFxyXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249e2luZGV4KzE+PWRhdGEubGVuZ3RoPyd1cCc6J2Rvd24nfSBcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e1wiI2ZmZlwifSBcclxuICAgICAgICAgICAgICAgICAgaG92ZXJDb2xvcj17aXRlbS5pZCUyP3NlY29uZGFyeUNvbG9yOnByaW1hcnlDb2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezMyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvU2tld2VkU2VjdGlvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblx0XHRcdFxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zZS1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTk4cHg7LyoxNTBweDsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tld2VkLXNlY3Rpb24tY2FyZXQtZG93bntcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAvKmJvdHRvbTogLTEwcHg7Ki9cclxuICAgICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBNb3ppbGxhICovXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tld2VkLXNlY3Rpb24tY2FyZXQtZG93bjpob3ZlcntcclxuICAgICAgICAgIC8qYm90dG9tOiAtMjBweDsqL1xyXG4gICAgICAgICAgYm90dG9tOiAtNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrZXdlZC1zZWN0aW9uLWNhcmV0LWRvd24uaW52ZXJzZTpob3ZlcntcclxuICAgICAgICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuc2tld2VkLXNlY3Rpb24tY2FyZXQtZG93bntcclxuICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5za2V3ZWQtc2VjdGlvbi1jYXJldC1kb3duOmhvdmVye1xyXG4gICAgICAgICAgICBib3R0b206IC0yMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNrZXdlZC1zZWN0aW9uLWNhcmV0LWRvd24uaW52ZXJzZTpob3ZlcntcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tld2VkTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\ui\\skewed\\SkewedList.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SkewedList);

/***/ })

})
//# sourceMappingURL=about.js.2bda6560600f9fce4e08.hot-update.js.map