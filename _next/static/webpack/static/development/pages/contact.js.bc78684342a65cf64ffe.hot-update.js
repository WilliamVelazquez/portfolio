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
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var _ui_TitleBand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/TitleBand */ "./components/ui/TitleBand.js");
/* harmony import */ var _ui_AlertText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/AlertText */ "./components/ui/AlertText.js");
/* harmony import */ var _sections_SocialMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/SocialMedia */ "./components/sections/SocialMedia.js");
/* harmony import */ var _ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/UnderlinedLink */ "./components/ui/UnderlinedLink.js");
/* harmony import */ var _ui_CubeLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/CubeLoader */ "./components/ui/CubeLoader.js");
var _jsxFileName = "C:\\Projects\\portfolio\\components\\ContactFormUI.js";









function ContactFormUI(props) {
  var alert = props.alert,
      msg = props.msg,
      success = props.success,
      name = props.name,
      changeName = props.changeName,
      validName = props.validName,
      email = props.email,
      changeEmail = props.changeEmail,
      validEmail = props.validEmail,
      phone = props.phone,
      changePhone = props.changePhone,
      validPhone = props.validPhone,
      comments = props.comments,
      changeComments = props.changeComments,
      askForCall = props.askForCall,
      changeAskForCall = props.changeAskForCall,
      handleSubmit = props.handleSubmit,
      loading = props.loading;
  var GA_CONTACT_FORM_CATEGORY = "Contact Form";
  var GA_CONTACT_FORM_MAIL_ACTION = "Contact Form - Mail to Info";
  var GA_CONTACT_FORM_MAIL_LABEL = "Contact Form Mail to Info";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1328974180" + " " + "contactContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_TitleBand__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Let's make something great together!",
    position: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_SocialMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "#fff",
    hoverColor: "#111317",
    size: 32,
    titleColor: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "#fff",
    lineColor: "#111317",
    hoverColor: "#111317",
    text: "info@williamvelazquez.com",
    href: "mailto:info@williamvelazquez.com",
    title: "Send an email to William Velazquez",
    handleClik: function handleClik() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logEvent"])(GA_CONTACT_FORM_CATEGORY, GA_CONTACT_FORM_MAIL_ACTION, GA_CONTACT_FORM_MAIL_LABEL);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), alert && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_AlertText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: msg,
    success: success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1328974180" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1328974180" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1328974180" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-1328974180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-1328974180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*Name",
    value: name,
    onChange: changeName,
    className: "jsx-1328974180" + " " + ((validName ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    placeholder: "*E-mail",
    value: email,
    onChange: changeEmail,
    className: "jsx-1328974180" + " " + ((validEmail ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "tel",
    placeholder: "Phone",
    value: phone,
    onChange: changePhone,
    className: "jsx-1328974180" + " " + ((validPhone ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "4",
    type: "text",
    placeholder: "Comments/Suggestions",
    value: comments,
    onChange: changeComments,
    className: "jsx-1328974180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1328974180" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1328974180" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1328974180" + " " + "check-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Do you want me to call you?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: askForCall,
    checked: askForCall,
    onChange: changeAskForCall,
    className: "jsx-1328974180" + " " + "check-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: handleSubmit,
    className: "jsx-1328974180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Send")))), loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_CubeLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cubeColor: "#111317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1328974180",
    css: ".contactContainer.jsx-1328974180{width:100%;margin-top:-30px;}.container.jsx-1328974180{height:100%;padding:10px;color:#111317;margin:20px 30px;text-align:center;border-radius:10px;background:#eaeaea;}.text.jsx-1328974180{margin:10px;}.helpText.jsx-1328974180{font-size:10px;text-align:left;margin:0px 15px;margin-top:-5px;font-weight:bold;}.contactForm.jsx-1328974180{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-1328974180{display:grid;grid-autoflow:column;}.contactForm.jsx-1328974180 input.jsx-1328974180,.contactForm.jsx-1328974180 textarea.jsx-1328974180{margin:10px;padding:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-1328974180 input.errorShadow.jsx-1328974180,.contactForm.jsx-1328974180 textarea.errorShadow.jsx-1328974180{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check-text.jsx-1328974180{margin:0px;}.check-btn.jsx-1328974180{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:0px !important;margin-top:3px !important;}.rowContainer.jsx-1328974180{margin:10px;display:grid;grid-column-gap:10px;grid-template-columns:auto 1fr;}.visitUs.jsx-1328974180{color:#111317;text-align:center;}button.jsx-1328974180{color:#fff;margin:10px;cursor:pointer;font-size:18px;font-weight:bold;border-radius:5px;padding:10px 30px;background:#111317;border:3px solid #070708;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-1328974180:hover,button.jsx-1328974180:active{color:#111317;background:#fff;}img.jsx-1328974180{width:400px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-1328974180{grid-template-columns:1fr;}img.jsx-1328974180{width:100px;display:none;}h2.jsx-1328974180{font-size:18px;}.check-btn.jsx-1328974180{margin-top:0px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0Rm9ybVVJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ha0IsQUFHcUIsQUFJRSxBQVNBLEFBR0csQUFPRixBQUlBLEFBS0QsQUFPNkIsQUFTOUIsQUFHTyxBQUtOLEFBTUUsQUFJSCxBQWlCRyxBQUlGLEFBTWdCLEFBR2QsQUFJRyxBQUdXLFdBdEdYLEFBZ0RuQixBQWtCYyxDQTlEQyxBQVNmLEFBbUJlLEFBd0JBLEFBK0JLLEFBU0gsQ0F6RXFCLEFBSWYsQ0FtQ0gsQUFxQkYsQ0FuRUEsQUFvRmhCLFFBakNlLEVBOURELEFBNEJLLEFBd0JFLEFBd0NyQixDQUpBLEFBVUEsRUF0R0YsRUFtRkEsQ0FuRWtCLENBOENsQixDQXhCMkMsQ0FYM0MsSUF3Q2lCLENBOURFLEtBNEJRLEVBd0JNLENBeENmLEVBTWxCLElBNkNtQixHQTlEQyxPQVlELE1BZ0JuQixBQUsyQyxDQThCdkIsQ0FuQkksR0EzQ0gsR0FtRHJCLEdBdkNBLEdBb0VzQixLQWpCRixLQTlEQyxBQTJDTyxVQXFDNUIsR0FqQnFCLENBL0JzQixLQS9CM0MsT0EyQ0EsTUFvQjJCLHVCQTVCM0IsRUE2QjJCLDBEQUNHLDRCQUNFLDhCQUNHLGlDQUNuQyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vdXRpbHMvYW5hbHl0aWNzJztcclxuXHJcbmltcG9ydCBUaXRsZUJhbmQgZnJvbSAnLi91aS9UaXRsZUJhbmQnO1xyXG5pbXBvcnQgQWxlcnRUZXh0IGZyb20gJy4vdWkvQWxlcnRUZXh0JztcclxuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gJy4vc2VjdGlvbnMvU29jaWFsTWVkaWEnO1xyXG5pbXBvcnQgVW5kZXJsaW5lZExpbmsgZnJvbSAnLi91aS9VbmRlcmxpbmVkTGluayc7XHJcbmltcG9ydCBDdWJlTG9hZGVyIGZyb20gJy4vdWkvQ3ViZUxvYWRlcic7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybVVJKHByb3BzKSB7XHJcbiAgY29uc3Qge2FsZXJ0LCBtc2csIHN1Y2Nlc3MsIG5hbWUsIGNoYW5nZU5hbWUsIHZhbGlkTmFtZSwgZW1haWwsIGNoYW5nZUVtYWlsLCB2YWxpZEVtYWlsLCBwaG9uZSwgY2hhbmdlUGhvbmUsIHZhbGlkUGhvbmUsIGNvbW1lbnRzLCBjaGFuZ2VDb21tZW50cywgYXNrRm9yQ2FsbCwgY2hhbmdlQXNrRm9yQ2FsbCwgaGFuZGxlU3VibWl0LCBsb2FkaW5nfSA9IHByb3BzO1xyXG4gIGNvbnN0IEdBX0NPTlRBQ1RfRk9STV9DQVRFR09SWT1cIkNvbnRhY3QgRm9ybVwiO1xyXG5cdGNvbnN0IEdBX0NPTlRBQ1RfRk9STV9NQUlMX0FDVElPTj1cIkNvbnRhY3QgRm9ybSAtIE1haWwgdG8gSW5mb1wiO1xyXG4gIGNvbnN0IEdBX0NPTlRBQ1RfRk9STV9NQUlMX0xBQkVMPVwiQ29udGFjdCBGb3JtIE1haWwgdG8gSW5mb1wiO1xyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgbWFrZSBzb21ldGhpbmcgZ3JlYXQgdG9nZXRoZXIhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiLz5cclxuICAgICAgPFVuZGVybGluZWRMaW5rIFxyXG4gICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgbGluZUNvbG9yPVwiIzExMTMxN1wiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIHRleHQ9XCJpbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCJcclxuICAgICAgICBocmVmPVwibWFpbHRvOmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIHRpdGxlPVwiU2VuZCBhbiBlbWFpbCB0byBXaWxsaWFtIFZlbGF6cXVlelwiXHJcbiAgICAgICAgaGFuZGxlQ2xpaz17KCk9PmxvZ0V2ZW50KEdBX0NPTlRBQ1RfRk9STV9DQVRFR09SWSxHQV9DT05UQUNUX0ZPUk1fTUFJTF9BQ1RJT04sR0FfQ09OVEFDVF9GT1JNX01BSUxfTEFCRUwpfVxyXG4gICAgICAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnQgJiZcclxuICAgICAgICA8QWxlcnRUZXh0IHRpdGxlPXttc2d9IHN1Y2Nlc3M9e3N1Y2Nlc3N9Lz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkZpbGwgeW91ciBkYXRhPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Rm9ybVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL0xvZ29fNTEyLnBuZ1wiIGFsdD1cIldpbGxpYW0gVmVsYXpxdWV6IExvZ29cIi8+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbGlkTmFtZT9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VQaG9uZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbGlkUGhvbmU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRzL1N1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUNvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscFRleHRcIj4qUmVxdWlyZWQgZGF0YTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2hlY2stdGV4dFwiPkRvIHlvdSB3YW50IG1lIHRvIGNhbGwgeW91PzwvcD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2stYnRuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17YXNrRm9yQ2FsbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VBc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBsb2FkaW5nICYmXHJcbiAgICAgICAgPEN1YmVMb2FkZXIgY3ViZUNvbG9yPScjMTExMzE3Jy8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVscFRleHR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWF1dG9mbG93OiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybSBpbnB1dCxcclxuICAgICAgICAuY29udGFjdEZvcm0gdGV4dGFyZWF7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMTEzMTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybSBpbnB1dC5lcnJvclNoYWRvdyxcclxuICAgICAgICAuY29udGFjdEZvcm0gdGV4dGFyZWEuZXJyb3JTaGFkb3d7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAgICAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1vLWJveC1zaGFkb3c6ICAgICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC8qLW1vei1ib3gtc2hhZG93OiAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAgICAgICAgIDNweCAzcHggNXB4IDZweCAjY2NjOyovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVjay10ZXh0e1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVjay1idG57XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDcwNzA4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2stYnRue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtVUk7Il19 */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ })

})
//# sourceMappingURL=contact.js.bc78684342a65cf64ffe.hot-update.js.map