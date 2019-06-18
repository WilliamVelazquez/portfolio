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
    className: "jsx-1213814478" + " " + "contactContainer",
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
    className: "jsx-1213814478" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1213814478" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1213814478" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-1213814478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-1213814478",
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
    className: "jsx-1213814478" + " " + ((validName ? "" : "errorShadow") || ""),
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
    className: "jsx-1213814478" + " " + ((validEmail ? "" : "errorShadow") || ""),
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
    className: "jsx-1213814478" + " " + ((validPhone ? "" : "errorShadow") || ""),
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
    className: "jsx-1213814478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1213814478" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1213814478" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1213814478" + " " + "check-text",
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
    className: "jsx-1213814478" + " " + "check-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: handleSubmit,
    className: "jsx-1213814478",
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
    styleId: "1213814478",
    css: ".contactContainer.jsx-1213814478{width:100%;margin-top:-30px;}.container.jsx-1213814478{height:100%;padding:10px;color:#111317;margin:20px 30px;text-align:center;border-radius:10px;background:#eaeaea;}.text.jsx-1213814478{margin:10px;}.helpText.jsx-1213814478{font-size:10px;text-align:left;margin:0px 15px;margin-top:-5px;font-weight:bold;}.contactForm.jsx-1213814478{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-1213814478{display:grid;grid-autoflow:column;}.contactForm.jsx-1213814478 input.jsx-1213814478,.contactForm.jsx-1213814478 textarea.jsx-1213814478{margin:10px;padding:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-1213814478 input.errorShadow.jsx-1213814478,.contactForm.jsx-1213814478 textarea.errorShadow.jsx-1213814478{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check-text.jsx-1213814478{margin:0px;}.check-btn.jsx-1213814478{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:0px !important;margin-top:3px !important;}.rowContainer.jsx-1213814478{margin:10px;display:grid;grid-column-gap:10px;grid-template-columns:auto 1fr;}.visitUs.jsx-1213814478{color:#111317;text-align:center;}button.jsx-1213814478{color:#fff;margin:10px;cursor:pointer;font-size:18px;font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:5px;padding:10px 30px;background:#111317;border:3px solid #070708;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-1213814478:hover,button.jsx-1213814478:active{color:#111317;background:#fff;}img.jsx-1213814478{width:400px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-1213814478{grid-template-columns:1fr;}img.jsx-1213814478{width:100px;display:none;}h2.jsx-1213814478{font-size:18px;}.check-btn.jsx-1213814478{margin-top:0px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0Rm9ybVVJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ha0IsQUFHcUIsQUFJRSxBQVNBLEFBR0csQUFPRixBQUlBLEFBS0QsQUFPNkIsQUFTOUIsQUFHTyxBQUtOLEFBTUUsQUFJSCxBQWtCRyxBQUlGLEFBTWdCLEFBR2QsQUFJRyxBQUdXLFdBdkdYLEFBZ0RuQixBQWtCYyxDQTlEQyxBQVNmLEFBbUJlLEFBd0JBLEFBZ0NLLEFBU0gsQ0ExRXFCLEFBSWYsQ0FtQ0gsQUFzQkYsQ0FwRUEsQUFxRmhCLFFBbENlLEVBOURELEFBNEJLLEFBd0JFLEFBeUNyQixDQUpBLEFBVUEsRUF2R0YsRUFvRkEsQ0FwRWtCLENBOENsQixDQXhCMkMsQ0FYM0MsSUF3Q2lCLENBOURFLEtBNEJRLEVBd0JNLENBeENmLEVBTWxCLElBNkNtQixHQTlEQyxPQVlELE1BZ0JuQixBQUsyQyxDQThCeEIsQ0FuQkssR0EzQ0gsR0FtRHJCLEdBdkNBLEdBcUVzQixVQWhGRCxBQTJDTyxVQXNDNUIsSUFqRDJDLEtBL0IzQyxPQTJDQSw2QkFSQSxPQTBCb0Isa0JBQ0Esa0JBQ0MsbUJBQ00seUJBQ0EsMERBQ0csNEJBQ0UsOEJBQ0csaUNBQ25DIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0Rm9ybVVJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi91dGlscy9hbmFseXRpY3MnO1xyXG5cclxuaW1wb3J0IFRpdGxlQmFuZCBmcm9tICcuL3VpL1RpdGxlQmFuZCc7XHJcbmltcG9ydCBBbGVydFRleHQgZnJvbSAnLi91aS9BbGVydFRleHQnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi9zZWN0aW9ucy9Tb2NpYWxNZWRpYSc7XHJcbmltcG9ydCBVbmRlcmxpbmVkTGluayBmcm9tICcuL3VpL1VuZGVybGluZWRMaW5rJztcclxuaW1wb3J0IEN1YmVMb2FkZXIgZnJvbSAnLi91aS9DdWJlTG9hZGVyJztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtVUkocHJvcHMpIHtcclxuICBjb25zdCB7YWxlcnQsIG1zZywgc3VjY2VzcywgbmFtZSwgY2hhbmdlTmFtZSwgdmFsaWROYW1lLCBlbWFpbCwgY2hhbmdlRW1haWwsIHZhbGlkRW1haWwsIHBob25lLCBjaGFuZ2VQaG9uZSwgdmFsaWRQaG9uZSwgY29tbWVudHMsIGNoYW5nZUNvbW1lbnRzLCBhc2tGb3JDYWxsLCBjaGFuZ2VBc2tGb3JDYWxsLCBoYW5kbGVTdWJtaXQsIGxvYWRpbmd9ID0gcHJvcHM7XHJcbiAgY29uc3QgR0FfQ09OVEFDVF9GT1JNX0NBVEVHT1JZPVwiQ29udGFjdCBGb3JtXCI7XHJcblx0Y29uc3QgR0FfQ09OVEFDVF9GT1JNX01BSUxfQUNUSU9OPVwiQ29udGFjdCBGb3JtIC0gTWFpbCB0byBJbmZvXCI7XHJcbiAgY29uc3QgR0FfQ09OVEFDVF9GT1JNX01BSUxfTEFCRUw9XCJDb250YWN0IEZvcm0gTWFpbCB0byBJbmZvXCI7XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxUaXRsZUJhbmQgdGl0bGU9XCJMZXQncyBtYWtlIHNvbWV0aGluZyBncmVhdCB0b2dldGhlciFcIiBwb3NpdGlvbj1cImNlbnRlclwiLz5cclxuICAgICAgPFNvY2lhbE1lZGlhIGNvbG9yPVwiI2ZmZlwiIGhvdmVyQ29sb3I9XCIjMTExMzE3XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjZmZmXCIvPlxyXG4gICAgICA8VW5kZXJsaW5lZExpbmsgXHJcbiAgICAgICAgY29sb3I9XCIjZmZmXCJcclxuICAgICAgICBsaW5lQ29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgICBob3ZlckNvbG9yPVwiIzExMTMxN1wiXHJcbiAgICAgICAgdGV4dD1cImluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgdGl0bGU9XCJTZW5kIGFuIGVtYWlsIHRvIFdpbGxpYW0gVmVsYXpxdWV6XCJcclxuICAgICAgICBoYW5kbGVDbGlrPXsoKT0+bG9nRXZlbnQoR0FfQ09OVEFDVF9GT1JNX0NBVEVHT1JZLEdBX0NPTlRBQ1RfRk9STV9NQUlMX0FDVElPTixHQV9DT05UQUNUX0ZPUk1fTUFJTF9MQUJFTCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtcclxuICAgICAgICBhbGVydCAmJlxyXG4gICAgICAgIDxBbGVydFRleHQgdGl0bGU9e21zZ30gc3VjY2Vzcz17c3VjY2Vzc30vPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0XCI+RmlsbCB5b3VyIGRhdGE8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RGb3JtXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvTG9nb181MTIucG5nXCIgYWx0PVwiV2lsbGlhbSBWZWxhenF1ZXogTG9nb1wiLz5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKk5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsaWROYW1lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqRS1tYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsaWRFbWFpbD9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBob25lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsaWRQaG9uZT9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tbWVudHMvU3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWxwVGV4dFwiPipSZXF1aXJlZCBkYXRhPC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjaGVjay10ZXh0XCI+RG8geW91IHdhbnQgbWUgdG8gY2FsbCB5b3U/PC9wPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVjay1idG5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Fza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXthc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGxvYWRpbmcgJiZcclxuICAgICAgICA8Q3ViZUxvYWRlciBjdWJlQ29sb3I9JyMxMTEzMTcnLz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWN0Q29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWxwVGV4dHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYXtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LmVycm9yU2hhZG93LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYS5lcnJvclNoYWRvd3tcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLW8tYm94LXNoYWRvdzogICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLyotbW96LWJveC1zaGFkb3c6ICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgM3B4IDNweCA1cHggNnB4ICNjY2M7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrLXRleHR7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrLWJ0bntcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvd0NvbnRhaW5lcntcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlzaXRVc3tcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExMzE3O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBNb3ppbGxhICovXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIsXHJcbiAgICAgICAgYnV0dG9uOmFjdGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrLWJ0bntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ })

})
//# sourceMappingURL=contact.js.b9a472e97ce1fe4658e2.hot-update.js.map