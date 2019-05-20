webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/sections/Technologies.js":
/*!*********************************************!*\
  !*** ./components/sections/Technologies.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_ToneImageToColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ToneImageToColor */ "./components/ui/ToneImageToColor.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\sections\\Technologies.js";




function Technologies(props) {
  var technologies = props.technologies,
      width = props.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["292920688", [technologies.length / 3 || 1]]]) + " " + "technologies-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, technologies.map(function (technology) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_ToneImageToColor__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tone: "sepia",
      key: technology.id,
      text: technology.alt,
      imgWidth: width,
      imgSrc: technology.src,
      imgAlt: technology.alt,
      hoverTextColor: "#BF0404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "292920688",
    css: ".technologies-container.__jsx-style-dynamic-selector{display:grid;grid-row-gap:15px;grid-template-columns:repeat(".concat(technologies.length / 3 || 1, ",1fr);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxUZWNobm9sb2dpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ3QixBQUdpQyxhQUNNLGtCQUM4QywrREFDcEUiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcc2VjdGlvbnNcXFRlY2hub2xvZ2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVG9uZUltYWdlVG9Db2xvciBmcm9tICcuLi91aS9Ub25lSW1hZ2VUb0NvbG9yJztcclxuXHJcbmZ1bmN0aW9uIFRlY2hub2xvZ2llcyhwcm9wcykge1xyXG4gICAgY29uc3QgeyB0ZWNobm9sb2dpZXMsIHdpZHRoIH0gPSBwcm9wcztcclxuXHRyZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobm9sb2dpZXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlY2hub2xvZ2llcy5tYXAoXHJcbiAgICAgICAgICAgICAgICB0ZWNobm9sb2d5ID0+XHJcbiAgICAgICAgICAgICAgICA8VG9uZUltYWdlVG9Db2xvclxyXG4gICAgICAgICAgICAgICAgICAgIHRvbmU9J3NlcGlhJ1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dGVjaG5vbG9neS5pZH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0ZWNobm9sb2d5LmFsdH1cclxuICAgICAgICAgICAgICAgICAgICBpbWdXaWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjPXt0ZWNobm9sb2d5LnNyY31cclxuICAgICAgICAgICAgICAgICAgICBpbWdBbHQ9e3RlY2hub2xvZ3kuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyVGV4dENvbG9yPScjQkYwNDA0J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnRlY2hub2xvZ2llcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3RlY2hub2xvZ2llcy5sZW5ndGgvM3x8MX0sIDFmcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7Il19 */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\sections\\Technologies.js */"),
    dynamic: [technologies.length / 3 || 1],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ })

})
//# sourceMappingURL=index.js.377b798e9e746c178fd8.hot-update.js.map