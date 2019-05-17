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
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js";






function ContactFormUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1931897581" + " " + "contactContainer",
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
    color: "#fff",
    hoverColor: "#111317",
    size: 32,
    titleColor: "#fff",
    title: "Get in touch!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:info@williamvelazquez.com",
    className: "jsx-1931897581",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "info@williamvelazquez.com"), props.alert && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AlertText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.msg,
    success: props.success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1931897581" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1931897581" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1931897581" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-1931897581",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-1931897581",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*Name",
    value: props.name,
    onChange: props.changeName,
    className: "jsx-1931897581" + " " + ((props.validName ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*E-mail",
    value: props.email,
    onChange: props.changeEmail,
    className: "jsx-1931897581" + " " + ((props.validEmail ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Phone",
    value: props.phone,
    onChange: props.changePhone,
    className: "jsx-1931897581" + " " + ((props.validPhone ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "4",
    type: "text",
    placeholder: "Comments/Suggestions",
    value: props.comments,
    onChange: props.changeComments,
    className: "jsx-1931897581",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1931897581" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1931897581" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1931897581" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Do you want me to call you?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: props.askForCall,
    onChange: props.changeAskForCall,
    className: "jsx-1931897581" + " " + "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: props.handleSubmit,
    className: "jsx-1931897581",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Send")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4047944416",
    css: "body{background-color:#8e1a1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Z5QixBQUdvQyx5QkFDM0IiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtVUkocHJvcHMpIHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RDb250YWluZXJcIj5cclxuICAgICAgPFRpdGxlQmFuZCB0aXRsZT1cIkxldCdzIHRhbGsgIVwiIHBvc2l0aW9uPVwiY2VudGVyXCIvPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhIGNvbG9yPVwiIzExMTMxN1wiIGhvdmVyQ29sb3I9XCIjQkYwNDA0XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjMTExMzE3XCIgdGl0bGU9XCJHZXQgaW4gdG91Y2ghXCIvPiAqL31cclxuICAgICAgPFNvY2lhbE1lZGlhIGNvbG9yPVwiI2ZmZlwiIGhvdmVyQ29sb3I9XCIjMTExMzE3XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjZmZmXCIgdGl0bGU9XCJHZXQgaW4gdG91Y2ghXCIvPlxyXG4gICAgICA8YSBocmVmPVwibWFpbHRvOmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIj5pbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tPC9hPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLmFsZXJ0ICYmXHJcbiAgICAgICAgPEFsZXJ0VGV4dCB0aXRsZT17cHJvcHMubXNnfSBzdWNjZXNzPXtwcm9wcy5zdWNjZXNzfS8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5GaWxsIHlvdXIgZGF0YTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC1vLXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgLW1vei10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbHBUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQsXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQuZXJyb3JTaGFkb3csXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhLmVycm9yU2hhZG93e1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtby1ib3gtc2hhZG93OiAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAvKi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDE2cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3776491876",
    css: ".contactContainer.jsx-1931897581{width:100%;margin-top:-30px;}a.jsx-1931897581{display:grid;color:#fff;cursor:pointer;font-weight:bold;text-align:center;-webkit-text-decoration:none;text-decoration:none;-o-text-decoration:none;-moz-text-decoration:none;-webkit-text-decoration:none;}a.jsx-1931897581:hover{color:#111317;}.container.jsx-1931897581{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;height:100%;text-align:center;color:#111317;}.text.jsx-1931897581{margin:10px;}.helpText.jsx-1931897581{text-align:left;font-size:10px;font-weight:bold;margin:0px 15px;margin-top:-5px;}.contactForm.jsx-1931897581{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-1931897581{display:grid;grid-autoflow:column;}.contactForm.jsx-1931897581 input.jsx-1931897581,.contactForm.jsx-1931897581 textarea.jsx-1931897581{padding:10px;margin:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-1931897581 input.errorShadow.jsx-1931897581,.contactForm.jsx-1931897581 textarea.errorShadow.jsx-1931897581{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check.jsx-1931897581{margin:16px 5px !important;}.rowContainer.jsx-1931897581{display:grid;grid-autoflow:column;grid-template-columns:auto 1fr;}.visitUs.jsx-1931897581{color:#111317;text-align:center;}button.jsx-1931897581{cursor:pointer;border-radius:5px;border:3px solid #070708;padding:10px 30px;margin:10px;background:#111317;color:#fff;font-size:18px;font-weight:bold;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-1931897581:hover,button.jsx-1931897581:active{color:#111317;background:#fff;}img.jsx-1931897581{width:350px;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-1931897581{grid-template-columns:1fr;}img.jsx-1931897581{display:none;width:100px;}h2.jsx-1931897581{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZrQixBQUdxQixBQUlFLEFBV0UsQUFHSyxBQVNQLEFBR0ksQUFPSCxBQUlBLEFBS0EsQUFPNEIsQUFTZCxBQUdkLEFBS0MsQUFJQyxBQWlCRCxBQUlGLEFBTWdCLEFBR2IsQUFJRSxXQTNHQSxDQTJCbkIsQUFvRXNCLENBM0ZULEFBaUN5QixBQUlmLEFBS1QsQUFtQlMsQUF1Q1AsQ0F6RmhCLEFBdURvQixBQXFCRixDQWpCRSxBQWtDbEIsQ0E5RWUsR0FaSSxLQWJKLENBMENJLEFBMERuQixDQUpBLENBdkNGLENBN0RBLEVBMkZBLENBN0RtQixDQXdDbkIsQUF5Qm9CLENBM0N1QixBQXNCaEIsQ0FqQzNCLEFBd0JpQyxJQS9DbEIsQ0FiSSxLQTBDUSxJQWhCVCxDQU1sQixFQWxCYyxLQWJNLEVBcUVBLEtBdkROLENBWUksQ0FrQ2xCLElBbEJBLEFBSzJDLEtBOUNyQixDQWNGLENBdUROLElBM0NkLFFBNENxQixLQXZETCxVQTBFaEIsSUF6RUEsQUErQjJDLEFBd0I5QixXQUNJLE1BdkVRLFNBd0VOLGVBdkVRLEFBaUQzQixFQXVCMkIsd0JBdkVHLDZCQUM5QixLQXVFOEIsNEJBQ0UsOEJBQ0csaUNBQ25DIiwiZmlsZSI6IkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRpdGxlQmFuZCBmcm9tICcuL1RpdGxlQmFuZCc7XHJcbmltcG9ydCBBbGVydFRleHQgZnJvbSAnLi9BbGVydFRleHQnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi9Tb2NpYWxNZWRpYSc7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybVVJKHByb3BzKSB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxUaXRsZUJhbmQgdGl0bGU9XCJMZXQncyB0YWxrICFcIiBwb3NpdGlvbj1cImNlbnRlclwiLz5cclxuICAgICAgey8qIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiMxMTEzMTdcIiBob3ZlckNvbG9yPVwiI0JGMDQwNFwiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiIzExMTMxN1wiIHRpdGxlPVwiR2V0IGluIHRvdWNoIVwiLz4gKi99XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiIHRpdGxlPVwiR2V0IGluIHRvdWNoIVwiLz5cclxuICAgICAgPGEgaHJlZj1cIm1haWx0bzppbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCI+aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbTwvYT5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5hbGVydCAmJlxyXG4gICAgICAgIDxBbGVydFRleHQgdGl0bGU9e3Byb3BzLm1zZ30gc3VjY2Vzcz17cHJvcHMuc3VjY2Vzc30vPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0XCI+RmlsbCB5b3VyIGRhdGE8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RGb3JtXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvTG9nb181MTIucG5nXCIgYWx0PVwiV2lsbGlhbSBWZWxhenF1ZXogTG9nb1wiLz5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKk5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMudmFsaWROYW1lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipFLW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZEVtYWlsP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucGhvbmV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZVBob25lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMudmFsaWRQaG9uZT9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tbWVudHMvU3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb21tZW50c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlQ29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWxwVGV4dFwiPipSZXF1aXJlZCBkYXRhPC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+RG8geW91IHdhbnQgbWUgdG8gY2FsbCB5b3U/PC9wPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuYXNrRm9yQ2FsbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VBc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHl7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGUxYTFhO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhY3RDb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtby10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC1tb3otdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWxwVGV4dHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIGlucHV0LmVycm9yU2hhZG93LFxyXG4gICAgICAgIC5jb250YWN0Rm9ybSB0ZXh0YXJlYS5lcnJvclNoYWRvd3tcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLW8tYm94LXNoYWRvdzogICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLyotbW96LWJveC1zaGFkb3c6ICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgM3B4IDNweCA1cHggNnB4ICNjY2M7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNre1xyXG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Q29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtYXV0b2Zsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXNpdFVze1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNzA3MDg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExMzE3O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBNb3ppbGxhICovXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIsXHJcbiAgICAgICAgYnV0dG9uOmFjdGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuY29udGFjdEZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1VSTsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ })

})
//# sourceMappingURL=contact.js.fda9080dc59207fdee6b.hot-update.js.map