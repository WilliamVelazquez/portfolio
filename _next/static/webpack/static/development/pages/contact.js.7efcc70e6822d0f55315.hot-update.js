webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/AlertText.js":
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
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialMedia */ "./components/SocialMedia.js");
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
    css: "body{background-color:#8e1a1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0Z5QixBQUdvQyx5QkFDM0IiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL3VpL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm1VSShwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgdGFsayAhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiIHRpdGxlPVwiR2V0IGluIHRvdWNoIVwiLz5cclxuICAgICAgPFVuZGVybGluZWRMaW5rIFxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgdGV4dD1cImluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGxpbmVDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLmFsZXJ0ICYmXHJcbiAgICAgICAgPEFsZXJ0VGV4dCB0aXRsZT17cHJvcHMubXNnfSBzdWNjZXNzPXtwcm9wcy5zdWNjZXNzfS8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5GaWxsIHlvdXIgZGF0YTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbHBUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQsXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQuZXJyb3JTaGFkb3csXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhLmVycm9yU2hhZG93e1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtby1ib3gtc2hhZG93OiAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAvKi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDE2cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1045378117",
    css: ".contactContainer.jsx-2521269676{width:100%;margin-top:-30px;}.container.jsx-2521269676{border-radius:10px;background:#eaeaea;padding:10px;margin:30px;height:100%;text-align:center;color:#111317;}.text.jsx-2521269676{margin:10px;}.helpText.jsx-2521269676{text-align:left;font-size:10px;font-weight:bold;margin:0px 15px;margin-top:-5px;}.contactForm.jsx-2521269676{display:grid;grid-template-columns:repeat(2,1fr);}form.jsx-2521269676{display:grid;grid-autoflow:column;}.contactForm.jsx-2521269676 input.jsx-2521269676,.contactForm.jsx-2521269676 textarea.jsx-2521269676{padding:10px;margin:10px;border-radius:10px;border:2px solid #111317;}.contactForm.jsx-2521269676 input.errorShadow.jsx-2521269676,.contactForm.jsx-2521269676 textarea.errorShadow.jsx-2521269676{box-shadow:0px 0px 10px 1px #f00;-o-box-shadow:0px 0px 10px 1px #f00;-moz-box-shadow:0px 0px 10px 1px #f00;-webkit-box-shadow:0px 0px 10px 1px #f00;}.check.jsx-2521269676{margin:16px 5px !important;}.rowContainer.jsx-2521269676{display:grid;grid-autoflow:column;grid-template-columns:auto 1fr;}.visitUs.jsx-2521269676{color:#111317;text-align:center;}button.jsx-2521269676{cursor:pointer;border-radius:5px;border:3px solid #070708;padding:10px 30px;margin:10px;background:#111317;color:#fff;font-size:18px;font-weight:bold;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;}button.jsx-2521269676:hover,button.jsx-2521269676:active{color:#111317;background:#fff;}img.jsx-2521269676{width:350px;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width :768px){.contactForm.jsx-2521269676{grid-template-columns:1fr;}img.jsx-2521269676{display:none;width:100px;}h2.jsx-2521269676{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3RGb3JtVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZrQixBQUdxQixBQUlTLEFBU1AsQUFHSSxBQU9ILEFBSUEsQUFLQSxBQU80QixBQVNkLEFBR2QsQUFLQyxBQUlDLEFBaUJELEFBSUYsQUFNZ0IsQUFHYixBQUlFLFdBN0ZBLENBYW5CLEFBb0VzQixDQTFEZ0IsQUFJZixBQUtULEFBbUJTLEFBdUNQLENBbENJLEFBcUJGLENBakJFLEFBa0NsQixDQTlFZSxHQVpJLE1BNkJBLEFBMERuQixDQUpBLENBdkNGLENBL0NBLEVBNkVBLENBN0RtQixDQXdDbkIsQUF5Qm9CLENBM0N1QixBQXNCaEIsQ0FqQzNCLEFBd0JpQyxJQS9DbEIsTUE2QlksSUFoQlQsQ0FNbEIsRUFsQmMsT0F3RE0sS0F2RE4sQ0FZSSxDQWtDbEIsSUFsQkEsQUFLMkMsTUFoQ3ZCLENBdUROLElBM0NkLFFBNENxQixLQXZETCxVQTBFaEIsSUF6RUEsQUErQjJDLEFBd0I5QixXQUNJLGVBQ0UsZUF0Qm5CLEVBdUIyQiwwREFDRyw0QkFDRSw4QkFDRyxpQ0FDbkMiLCJmaWxlIjoiRTpcXFByb3llY3Rvc1xcUmVhY3RcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdEZvcm1VSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGl0bGVCYW5kIGZyb20gJy4vdWkvVGl0bGVCYW5kJztcclxuaW1wb3J0IEFsZXJ0VGV4dCBmcm9tICcuL3VpL0FsZXJ0VGV4dCc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IFVuZGVybGluZWRMaW5rIGZyb20gJy4vdWkvVW5kZXJsaW5lZExpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm1VSShwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICA8VGl0bGVCYW5kIHRpdGxlPVwiTGV0J3MgdGFsayAhXCIgcG9zaXRpb249XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxTb2NpYWxNZWRpYSBjb2xvcj1cIiNmZmZcIiBob3ZlckNvbG9yPVwiIzExMTMxN1wiIHNpemU9ezMyfSB0aXRsZUNvbG9yPVwiI2ZmZlwiIHRpdGxlPVwiR2V0IGluIHRvdWNoIVwiLz5cclxuICAgICAgPFVuZGVybGluZWRMaW5rIFxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B3aWxsaWFtdmVsYXpxdWV6LmNvbVwiXHJcbiAgICAgICAgdGV4dD1cImluZm9Ad2lsbGlhbXZlbGF6cXVlei5jb21cIlxyXG4gICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgaG92ZXJDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAgIGxpbmVDb2xvcj1cIiMxMTEzMTdcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLmFsZXJ0ICYmXHJcbiAgICAgICAgPEFsZXJ0VGV4dCB0aXRsZT17cHJvcHMubXNnfSBzdWNjZXNzPXtwcm9wcy5zdWNjZXNzfS8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5GaWxsIHlvdXIgZGF0YTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9Mb2dvXzUxMi5wbmdcIiBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVleiBMb2dvXCIvPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZE5hbWU/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLnZhbGlkRW1haWw/XCJcIjpcImVycm9yU2hhZG93XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5waG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlUGhvbmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy52YWxpZFBob25lP1wiXCI6XCJlcnJvclNoYWRvd1wifVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50cy9TdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBUZXh0XCI+KlJlcXVpcmVkIGRhdGE8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5EbyB5b3Ugd2FudCBtZSB0byBjYWxsIHlvdT88L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hc2tGb3JDYWxsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZUFza0ZvckNhbGx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFjdENvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbHBUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQsXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExMzE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEZvcm0gaW5wdXQuZXJyb3JTaGFkb3csXHJcbiAgICAgICAgLmNvbnRhY3RGb3JtIHRleHRhcmVhLmVycm9yU2hhZG93e1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAtby1ib3gtc2hhZG93OiAgICAgIDBweCAwcHggMTBweCAxcHggI2YwMDtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDBweCAxMHB4IDFweCAjZjAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNmMDA7XHJcbiAgICAgICAgICAvKi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDE2cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3dDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc2l0VXN7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTMxNztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA3MDcwODtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTEzMTc7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE9wZXJhICovXHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIE1vemlsbGEgKi9cclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICBidXR0b246YWN0aXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgICAgICAgIC5jb250YWN0Rm9ybXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVVJOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ContactFormUI.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactFormUI);

/***/ }),

/***/ "./components/ui/AlertText.js":
/*!************************************!*\
  !*** ./components/ui/AlertText.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ui\\AlertText.js";



function AlertText(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3014727399" + " " + "container alertBox".concat(props.success ? " alertSuccess" : " alertError"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3014727399" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3014727399" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.msg), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3014727399",
    css: ".container.jsx-3014727399{margin:30px;border-radius:10px;background:#eaeaea;color:#052a4f;text-align:left;}.alertBox.jsx-3014727399{margin-bottom:15px;padding:10px;font-size:18px;}.alertError.jsx-3014727399{border:3px solid #ce0000;background:#fff5f5;}.alertSuccess.jsx-3014727399{border:3px solid #00940a;background:#f3fff0;}.title.jsx-3014727399{text-align:center;}.text.jsx-3014727399{text-align:left;margin:0px;}@media (max-width:767px){.alertBox.jsx-3014727399{padding:5px;font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxBbGVydFRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBR3VCLEFBT08sQUFLTSxBQUlBLEFBSVAsQUFHRixBQUtGLFlBM0JLLEFBNEJGLElBTE4sRUFIYixDQWJlLE1BS00sQUFJQSxFQVFyQixBQUtFLElBNUJtQixDQU9KLFlBS2pCLEFBSUEsR0FSQSxHQVBnQixjQUNFLGdCQUNsQiIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcQWxlcnRUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0VGV4dChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBhbGVydEJveCR7cHJvcHMuc3VjY2Vzcz9cIiBhbGVydFN1Y2Nlc3NcIjpcIiBhbGVydEVycm9yXCIgfWB9PlxyXG4gICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRpdGxlXCI+eyBwcm9wcy50aXRsZSB9PC9zdHJvbmc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57IHByb3BzLm1zZyB9PC9wPlxyXG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICAgICAgICBjb2xvcjogIzA1MmE0ZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydEJveHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnRFcnJvcntcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNjZTAwMDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmNWY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnRTdWNjZXNze1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAwOTQwYTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2ZmZjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgLmFsZXJ0Qm94e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRUZXh0OyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ui\\AlertText.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AlertText);

/***/ })

})
//# sourceMappingURL=contact.js.7efcc70e6822d0f55315.hot-update.js.map