webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/ServicesFirst/index.jsx":
/*!************************************************!*\
  !*** ./src/Components/ServicesFirst/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServicesFirst; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_ServiceFirst_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/ServiceFirst.module.css */ "./src/styles/ServiceFirst.module.css");
/* harmony import */ var _styles_ServiceFirst_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ServiceFirst_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ASUS\\Documents\\Projects\\assignment\\VegaHomes\\client\\src\\Components\\ServicesFirst\\index.jsx";



function ServicesFirst(_ref) {
  var _this = this;

  var service = _ref.service;
  console.log(service.service);

  if (!service.service.length) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Loader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    id: "Services",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: service.service.length > 0 ? service.service.map(function (services, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          md: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            className: "my-4 text-justify",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              md: {
                span: 6
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_ServiceFirst_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imagesSize,
                src: services.servicePicture,
                alt: "Service of ".concat(services.name)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              md: {
                span: 6,
                order: 1
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
                className: "".concat(_styles_ServiceFirst_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CardStylesForServices, " bg-dark p-5 mt-5 d-block text-white"),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
                  as: "h3",
                  children: services.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
                  as: "p",
                  children: services.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
                  children: ["Service Hour: \xA0 ", services.time, "h"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/book/".concat(services._id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                      variant: "outline-info",
                      children: "Book Now"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = ServicesFirst;

var _c;

$RefreshReg$(_c, "ServicesFirst");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Components/practiceData/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2VydmljZXNGaXJzdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU2VydmljZXNGaXJzdCIsInNlcnZpY2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwic2VydmljZXMiLCJpbmRleCIsInNwYW4iLCJzdHlsZXMiLCJpbWFnZXNTaXplIiwic2VydmljZVBpY3R1cmUiLCJuYW1lIiwib3JkZXIiLCJDYXJkU3R5bGVzRm9yU2VydmljZXMiLCJkZXNjcmlwdGlvbiIsInRpbWUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsT0FBb0M7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDakRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNBLE9BQXBCOztBQUNBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDQSxPQUFSLENBQWdCRyxNQUFyQixFQUE2QjtBQUMzQix3QkFBTyxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELHNCQUNFLHFFQUFDLHlEQUFEO0FBQVcsTUFBRSxFQUFDLFVBQWQ7QUFBQSwyQkFDRSxxRUFBQyxtREFBRDtBQUFBLGdCQUNHSCxPQUFPLENBQUNBLE9BQVIsQ0FBZ0JHLE1BQWhCLEdBQXlCLENBQXpCLEdBQ0dILE9BQU8sQ0FBQ0EsT0FBUixDQUFnQkksR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsNEJBQ2xCLHFFQUFDLG1EQUFEO0FBQWlCLFlBQUUsRUFBRSxFQUFyQjtBQUFBLGlDQUNFLHFFQUFDLG1EQUFEO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG9DQUNFLHFFQUFDLG1EQUFEO0FBQUssZ0JBQUUsRUFBRTtBQUFFQyxvQkFBSSxFQUFFO0FBQVIsZUFBVDtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBRUMsc0VBQU0sQ0FBQ0MsVUFEcEI7QUFFRSxtQkFBRyxFQUFFSixRQUFRLENBQUNLLGNBRmhCO0FBR0UsbUJBQUcsdUJBQWdCTCxRQUFRLENBQUNNLElBQXpCO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRSxxRUFBQyxtREFBRDtBQUFLLGdCQUFFLEVBQUU7QUFBRUosb0JBQUksRUFBRSxDQUFSO0FBQVdLLHFCQUFLLEVBQUU7QUFBbEIsZUFBVDtBQUFBLHFDQUNFLHFFQUFDLG9EQUFEO0FBQ0UseUJBQVMsWUFBS0osc0VBQU0sQ0FBQ0sscUJBQVoseUNBRFg7QUFBQSx3Q0FHRSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxvQkFBRSxFQUFDLElBQWY7QUFBQSw0QkFBcUJSLFFBQVEsQ0FBQ007QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixlQUlFLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFXLG9CQUFFLEVBQUMsR0FBZDtBQUFBLDRCQUFtQk4sUUFBUSxDQUFDUztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0UscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsb0RBQ3dCVCxRQUFRLENBQUNVLElBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQVFFLHFFQUFDLGdEQUFEO0FBQU0sc0JBQUksa0JBQVdWLFFBQVEsQ0FBQ1csR0FBcEIsQ0FBVjtBQUFBLHlDQUNFO0FBQUEsMkNBQ0UscUVBQUMsc0RBQUQ7QUFBUSw2QkFBTyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtCO0FBQUEsT0FBcEIsQ0FESCxHQThCRztBQS9CTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEO0tBMUN1QlAsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OGRhOGE2MDhhMDU3NDBiMmY0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2VydmljZUZpcnN0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXNGaXJzdCh7IHNlcnZpY2UgfSkge1xyXG4gIGNvbnNvbGUubG9nKHNlcnZpY2Uuc2VydmljZSk7XHJcbiAgaWYgKCFzZXJ2aWNlLnNlcnZpY2UubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gPExvYWRlciAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgaWQ9XCJTZXJ2aWNlc1wiPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIHtzZXJ2aWNlLnNlcnZpY2UubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBzZXJ2aWNlLnNlcnZpY2UubWFwKChzZXJ2aWNlcywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm15LTQgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXNTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlcy5zZXJ2aWNlUGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YFNlcnZpY2Ugb2YgJHtzZXJ2aWNlcy5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogNiwgb3JkZXI6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkNhcmRTdHlsZXNGb3JTZXJ2aWNlc30gYmctZGFyayBwLTUgbXQtNSBkLWJsb2NrIHRleHQtd2hpdGVgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGFzPVwiaDNcIj57c2VydmljZXMubmFtZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGFzPVwicFwiPntzZXJ2aWNlcy5kZXNjcmlwdGlvbn08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgSG91cjogJm5ic3A7IHtzZXJ2aWNlcy50aW1lfWhcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ib29rLyR7c2VydmljZXMuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIj5Cb29rIE5vdzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==