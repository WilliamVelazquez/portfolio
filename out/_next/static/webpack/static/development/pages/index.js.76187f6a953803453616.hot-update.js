webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/TopButton.js":
/*!*********************************!*\
  !*** ./containers/TopButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.js");
/* harmony import */ var _components_icons_CaretIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icons/CaretIcon */ "./components/icons/CaretIcon.js");
var _jsxFileName = "E:\\Proyectos\\React\\portfolio\\containers\\TopButton.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TopButton =
/*#__PURE__*/
function (_Component) {
  _inherits(TopButton, _Component);

  function TopButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TopButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TopButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showBtn: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showToTopBtn", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        _this.setState({
          showBtn: true
        });
      } else {
        _this.setState({
          showBtn: false
        });
      }
    });

    return _this;
  }

  _createClass(TopButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window) return;
      window.addEventListener('scroll', this.showToTopBtn);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!window) return;
      window.removeEventListener('scroll', this.showToTopBtn);
    }
  }, {
    key: "render",
    value: function render() {
      var showBtn = this.state.showBtn;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1748336095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: _utils_functions__WEBPACK_IMPORTED_MODULE_2__["scrollToTop"],
        className: "jsx-1748336095" + " " + "toTopBtn".concat(showBtn ? "" : " move-btn-out-screen"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icons_CaretIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#fff",
        hoverColor: "#111317",
        size: 32,
        viewBox: "0 0 24 22",
        direction: "up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1748336095",
        css: "button.jsx-1748336095{cursor:pointer;border-radius:5px;border:0px;padding:0px;background:#BF0404;color:#fff;font-size:10px;-webkit-transition-duration:0.4s;transition-duration:0.4s;-o-transition-duration:0.4s;-moz-transition-duration:0.4s;-webkit-transition-duration:0.4s;box-shadow:0px 0px 3px 2px #791716;-o-box-shadow:0px 0px 3px 2px #791716;-moz-box-shadow:0px 0px 3px 2px #791716;-webkit-box-shadow:0px 0px 3px 2px #791716;}button.jsx-1748336095:hover,button.jsx-1748336095:active{color:#111317;background:#fff;box-shadow:0px 0px 3px 2px #111316;-o-box-shadow:0px 0px 3px 2px #111316;-moz-box-shadow:0px 0px 3px 2px #111316;-webkit-box-shadow:0px 0px 3px 2px #111316;}.toTopBtn.jsx-1748336095{position:fixed;bottom:20px;right:30px;z-index:98;opacity:1;}.move-btn-out-screen.jsx-1748336095{opacity:0;bottom:-50px;}.hidden.jsx-1748336095{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbnRhaW5lcnNcXFRvcEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q29CLEFBRzRCLEFBb0JELEFBU0MsQUFPTCxBQUlHLFVBSEEsR0FJZixDQXBCa0IsQ0FwQkUsQUE2Qk4sUUFRZCxJQVBhLEdBUndCLEdBckJ4QixLQThCQSxNQTVCQyxLQTZCRixPQTVCUyxHQTZCckIsTUFWd0MsVUFsQjNCLFdBQ0ksZUFDVSxFQWlCZSx3Q0FDRyxnQkFqQmYsMkJBa0I5QixDQWpCZ0MsOEJBQ0csaUNBQ0UsbUNBQ0csc0NBQ0Usd0NBQ0csMkNBQzdDIiwiZmlsZSI6IkU6XFxQcm95ZWN0b3NcXFJlYWN0XFxwb3J0Zm9saW9cXGNvbnRhaW5lcnNcXFRvcEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgc2Nyb2xsVG9Ub3AgfSBmcm9tICcuLi91dGlscy9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZXRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMvQ2FyZXRJY29uJztcclxuXHJcbmNsYXNzIFRvcEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93QnRuOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZighd2luZG93KSByZXR1cm5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNob3dUb1RvcEJ0bik7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgaWYoIXdpbmRvdykgcmV0dXJuXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zaG93VG9Ub3BCdG4pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RvVG9wQnRuID0gKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDIwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QnRuOnRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0J0bjpmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgeyBzaG93QnRuIH0gPSB0aGlzLnN0YXRlO1xyXG4gIFx0cmV0dXJuKFxyXG4gIFx0XHQ8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRvVG9wQnRuJHtzaG93QnRuP1wiXCI6XCIgbW92ZS1idG4tb3V0LXNjcmVlblwifWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2FyZXRJY29uIFxyXG4gICAgICAgICAgICBjb2xvcj17XCIjZmZmXCJ9IFxyXG4gICAgICAgICAgICBob3ZlckNvbG9yPXtcIiMxMTEzMTdcIn0gXHJcbiAgICAgICAgICAgIHNpemU9ezMyfVxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDIyXCJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwidXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCAjNzkxNzE2OyovXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0JGMDQwNDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogT3BlcmEgKi9cclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBNb3ppbGxhICovXHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCAjNzkxNzE2O1xyXG4gICAgICAgICAgICAtby1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggIzc5MTcxNjtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggIzc5MTcxNjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggIzc5MTcxNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAgIGJ1dHRvbjphY3RpdmVcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxMTEzMTc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzExMTMxNzsqL1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggIzExMTMxNjtcclxuICAgICAgICAgICAgLW8tYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4ICMxMTEzMTY7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4ICMxMTEzMTY7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4ICMxMTEzMTY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9Ub3BCdG57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQvc3RpY2t5IHBvc2l0aW9uICovXHJcbiAgICAgICAgICAgIGJvdHRvbTogMjBweDsgLyogUGxhY2UgdGhlIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMHB4OyAvKiBQbGFjZSB0aGUgYnV0dG9uIDMwcHggZnJvbSB0aGUgcmlnaHQgKi9cclxuICAgICAgICAgICAgei1pbmRleDogOTg7IC8qIE1ha2Ugc3VyZSBpdCBkb2VzIG5vdCBvdmVybGFwLCBleGNlcHQgTmF2TWVudSAqL1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vdmUtYnRuLW91dC1zY3JlZW57XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGlkZGVue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgXHQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQnV0dG9uOyJdfQ== */\n/*@ sourceURL=E:\\Proyectos\\React\\portfolio\\containers\\TopButton.js */",
        __self: this
      }));
    }
  }]);

  return TopButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopButton);

/***/ })

})
//# sourceMappingURL=index.js.76187f6a953803453616.hot-update.js.map