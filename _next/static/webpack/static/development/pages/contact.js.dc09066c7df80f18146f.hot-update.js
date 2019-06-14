webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/sections/Header.js":
/*!***************************************!*\
  !*** ./components/sections/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var _containers_IfOffline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/IfOffline */ "./containers/IfOffline.js");
/* harmony import */ var _containers_NavMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/NavMenu */ "./containers/NavMenu.js");
var _jsxFileName = "C:\\Projects\\portfolio\\components\\sections\\Header.js";








function Header(props) {
  var description = props.description,
      active = props.active,
      title = props.title;
  var GA_NAVIGATION_CATEGORY = "Navigation";
  var GA_NAVIGATION_ACTION = "Nav Logo";
  var GA_NAVIGATION_LABEL = "Nav Logo From ".concat(active || '-', " to Home");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "UTF-8",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description || "Portfolio website of William Velazquez as a Full Stack Developer with experience working on modern technologies like ReactJs, NextJS, React Native, PWA and more.",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), active == "Home" || active == "About" || active == "Resume" || active == "Work" || active == "Contact" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "robots",
    content: "index, follow",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, title || "William Velazquez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    href: "/static/WilliamVelazquez.ico",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#111317",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.webmanifest",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/Logo/Logo_512.png",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "apple-mobile-web-app-title",
    content: "William Velazquez",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "apple-mobile-web-app-capable",
    content: "no",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "apple-mobile-web-apps-status-bar-style",
    content: "black-translucent",
    className: "jsx-2460348523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2460348523" + " " + "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2460348523" + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/LogoWhite_55.png",
    alt: "William Velazquez",
    onClick: function onClick() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_4__["logEvent"])(GA_NAVIGATION_CATEGORY, GA_NAVIGATION_ACTION, GA_NAVIGATION_LABEL);
    },
    className: "jsx-2460348523" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2460348523" + " " + "Offline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_IfOffline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Offline"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_NavMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2778278916",
    css: "body{margin:0;margin-top:100px;font-family:system-ui;background-color:#8e1a1a;}@media only screen and (max-width :667px){body{margin-top:80px;}}::-webkit-scrollbar{width:10px;height:10px;}::-webkit-scrollbar-thumb{background:#7b0b0b;border-radius:10px;border:0px none #ffffff;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-moz-box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);}::-webkit-scrollbar-thumb:hover{background:#670909;}::-webkit-scrollbar-thumb:active{background:#5d0808;}::-webkit-scrollbar-track{background:#2d2d2d;border-radius:10px;border:0px none #ffffff;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-moz-box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);}::-webkit-scrollbar-track:hover{background:#2d2d2d;}::-webkit-scrollbar-track:active{background:#272727;}::-webkit-scrollbar-corner{background:transparent;}::-webkit-scrollbar-button{width:0px;height:0px;}::-webkit-scrollbar-button:start{display:none;}::-webkit-scrollbar-button:end{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxzZWN0aW9uc1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEeUIsQUFHb0IsQUFRUyxBQUlQLEFBS1EsQUFTQSxBQUdBLEFBR0EsQUFRQSxBQUdBLEFBR0ksQUFHYixBQUlHLEFBR0EsU0F2REksQ0FpRE4sQ0FyQ0MsRUF5Q2QsQUFHQSxHQWhERSxHQVNtQixBQVNyQixBQUdBLEFBR3FCLEFBUXJCLEFBR0EsRUFPQSxFQXJDQSxBQWlDQSxHQTdDd0IsWUFpQkUsQUFlQSxVQTlCQyxjQWdCZSxBQWVBLFdBOUIxQyw2QkFnQitDLEFBZUEsNkNBZEcsQUFlQSxnREFkbEQsQUFlQSIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcc2VjdGlvbnNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvYW5hbHl0aWNzJztcclxuXHJcbmltcG9ydCBJZk9mZmxpbmUgZnJvbSAnLi4vLi4vY29udGFpbmVycy9JZk9mZmxpbmUnO1xyXG5pbXBvcnQgTmF2TWVudSBmcm9tICcuLi8uLi9jb250YWluZXJzL05hdk1lbnUnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgYWN0aXZlLCB0aXRsZSwgIH0gPSBwcm9wcztcclxuICBjb25zdCBHQV9OQVZJR0FUSU9OX0NBVEVHT1JZPVwiTmF2aWdhdGlvblwiO1xyXG4gIGNvbnN0IEdBX05BVklHQVRJT05fQUNUSU9OPVwiTmF2IExvZ29cIjtcclxuICBjb25zdCBHQV9OQVZJR0FUSU9OX0xBQkVMPWBOYXYgTG9nbyBGcm9tICR7YWN0aXZlfHwnLSd9IHRvIEhvbWVgXHJcblx0cmV0dXJuKFxyXG5cdFx0PGhlYWRlcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24gfHwgXCJQb3J0Zm9saW8gd2Vic2l0ZSBvZiBXaWxsaWFtIFZlbGF6cXVleiBhcyBhIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyIHdpdGggZXhwZXJpZW5jZSB3b3JraW5nIG9uIG1vZGVybiB0ZWNobm9sb2dpZXMgbGlrZSBSZWFjdEpzLCBOZXh0SlMsIFJlYWN0IE5hdGl2ZSwgUFdBIGFuZCBtb3JlLlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGFjdGl2ZT09XCJIb21lXCIgfHwgYWN0aXZlPT1cIkFib3V0XCIgfHwgYWN0aXZlPT1cIlJlc3VtZVwiIHx8IGFjdGl2ZT09XCJXb3JrXCIgfHwgYWN0aXZlPT1cIkNvbnRhY3RcIik/XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgICAgICAgOjxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8dGl0bGU+e3RpdGxlIHx8IFwiV2lsbGlhbSBWZWxhenF1ZXpcIn08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9XaWxsaWFtVmVsYXpxdWV6Lmljb1wiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDwhLS0gQ2hyb21lLCBGaXJlZm94IE9TIGFuZCBPcGVyYSAtLT4gKi99XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMxMTEzMTdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3Qud2VibWFuaWZlc3RcIiAvPlxyXG5cclxuICAgICAgICB7LyogPCEtLSBpT1MgLS0+ICovfVxyXG4gICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgaHJlZj0nL3N0YXRpYy9Mb2dvL0xvZ29fNTEyLnBuZycgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiV2lsbGlhbSBWZWxhenF1ZXpcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cIm5vXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHBzLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiYmxhY2stdHJhbnNsdWNlbnRcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIiBcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL0xvZ29XaGl0ZV81NS5wbmdcIiBcclxuICAgICAgICAgICAgICBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVlelwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCk9PmxvZ0V2ZW50KEdBX05BVklHQVRJT05fQ0FURUdPUlksR0FfTkFWSUdBVElPTl9BQ1RJT04sR0FfTkFWSUdBVElPTl9MQUJFTCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpbms+ICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT2ZmbGluZVwiPjxJZk9mZmxpbmU+T2ZmbGluZTwvSWZPZmZsaW5lPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8TmF2TWVudSBhY3RpdmU9e2FjdGl2ZX0vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhlMWExYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNjY3cHgpIHtcclxuICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qQ09MT1IgTm9ybWFsKi9cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM3YjBiMGI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypDT0xPUiBIT1ZFUiovXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjcwOTA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWQwODA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMmQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpzdGFydCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjplbmQge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGhlYWRlcntcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzExMTMxNztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5ZnIgMWZyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdHtcclxuICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnQgLk9mZmxpbmV7XHJcbiAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgIGNvbG9yOiNCRjA0MDQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG4gICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQgLk9mZmxpbmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA2NjdweCkge1xyXG4gICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQgLk9mZmxpbmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\sections\\Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "364643334",
    css: "header.jsx-2460348523{top:0;left:0;right:0;z-index:99;padding:10px;position:fixed;min-height:28px;max-height:28px;background:#111317;border-radius:0px 0px 10px 10px;box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);}.navbar.jsx-2460348523{display:grid;grid-template-columns:9fr 1fr;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-2460348523{width:55px;}.btn.jsx-2460348523{cursor:pointer;}.left.jsx-2460348523{-webkit-flex:1;-ms-flex:1;flex:1;float:left;display:grid;grid-auto-flow:column;grid-template-columns:60px 1fr;}.left.jsx-2460348523 .Offline.jsx-2460348523{margin:0;padding:0;color:#BF0404;font-size:24px;font-weight:bold;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}@media only screen and (max-width :768px){header.jsx-2460348523{min-height:23px;max-height:23px;}.left.jsx-2460348523 .Offline.jsx-2460348523{font-size:20px;}img.jsx-2460348523{width:45px;}.left.jsx-2460348523{grid-template-columns:50px 1fr;}}@media only screen and (max-width :667px){header.jsx-2460348523{min-height:15px;max-height:15px;}.left.jsx-2460348523 .Offline.jsx-2460348523{font-size:14px;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;}img.jsx-2460348523{width:30px;}.left.jsx-2460348523{grid-template-columns:35px 1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxzZWN0aW9uc1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHaUIsQUFhTSxBQUtELEFBR0csQUFHUixBQU9FLEFBU1UsQUFJRixBQUdILEFBR29CLEFBS2YsQUFJRixBQUlILEFBR29CLE1BakUxQixHQStCRSxFQWJYLEFBNkJFLEFBZ0JBLEVBOURRLEFBWXNCLEVBUWhDLEFBdUJFLEFBZXNCLENBbkJKLEFBZUEsR0F2QkwsRUE5QkYsVUFnRFgsQUFnQkEsQ0EvRGEsQUFzQ2IsQUFlQSxDQWhDVSxBQVNLLFVBbkJHLENBV04sQ0FyQkcsR0E4QkUsU0FSSyxHQXJCTixLQThCSSxXQTdCSixHQXFCZSxhQXBCWixBQXFEbkIsa0JBaENGLENBcEJrQyx5QkFPbEMsQ0FxQkEsTUEzQnlDLHVDQUN6QyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcc2VjdGlvbnNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvYW5hbHl0aWNzJztcclxuXHJcbmltcG9ydCBJZk9mZmxpbmUgZnJvbSAnLi4vLi4vY29udGFpbmVycy9JZk9mZmxpbmUnO1xyXG5pbXBvcnQgTmF2TWVudSBmcm9tICcuLi8uLi9jb250YWluZXJzL05hdk1lbnUnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgYWN0aXZlLCB0aXRsZSwgIH0gPSBwcm9wcztcclxuICBjb25zdCBHQV9OQVZJR0FUSU9OX0NBVEVHT1JZPVwiTmF2aWdhdGlvblwiO1xyXG4gIGNvbnN0IEdBX05BVklHQVRJT05fQUNUSU9OPVwiTmF2IExvZ29cIjtcclxuICBjb25zdCBHQV9OQVZJR0FUSU9OX0xBQkVMPWBOYXYgTG9nbyBGcm9tICR7YWN0aXZlfHwnLSd9IHRvIEhvbWVgXHJcblx0cmV0dXJuKFxyXG5cdFx0PGhlYWRlcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24gfHwgXCJQb3J0Zm9saW8gd2Vic2l0ZSBvZiBXaWxsaWFtIFZlbGF6cXVleiBhcyBhIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyIHdpdGggZXhwZXJpZW5jZSB3b3JraW5nIG9uIG1vZGVybiB0ZWNobm9sb2dpZXMgbGlrZSBSZWFjdEpzLCBOZXh0SlMsIFJlYWN0IE5hdGl2ZSwgUFdBIGFuZCBtb3JlLlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGFjdGl2ZT09XCJIb21lXCIgfHwgYWN0aXZlPT1cIkFib3V0XCIgfHwgYWN0aXZlPT1cIlJlc3VtZVwiIHx8IGFjdGl2ZT09XCJXb3JrXCIgfHwgYWN0aXZlPT1cIkNvbnRhY3RcIik/XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgICAgICAgOjxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8dGl0bGU+e3RpdGxlIHx8IFwiV2lsbGlhbSBWZWxhenF1ZXpcIn08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9XaWxsaWFtVmVsYXpxdWV6Lmljb1wiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDwhLS0gQ2hyb21lLCBGaXJlZm94IE9TIGFuZCBPcGVyYSAtLT4gKi99XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMxMTEzMTdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3Qud2VibWFuaWZlc3RcIiAvPlxyXG5cclxuICAgICAgICB7LyogPCEtLSBpT1MgLS0+ICovfVxyXG4gICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgaHJlZj0nL3N0YXRpYy9Mb2dvL0xvZ29fNTEyLnBuZycgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiV2lsbGlhbSBWZWxhenF1ZXpcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cIm5vXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHBzLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiYmxhY2stdHJhbnNsdWNlbnRcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIiBcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL0xvZ29XaGl0ZV81NS5wbmdcIiBcclxuICAgICAgICAgICAgICBhbHQ9XCJXaWxsaWFtIFZlbGF6cXVlelwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCk9PmxvZ0V2ZW50KEdBX05BVklHQVRJT05fQ0FURUdPUlksR0FfTkFWSUdBVElPTl9BQ1RJT04sR0FfTkFWSUdBVElPTl9MQUJFTCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpbms+ICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT2ZmbGluZVwiPjxJZk9mZmxpbmU+T2ZmbGluZTwvSWZPZmZsaW5lPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8TmF2TWVudSBhY3RpdmU9e2FjdGl2ZX0vPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhlMWExYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNjY3cHgpIHtcclxuICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qQ09MT1IgTm9ybWFsKi9cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM3YjBiMGI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypDT0xPUiBIT1ZFUiovXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjcwOTA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWQwODA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMmQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpzdGFydCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjplbmQge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGhlYWRlcntcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzExMTMxNztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5ZnIgMWZyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdHtcclxuICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnQgLk9mZmxpbmV7XHJcbiAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgIGNvbG9yOiNCRjA0MDQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG4gICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQgLk9mZmxpbmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA2NjdweCkge1xyXG4gICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxlZnQgLk9mZmxpbmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\sections\\Header.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=contact.js.dc09066c7df80f18146f.hot-update.js.map