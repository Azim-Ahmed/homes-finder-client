webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_AboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/AboutUs */ "./src/Components/AboutUs/index.jsx");
/* harmony import */ var _Components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Banner */ "./src/Components/Banner/index.jsx");
/* harmony import */ var _Components_ContactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/ContactUs */ "./src/Components/ContactUs/index.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header/index.jsx");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Layout */ "./src/Components/Layout/index.jsx");
/* harmony import */ var _Components_ServicesFirst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/ServicesFirst */ "./src/Components/ServicesFirst/index.jsx");
/* harmony import */ var _Components_MapSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/MapSection */ "./src/Components/MapSection/index.jsx");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer/index.jsx");
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Loader */ "./src/Components/Loader/index.jsx");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_app */ "./src/pages/_app.js");


var _jsxFileName = "C:\\Users\\ASUS\\Documents\\Projects\\assignment\\VegaHomes\\client\\src\\pages\\index.js",
    _s = $RefreshSig$();














var __N_SSG = true;
function Home(_ref) {
  _s();

  var service = _ref.service;

  // const { appData, setAppData } = useContext(UserContext);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('PrimaryBackground'),
      backgorundAbout = _useState[0],
      setBackgroundAbout = _useState[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  navRef.current = backgorundAbout;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var interval = setInterval(function () {
      setBackgroundAbout('grayShade');
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a[navRef.current],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Vega Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_AboutUs__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_ServicesFirst__WEBPACK_IMPORTED_MODULE_8__["default"], {
      service: service
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_ContactUs__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_MapSection__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(Home, "Ha1em1ovRHOkiwu7AzTO8Rs3WkE=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/urlConfig.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJzZXJ2aWNlIiwidXNlU3RhdGUiLCJiYWNrZ29ydW5kQWJvdXQiLCJzZXRCYWNrZ3JvdW5kQWJvdXQiLCJuYXZSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3hDO0FBRHdDLGtCQUVNQyxzREFBUSxDQUFDLG1CQUFELENBRmQ7QUFBQSxNQUVqQ0MsZUFGaUM7QUFBQSxNQUVoQkMsa0JBRmdCOztBQUd4QyxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLEVBQXJCO0FBQ0FELFFBQU0sQ0FBQ0UsT0FBUCxHQUFpQkosZUFBakI7QUFFQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ04sd0JBQWtCLENBQUMsV0FBRCxDQUFsQjtBQUNELEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBR0EsV0FBTztBQUFBLGFBQU1PLGFBQWEsQ0FBQ0YsUUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLCtEQUFNLENBQUNQLE1BQU0sQ0FBQ0UsT0FBUixDQUF0QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFLHFFQUFDLGlFQUFEO0FBQWUsYUFBTyxFQUFFTjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFZRTtBQUFRLGVBQVMsRUFBRVcsK0RBQU0sQ0FBQ0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQTdCdUJiLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTZjMWE4MzM1NmFmMmYzZTE1Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi91cmxDb25maWcnO1xuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi4vQ29tcG9uZW50cy9BYm91dFVzJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IENvbnRhY3RVcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRhY3RVcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFNlcnZpY2VzRmlyc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9TZXJ2aWNlc0ZpcnN0JztcbmltcG9ydCBNYXBTZWN0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvTWFwU2VjdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi9fYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNlcnZpY2UgfSkge1xuICAvLyBjb25zdCB7IGFwcERhdGEsIHNldEFwcERhdGEgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCBbYmFja2dvcnVuZEFib3V0LCBzZXRCYWNrZ3JvdW5kQWJvdXRdID0gdXNlU3RhdGUoJ1ByaW1hcnlCYWNrZ3JvdW5kJyk7XG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZigpO1xuICBuYXZSZWYuY3VycmVudCA9IGJhY2tnb3J1bmRBYm91dDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0QmFja2dyb3VuZEFib3V0KCdncmF5U2hhZGUnKTtcbiAgICB9LCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbbmF2UmVmLmN1cnJlbnRdfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VmVnYSBIb21lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEJhbm5lciAvPlxuICAgICAgPEFib3V0VXMgLz5cbiAgICAgIDxTZXJ2aWNlc0ZpcnN0IHNlcnZpY2U9e3NlcnZpY2V9IC8+XG4gICAgICA8Q29udGFjdFVzIC8+XG4gICAgICA8TWFwU2VjdGlvbiAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGl9YCk7XG4gIGNvbnN0IHNlcnZpY2UgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIXNlcnZpY2Uuc2VydmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzZXJ2aWNlLFxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDEwLFxuICAgIH07XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9