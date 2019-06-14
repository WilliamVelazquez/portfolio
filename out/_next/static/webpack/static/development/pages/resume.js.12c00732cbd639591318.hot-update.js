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
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var _ui_RibbonPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/RibbonPanel */ "./components/ui/RibbonPanel.js");
/* harmony import */ var _ui_SectionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/SectionList */ "./components/ui/SectionList.js");
/* harmony import */ var _ui_TitleBand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/TitleBand */ "./components/ui/TitleBand.js");
/* harmony import */ var _sections_Technologies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/Technologies */ "./components/sections/Technologies.js");
/* harmony import */ var _ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/UnderlinedLink */ "./components/ui/UnderlinedLink.js");
/* harmony import */ var _icons_DownloadIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/DownloadIcon */ "./components/icons/DownloadIcon.js");
var _jsxFileName = "C:\\Projects\\portfolio\\components\\ResumeContent.js";










function ResumeContent(props) {
  var GA_RESUME_CATEGORY = "Resume";
  var GA_RESUME_DOWNLOAD_ACTION = "Download Resume";
  var GA_RESUME_LABEL = "Resume downloaded";
  var RESUME_URL = "https://github.com/WilliamVelazquez/Blog-Articles/raw/master/Portfolio/WilliamVelazquez_Resume.pdf";
  var OBJECTIVE = "Develop myself professionally as part of a leading company in which I can contribute with my skills and knowledge in the systems area, always seeking to progress and improve the performance of my activities to achieve positions of greater responsibility and challenge.\nOffer solutions according to the expectations of the companies, creating opportunities for personal and professional development.";
  var EXPERIENCE_DATA = [{
    id: 1,
    title: 'Secretary of Public Education (Government)',
    date: '2018-Present',
    description: 'Area Director of the General Directorate of Information Systems.\nManagement of National Projects.\nSoftware Development (Java, AngularJS and ReacJS).\nDatabase Management (MySQL and SQL Server).'
  }, {
    id: 2,
    title: 'Crédito Real (México) & AFS Acceptance, LLC (United States)',
    date: '2016-2018',
    description: 'Systems analyst.\nSoftware development.\nDatabases Management.\nKey Performance Indicators.\nDashboards, Web Services, SPA and Web Platforms.'
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
  var EDUCATION_DATA = [{
    id: 1,
    title: 'Platzi - Online Education',
    date: '2017-Present',
    description: 'Career in Databases Management.\nCareer in Development with React (React, Redux, React Router, Next).\nCareer in Apps Development with React Native.\nCareer in Big Data and Data Science.'
  }, {
    id: 2,
    title: 'University',
    date: '2012-2016',
    description: 'Instituto Politécnico Nacional (IPN) - National Polytechnic Institute | Escuela Superior de Cómputo (ESCOM) - Higher School of Computer Science.\nAcademic Excellence Program all the career.\nAward for the Best Project of the Academy of Software Engineering of the XX Expo ESCOM 2015.\nProgramming Languages:\nJava, SQL, HTML, JavaScript, CSS, C#, C and Python.'
  }, {
    id: 3,
    title: 'High School',
    date: '2010-2012',
    description: 'Centro Escolar Benemérito de las Américas - Benemerito School Center of the Americas.'
  }];
  var LANGUAGES_DATA = [{
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
  var OTHERS_DATA = [{
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
  var TECHNOLOGIES = [{
    id: 1,
    src: '/static/logos/react_logo.png',
    alt: 'React'
  }, {
    id: 2,
    src: '/static/logos/react_router_logo.png',
    alt: 'React Router'
  }, {
    id: 3,
    src: '/static/svg/react_navigation_logo.svg',
    alt: 'React Navigation'
  }, {
    id: 4,
    src: '/static/logos/webpack_logo.png',
    alt: 'Webpack'
  }, {
    id: 5,
    src: '/static/logos/java_logo.png',
    alt: 'Java'
  }, {
    id: 6,
    src: '/static/logos/angular_logo.png',
    alt: 'Angular'
  }, {
    id: 7,
    src: '/static/logos/bootstrap_logo.png',
    alt: 'Bootstrap'
  }, {
    id: 8,
    src: '/static/logos/c_sharp_logo.png',
    alt: 'C#'
  }, {
    id: 9,
    src: '/static/logos/unity_logo.png',
    alt: 'Unity'
  }, {
    id: 10,
    src: '/static/logos/html5_logo.png',
    alt: 'HTML 5'
  }, {
    id: 11,
    src: '/static/logos/css_logo.png',
    alt: 'CSS'
  }, {
    id: 12,
    src: '/static/logos/javascript_logo.png',
    alt: 'Javascript'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_RibbonPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    textAlign: "center",
    ribbonColor: "#111317",
    contentColor: "#111317",
    title: "William's Resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2195981326" + " " + "resume-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, OBJECTIVE), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2195981326" + " " + "resume-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: EXPERIENCE_DATA,
    color: "#111317",
    title: "Work experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: EDUCATION_DATA,
    color: "#111317",
    title: "Education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: LANGUAGES_DATA,
    color: "#111317",
    title: "Languages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_SectionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: OTHERS_DATA,
    color: "#111317",
    title: "Other information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_TitleBand__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rounded: true,
    position: "center",
    title: "Technologies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_Technologies__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tone: "gray",
    width: "30%",
    columns: "6",
    hoverColor: "#111317",
    technologies: TECHNOLOGIES,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_UnderlinedLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: RESUME_URL,
    title: "",
    target: "_blank",
    text: "Download",
    color: "#111317",
    justify: "flex-end",
    hoverColor: "#BF0404",
    lineColor: "#BF0404",
    handleClik: function handleClik() {
      return Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logEvent"])(GA_RESUME_CATEGORY, GA_RESUME_DOWNLOAD_ACTION, GA_RESUME_LABEL);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_DownloadIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 20,
    color: "#111317",
    hoverColor: "#BF0404",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2195981326",
    css: ".resume-text.jsx-2195981326{font-size:22px;text-align:justify;line-height:normal;}.resume-content.jsx-2195981326{display:grid;grid-row-gap:10px;grid-column-gap:25px;grid-template-columns:repeat(2,1fr);}@media only screen and (max-width :768px){.resume-text.jsx-2195981326{font-size:16px;white-space:pre-line;}.resume-content.jsx-2195981326{grid-template-columns:1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxSZXN1bWVDb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIZ0IsQUFHc0IsQUFLRixBQU9HLEFBSVcsYUFWVCxFQUxDLEFBWUcsV0FJdEIsS0FWcUIsR0FMRixFQVluQixnQkFOcUMsQ0FMdEMsbUNBTUEiLCJmaWxlIjoiQzpcXFByb2plY3RzXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXFJlc3VtZUNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uL3V0aWxzL2FuYWx5dGljcyc7XHJcblxyXG5pbXBvcnQgUmliYm9uUGFuZWwgZnJvbSAnLi91aS9SaWJib25QYW5lbCc7XHJcbmltcG9ydCBTZWN0aW9uTGlzdCBmcm9tICcuL3VpL1NlY3Rpb25MaXN0JztcclxuaW1wb3J0IFRpdGxlQmFuZCBmcm9tICcuL3VpL1RpdGxlQmFuZCc7XHJcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi9zZWN0aW9ucy9UZWNobm9sb2dpZXMnO1xyXG5pbXBvcnQgVW5kZXJsaW5lZExpbmsgZnJvbSAnLi91aS9VbmRlcmxpbmVkTGluayc7XHJcbmltcG9ydCBEb3dubG9hZEljb24gZnJvbSAnLi9pY29ucy9Eb3dubG9hZEljb24nO1xyXG5cclxuZnVuY3Rpb24gUmVzdW1lQ29udGVudChwcm9wcykge1xyXG5cdGNvbnN0IEdBX1JFU1VNRV9DQVRFR09SWT1cIlJlc3VtZVwiO1xyXG5cdGNvbnN0IEdBX1JFU1VNRV9ET1dOTE9BRF9BQ1RJT049XCJEb3dubG9hZCBSZXN1bWVcIjtcclxuXHRjb25zdCBHQV9SRVNVTUVfTEFCRUw9XCJSZXN1bWUgZG93bmxvYWRlZFwiO1xyXG5cclxuXHRjb25zdCBSRVNVTUVfVVJMID0gXCJodHRwczovL2dpdGh1Yi5jb20vV2lsbGlhbVZlbGF6cXVlei9CbG9nLUFydGljbGVzL3Jhdy9tYXN0ZXIvUG9ydGZvbGlvL1dpbGxpYW1WZWxhenF1ZXpfUmVzdW1lLnBkZlwiO1xyXG5cclxuXHRjb25zdCBPQkpFQ1RJVkUgPSBcIkRldmVsb3AgbXlzZWxmIHByb2Zlc3Npb25hbGx5IGFzIHBhcnQgb2YgYSBsZWFkaW5nIGNvbXBhbnkgaW4gd2hpY2ggSSBjYW4gY29udHJpYnV0ZSB3aXRoIG15IHNraWxscyBhbmQga25vd2xlZGdlIGluIHRoZSBzeXN0ZW1zIGFyZWEsIGFsd2F5cyBzZWVraW5nIHRvIHByb2dyZXNzIGFuZCBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZSBvZiBteSBhY3Rpdml0aWVzIHRvIGFjaGlldmUgcG9zaXRpb25zIG9mIGdyZWF0ZXIgcmVzcG9uc2liaWxpdHkgYW5kIGNoYWxsZW5nZS5cXG5PZmZlciBzb2x1dGlvbnMgYWNjb3JkaW5nIHRvIHRoZSBleHBlY3RhdGlvbnMgb2YgdGhlIGNvbXBhbmllcywgY3JlYXRpbmcgb3Bwb3J0dW5pdGllcyBmb3IgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBkZXZlbG9wbWVudC5cIjtcclxuICBjb25zdCBFWFBFUklFTkNFX0RBVEEgPSBbXHJcbiAgICB7aWQ6MSwgdGl0bGU6J1NlY3JldGFyeSBvZiBQdWJsaWMgRWR1Y2F0aW9uIChHb3Zlcm5tZW50KScsIGRhdGU6JzIwMTgtUHJlc2VudCcsIGRlc2NyaXB0aW9uOidBcmVhIERpcmVjdG9yIG9mIHRoZSBHZW5lcmFsIERpcmVjdG9yYXRlIG9mIEluZm9ybWF0aW9uIFN5c3RlbXMuXFxuTWFuYWdlbWVudCBvZiBOYXRpb25hbCBQcm9qZWN0cy5cXG5Tb2Z0d2FyZSBEZXZlbG9wbWVudCAoSmF2YSwgQW5ndWxhckpTIGFuZCBSZWFjSlMpLlxcbkRhdGFiYXNlIE1hbmFnZW1lbnQgKE15U1FMIGFuZCBTUUwgU2VydmVyKS4nfSxcclxuICAgIHtpZDoyLCB0aXRsZTonQ3LDqWRpdG8gUmVhbCAoTcOpeGljbykgJiBBRlMgQWNjZXB0YW5jZSwgTExDIChVbml0ZWQgU3RhdGVzKScsIGRhdGU6JzIwMTYtMjAxOCcsIGRlc2NyaXB0aW9uOidTeXN0ZW1zIGFuYWx5c3QuXFxuU29mdHdhcmUgZGV2ZWxvcG1lbnQuXFxuRGF0YWJhc2VzIE1hbmFnZW1lbnQuXFxuS2V5IFBlcmZvcm1hbmNlIEluZGljYXRvcnMuXFxuRGFzaGJvYXJkcywgV2ViIFNlcnZpY2VzLCBTUEEgYW5kIFdlYiBQbGF0Zm9ybXMuJ30sXHJcbiAgICB7aWQ6MywgdGl0bGU6J0Jhbmsgb2YgTWV4aWNvIC0gTWFuYWdlbWVudCBvZiBmaW5hbmNpYWwgc3lzdGVtIHJpc2sgYW5hbHlzaXMnLCBkYXRlOicyMDE2JywgZGVzY3JpcHRpb246J0FuYWx5c2lzLCBkZXNpZ24gYW5kIG1haW50ZW5hbmNlIG9mIHNvZnR3YXJlLCBzZWN1cml0eSBhbmQgZGF0YWJhc2VzLid9LFxyXG4gICAge2lkOjQsIHRpdGxlOidRdWFsaXR5IFB1YmxpY2lkYWQnLCBkYXRlOicyMDEyLTIwMTYnLCBkZXNjcmlwdGlvbjonTG9jYWwgTmV0d29yayBBZG1pbmlzdHJhdG9yLCBHcmFwaGljIGRlc2lnbmVyIGFuZCBBZG1pbmlzdHJhdGl2ZSBmdW5jdGlvbnMuJ30sXHJcbiAgXTtcclxuXHRcclxuXHRjb25zdCBFRFVDQVRJT05fREFUQSA9IFtcclxuICAgIHtpZDoxLCB0aXRsZTonUGxhdHppIC0gT25saW5lIEVkdWNhdGlvbicsIGRhdGU6JzIwMTctUHJlc2VudCcsIGRlc2NyaXB0aW9uOidDYXJlZXIgaW4gRGF0YWJhc2VzIE1hbmFnZW1lbnQuXFxuQ2FyZWVyIGluIERldmVsb3BtZW50IHdpdGggUmVhY3QgKFJlYWN0LCBSZWR1eCwgUmVhY3QgUm91dGVyLCBOZXh0KS5cXG5DYXJlZXIgaW4gQXBwcyBEZXZlbG9wbWVudCB3aXRoIFJlYWN0IE5hdGl2ZS5cXG5DYXJlZXIgaW4gQmlnIERhdGEgYW5kIERhdGEgU2NpZW5jZS4nfSxcclxuICAgIHtpZDoyLCB0aXRsZTonVW5pdmVyc2l0eScsIGRhdGU6JzIwMTItMjAxNicsIGRlc2NyaXB0aW9uOidJbnN0aXR1dG8gUG9saXTDqWNuaWNvIE5hY2lvbmFsIChJUE4pIC0gTmF0aW9uYWwgUG9seXRlY2huaWMgSW5zdGl0dXRlIHwgRXNjdWVsYSBTdXBlcmlvciBkZSBDw7NtcHV0byAoRVNDT00pIC0gSGlnaGVyIFNjaG9vbCBvZiBDb21wdXRlciBTY2llbmNlLlxcbkFjYWRlbWljIEV4Y2VsbGVuY2UgUHJvZ3JhbSBhbGwgdGhlIGNhcmVlci5cXG5Bd2FyZCBmb3IgdGhlIEJlc3QgUHJvamVjdCBvZiB0aGUgQWNhZGVteSBvZiBTb2Z0d2FyZSBFbmdpbmVlcmluZyBvZiB0aGUgWFggRXhwbyBFU0NPTSAyMDE1LlxcblByb2dyYW1taW5nIExhbmd1YWdlczpcXG5KYXZhLCBTUUwsIEhUTUwsIEphdmFTY3JpcHQsIENTUywgQyMsIEMgYW5kIFB5dGhvbi4nfSxcclxuICAgIHtpZDozLCB0aXRsZTonSGlnaCBTY2hvb2wnLCBkYXRlOicyMDEwLTIwMTInLCBkZXNjcmlwdGlvbjonQ2VudHJvIEVzY29sYXIgQmVuZW3DqXJpdG8gZGUgbGFzIEFtw6lyaWNhcyAtIEJlbmVtZXJpdG8gU2Nob29sIENlbnRlciBvZiB0aGUgQW1lcmljYXMuJ30sXHJcblx0XTtcclxuXHRcclxuXHRjb25zdCBMQU5HVUFHRVNfREFUQSA9IFtcclxuICAgIHtpZDoxLCB0aXRsZTonU3BhbmlzaCcsIGRlc2NyaXB0aW9uOidOYXRpdmUgbGFuZ3VhZ2UnfSxcclxuICAgIHtpZDoyLCB0aXRsZTonRW5nbGlzaCcsIGRlc2NyaXB0aW9uOidCMiBsZXZlbCBvbiB0aGUgQ29tbW9uIEV1cm9wZWFuIEZyYW1ld29yayBvZiBSZWZlcmVuY2VzIGZvciBMYW5ndWFnZXMnfSxcclxuICAgIHtpZDozLCB0aXRsZTonS29yZWFuJywgZGVzY3JpcHRpb246J0hhbnNhbW8gSVBOIOKAkyDtlZzsgqzrqqgnfSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBPVEhFUlNfREFUQSA9IFtcclxuICAgIHtpZDoxLCB0aXRsZTonSnVyeSBpbiBoYWNrIEVTQ09NJywgZGVzY3JpcHRpb246JzI1dGggQW5uaXZlcnNhcnksIEF1Z3VzdCAyMDE4J30sXHJcbiAgICB7aWQ6MiwgdGl0bGU6J0ZvdW5kZXIgYW5kIHR1dG9yIG9mIGEgY2x1YicsIGRlc2NyaXB0aW9uOidFeHRyYWN1cnJpY3VsYXIgY2x1YiBhdCB1bml2ZXJzaXR5J30sXHJcbiAgICB7aWQ6MywgdGl0bGU6J09ib2UgU29sb2lzdCcsIGRlc2NyaXB0aW9uOic4MHRoIGFubml2ZXJzYXJ5IG9mIHRoZSBTY2hvb2wgb2YgQXJ0aXN0aWMgSW5pdGlhdGlvbiAoU0FJKSAjMSBvZiB0aGUgTmF0aW9uYWwgSW5zdGl0dXRlIG9mIEZpbmUgQXJ0cyAtIEluc3RpdHV0byBOYWNpb25hbCBkZSBCZWxsYXMgQXJ0ZXMgKElOQkEpIC0gRUlBICMxJ30sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgVEVDSE5PTE9HSUVTID0gW1xyXG4gICAge2lkOjEsIHNyYzonL3N0YXRpYy9sb2dvcy9yZWFjdF9sb2dvLnBuZycsIGFsdDonUmVhY3QnfSxcclxuICAgIHtpZDoyLCBzcmM6Jy9zdGF0aWMvbG9nb3MvcmVhY3Rfcm91dGVyX2xvZ28ucG5nJywgYWx0OidSZWFjdCBSb3V0ZXInfSxcclxuICAgIHtpZDozLCBzcmM6Jy9zdGF0aWMvc3ZnL3JlYWN0X25hdmlnYXRpb25fbG9nby5zdmcnLCBhbHQ6J1JlYWN0IE5hdmlnYXRpb24nfSxcclxuICAgIHtpZDo0LCBzcmM6Jy9zdGF0aWMvbG9nb3Mvd2VicGFja19sb2dvLnBuZycsIGFsdDonV2VicGFjayd9LFxyXG4gICAge2lkOjUsIHNyYzonL3N0YXRpYy9sb2dvcy9qYXZhX2xvZ28ucG5nJywgYWx0OidKYXZhJ30sXHJcbiAgICB7aWQ6Niwgc3JjOicvc3RhdGljL2xvZ29zL2FuZ3VsYXJfbG9nby5wbmcnLCBhbHQ6J0FuZ3VsYXInfSxcclxuICAgIHtpZDo3LCBzcmM6Jy9zdGF0aWMvbG9nb3MvYm9vdHN0cmFwX2xvZ28ucG5nJywgYWx0OidCb290c3RyYXAnfSxcclxuICAgIHtpZDo4LCBzcmM6Jy9zdGF0aWMvbG9nb3MvY19zaGFycF9sb2dvLnBuZycsIGFsdDonQyMnfSxcclxuICAgIHtpZDo5LCBzcmM6Jy9zdGF0aWMvbG9nb3MvdW5pdHlfbG9nby5wbmcnLCBhbHQ6J1VuaXR5J30sXHJcbiAgICB7aWQ6MTAsIHNyYzonL3N0YXRpYy9sb2dvcy9odG1sNV9sb2dvLnBuZycsIGFsdDonSFRNTCA1J30sXHJcbiAgICB7aWQ6MTEsIHNyYzonL3N0YXRpYy9sb2dvcy9jc3NfbG9nby5wbmcnLCBhbHQ6J0NTUyd9LFxyXG4gICAge2lkOjEyLCBzcmM6Jy9zdGF0aWMvbG9nb3MvamF2YXNjcmlwdF9sb2dvLnBuZycsIGFsdDonSmF2YXNjcmlwdCd9XHJcbiAgXTtcclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PD5cclxuXHRcdFx0PFJpYmJvblBhbmVsIFxyXG5cdFx0XHRcdHRleHRBbGlnbj1cImNlbnRlclwiXHJcblx0XHRcdFx0cmliYm9uQ29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHRjb250ZW50Q29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHR0aXRsZT1cIldpbGxpYW0ncyBSZXN1bWVcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicmVzdW1lLXRleHRcIj5cclxuXHRcdFx0XHRcdHtPQkpFQ1RJVkV9XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxTZWN0aW9uTGlzdCBcclxuXHRcdFx0XHRcdFx0ZGF0YT17RVhQRVJJRU5DRV9EQVRBfVxyXG5cdFx0XHRcdFx0XHRjb2xvcj1cIiMxMTEzMTdcIlxyXG5cdFx0XHRcdFx0XHR0aXRsZT1cIldvcmsgZXhwZXJpZW5jZVwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFNlY3Rpb25MaXN0IFxyXG5cdFx0XHRcdFx0XHRkYXRhPXtFRFVDQVRJT05fREFUQX1cclxuXHRcdFx0XHRcdFx0Y29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHRcdFx0dGl0bGU9XCJFZHVjYXRpb25cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWN0aW9uTGlzdCBcclxuXHRcdFx0XHRcdFx0ZGF0YT17TEFOR1VBR0VTX0RBVEF9XHJcblx0XHRcdFx0XHRcdGNvbG9yPVwiIzExMTMxN1wiXHJcblx0XHRcdFx0XHRcdHRpdGxlPVwiTGFuZ3VhZ2VzXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VjdGlvbkxpc3QgXHJcblx0XHRcdFx0XHRcdGRhdGE9e09USEVSU19EQVRBfVxyXG5cdFx0XHRcdFx0XHRjb2xvcj1cIiMxMTEzMTdcIlxyXG5cdFx0XHRcdFx0XHR0aXRsZT1cIk90aGVyIGluZm9ybWF0aW9uXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxUaXRsZUJhbmQgXHJcblx0XHRcdFx0XHRyb3VuZGVkPXt0cnVlfVxyXG5cdFx0XHRcdFx0cG9zaXRpb249XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0dGl0bGU9XCJUZWNobm9sb2dpZXNcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRlY2hub2xvZ2llcyBcclxuXHRcdFx0XHRcdHRvbmU9XCJncmF5XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzAlXCJcclxuXHRcdFx0XHRcdGNvbHVtbnM9XCI2XCJcclxuICAgICAgICAgIGhvdmVyQ29sb3I9XCIjMTExMzE3XCJcclxuICAgICAgICAgIHRlY2hub2xvZ2llcz17VEVDSE5PTE9HSUVTfVxyXG4gICAgICAgIC8+XHJcblx0XHRcdFx0PFVuZGVybGluZWRMaW5rIFxyXG5cdFx0XHRcdFx0aHJlZj17UkVTVU1FX1VSTH1cclxuXHRcdFx0XHRcdHRpdGxlPVwiXCJcclxuXHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHR0ZXh0PVwiRG93bmxvYWRcIlxyXG5cdFx0XHRcdFx0Y29sb3I9XCIjMTExMzE3XCJcclxuXHRcdFx0XHRcdGp1c3RpZnk9XCJmbGV4LWVuZFwiXHJcblx0XHRcdFx0XHRob3ZlckNvbG9yPVwiI0JGMDQwNFwiXHJcblx0XHRcdFx0XHRsaW5lQ29sb3I9XCIjQkYwNDA0XCJcclxuXHRcdFx0XHRcdGhhbmRsZUNsaWs9eygpPT5sb2dFdmVudChHQV9SRVNVTUVfQ0FURUdPUlksR0FfUkVTVU1FX0RPV05MT0FEX0FDVElPTixHQV9SRVNVTUVfTEFCRUwpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxEb3dubG9hZEljb25cclxuXHRcdFx0XHRcdFx0c2l6ZT17MjB9XHJcblx0XHRcdFx0XHRcdGNvbG9yPVwiIzExMTMxN1wiXHJcblx0XHRcdFx0XHRcdGhvdmVyQ29sb3I9XCIjQkYwNDA0XCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9VbmRlcmxpbmVkTGluaz5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQucmVzdW1lLXRleHR7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5yZXN1bWUtY29udGVudHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbi1nYXA6IDI1cHg7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xyXG5cdFx0XHRcdFx0XHQucmVzdW1lLXRleHR7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQucmVzdW1lLWNvbnRlbnR7XHJcblx0XHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvUmliYm9uUGFuZWw+XHJcbiAgICA8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bWVDb250ZW50OyJdfQ== */\n/*@ sourceURL=C:\\Projects\\portfolio\\components\\ResumeContent.js */",
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ResumeContent);

/***/ })

})
//# sourceMappingURL=resume.js.12c00732cbd639591318.hot-update.js.map