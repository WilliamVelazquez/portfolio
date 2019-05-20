webpackHotUpdate("static\\development\\pages\\resume.js",{

/***/ "./components/ResumeContent.js":
/*!*************************************!*\
  !*** ./components/ResumeContent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_RibbonPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/RibbonPanel */ "./components/ui/RibbonPanel.js");
/* harmony import */ var _ui_SectionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/SectionList */ "./components/ui/SectionList.js");
/* harmony import */ var _ui_SimplePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/SimplePanel */ "./components/ui/SimplePanel.js");
/* harmony import */ var _ui_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/List */ "./components/ui/List.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\components\\ResumeContent.js";







function ResumeContent(props) {
  var experience = [{
    id: 1,
    title: 'Secretary of Public Education (Government)',
    date: '2018-Present',
    description: 'Area Director of the General Directorate of Information Systems. Management of National Projects, Software Development (Java, AngularJS and ReacJS), Database Management (MySQL and SQL Server).'
  }, {
    id: 2,
    title: 'Crédito Real & AFS Acceptance, LLC (United States)',
    date: '2016-2018',
    description: 'Systems analyst. Software development, Key Performance Indicators, Databases Management, Dashboards, Web Services, SPA and Web Platforms.'
  }, {
    id: 3,
    title: 'Bank of Mexico - Management of financial system risk analysis',
    date: '2016',
    description: 'Analysis, design and maintenance of software, security and databases.'
  }, {
    id: 4,
    title: 'Quality Publicidad',
    date: '2012-2016',
    description: 'Local Network Administrator, Graphic designer and Administrative functions.'
  }];
  var education = [{
    id: 1,
    title: 'Platzi - Online Education',
    date: '2017-Present',
    description: 'Career in Databases Management. Career in Development with React (React, Redux, React Router, Next). Career in Apps Development with React Native. Career in Big Data and Data Science.'
  }, {
    id: 2,
    title: 'University',
    date: '2012-2016',
    description: 'Instituto Politécnico Nacional (IPN) - National Polytechnic Institute   Escuela Superior de Cómputo (ESCOM) - Higher School of Computer Science   Academic Excellence Program all the career   Award for the Best Project of the Academy of Software Engineering   of the XX Expo ESCOM 2015   Programming Languages: Java, SQL, HTML, JavaScript, CSS, C#, C and Python.'
  }, {
    id: 3,
    title: 'High School',
    date: '2010-2012',
    description: 'Centro Escolar Benemérito de las Américas - Benemerito School Center of the Americas.'
  }];
  var languages = [{
    id: 1,
    title: 'Spanish',
    description: 'Native language'
  }, {
    id: 2,
    title: 'English',
    description: 'B2 level on the Common European Framework of References for Languages'
  }, {
    id: 3,
    title: 'Korean',
    description: 'Hansamo IPN – 한사모'
  }];
  var OTHERS = [{
    id: 1,
    title: 'Jury in hack ESCOM',
    description: '25th Anniversary, August 2018'
  }, {
    id: 2,
    title: 'Founder and tutor of a club',
    description: 'Extracurricular club at university'
  }, {
    id: 3,
    title: 'Oboe Soloist',
    description: '80th anniversary of the School of Artistic Initiation (SAI) #1 of the National Institute of Fine Arts - Instituto Nacional de Bellas Artes (INBA) - EIA #1'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3737531215",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_RibbonPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    textAlign: "center",
    ribbonColor: "#111317",
    contentColor: "#111317",
    title: "William's Resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3737531215" + " " + "resume-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Develop myself professionally as part of a leading company in which I can contribute with my skills and knowledge in the systems area, always seeking to progress and improve the performance of my activities to achieve positions of greater responsibility and challenge. Offer solutions according to the expectations of the companies, creating opportunities for personal and professional development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3737531215" + " " + "resume-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: experience,
    color: "#111317",
    title: "Work experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: education,
    color: "#111317",
    title: "Education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: languages,
    color: "#111317",
    title: "Languages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: OTHERS,
    color: "#111317",
    title: "Other information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3737531215",
    css: ".resume-text.jsx-3737531215{font-size:22px;text-align:justify;line-height:normal;}.resume-content.jsx-3737531215{display:grid;grid-column-gap:25px;grid-row-gap:10px;grid-template-columns:repeat(2,1fr);}@media only screen and (max-width :768px){.resume-text.jsx-3737531215{font-size:16px;}.resume-content.jsx-3737531215{grid-template-columns:1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXFJlc3VtZUNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUdxQixBQUtGLEFBT1MsQUFHSyxhQVROLEVBTEYsQUFZbkIsV0FHQSxRQWRtQixBQUtELGtCQUNtQixDQUx0QyxtQ0FNQSIsImZpbGUiOiJFOlxcUHJveWVjdG9zXFxSZWFjdFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxSZXN1bWVDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBSaWJib25QYW5lbCBmcm9tICcuL3VpL1JpYmJvblBhbmVsJztcclxuaW1wb3J0IFNlY3Rpb25MaXN0IGZyb20gJy4vdWkvU2VjdGlvbkxpc3QnO1xyXG5pbXBvcnQgU2ltcGxlUGFuZWwgZnJvbSAnLi91aS9TaW1wbGVQYW5lbCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vdWkvTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBSZXN1bWVDb250ZW50KHByb3BzKSB7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2UgPSBbXHJcbiAgICB7aWQ6MSwgdGl0bGU6J1NlY3JldGFyeSBvZiBQdWJsaWMgRWR1Y2F0aW9uIChHb3Zlcm5tZW50KScsIGRhdGU6JzIwMTgtUHJlc2VudCcsIGRlc2NyaXB0aW9uOidBcmVhIERpcmVjdG9yIG9mIHRoZSBHZW5lcmFsIERpcmVjdG9yYXRlIG9mIEluZm9ybWF0aW9uIFN5c3RlbXMuIE1hbmFnZW1lbnQgb2YgTmF0aW9uYWwgUHJvamVjdHMsIFNvZnR3YXJlIERldmVsb3BtZW50IChKYXZhLCBBbmd1bGFySlMgYW5kIFJlYWNKUyksIERhdGFiYXNlIE1hbmFnZW1lbnQgKE15U1FMIGFuZCBTUUwgU2VydmVyKS4nfSxcclxuICAgIHtpZDoyLCB0aXRsZTonQ3LDqWRpdG8gUmVhbCAmIEFGUyBBY2NlcHRhbmNlLCBMTEMgKFVuaXRlZCBTdGF0ZXMpJywgZGF0ZTonMjAxNi0yMDE4JywgZGVzY3JpcHRpb246J1N5c3RlbXMgYW5hbHlzdC4gU29mdHdhcmUgZGV2ZWxvcG1lbnQsIEtleSBQZXJmb3JtYW5jZSBJbmRpY2F0b3JzLCBEYXRhYmFzZXMgTWFuYWdlbWVudCwgRGFzaGJvYXJkcywgV2ViIFNlcnZpY2VzLCBTUEEgYW5kIFdlYiBQbGF0Zm9ybXMuJ30sXHJcbiAgICB7aWQ6MywgdGl0bGU6J0Jhbmsgb2YgTWV4aWNvIC0gTWFuYWdlbWVudCBvZiBmaW5hbmNpYWwgc3lzdGVtIHJpc2sgYW5hbHlzaXMnLCBkYXRlOicyMDE2JywgZGVzY3JpcHRpb246J0FuYWx5c2lzLCBkZXNpZ24gYW5kIG1haW50ZW5hbmNlIG9mIHNvZnR3YXJlLCBzZWN1cml0eSBhbmQgZGF0YWJhc2VzLid9LFxyXG4gICAge2lkOjQsIHRpdGxlOidRdWFsaXR5IFB1YmxpY2lkYWQnLCBkYXRlOicyMDEyLTIwMTYnLCBkZXNjcmlwdGlvbjonTG9jYWwgTmV0d29yayBBZG1pbmlzdHJhdG9yLCBHcmFwaGljIGRlc2lnbmVyIGFuZCBBZG1pbmlzdHJhdGl2ZSBmdW5jdGlvbnMuJ30sXHJcbiAgXTtcclxuXHRcclxuXHRjb25zdCBlZHVjYXRpb24gPSBbXHJcbiAgICB7aWQ6MSwgdGl0bGU6J1BsYXR6aSAtIE9ubGluZSBFZHVjYXRpb24nLCBkYXRlOicyMDE3LVByZXNlbnQnLCBkZXNjcmlwdGlvbjonQ2FyZWVyIGluIERhdGFiYXNlcyBNYW5hZ2VtZW50LiBDYXJlZXIgaW4gRGV2ZWxvcG1lbnQgd2l0aCBSZWFjdCAoUmVhY3QsIFJlZHV4LCBSZWFjdCBSb3V0ZXIsIE5leHQpLiBDYXJlZXIgaW4gQXBwcyBEZXZlbG9wbWVudCB3aXRoIFJlYWN0IE5hdGl2ZS4gQ2FyZWVyIGluIEJpZyBEYXRhIGFuZCBEYXRhIFNjaWVuY2UuJ30sXHJcbiAgICB7aWQ6MiwgdGl0bGU6J1VuaXZlcnNpdHknLCBkYXRlOicyMDEyLTIwMTYnLCBkZXNjcmlwdGlvbjonSW5zdGl0dXRvIFBvbGl0w6ljbmljbyBOYWNpb25hbCAoSVBOKSAtIE5hdGlvbmFsIFBvbHl0ZWNobmljIEluc3RpdHV0ZSAgIEVzY3VlbGEgU3VwZXJpb3IgZGUgQ8OzbXB1dG8gKEVTQ09NKSAtIEhpZ2hlciBTY2hvb2wgb2YgQ29tcHV0ZXIgU2NpZW5jZSAgIEFjYWRlbWljIEV4Y2VsbGVuY2UgUHJvZ3JhbSBhbGwgdGhlIGNhcmVlciAgIEF3YXJkIGZvciB0aGUgQmVzdCBQcm9qZWN0IG9mIHRoZSBBY2FkZW15IG9mIFNvZnR3YXJlIEVuZ2luZWVyaW5nICAgb2YgdGhlIFhYIEV4cG8gRVNDT00gMjAxNSAgIFByb2dyYW1taW5nIExhbmd1YWdlczogSmF2YSwgU1FMLCBIVE1MLCBKYXZhU2NyaXB0LCBDU1MsIEMjLCBDIGFuZCBQeXRob24uJ30sXHJcbiAgICB7aWQ6MywgdGl0bGU6J0hpZ2ggU2Nob29sJywgZGF0ZTonMjAxMC0yMDEyJywgZGVzY3JpcHRpb246J0NlbnRybyBFc2NvbGFyIEJlbmVtw6lyaXRvIGRlIGxhcyBBbcOpcmljYXMgLSBCZW5lbWVyaXRvIFNjaG9vbCBDZW50ZXIgb2YgdGhlIEFtZXJpY2FzLid9LFxyXG5cdF07XHJcblx0XHJcblx0Y29uc3QgbGFuZ3VhZ2VzID0gW1xyXG4gICAge2lkOjEsIHRpdGxlOidTcGFuaXNoJywgZGVzY3JpcHRpb246J05hdGl2ZSBsYW5ndWFnZSd9LFxyXG4gICAge2lkOjIsIHRpdGxlOidFbmdsaXNoJywgZGVzY3JpcHRpb246J0IyIGxldmVsIG9uIHRoZSBDb21tb24gRXVyb3BlYW4gRnJhbWV3b3JrIG9mIFJlZmVyZW5jZXMgZm9yIExhbmd1YWdlcyd9LFxyXG4gICAge2lkOjMsIHRpdGxlOidLb3JlYW4nLCBkZXNjcmlwdGlvbjonSGFuc2FtbyBJUE4g4oCTIO2VnOyCrOuqqCd9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IE9USEVSUyA9IFtcclxuICAgIHtpZDoxLCB0aXRsZTonSnVyeSBpbiBoYWNrIEVTQ09NJywgZGVzY3JpcHRpb246JzI1dGggQW5uaXZlcnNhcnksIEF1Z3VzdCAyMDE4J30sXHJcbiAgICB7aWQ6MiwgdGl0bGU6J0ZvdW5kZXIgYW5kIHR1dG9yIG9mIGEgY2x1YicsIGRlc2NyaXB0aW9uOidFeHRyYWN1cnJpY3VsYXIgY2x1YiBhdCB1bml2ZXJzaXR5J30sXHJcbiAgICB7aWQ6MywgdGl0bGU6J09ib2UgU29sb2lzdCcsIGRlc2NyaXB0aW9uOic4MHRoIGFubml2ZXJzYXJ5IG9mIHRoZSBTY2hvb2wgb2YgQXJ0aXN0aWMgSW5pdGlhdGlvbiAoU0FJKSAjMSBvZiB0aGUgTmF0aW9uYWwgSW5zdGl0dXRlIG9mIEZpbmUgQXJ0cyAtIEluc3RpdHV0byBOYWNpb25hbCBkZSBCZWxsYXMgQXJ0ZXMgKElOQkEpIC0gRUlBICMxJ30sXHJcblx0XTtcclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PFJpYmJvblBhbmVsIFxyXG5cdFx0XHRcdHRleHRBbGlnbj1cImNlbnRlclwiXHJcblx0XHRcdFx0cmliYm9uQ29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHRjb250ZW50Q29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHR0aXRsZT1cIldpbGxpYW0ncyBSZXN1bWVcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicmVzdW1lLXRleHRcIj5cclxuXHRcdFx0XHRcdERldmVsb3AgbXlzZWxmIHByb2Zlc3Npb25hbGx5IGFzIHBhcnQgb2YgYSBsZWFkaW5nIGNvbXBhbnkgaW4gd2hpY2ggSSBjYW4gY29udHJpYnV0ZSB3aXRoIG15IHNraWxscyBhbmQga25vd2xlZGdlIGluIHRoZSBzeXN0ZW1zIGFyZWEsIGFsd2F5cyBzZWVraW5nIHRvIHByb2dyZXNzIGFuZCBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZSBvZiBteSBhY3Rpdml0aWVzIHRvIGFjaGlldmUgcG9zaXRpb25zIG9mIGdyZWF0ZXIgcmVzcG9uc2liaWxpdHkgYW5kIGNoYWxsZW5nZS4gT2ZmZXIgc29sdXRpb25zIGFjY29yZGluZyB0byB0aGUgZXhwZWN0YXRpb25zIG9mIHRoZSBjb21wYW5pZXMsIGNyZWF0aW5nIG9wcG9ydHVuaXRpZXMgZm9yIHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgZGV2ZWxvcG1lbnQuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxTZWN0aW9uTGlzdCBcclxuXHRcdFx0XHRcdFx0ZGF0YT17ZXhwZXJpZW5jZX1cclxuXHRcdFx0XHRcdFx0Y29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHRcdFx0dGl0bGU9XCJXb3JrIGV4cGVyaWVuY2VcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWN0aW9uTGlzdCBcclxuXHRcdFx0XHRcdFx0ZGF0YT17ZWR1Y2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRjb2xvcj1cIiMxMTEzMTdcIlxyXG5cdFx0XHRcdFx0XHR0aXRsZT1cIkVkdWNhdGlvblwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFNlY3Rpb25MaXN0IFxyXG5cdFx0XHRcdFx0XHRkYXRhPXtsYW5ndWFnZXN9XHJcblx0XHRcdFx0XHRcdGNvbG9yPVwiIzExMTMxN1wiXHJcblx0XHRcdFx0XHRcdHRpdGxlPVwiTGFuZ3VhZ2VzXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VjdGlvbkxpc3QgXHJcblx0XHRcdFx0XHRcdGRhdGE9e09USEVSU31cclxuXHRcdFx0XHRcdFx0Y29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHRcdFx0dGl0bGU9XCJPdGhlciBpbmZvcm1hdGlvblwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1JpYmJvblBhbmVsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LnJlc3VtZS10ZXh0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5yZXN1bWUtY29udGVudHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRncmlkLWNvbHVtbi1nYXA6IDI1cHg7XHJcblx0XHRcdFx0XHRncmlkLXJvdy1nYXA6IDEwcHg7XHJcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG4gICAgICAgICAgLnJlc3VtZS10ZXh0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmVzdW1lLWNvbnRlbnR7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lQ29udGVudDsiXX0= */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\components\\ResumeContent.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ResumeContent);

/***/ })

})
//# sourceMappingURL=resume.js.92e63750bd429fe9b84a.hot-update.js.map