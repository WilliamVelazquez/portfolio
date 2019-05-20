webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/ContactFormUI.js":
/*!*************************************!*\
  !*** ./components/ContactFormUI.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_TitleBand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/TitleBand */ "./components/ui/TitleBand.js");
/* harmony import */ var _ui_AlertText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/AlertText */ "./components/ui/AlertText.js");
/* harmony import */ var _sections_SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/SocialMedia */ "./components/sections/SocialMedia.js");
/* harmony import */ var _ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/UnderlinedLink */ "./components/ui/UnderlinedLink.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js";







function ContactFormUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1420386837" + " " + "contactContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_TitleBand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Let's make something great together!",
    position: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_SocialMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#fff",
    hoverColor: "#111317",
    size: 32,
    titleColor: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:info@williamvelazquez.com",
    text: "info@williamvelazquez.com",
    color: "#111317",
    hoverColor: "#8e1a1a",
    lineColor: "#8e1a1a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.alert && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_AlertText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.msg,
    success: props.success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1420386837" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1420386837" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1420386837" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-1420386837",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-1420386837",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*Name",
    value: props.name,
    onChange: props.changeName,
    className: "jsx-1420386837" + " " + ((props.validName ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*E-mail",
    value: props.email,
    onChange: props.changeEmail,
    className: "jsx-1420386837" + " " + ((props.validEmail ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Phone",
    value: props.phone,
    onChange: props.changePhone,
    className: "jsx-1420386837" + " " + ((props.validPhone ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "4",
    type: "text",
    placeholder: "Comments/Suggestions",
    value: props.comments,
    onChange: props.changeComments,
    className: "jsx-1420386837",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1420386837" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1420386837" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1420386837" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Do you want me to call you?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: props.askForCall,
    onChange: props.changeAskForCall,
    className: "jsx-1420386837" + " " + "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: props.handleSubmit,
    className: "jsx-1420386837",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Send")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1420386837",
    css: ".contactContainer.jsx-1420386837{width:100%;margin-top:-30px;}.container.jsx-1420386837{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;height:100%;text-align:center;color:#111317;}.text.jsx-1420386837{margin:10px;}.helpText.jsx-1420386837{text-align:left;font-size:10px;font-weight:bold;margin:0px 15px;margin-top:-5px;}.contactForm.jsx-1420386837{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-1420386837{display:grid;grid-autoflow:column;}.contactForm.jsx-1420386837 input.jsx-1420386837,.contactForm.jsx-1420386837 textarea.jsx-1420386837{padding:10px;margin:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-1420386837 input.errorShadow.jsx-1420386837,.contactForm.jsx-1420386837 textarea.errorShadow.jsx-1420386837{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check.jsx-1420386837{margin:16px 5px !important;}.rowContainer.jsx-1420386837{display:grid;grid-autoflow:column;grid-template-columns:auto 1fr;}.visitUs.jsx-1420386837{color:#111317;text-align:center;}button.jsx-1420386837{cursor:pointer;border-radius:5px;border:3px solid #070708;padding:10px 30px;margin:10px;background:#111317;color:#fff;font-size:18px;font-weight:bold;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-1420386837:hover,button.jsx-1420386837:active{color:#111317;background:#fff;}img.jsx-1420386837{width:400px;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-1420386837{grid-template-columns:1fr;}img.jsx-1420386837{display:none;width:100px;}h2.jsx-1420386837{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQixBQUdxQixBQUlTLEFBU1AsQUFHSSxBQU9ILEFBSUEsQUFLQSxBQU80QixBQVNkLEFBR2QsQUFLQyxBQUlDLEFBaUJELEFBSUYsQUFNZ0IsQUFHYixBQUlFLFdBN0ZBLENBYW5CLEFBb0VzQixDQTFEZ0IsQUFJZixBQUtULEFBbUJTLEFBdUNQLENBbENJLEFBcUJGLENBakJFLEFBa0NsQixDQTlFZSxHQVpJLE1BNkJBLEFBMERuQixDQUpBLENBdkNGLENBL0NBLEVBNkVBLENBN0RtQixDQXdDbkIsQUF5Qm9CLENBM0N1QixBQXNCaEIsQ0FqQzNCLEFBd0JpQyxJQS9DbEIsTUE2QlksSUFoQlQsQ0FNbEIsRUFsQmMsT0F3RE0sS0F2RE4sQ0FZSSxDQWtDbEIsSUFsQkEsQUFLMkMsTUFoQ3ZCLENBdUROLElBM0NkLFFBNENxQixLQXZETCxVQTBFaEIsSUF6RUEsQUErQjJDLEFBd0I5QixXQUNJLGVBQ0UsZUF0Qm5CLEVBdUIyQiwwREFDRyw0QkFDRSw4QkFDRyxpQ0FDbkMiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL3VpL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL3NlY3Rpb25zL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm1VSShwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgbWFrZSBzb21ldGhpbmcgZ3JlYXQgdG9nZXRoZXIhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiLz5cclxuICAgICAgPFVuZGVybGluZWRMaW5rIFxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgdGV4dD1cImluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIGNvbG9yPVwiIzExMTMxN1wiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiM4ZTFhMWFcIlxyXG4gICAgICAgIGxpbmVDb2xvcj1cIiM4ZTFhMWFcIlxyXG4gICAgICAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMuYWxlcnQgJiZcclxuICAgICAgICA8QWxlcnRUZXh0IHRpdGxlPXtwcm9wcy5tc2d9IHN1Y2Nlc3M9e3Byb3BzLnN1Y2Nlc3N9Lz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkZpbGwgeW91ciBkYXRhPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Rm9ybVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL0xvZ29fNTEyLnBuZ1wiIGFsdD1cIldpbGxpYW0gVmVsYXpxdWV6IExvZ29cIi8+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkTmFtZT9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqRS1tYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMudmFsaWRFbWFpbD9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBob25lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VQaG9uZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkUGhvbmU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRzL1N1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUNvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscFRleHRcIj4qUmVxdWlyZWQgZGF0YTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPkRvIHlvdSB3YW50IG1lIHRvIGNhbGwgeW91PzwvcD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlQXNrRm9yQ2FsbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhY3RDb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWxwVGV4dHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LmVycm9yU2hhZG93LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYS5lcnJvclNoYWRvd3tcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLW8tYm94LXNoYWRvdzogICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLyotbW96LWJveC1zaGFkb3c6ICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgM3B4IDNweCA1cHggNnB4ICNjY2M7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNre1xyXG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Q29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXNpdFVze1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNzA3MDg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExMzE3O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBNb3ppbGxhICovXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIsXHJcbiAgICAgICAgYnV0dG9uOmFjdGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1VSTsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ })

})
//# sourceMappingURL=contact.js.6a4eea3f96e2d7e92c1c.hot-update.js.map