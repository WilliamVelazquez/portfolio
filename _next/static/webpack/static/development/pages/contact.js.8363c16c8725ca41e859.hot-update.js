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
/* harmony import */ var _ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/UnderlinedLink */ "./components/ui/UnderlinedLink.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js";







function ContactFormUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2329791086" + " " + "contactContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TitleBand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Let's talk !",
    position: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:info@williamvelazquez.com",
    text: "info@williamvelazquez.com",
    color: "#fff",
    hoverColor: "#111317",
    lineColor: "#111317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:info@williamvelazquez.com",
    className: "jsx-2329791086" + " " + "animated-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "info@williamvelazquez.com"), props.alert && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AlertText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.msg,
    success: props.success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2329791086" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2329791086" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2329791086" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-2329791086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-2329791086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*Name",
    value: props.name,
    onChange: props.changeName,
    className: "jsx-2329791086" + " " + ((props.validName ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*E-mail",
    value: props.email,
    onChange: props.changeEmail,
    className: "jsx-2329791086" + " " + ((props.validEmail ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Phone",
    value: props.phone,
    onChange: props.changePhone,
    className: "jsx-2329791086" + " " + ((props.validPhone ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "4",
    type: "text",
    placeholder: "Comments/Suggestions",
    value: props.comments,
    onChange: props.changeComments,
    className: "jsx-2329791086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2329791086" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2329791086" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2329791086" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Do you want me to call you?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: props.askForCall,
    onChange: props.changeAskForCall,
    className: "jsx-2329791086" + " " + "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: props.handleSubmit,
    className: "jsx-2329791086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Send")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4047944416",
    css: "body{background-color:#8e1a1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Z5QixBQUdvQyx5QkFDM0IiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm1VSShwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgdGFsayAhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWEgY29sb3I9XCIjMTExMzE3XCIgaG92ZXJDb2xvcj1cIiNCRjA0MDRcIiBzaXplPXszMn0gdGl0bGVDb2xvcj1cIiMxMTEzMTdcIiB0aXRsZT1cIkdldCBpbiB0b3VjaCFcIi8+ICovfVxyXG4gICAgICA8U29jaWFsTWVkaWEgY29sb3I9XCIjZmZmXCIgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIiBzaXplPXszMn0gdGl0bGVDb2xvcj1cIiNmZmZcIiB0aXRsZT1cIkdldCBpbiB0b3VjaCFcIi8+XHJcbiAgICAgIDxVbmRlcmxpbmVkTGluayBcclxuICAgICAgICBocmVmPVwibWFpbHRvOmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIHRleHQ9XCJpbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCJcclxuICAgICAgICBjb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgIGhvdmVyQ29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgICBsaW5lQ29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgLz5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwiYW5pbWF0ZWQtbGlua1wiIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiPmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb208L2E+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMuYWxlcnQgJiZcclxuICAgICAgICA8QWxlcnRUZXh0IHRpdGxlPXtwcm9wcy5tc2d9IHN1Y2Nlc3M9e3Byb3BzLnN1Y2Nlc3N9Lz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkZpbGwgeW91ciBkYXRhPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Rm9ybVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL0xvZ29fNTEyLnBuZ1wiIGFsdD1cIldpbGxpYW0gVmVsYXpxdWV6IExvZ29cIi8+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkTmFtZT9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqRS1tYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMudmFsaWRFbWFpbD9cIlwiOlwiZXJyb3JTaGFkb3dcIn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBob25lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VQaG9uZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkUGhvbmU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRzL1N1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUNvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscFRleHRcIj4qUmVxdWlyZWQgZGF0YTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPkRvIHlvdSB3YW50IG1lIHRvIGNhbGwgeW91PzwvcD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlQXNrRm9yQ2FsbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhlMWExYTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWN0Q29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgLW8tdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtbW96LXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW5pbWF0ZWQtbGluazpiZWZvcmV7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW5pbWF0ZWQtbGluazpob3ZlcjpiZWZvcmV7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVscFRleHR7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RGb3Jte1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWF1dG9mbG93OiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybSBpbnB1dCxcclxuICAgICAgICAuY29udGFjdEZvcm0gdGV4dGFyZWF7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMTEzMTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybSBpbnB1dC5lcnJvclNoYWRvdyxcclxuICAgICAgICAuY29udGFjdEZvcm0gdGV4dGFyZWEuZXJyb3JTaGFkb3d7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAgICAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1vLWJveC1zaGFkb3c6ICAgICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC8qLW1vei1ib3gtc2hhZG93OiAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAgICAgICAgIDNweCAzcHggNXB4IDZweCAjY2NjOyovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja3tcclxuICAgICAgICAgIG1hcmdpbjogMTZweCA1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvd0NvbnRhaW5lcntcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLWF1dG9mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlzaXRVc3tcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDcwNzA4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzExMTMxNztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogT3BlcmEgKi9cclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogTW96aWxsYSAqL1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIGJ1dHRvbjphY3RpdmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG4gICAgICAgICAgLmNvbnRhY3RGb3Jte1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtVUk7Il19 */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1688801479",
    css: ".contactContainer.jsx-2329791086{width:100%;margin-top:-30px;}a.jsx-2329791086{color:#fff;display:grid;cursor:pointer;font-weight:bold;text-align:center;position:relative;-webkit-text-decoration:none;text-decoration:none;-o-text-decoration:none;-moz-text-decoration:none;-webkit-text-decoration:none;}a.jsx-2329791086:hover{color:#111317;}.animated-link.jsx-2329791086:before{left:0;bottom:0;height:2px;content:\"\";width:100%;position:absolute;background-color:#000;visibility:hidden;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-o-transform:scaleX(0);-moz-transform:scaleX(0);-webkit-transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;-o-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;}.animated-link.jsx-2329791086:hover.jsx-2329791086:before{visibility:visible;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);-o-transform:scaleX(1);-moz-transform:scaleX(1);-webkit-transform:scaleX(1);}.container.jsx-2329791086{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;height:100%;text-align:center;color:#111317;}.text.jsx-2329791086{margin:10px;}.helpText.jsx-2329791086{text-align:left;font-size:10px;font-weight:bold;margin:0px 15px;margin-top:-5px;}.contactForm.jsx-2329791086{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-2329791086{display:grid;grid-autoflow:column;}.contactForm.jsx-2329791086 input.jsx-2329791086,.contactForm.jsx-2329791086 textarea.jsx-2329791086{padding:10px;margin:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-2329791086 input.errorShadow.jsx-2329791086,.contactForm.jsx-2329791086 textarea.errorShadow.jsx-2329791086{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check.jsx-2329791086{margin:16px 5px !important;}.rowContainer.jsx-2329791086{display:grid;grid-autoflow:column;grid-template-columns:auto 1fr;}.visitUs.jsx-2329791086{color:#111317;text-align:center;}button.jsx-2329791086{cursor:pointer;border-radius:5px;border:3px solid #070708;padding:10px 30px;margin:10px;background:#111317;color:#fff;font-size:18px;font-weight:bold;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-2329791086:hover,button.jsx-2329791086:active{color:#111317;background:#fff;}img.jsx-2329791086{width:350px;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-2329791086{grid-template-columns:1fr;}img.jsx-2329791086{display:none;width:100px;}h2.jsx-2329791086{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZrQixBQUdxQixBQUlDLEFBWUcsQUFHUCxBQWtCWSxBQU9BLEFBU1AsQUFHSSxBQU9ILEFBSUEsQUFLQSxBQU80QixBQVNkLEFBR2QsQUFLQyxBQUlDLEFBaUJELEFBSUYsQUFNZ0IsQUFHYixBQUlFLE9BbEhSLElBbkJRLEFBSUwsQ0FpRGQsQUFvRXNCLENBMURnQixBQUlmLEFBS1QsQUFtQlMsQUF1Q1AsQ0FsSGhCLEFBZ0ZvQixBQXFCRixDQWpCRSxBQWtDbEIsQ0FsSFcsQUFvQ0ksR0FuQkssQUFPRCxLQXZDSixDQW9FSSxBQTBEbkIsQ0FKQSxDQTFHVyxBQW1FYixDQXZGQSxFQXFIQSxDQTdEbUIsQ0F3Q25CLEFBeUJvQixDQTNDdUIsQUFzQmhCLENBakMzQixBQXdCaUMsSUF0RXBCLEFBdUJFLENBdkNJLEtBb0VRLElBaEJULENBbkNFLEFBeUNwQixFQWxCYyxLQXZDTSxFQStGQSxLQXZETixDQVlJLENBa0NsQixFQXJFd0IsRUFtRHhCLEFBSzJDLEtBeEV2QixDQXdDQSxDQXVETixJQTNDZCxRQTRDcUIsQ0EvRUQsRUFhSyxDQTdCSCxDQXdDTixVQTBFaEIsSUFqR3NCLEFBd0J0QixBQStCMkMsQUF3QjlCLE9BbEVjLElBbUVWLGVBQ0UsTUFuRVcsR0E5QkwsTUEyRXpCLEVBdUIyQixnQkFqR0EsQ0E4QjNCLFlBZHlCLGFBZkssVUFnQkgsTUFpRkcsYUFoRzlCLE1BZ0I4QixTQWlGRSxtQkFoRkssV0FpRkYsaUNBQ25DLGtDQWpGd0Msc0NBQ0Usd0NBQ0csMkNBQzdDIiwiZmlsZSI6IkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRpdGxlQmFuZCBmcm9tICcuL1RpdGxlQmFuZCc7XHJcbmltcG9ydCBBbGVydFRleHQgZnJvbSAnLi9BbGVydFRleHQnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi9Tb2NpYWxNZWRpYSc7XHJcbmltcG9ydCBVbmRlcmxpbmVkTGluayBmcm9tICcuL3VpL1VuZGVybGluZWRMaW5rJztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtVUkocHJvcHMpIHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RDb250YWluZXJcIj5cclxuICAgICAgPFRpdGxlQmFuZCB0aXRsZT1cIkxldCdzIHRhbGsgIVwiIHBvc2l0aW9uPVwiY2VudGVyXCIvPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhIGNvbG9yPVwiIzExMTMxN1wiIGhvdmVyQ29sb3I9XCIjQkYwNDA0XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjMTExMzE3XCIgdGl0bGU9XCJHZXQgaW4gdG91Y2ghXCIvPiAqL31cclxuICAgICAgPFNvY2lhbE1lZGlhIGNvbG9yPVwiI2ZmZlwiIGhvdmVyQ29sb3I9XCIjMTExMzE3XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjZmZmXCIgdGl0bGU9XCJHZXQgaW4gdG91Y2ghXCIvPlxyXG4gICAgICA8VW5kZXJsaW5lZExpbmsgXHJcbiAgICAgICAgaHJlZj1cIm1haWx0bzppbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCJcclxuICAgICAgICB0ZXh0PVwiaW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgY29sb3I9XCIjZmZmXCJcclxuICAgICAgICBob3ZlckNvbG9yPVwiIzExMTMxN1wiXHJcbiAgICAgICAgbGluZUNvbG9yPVwiIzExMTMxN1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImFuaW1hdGVkLWxpbmtcIiBocmVmPVwibWFpbHRvOmluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIj5pbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tPC9hPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLmFsZXJ0ICYmXHJcbiAgICAgICAgPEFsZXJ0VGV4dCB0aXRsZT17cHJvcHMubXNnfSBzdWNjZXNzPXtwcm9wcy5zdWNjZXNzfS8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5GaWxsIHlvdXIgZGF0YTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC1vLXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgLW1vei10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFuaW1hdGVkLWxpbms6YmVmb3Jle1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFuaW1hdGVkLWxpbms6aG92ZXI6YmVmb3Jle1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbHBUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQsXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQuZXJyb3JTaGFkb3csXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhLmVycm9yU2hhZG93e1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtby1ib3gtc2hhZG93OiAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAvKi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDE2cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ }),

/***/ "./components/ui/UnderlinedLink.js":
/*!*****************************************!*\
  !*** ./components/ui/UnderlinedLink.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ui\\UnderlinedLink.js";



function SimpleCard(props) {
  var href = props.href,
      text = props.text,
      color = props.color,
      hoverColor = props.hoverColor,
      lineColor = props.lineColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1377617035", [color, hoverColor, lineColor]]]) + " " + "textContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: href,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1377617035", [color, hoverColor, lineColor]]]) + " " + "animated-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1377617035",
    css: "a.__jsx-style-dynamic-selector{color:".concat(color, ";display:grid;cursor:pointer;font-weight:bold;text-align:center;position:relative;-webkit-text-decoration:none;text-decoration:none;-o-text-decoration:none;-moz-text-decoration:none;-webkit-text-decoration:none;}a.__jsx-style-dynamic-selector:hover{color:").concat(hoverColor, ";}.animated-link.__jsx-style-dynamic-selector:before{left:0;bottom:0;height:2px;content:\"\";width:100%;position:absolute;background-color:").concat(lineColor, ";visibility:hidden;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-o-transform:scaleX(0);-moz-transform:scaleX(0);-webkit-transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;-o-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;}.animated-link.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:before{visibility:visible;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);-o-transform:scaleX(1);-moz-transform:scaleX(1);-webkit-transform:scaleX(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxVbmRlcmxpbmVkTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IsQUFHeUMsQUFZQSxBQUc1QixBQWtCWSxPQWpCVixTQUNFLEdBaUJTLFFBaEJULFFBakJDLEFBWWIsR0FNWSxVQWpCSSxDQWtCRyxjQWpCRCxJQWtCNkIsYUFqQjVCLFdBK0JLLE9BOUJMLGVBaUJBLENBY08sRUE5QkwsZUFpQkEsUUFjUSwyQkE5QkwsQ0ErQnhCLHVCQTlCMEIsYUFnQkYsYUFmSyxVQWdCSCxtQkFmcEIsTUFnQnVCLDRCQUNPLDhFQUNHLHNDQUNFLHdDQUNHLDJDQUM1QyIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcVW5kZXJsaW5lZExpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gU2ltcGxlQ2FyZChwcm9wcykge1xyXG5cdGNvbnN0IHsgaHJlZiwgdGV4dCwgY29sb3IsIGhvdmVyQ29sb3IsIGxpbmVDb2xvciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImFuaW1hdGVkLWxpbmtcIiBocmVmPXtocmVmfT57dGV4dH08L2E+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhe1xyXG5cdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3J9O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpncmlkO1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdC1vLXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cdFx0XHRcdFx0LW1vei10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICB9XHJcblx0XHRcdFx0YTpob3ZlcntcclxuXHRcdFx0XHRcdGNvbG9yOiAke2hvdmVyQ29sb3J9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYW5pbWF0ZWQtbGluazpiZWZvcmV7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke2xpbmVDb2xvcn07XHJcblx0XHRcdFx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuXHRcdFx0XHRcdC1vLXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG5cdFx0XHRcdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuXHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuXHRcdFx0XHRcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG5cdFx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuXHRcdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5hbmltYXRlZC1saW5rOmhvdmVyOmJlZm9yZXtcclxuXHRcdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuXHRcdFx0XHRcdC1vLXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG5cdFx0XHRcdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuXHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcblx0XHRcdFx0fVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVDYXJkOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\UnderlinedLink.js */"),
    dynamic: [color, hoverColor, lineColor],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleCard);

/***/ })

})
//# sourceMappingURL=contact.js.8363c16c8725ca41e859.hot-update.js.map