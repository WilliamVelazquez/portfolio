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
/* harmony import */ var _TitleBand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleBand */ "./components/TitleBand.js");
/* harmony import */ var _AlertText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertText */ "./components/AlertText.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialMedia */ "./components/SocialMedia.js");
var _jsxFileName = "C:\\Projects\\portfolio\\components\\ContactFormUI.js";






function ContactFormUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1260076774" + " " + "contactContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TitleBand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Let's talk !",
    position: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#111317",
    hoverColor: "#BF0404",
    size: 32,
    titleColor: "#111317",
    title: "Get in touch!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:info@williamvelazquez.com",
    className: "jsx-1260076774",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "info@williamvelazquez.com"), props.alert && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AlertText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.msg,
    success: props.success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1260076774" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1260076774" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1260076774" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_1024.png",
    alt: "William Velazquez Logo",
    className: "jsx-1260076774",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-1260076774",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*Name",
    value: props.name,
    onChange: props.changeName,
    className: "jsx-1260076774" + " " + ((props.validName ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*E-mail",
    value: props.email,
    onChange: props.changeEmail,
    className: "jsx-1260076774" + " " + ((props.validEmail ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Phone",
    value: props.phone,
    onChange: props.changePhone,
    className: "jsx-1260076774" + " " + ((props.validPhone ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "4",
    type: "text",
    placeholder: "Comments/Suggestions",
    value: props.comments,
    onChange: props.changeComments,
    className: "jsx-1260076774",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1260076774" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1260076774" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1260076774" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Do you want me to call you?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: props.askForCall,
    onChange: props.changeAskForCall,
    className: "jsx-1260076774" + " " + "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: props.handleSubmit,
    className: "jsx-1260076774",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Send")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1260076774",
    css: ".contactContainer.jsx-1260076774{width:100%;margin-top:-30px;}a.jsx-1260076774{color:#111317;cursor:pointer;font-weight:bold;text-align:center;-webkit-text-decoration:none;text-decoration:none;-o-text-decoration:none;-moz-text-decoration:none;-webkit-text-decoration:none;}a.jsx-1260076774:hover{color:#BF0404;}.container.jsx-1260076774{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;height:100%;text-align:center;color:#111317;}.text.jsx-1260076774{margin:10px;}.helpText.jsx-1260076774{text-align:left;font-size:10px;font-weight:bold;margin:0px 15px;margin-top:-5px;}.contactForm.jsx-1260076774{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-1260076774{display:grid;grid-autoflow:column;}.contactForm.jsx-1260076774 input.jsx-1260076774,.contactForm.jsx-1260076774 textarea.jsx-1260076774{padding:10px;margin:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-1260076774 input.errorShadow.jsx-1260076774,.contactForm.jsx-1260076774 textarea.errorShadow.jsx-1260076774{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check.jsx-1260076774{margin:16px 5px !important;}.rowContainer.jsx-1260076774{display:grid;grid-autoflow:column;grid-template-columns:auto 1fr;}.visitUs.jsx-1260076774{color:#111317;text-align:center;}button.jsx-1260076774{cursor:pointer;border-radius:5px;border:3px solid #791716;padding:10px 30px;margin:10px;background:#BF0404;color:#fff;font-size:18px;font-weight:bold;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-1260076774:hover,button.jsx-1260076774:active{color:#BF0404;background:#fff;}img.jsx-1260076774{width:350px;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-1260076774{grid-template-columns:1fr;}img.jsx-1260076774{display:none;width:100px;}h2.jsx-1260076774{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0Rm9ybVVJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGa0IsQUFHcUIsQUFJSSxBQVVBLEFBR0ssQUFTUCxBQUdJLEFBT0gsQUFJQSxBQUtBLEFBTzRCLEFBU2QsQUFHZCxBQUtDLEFBSUMsQUFpQkQsQUFJRixBQU1nQixBQUdiLEFBSUUsV0ExR0EsQ0EwQm5CLEFBb0VzQixDQTFEZ0IsQUFJZixBQUtULEFBbUJTLEFBdUNQLENBbkdDLEFBVWpCLEFBdURvQixBQXFCRixDQWpCRSxBQWtDbEIsQ0E5RWUsR0FaSSxNQTZCQSxBQTBEbkIsQ0FKQSxDQXZDRixDQTVEQSxDQUltQixDQXNGbkIsQ0E3RG1CLENBd0NuQixBQXlCb0IsQ0EzQ3VCLEFBc0JoQixDQWpDM0IsQUF3QmlDLElBL0NsQixNQTZCWSxFQXpDUCxFQXlCRixDQU1sQixFQWxCYyxPQXdETSxLQXZETixDQWJRLEFBeUJKLENBa0NsQixJQWxCQSxBQUsyQyxNQWhDdkIsQ0F1RE4sSUEzQ2QsUUE0Q3FCLEtBdkRMLFVBMEVoQixJQXpFQSxBQStCMkMsQUF3QjlCLE9BdEVZLElBdUVSLGVBQ0UsS0F2RVEsVUFpRDNCLEVBdUIyQixjQXZFRyw2QkFDOUIsZUF1RThCLDRCQUNFLDhCQUNHLGlDQUNuQyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtVUkocHJvcHMpIHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RDb250YWluZXJcIj5cclxuICAgICAgPFRpdGxlQmFuZCB0aXRsZT1cIkxldCdzIHRhbGsgIVwiIHBvc2l0aW9uPVwiY2VudGVyXCIvPlxyXG4gICAgICA8U29jaWFsTWVkaWEgY29sb3I9XCIjMTExMzE3XCIgaG92ZXJDb2xvcj1cIiNCRjA0MDRcIiBzaXplPXszMn0gdGl0bGVDb2xvcj1cIiMxMTEzMTdcIiB0aXRsZT1cIkdldCBpbiB0b3VjaCFcIi8+XHJcbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiPmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb208L2E+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMuYWxlcnQgJiZcclxuICAgICAgICA8QWxlcnRUZXh0IHRpdGxlPXtwcm9wcy5tc2d9IHN1Y2Nlc3M9e3Byb3BzLnN1Y2Nlc3N9Lz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkZpbGwgeW91ciBkYXRhPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Rm9ybVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL0xvZ29fMTAyNC5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhY3RDb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtby10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC1tb3otdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICNCRjA0MDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWxwVGV4dHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LmVycm9yU2hhZG93LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYS5lcnJvclNoYWRvd3tcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLW8tYm94LXNoYWRvdzogICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLyotbW96LWJveC1zaGFkb3c6ICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgM3B4IDNweCA1cHggNnB4ICNjY2M7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNre1xyXG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Q29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXNpdFVze1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM3OTE3MTY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQkYwNDA0O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBNb3ppbGxhICovXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIsXHJcbiAgICAgICAgYnV0dG9uOmFjdGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiAjQkYwNDA0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1VSTsiXX0= */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ })

})
//# sourceMappingURL=contact.js.a91bd31e5ba322d7720c.hot-update.js.map