webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/ContactData.js":
false,

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
    className: "jsx-2521269676" + " " + "contactContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_TitleBand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Let's talk !",
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
    title: "Get in touch!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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
      lineNumber: 13
    },
    __self: this
  }), props.alert && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_AlertText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.msg,
    success: props.success,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521269676" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2521269676" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Fill your data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521269676" + " " + "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Logo_512.png",
    alt: "William Velazquez Logo",
    className: "jsx-2521269676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-2521269676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*Name",
    value: props.name,
    onChange: props.changeName,
    className: "jsx-2521269676" + " " + ((props.validName ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "*E-mail",
    value: props.email,
    onChange: props.changeEmail,
    className: "jsx-2521269676" + " " + ((props.validEmail ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Phone",
    value: props.phone,
    onChange: props.changePhone,
    className: "jsx-2521269676" + " " + ((props.validPhone ? "" : "errorShadow") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "4",
    type: "text",
    placeholder: "Comments/Suggestions",
    value: props.comments,
    onChange: props.changeComments,
    className: "jsx-2521269676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2521269676" + " " + "helpText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "*Required data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521269676" + " " + "rowContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2521269676" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Do you want me to call you?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: props.askForCall,
    onChange: props.changeAskForCall,
    className: "jsx-2521269676" + " " + "check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: props.handleSubmit,
    className: "jsx-2521269676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Send")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4047944416",
    css: "body{background-color:#8e1a1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0Z5QixBQUdvQyx5QkFDM0IiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL3VpL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL3NlY3Rpb25zL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm1VSShwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgdGFsayAhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiIHRpdGxlPVwiR2V0IGluIHRvdWNoIVwiLz5cclxuICAgICAgPFVuZGVybGluZWRMaW5rIFxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgdGV4dD1cImluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGxpbmVDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLmFsZXJ0ICYmXHJcbiAgICAgICAgPEFsZXJ0VGV4dCB0aXRsZT17cHJvcHMubXNnfSBzdWNjZXNzPXtwcm9wcy5zdWNjZXNzfS8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5GaWxsIHlvdXIgZGF0YTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbHBUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQsXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQuZXJyb3JTaGFkb3csXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhLmVycm9yU2hhZG93e1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtby1ib3gtc2hhZG93OiAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAvKi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDE2cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1045378117",
    css: ".contactContainer.jsx-2521269676{width:100%;margin-top:-30px;}.container.jsx-2521269676{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;height:100%;text-align:center;color:#111317;}.text.jsx-2521269676{margin:10px;}.helpText.jsx-2521269676{text-align:left;font-size:10px;font-weight:bold;margin:0px 15px;margin-top:-5px;}.contactForm.jsx-2521269676{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-2521269676{display:grid;grid-autoflow:column;}.contactForm.jsx-2521269676 input.jsx-2521269676,.contactForm.jsx-2521269676 textarea.jsx-2521269676{padding:10px;margin:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-2521269676 input.errorShadow.jsx-2521269676,.contactForm.jsx-2521269676 textarea.errorShadow.jsx-2521269676{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check.jsx-2521269676{margin:16px 5px !important;}.rowContainer.jsx-2521269676{display:grid;grid-autoflow:column;grid-template-columns:auto 1fr;}.visitUs.jsx-2521269676{color:#111317;text-align:center;}button.jsx-2521269676{cursor:pointer;border-radius:5px;border:3px solid #070708;padding:10px 30px;margin:10px;background:#111317;color:#fff;font-size:18px;font-weight:bold;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-2521269676:hover,button.jsx-2521269676:active{color:#111317;background:#fff;}img.jsx-2521269676{width:350px;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-2521269676{grid-template-columns:1fr;}img.jsx-2521269676{display:none;width:100px;}h2.jsx-2521269676{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZrQixBQUdxQixBQUlTLEFBU1AsQUFHSSxBQU9ILEFBSUEsQUFLQSxBQU80QixBQVNkLEFBR2QsQUFLQyxBQUlDLEFBaUJELEFBSUYsQUFNZ0IsQUFHYixBQUlFLFdBN0ZBLENBYW5CLEFBb0VzQixDQTFEZ0IsQUFJZixBQUtULEFBbUJTLEFBdUNQLENBbENJLEFBcUJGLENBakJFLEFBa0NsQixDQTlFZSxHQVpJLE1BNkJBLEFBMERuQixDQUpBLENBdkNGLENBL0NBLEVBNkVBLENBN0RtQixDQXdDbkIsQUF5Qm9CLENBM0N1QixBQXNCaEIsQ0FqQzNCLEFBd0JpQyxJQS9DbEIsTUE2QlksSUFoQlQsQ0FNbEIsRUFsQmMsT0F3RE0sS0F2RE4sQ0FZSSxDQWtDbEIsSUFsQkEsQUFLMkMsTUFoQ3ZCLENBdUROLElBM0NkLFFBNENxQixLQXZETCxVQTBFaEIsSUF6RUEsQUErQjJDLEFBd0I5QixXQUNJLGVBQ0UsZUF0Qm5CLEVBdUIyQiwwREFDRyw0QkFDRSw4QkFDRyxpQ0FDbkMiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL3VpL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL3NlY3Rpb25zL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm1VSShwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgdGFsayAhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiIHRpdGxlPVwiR2V0IGluIHRvdWNoIVwiLz5cclxuICAgICAgPFVuZGVybGluZWRMaW5rIFxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgdGV4dD1cImluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGxpbmVDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLmFsZXJ0ICYmXHJcbiAgICAgICAgPEFsZXJ0VGV4dCB0aXRsZT17cHJvcHMubXNnfSBzdWNjZXNzPXtwcm9wcy5zdWNjZXNzfS8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5GaWxsIHlvdXIgZGF0YTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbHBUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQsXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQuZXJyb3JTaGFkb3csXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhLmVycm9yU2hhZG93e1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtby1ib3gtc2hhZG93OiAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAvKi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDE2cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ }),

/***/ "./components/SocialMedia.js":
false,

/***/ "./components/sections/ContactData.js":
/*!********************************************!*\
  !*** ./components/sections/ContactData.js ***!
  \********************************************/
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
/* harmony import */ var _icons_PhoneIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/PhoneIcon */ "./components/icons/PhoneIcon.js");
/* harmony import */ var _icons_SmMailIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/SmMailIcon */ "./components/icons/SmMailIcon.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\sections\\ContactData.js";






function ContactData(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-289544197" + " " + "contactData",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-289544197" + " " + "footerTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-289544197" + " " + "iconLine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_SmMailIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "white",
    size: 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:info@williamvelazquez.com",
    className: "jsx-289544197",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "info@williamvelazquez.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-289544197",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Want to work together or any advice? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-289544197" + " " + "not-breakable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Let's talk!"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "289544197",
    css: ".contactData.jsx-289544197{display:grid;grid-template-columns:1fr;grid-row-gap:20px;justify-items:left;}.iconLine.jsx-289544197{display:grid;grid-template-columns:30px 1fr;}p.jsx-289544197,a.jsx-289544197,span.jsx-289544197{color:#fff;text-align:center;}a.jsx-289544197{cursor:pointer;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;-o-text-decoration:none;-moz-text-decoration:none;-webkit-text-decoration:none;}a.jsx-289544197:hover{color:#BF0404;}.not-breakable.jsx-289544197{white-space:nowrap;}.footerTitle.jsx-289544197{font-size:20px;font-weight:bold;}.footerTitle.jsx-289544197:after{content:\" \";border:1px solid #fff;margin:10px 0px;display:block;max-width:120px;}@media only screen and (max-width :768px){.contactData.jsx-289544197{justify-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxDb250YWN0RGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCLEFBR3VCLEFBTUEsQUFJRCxBQUlJLEFBUUQsQUFHSyxBQUdKLEFBUUgsQUFVVyxXQW5DTCxDQTBCSSxDQXBDSSxBQU1LLENBZ0JqQyxDQVJtQixBQWNBLElBSG5CLEVBcUJFLFFBbkNGLEdBSXNCLEFBa0J0QixFQU1rQixLQXRDRSxLQU1wQixNQWlDZ0IsT0F0Q0ssT0F1Q0gsWUF0Q2xCLElBdUNBLEVBMUJ5Qix3QkFDRSwwQkFDRyw2QkFDOUIiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcc2VjdGlvbnNcXENvbnRhY3REYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnLi4vaWNvbnMvUGhvbmVJY29uJztcclxuaW1wb3J0IFNtTWFpbEljb24gZnJvbSAnLi4vaWNvbnMvU21NYWlsSWNvbic7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0RGF0YShwcm9wcykge1xyXG5cdHJldHVybihcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdERhdGFcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyVGl0bGVcIj5Db250YWN0PC9zcGFuPlxyXG5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbkxpbmVcIj48U21NYWlsSWNvbiBjb2xvcj1cIndoaXRlXCIgc2l6ZT17MzJ9IC8+PGEgaHJlZj1cIm1haWx0bzppbmZvQHdpbGxpYW12ZWxhenF1ZXouY29tXCI+aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbTwvYT48L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtcIldhbnQgdG8gd29yayB0b2dldGhlciBvciBhbnkgYWR2aWNlPyBcIn1cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vdC1icmVha2FibGVcIj5MZXQncyB0YWxrITwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdERhdGF7XHJcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIGdyaWQtcm93LWdhcDogMjBweDtcclxuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uTGluZXtcclxuICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAsIGEsIHNwYW57XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtby10ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgIC1tb3otdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICNCRjA0MDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3QtYnJlYWthYmxle1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlclRpdGxle1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgICAvKiBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgLyogcGFkZGluZzogNXB4OyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyVGl0bGU6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgLyptYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsqL1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDsvKjgwcHgqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG4gICAgICAgICAgLmNvbnRhY3REYXRhe1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0RGF0YTsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\sections\\ContactData.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactData);

/***/ }),

/***/ "./components/sections/Footer.js":
/*!***************************************!*\
  !*** ./components/sections/Footer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_TopButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/TopButton */ "./containers/TopButton.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialMedia */ "./components/sections/SocialMedia.js");
/* harmony import */ var _ContactData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactData */ "./components/sections/ContactData.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Copyright */ "./components/sections/Copyright.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\sections\\Footer.js";







function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-669252776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_TopButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-669252776" + " " + "footerContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContactData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "#fff",
    hoverColor: "#BF0404",
    size: 32,
    titleColor: "#fff",
    title: "Follow me!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Copyright__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-669252776" + " " + "colorBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "669252776",
    css: "footer.jsx-669252776{background:#111317;left:0;right:0;bottom:0;z-index:99;box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);-o-box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);-moz-box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);-webkit-box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);}.footerContent.jsx-669252776{display:grid;grid-template-columns:repeat(2,1fr);padding:15px 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;}.colorBar.jsx-669252776{background:#8e1a1a;height:8px;}img.jsx-669252776{width:35px;}@media only screen and (max-width :768px){.footerContent.jsx-669252776{grid-template-columns:1fr;grid-row-gap:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUc4QixBQVlOLEFBVU0sQUFJUixBQUlpQixXQUg5QixFQWR1QyxNQVo5QixBQXNCSSxPQXJCSCxBQTZCWSxJQVB0QixJQXJCVyxTQUNFLENBNEJYLEtBZmtCLEtBWnFCLGFBYXBCLDBCQVp1QiwwQ0FDRSx5QkFZdkIsbUJBWDBCLEVBWWpELDZDQVZBIiwiZmlsZSI6IkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRvcEJ1dHRvbiBmcm9tICcuLi8uLi9jb250YWluZXJzL1RvcEJ1dHRvbic7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IENvbnRhY3REYXRhIGZyb20gJy4vQ29udGFjdERhdGEnO1xyXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4vQ29weXJpZ2h0JztcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xyXG5cdHJldHVybihcclxuXHRcdDxmb290ZXI+XHJcbiAgICAgIDxUb3BCdXR0b24gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJDb250ZW50XCI+XHJcbiAgICAgICAgPENvbnRhY3REYXRhIC8+XHJcbiAgICAgICAgPFNvY2lhbE1lZGlhIGNvbG9yPVwiI2ZmZlwiIGhvdmVyQ29sb3I9XCIjQkYwNDA0XCIgc2l6ZT17MzJ9IHRpdGxlQ29sb3I9XCIjZmZmXCIgdGl0bGU9XCJGb2xsb3cgbWUhXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvckJhclwiPjwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvb3RlcntcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAgIC1vLWJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgICAvKmhlaWdodDogMjAwcHg7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlckNvbnRlbnR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICAgIC8qaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7Ki9cclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xvckJhcntcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4ZTFhMWE7XHJcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuZm9vdGVyQ29udGVudHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZm9vdGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\sections\\Footer.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/TwitterIcon */ "./components/icons/TwitterIcon.js");
/* harmony import */ var _icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/FacebookIcon */ "./components/icons/FacebookIcon.js");
/* harmony import */ var _icons_LinkedInIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/LinkedInIcon */ "./components/icons/LinkedInIcon.js");
/* harmony import */ var _icons_GithubIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/GithubIcon */ "./components/icons/GithubIcon.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\sections\\SocialMedia.js";








function SocialMedia(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "socialMediaContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "socialMediaTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "socialMedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/WilliamVlazquez",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: props.color || "#fff",
    hoverColor: props.hoverColor || "#052A4F",
    size: props.size || 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), props.withFB && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.facebook.com/WilliamVelazquezA",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: props.color || "#fff",
    hoverColor: props.hoverColor || "#052A4F",
    size: props.size || 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.linkedin.com/in/williamvelazquez/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_LinkedInIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: props.color || "#fff",
    hoverColor: props.hoverColor || "#052A4F",
    size: props.size || 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    type: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/WilliamVelazquez",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3601885742", [props.titleColor || "#fff"]]]) + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_GithubIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: props.color || "#fff",
    hoverColor: props.hoverColor || "#052A4F",
    size: props.size || 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3601885742",
    css: ".socialMediaContainer.__jsx-style-dynamic-selector{display:grid;grid-template-rows:repeat(2,1fr);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-row-gap:20px;margin:20px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.socialMedia.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(3,80px);grid-column-gap:20px;}.icon.__jsx-style-dynamic-selector{justify-self:center;cursor:pointer;}.socialMediaTitle.__jsx-style-dynamic-selector{font-size:20px;font-weight:bold;color:".concat(props.titleColor || "#fff", ";justify-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxTb2NpYWxNZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBR3VCLEFBUUEsQUFLUSxBQUlMLGFBaEJtQixBQVFJLEVBU3JCLEtBSkYsWUFLb0IsR0FKckMsV0FicUIsSUFRRSxpQkFVRCxJQVR0QixnQkFVQSxvREFsQm9CLGtCQUNOLFlBQ1csbUdBQ3pCIiwiZmlsZSI6IkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxTb2NpYWxNZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnLi4vaWNvbnMvVHdpdHRlckljb24nO1xyXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJy4uL2ljb25zL0ZhY2Vib29rSWNvbic7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSAnLi4vaWNvbnMvTGlua2VkSW5JY29uJztcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSAnLi4vaWNvbnMvR2l0aHViSWNvbic7XHJcblxyXG5mdW5jdGlvbiBTb2NpYWxNZWRpYShwcm9wcykge1xyXG5cdHJldHVybihcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFDb250YWluZXJcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29jaWFsTWVkaWFUaXRsZVwiPntwcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAgXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9XaWxsaWFtVmxhenF1ZXpcIiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgIDxUd2l0dGVySWNvbiBcclxuICAgICAgICAgICAgY29sb3I9e3Byb3BzLmNvbG9yfHxcIiNmZmZcIn0gXHJcbiAgICAgICAgICAgIGhvdmVyQ29sb3I9e3Byb3BzLmhvdmVyQ29sb3IgfHxcIiMwNTJBNEZcIn0gXHJcbiAgICAgICAgICAgIHNpemU9e3Byb3BzLnNpemV8fDMyfSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wcy53aXRoRkIgJiZcclxuICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAgXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vV2lsbGlhbVZlbGF6cXVlekFcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8RmFjZWJvb2tJY29uIFxyXG4gICAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5jb2xvcnx8XCIjZmZmXCJ9IFxyXG4gICAgICAgICAgICAgIGhvdmVyQ29sb3I9e3Byb3BzLmhvdmVyQ29sb3IgfHxcIiMwNTJBNEZcIn0gXHJcbiAgICAgICAgICAgICAgc2l6ZT17cHJvcHMuc2l6ZXx8MzJ9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPGEgXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiICBcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2lsbGlhbXZlbGF6cXVlei9cIiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgIDxMaW5rZWRJbkljb24gXHJcbiAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5jb2xvcnx8XCIjZmZmXCJ9IFxyXG4gICAgICAgICAgICBob3ZlckNvbG9yPXtwcm9wcy5ob3ZlckNvbG9yIHx8XCIjMDUyQTRGXCJ9IFxyXG4gICAgICAgICAgICBzaXplPXtwcm9wcy5zaXplfHwzMn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGEgXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiICBcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vV2lsbGlhbVZlbGF6cXVlelwiIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgPEdpdGh1Ykljb24gXHJcbiAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5jb2xvcnx8XCIjZmZmXCJ9IFxyXG4gICAgICAgICAgICBob3ZlckNvbG9yPXtwcm9wcy5ob3ZlckNvbG9yIHx8XCIjMDUyQTRGXCJ9IFxyXG4gICAgICAgICAgICBzaXplPXtwcm9wcy5zaXplfHwzMn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnNvY2lhbE1lZGlhQ29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbE1lZGlhe1xyXG4gICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgODBweCk7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWxNZWRpYVRpdGxle1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcy50aXRsZUNvbG9yfHxcIiNmZmZcIn07XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE1lZGlhOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\sections\\SocialMedia.js */"),
    dynamic: [props.titleColor || "#fff"],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ })

})
//# sourceMappingURL=contact.js.980c667a54b0b183eed6.hot-update.js.map