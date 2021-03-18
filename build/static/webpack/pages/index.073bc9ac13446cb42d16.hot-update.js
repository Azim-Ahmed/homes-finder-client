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
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../urlConfig */ "./src/urlConfig.js");
/* harmony import */ var _Components_AboutUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/AboutUs */ "./src/Components/AboutUs/index.jsx");
/* harmony import */ var _Components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Banner */ "./src/Components/Banner/index.jsx");
/* harmony import */ var _Components_ContactUs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/ContactUs */ "./src/Components/ContactUs/index.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header/index.jsx");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Layout */ "./src/Components/Layout/index.jsx");
/* harmony import */ var _Components_ServicesFirst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/ServicesFirst */ "./src/Components/ServicesFirst/index.jsx");
/* harmony import */ var _Components_MapSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/MapSection */ "./src/Components/MapSection/index.jsx");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer/index.jsx");
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Loader */ "./src/Components/Loader/index.jsx");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_app */ "./src/pages/_app.js");


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
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a[navRef.current],
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_AboutUs__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_ServicesFirst__WEBPACK_IMPORTED_MODULE_9__["default"], {
      service: service
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_ContactUs__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_MapSection__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.footer
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
/*!**************************!*\
  !*** ./src/urlConfig.js ***!
  \**************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
var api = 'https://blooming-sea-18447.herokuapp.com/';

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvdXJsQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJzZXJ2aWNlIiwidXNlU3RhdGUiLCJiYWNrZ29ydW5kQWJvdXQiLCJzZXRCYWNrZ3JvdW5kQWJvdXQiLCJuYXZSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJmb290ZXIiLCJhcGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3hDO0FBRHdDLGtCQUVNQyxzREFBUSxDQUFDLG1CQUFELENBRmQ7QUFBQSxNQUVqQ0MsZUFGaUM7QUFBQSxNQUVoQkMsa0JBRmdCOztBQUd4QyxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLEVBQXJCO0FBQ0FELFFBQU0sQ0FBQ0UsT0FBUCxHQUFpQkosZUFBakI7QUFFQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ04sd0JBQWtCLENBQUMsV0FBRCxDQUFsQjtBQUNELEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBR0EsV0FBTztBQUFBLGFBQU1PLGFBQWEsQ0FBQ0YsUUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLCtEQUFNLENBQUNQLE1BQU0sQ0FBQ0UsT0FBUixDQUF0QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFLHFFQUFDLGlFQUFEO0FBQWUsYUFBTyxFQUFFTjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFZRTtBQUFRLGVBQVMsRUFBRVcsK0RBQU0sQ0FBQ0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQTdCdUJiLEk7O0tBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmeEI7QUFBQTtBQUFPLElBQU1jLEdBQUcsR0FBRywyQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNzNiYzlhYzEzNDQ2Y2I0MmQxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3VybENvbmZpZyc7XG5pbXBvcnQgQWJvdXRVcyBmcm9tICcuLi9Db21wb25lbnRzL0Fib3V0VXMnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9Db21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgQ29udGFjdFVzIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFjdFVzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgU2VydmljZXNGaXJzdCBmcm9tICcuLi9Db21wb25lbnRzL1NlcnZpY2VzRmlyc3QnO1xuaW1wb3J0IE1hcFNlY3Rpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9NYXBTZWN0aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuL19hcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc2VydmljZSB9KSB7XG4gIC8vIGNvbnN0IHsgYXBwRGF0YSwgc2V0QXBwRGF0YSB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IFtiYWNrZ29ydW5kQWJvdXQsIHNldEJhY2tncm91bmRBYm91dF0gPSB1c2VTdGF0ZSgnUHJpbWFyeUJhY2tncm91bmQnKTtcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKCk7XG4gIG5hdlJlZi5jdXJyZW50ID0gYmFja2dvcnVuZEFib3V0O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRCYWNrZ3JvdW5kQWJvdXQoJ2dyYXlTaGFkZScpO1xuICAgIH0sIDUwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tuYXZSZWYuY3VycmVudF19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5WZWdhIEhvbWU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8QWJvdXRVcyAvPlxuICAgICAgPFNlcnZpY2VzRmlyc3Qgc2VydmljZT17c2VydmljZX0gLz5cbiAgICAgIDxDb250YWN0VXMgLz5cbiAgICAgIDxNYXBTZWN0aW9uIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+PC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjIwMDAvYXBpL3NlcnZpY2VzL2dldEFsbFNlcnZpY2VzJyk7XG4gIGNvbnN0IHNlcnZpY2UgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIXNlcnZpY2Uuc2VydmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzZXJ2aWNlLFxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDEwLFxuICAgIH07XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgYXBpID0gJ2h0dHBzOi8vYmxvb21pbmctc2VhLTE4NDQ3Lmhlcm9rdWFwcC5jb20vJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==