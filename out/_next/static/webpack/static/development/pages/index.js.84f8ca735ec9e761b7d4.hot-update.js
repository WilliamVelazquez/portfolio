webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/sections/SocialMedia.js":
/*!********************************************!*\
  !*** ./components/sections/SocialMedia.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var _icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/TwitterIcon */ "./components/icons/TwitterIcon.js");
/* harmony import */ var _icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/FacebookIcon */ "./components/icons/FacebookIcon.js");
/* harmony import */ var _icons_LinkedInIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/LinkedInIcon */ "./components/icons/LinkedInIcon.js");
/* harmony import */ var _icons_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/GitHubIcon */ "./components/icons/GitHubIcon.js");
var _jsxFileName = "C:\\Projects\\portfolio\\components\\sections\\SocialMedia.js";








function SocialMedia(props) {
  var title = props.title,
      color = props.color,
      hoverColor = props.hoverColor,
      size = props.size,
      withFB = props.withFB,
      titleColor = props.titleColor;
  var GA_SOCIAL_MEDIA_CATEGORY = "Social Media";
  var GA_SOCIAL_MEDIA_TWITTER_ACTION = "Visit Twitter";
  var GA_SOCIAL_MEDIA_FACEBOOK_ACTION = "Visit Facebook";
  var GA_SOCIAL_MEDIA_LINKEDIN_ACTION = "Visit LinkedIn";
  var GA_SOCIAL_MEDIA_GITHUB_ACTION = "Visit GitHub";
  var GA_SOCIAL_MEDIA_TWITTER_LABEL = "Visit Twitter from Social Media";
  var GA_SOCIAL_MEDIA_FACEBOOK_LABEL = "Visit Facebook from Social Media";
  var GA_SOCIAL_MEDIA_LINKEDIN_LABEL = "Visit LinkedIn from Social Media";
  var GA_SOCIAL_MEDIA_GITHUB_LABEL = "Visit GitHub from Social Media";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "socialMediaContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "socialMediaTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "socialMedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    title: "William's Twitter",
    rel: "noopener noreferrer",
    href: "https://twitter.com/WilliamVlazquez",
    onClick: function onClick() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logEvent"])(GA_SOCIAL_MEDIA_CATEGORY, GA_SOCIAL_MEDIA_TWITTER_ACTION, GA_SOCIAL_MEDIA_TWITTER_LABEL);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: size || 32,
    color: color || "#fff",
    hoverColor: hoverColor || "#052A4F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), withFB && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    title: "William's Facebook",
    rel: "noopener noreferrer",
    href: "https://www.facebook.com/WilliamVelazquezA",
    onClick: function onClick() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logEvent"])(GA_SOCIAL_MEDIA_CATEGORY, GA_SOCIAL_MEDIA_FACEBOOK_ACTION, GA_SOCIAL_MEDIA_FACEBOOK_LABEL);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: size || 32,
    color: color || "#fff",
    hoverColor: hoverColor || "#052A4F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    title: "William's LinkedIn",
    rel: "noopener noreferrer",
    href: "https://www.linkedin.com/in/williamvelazquez/",
    onClick: function onClick() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logEvent"])(GA_SOCIAL_MEDIA_CATEGORY, GA_SOCIAL_MEDIA_LINKEDIN_ACTION, GA_SOCIAL_MEDIA_LINKEDIN_LABEL);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_LinkedInIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: size || 32,
    color: color || "#fff",
    hoverColor: hoverColor || "#052A4F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    title: "William's GitHub",
    rel: "noopener noreferrer",
    href: "https://github.com/WilliamVelazquez",
    onClick: function onClick() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logEvent"])(GA_SOCIAL_MEDIA_CATEGORY, GA_SOCIAL_MEDIA_GITHUB_ACTION, GA_SOCIAL_MEDIA_GITHUB_LABEL);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3474944008", [title ? "2" : "1", titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: size || 32,
    color: color || "#fff",
    hoverColor: hoverColor || "#052A4F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3474944008",
    css: ".socialMediaContainer.__jsx-style-dynamic-selector{margin:20px;display:grid;grid-row-gap:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-template-rows:repeat(".concat(title ? "2" : "1", ",1fr);}.socialMedia.__jsx-style-dynamic-selector{display:grid;grid-column-gap:20px;grid-template-columns:repeat(3,80px);}.icon.__jsx-style-dynamic-selector{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;justify-self:center;}.socialMediaTitle.__jsx-style-dynamic-selector{font-size:20px;font-weight:bold;white-space:nowrap;justify-self:center;color:").concat(titleColor || "#fff", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxzZWN0aW9uc1xcU29jaWFsTWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZrQixBQUd1QixBQVFBLEFBS0csQUFLQSxZQWpCSCxDQVFTLEVBS0osQUFLQSxVQWpCQyxPQWtCQyxFQVZtQixTQVBuQixRQWtCQyxvQkFWdEIsQUFXcUMsNkJBUGYsTUFRdEIsY0FQQSxnQkFaeUIsbUdBQ3NDLDREQUMvRCIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcc2VjdGlvbnNcXFNvY2lhbE1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9hbmFseXRpY3MnO1xyXG5cclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJy4uL2ljb25zL1R3aXR0ZXJJY29uJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuLi9pY29ucy9GYWNlYm9va0ljb24nO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJy4uL2ljb25zL0xpbmtlZEluSWNvbic7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJy4uL2ljb25zL0dpdEh1Ykljb24nO1xyXG5cclxuZnVuY3Rpb24gU29jaWFsTWVkaWEocHJvcHMpIHtcclxuICBjb25zdCB7IHRpdGxlLCBjb2xvciwgaG92ZXJDb2xvciwgc2l6ZSwgd2l0aEZCLCB0aXRsZUNvbG9yIH0gPSBwcm9wcztcclxuICBjb25zdCBHQV9TT0NJQUxfTUVESUFfQ0FURUdPUlk9XCJTb2NpYWwgTWVkaWFcIjtcclxuICBjb25zdCBHQV9TT0NJQUxfTUVESUFfVFdJVFRFUl9BQ1RJT049XCJWaXNpdCBUd2l0dGVyXCI7XHJcbiAgY29uc3QgR0FfU09DSUFMX01FRElBX0ZBQ0VCT09LX0FDVElPTj1cIlZpc2l0IEZhY2Vib29rXCI7XHJcbiAgY29uc3QgR0FfU09DSUFMX01FRElBX0xJTktFRElOX0FDVElPTj1cIlZpc2l0IExpbmtlZEluXCI7XHJcbiAgY29uc3QgR0FfU09DSUFMX01FRElBX0dJVEhVQl9BQ1RJT049XCJWaXNpdCBHaXRIdWJcIjtcclxuICBjb25zdCBHQV9TT0NJQUxfTUVESUFfVFdJVFRFUl9MQUJFTD1cIlZpc2l0IFR3aXR0ZXIgZnJvbSBTb2NpYWwgTWVkaWFcIjtcclxuICBjb25zdCBHQV9TT0NJQUxfTUVESUFfRkFDRUJPT0tfTEFCRUw9XCJWaXNpdCBGYWNlYm9vayBmcm9tIFNvY2lhbCBNZWRpYVwiO1xyXG4gIGNvbnN0IEdBX1NPQ0lBTF9NRURJQV9MSU5LRURJTl9MQUJFTD1cIlZpc2l0IExpbmtlZEluIGZyb20gU29jaWFsIE1lZGlhXCI7XHJcbiAgY29uc3QgR0FfU09DSUFMX01FRElBX0dJVEhVQl9MQUJFTD1cIlZpc2l0IEdpdEh1YiBmcm9tIFNvY2lhbCBNZWRpYVwiO1xyXG5cdHJldHVybihcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFDb250YWluZXJcIj5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlICYmXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29jaWFsTWVkaWFUaXRsZVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxNZWRpYVwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgICAgICAgIHRpdGxlPVwiV2lsbGlhbSdzIFR3aXR0ZXJcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9XaWxsaWFtVmxhenF1ZXpcIlxyXG4gICAgICAgICAgb25DbGljaz17KCk9PmxvZ0V2ZW50KEdBX1NPQ0lBTF9NRURJQV9DQVRFR09SWSxHQV9TT0NJQUxfTUVESUFfVFdJVFRFUl9BQ1RJT04sR0FfU09DSUFMX01FRElBX1RXSVRURVJfTEFCRUwpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUd2l0dGVySWNvblxyXG4gICAgICAgICAgICBzaXplPXtzaXplfHwzMn1cclxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfHxcIiNmZmZcIn1cclxuICAgICAgICAgICAgaG92ZXJDb2xvcj17aG92ZXJDb2xvciB8fFwiIzA1MkE0RlwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdpdGhGQiAmJlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxyXG4gICAgICAgICAgICB0aXRsZT1cIldpbGxpYW0ncyBGYWNlYm9va1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1dpbGxpYW1WZWxhenF1ZXpBXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCk9PmxvZ0V2ZW50KEdBX1NPQ0lBTF9NRURJQV9DQVRFR09SWSxHQV9TT0NJQUxfTUVESUFfRkFDRUJPT0tfQUNUSU9OLEdBX1NPQ0lBTF9NRURJQV9GQUNFQk9PS19MQUJFTCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYWNlYm9va0ljb25cclxuICAgICAgICAgICAgICBzaXplPXtzaXplfHwzMn1cclxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J8fFwiI2ZmZlwifVxyXG4gICAgICAgICAgICAgIGhvdmVyQ29sb3I9e2hvdmVyQ29sb3IgfHxcIiMwNTJBNEZcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgICAgICAgIHRpdGxlPVwiV2lsbGlhbSdzIExpbmtlZEluXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93aWxsaWFtdmVsYXpxdWV6L1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+bG9nRXZlbnQoR0FfU09DSUFMX01FRElBX0NBVEVHT1JZLEdBX1NPQ0lBTF9NRURJQV9MSU5LRURJTl9BQ1RJT04sR0FfU09DSUFMX01FRElBX0xJTktFRElOX0xBQkVMKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlua2VkSW5JY29uXHJcbiAgICAgICAgICAgIHNpemU9e3NpemV8fDMyfVxyXG4gICAgICAgICAgICBjb2xvcj17Y29sb3J8fFwiI2ZmZlwifVxyXG4gICAgICAgICAgICBob3ZlckNvbG9yPXtob3ZlckNvbG9yIHx8XCIjMDUyQTRGXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJXaWxsaWFtJ3MgR2l0SHViXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9XaWxsaWFtVmVsYXpxdWV6XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpPT5sb2dFdmVudChHQV9TT0NJQUxfTUVESUFfQ0FURUdPUlksR0FfU09DSUFMX01FRElBX0dJVEhVQl9BQ1RJT04sR0FfU09DSUFMX01FRElBX0dJVEhVQl9MQUJFTCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdpdEh1Ykljb25cclxuICAgICAgICAgICAgc2l6ZT17c2l6ZXx8MzJ9XHJcbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcnx8XCIjZmZmXCJ9XHJcbiAgICAgICAgICAgIGhvdmVyQ29sb3I9e2hvdmVyQ29sb3IgfHxcIiMwNTJBNEZcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc29jaWFsTWVkaWFDb250YWluZXJ7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3RpdGxlP1wiMlwiOlwiMVwifSwgMWZyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbE1lZGlhe1xyXG4gICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgODBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbE1lZGlhVGl0bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAke3RpdGxlQ29sb3J8fFwiI2ZmZlwifTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE1lZGlhOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\sections\\SocialMedia.js */"),
    dynamic: [title ? "2" : "1", titleColor || "#fff"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ })

})
//# sourceMappingURL=index.js.84f8ca735ec9e761b7d4.hot-update.js.map