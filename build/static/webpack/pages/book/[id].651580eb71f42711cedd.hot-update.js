webpackHotUpdate_N_E("pages/book/[id]",{

/***/ "./src/pages/book/[id].js":
/*!********************************!*\
  !*** ./src/pages/book/[id].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Layout */ "./src/Components/Layout/index.jsx");
/* harmony import */ var _styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/singleService.module.css */ "./src/styles/singleService.module.css");
/* harmony import */ var _styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../urlConfig */ "./src/urlConfig.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "C:\\Users\\ASUS\\Documents\\Projects\\assignment\\VegaHomes\\client\\src\\pages\\book\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();














var SingleService = function SingleService(_ref) {
  _s();

  var serviceData = _ref.serviceData;
  var ParticularServiceData = serviceData.service;
  var name = ParticularServiceData.name,
      price = ParticularServiceData.price,
      servicePicture = ParticularServiceData.servicePicture,
      slug = ParticularServiceData.slug,
      time = ParticularServiceData.time,
      description = ParticularServiceData.description; //state of react Calendar

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date()),
      value = _useState[0],
      onChange = _useState[1];

  var dateData = value.toDateString(); //state of this component

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      serviceTime = _useState2[0],
      setServiceTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      orderData = _useState3[0],
      setOrderData = _useState3[1];

  orderData.workTime = serviceTime;
  orderData.workDate = dateData;
  orderData.serviceName = name;
  orderData.orderPrice = price;
  orderData.orderDescription = description;
  orderData.orderPicture = servicePicture;
  orderData.time = time; //

  console.log(orderData); //state of conditional form/ calendar rendereing

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      next = _useState4[0],
      setNext = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      request = _useState5[0],
      setRequest = _useState5[1]; //state of error or correct time


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      nexty = _useState6[0],
      setNexty = _useState6[1]; //Successful page condition


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      success = _useState7[0],
      setSuccess = _useState7[1]; //next button function


  var formRenderSectionByNextButton = function formRenderSectionByNextButton() {
    if (!serviceTime) {
      setNext(false);
      setNexty( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Please Select the time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 16
      }, _this));
    } else {
      setNext(true);
    }
  }; //Request To book button onClick Function


  var RequestToBookForApproval = function RequestToBookForApproval() {
    if (!orderData.name && !orderData.email) {
      setNexty( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Please Fill the Data Correctly"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 16
      }, _this));
    } else {
      fetch("".concat(_urlConfig__WEBPACK_IMPORTED_MODULE_10__["api"], "/order/create"), {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderData)
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        //alert('One Service Item Added');
        setSuccess(true);
      });
    }
  };

  var optionsMorning = [{
    value: '9:00 am',
    label: '9:00 am'
  }, {
    value: '9:30 am',
    label: '9:30 am'
  }, {
    value: '10:00 am',
    label: '10:00 am'
  }, {
    value: '10:30 am',
    label: '10:30 am'
  }, {
    value: '11:00 am',
    label: '11:00 am'
  }, {
    value: '11:30 am',
    label: '11:30 am'
  }];
  var optionsAfternoon = [{
    value: '12:00 pm',
    label: '12:00 pm'
  }, {
    value: '12:30 pm',
    label: '12:30 pm'
  }, {
    value: '1:00 pm',
    label: '1:00 pm'
  }, {
    value: '1:30 pm',
    label: '1:30 pm'
  }, {
    value: '2:00 pm',
    label: '2:00 pm'
  }, {
    value: '2:30 pm',
    label: '2:30 pm'
  }, {
    value: '3:00 pm',
    label: '3:00 pm'
  }, {
    value: '3:30 pm',
    label: '3:30 pm'
  }, {
    value: '4:30 pm',
    label: '4:30 pm'
  }];
  var optionsEvening = [{
    value: '5:00 am',
    label: '5:00 am'
  }]; //react-select timeSection

  var handleTimeChange = function handleTimeChange(select) {
    setServiceTime(select.value);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(); //render form

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      reset = _useForm.reset;

  var onSubmit = function onSubmit(data) {
    setRequest(true);
    setOrderData(data);
    reset();
  }; //render time and date(calendar and time components)


  var renderDateAndTime = function renderDateAndTime() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: {
        span: 6,
        offset: 1
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_calendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: _styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.CalendarSection,
            onChange: onChange,
            value: value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          className: "mt-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
                instanceId: "Morning",
                autoFocus: true,
                onChange: handleTimeChange,
                options: optionsMorning,
                placeholder: "Morning"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
                instanceId: "Afternoon",
                autoFocus: true,
                onChange: handleTimeChange,
                options: optionsAfternoon,
                placeholder: "Afternoon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
                instanceId: "Evening",
                autoFocus: true,
                onChange: handleTimeChange,
                options: optionsEvening,
                placeholder: "Evening"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this);
  }; //react hook form to get data


  var renderHookForm = function renderHookForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: {
        span: 6,
        offset: 1
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
          controlId: "name",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
            type: "text",
            name: "name",
            placeholder: "*Name",
            ref: register({
              required: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this), errors.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            className: "text-danger form-text",
            children: "Please enter name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
          controlId: "email",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
            type: "text",
            name: "email",
            placeholder: "*Email Address",
            ref: register({
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this), errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            className: "text-danger form-text",
            children: "Please enter a valid Email-ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
          controlId: "phoneNumber",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
            type: "phone",
            name: "phoneNumber",
            placeholder: "*Phone Number",
            ref: register({
              required: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), errors.phoneNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            className: "text-danger form-text",
            children: "Please enter a valid Phone Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
              controlId: "street",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                type: "text",
                name: "street",
                placeholder: "*Street",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, _this), errors.street && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-danger form-text",
                children: "Please enter a valid street"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
              controlId: "phoneNumber",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                type: "text",
                name: "floor",
                placeholder: "Apt/Floor No.",
                ref: register({
                  required: false
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
              controlId: "city",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                type: "text",
                name: "city",
                placeholder: "*City",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, _this), errors.city && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-danger form-text",
                children: "Please enter your city"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
              controlId: "state",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                type: "text",
                name: "state",
                placeholder: "State",
                ref: register({
                  required: false
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
          controlId: "message",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
            type: "text",
            name: "message",
            placeholder: "Add your Message",
            ref: register({
              required: false
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          className: "text-muted",
          children: "*Required Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: _styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.submitButtonStyle,
          block: true,
          type: "submit",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this);
  }; //successFul page Component


  var renderSuccessfulPage = function renderSuccessfulPage() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: "url($".concat(orderData.orderPicture, ")")
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.bgText, " text-justify"),
          children: "Order Success"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, _this);
  }; //main Component


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [success ? renderSuccessfulPage() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        className: "text-center mt-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: {
            span: 6,
            offset: 3
          },
          children: [next && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2499086583" + " " + "text-center",
            children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "jsx-2499086583",
              children: "Add Your Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-2499086583",
              children: "Tell us a bit about yourself"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 17
          }, _this), !next && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "jsx-2499086583" + " " + "text-white text-justify  my-5 py-5",
            children: [' ', "Schedule Online"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        className: "text-center mt-4",
        children: [!next && renderDateAndTime(), next && renderHookForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: 4,
          className: "mt-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "wrapper",
            className: "jsx-2499086583",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "sticky",
              className: "jsx-2499086583",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
                className: _styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.cardbackgroundForm,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
                    className: _styles_singleService_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.cardTitileBorder,
                    children: ParticularServiceData.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
                    children: dateData
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
                    children: serviceTime
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 23
                  }, _this), request ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    block: true,
                    size: "lg",
                    className: "py-2 my-3",
                    variant: "outline-info",
                    onClick: RequestToBookForApproval,
                    children: "Request"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 25
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    block: true,
                    size: "lg",
                    className: "py-2 my-3",
                    variant: "outline-info",
                    onClick: formRenderSectionByNextButton,
                    children: "Next"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 25
                  }, _this), serviceTime ? '' : nexty]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: {
            span: 8,
            offset: 2
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 11
      }, _this)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2499086583",
      children: "#sticky.jsx-2499086583{position:-webkit-sticky;position:sticky;position:-webkit-sticky;width:100%;height:auto;top:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0 0 7px gray;color:#000;}#wrapper.jsx-2499086583{width:17rem;margin:auto;}#wrapper.jsx-2499086583{height:700px;}h4.jsx-2499086583{text-align:center;color:white;}@media (min-height:768px){#wrapper.jsx-2499086583{height:2000px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVU1xcRG9jdW1lbnRzXFxQcm9qZWN0c1xcYXNzaWdubWVudFxcVmVnYUhvbWVzXFxjbGllbnRcXHNyY1xccGFnZXNcXGJvb2tcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK1hTLEFBRzZCLEFBYUosQUFJQyxBQVVLLEFBS0YsWUFsQkosQ0FJZCxDQWVFLElBTFksTUFiZCxNQWNBLFVBNUIwQix3QkFFYixXQUNDLFlBQ0gsU0FDSSwwRUFDVSxtR0FDSiw2RkFDSyx3QkFDYixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQVNVU1xcRG9jdW1lbnRzXFxQcm9qZWN0c1xcYXNzaWdubWVudFxcVmVnYUhvbWVzXFxjbGllbnRcXHNyY1xccGFnZXNcXGJvb2tcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgRm9ybSwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NpbmdsZVNlcnZpY2UubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyZWFjdC1jYWxlbmRhcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vdXJsQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAncmVhY3QtY2FsZW5kYXIvZGlzdC9DYWxlbmRhci5jc3MnO1xyXG5cclxuY29uc3QgU2luZ2xlU2VydmljZSA9ICh7IHNlcnZpY2VEYXRhIH0pID0+IHtcclxuICBjb25zdCBQYXJ0aWN1bGFyU2VydmljZURhdGEgPSBzZXJ2aWNlRGF0YS5zZXJ2aWNlO1xyXG4gIGNvbnN0IHtcclxuICAgIG5hbWUsXHJcbiAgICBwcmljZSxcclxuICAgIHNlcnZpY2VQaWN0dXJlLFxyXG4gICAgc2x1ZyxcclxuICAgIHRpbWUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9ID0gUGFydGljdWxhclNlcnZpY2VEYXRhO1xyXG5cclxuICAvL3N0YXRlIG9mIHJlYWN0IENhbGVuZGFyXHJcbiAgY29uc3QgW3ZhbHVlLCBvbkNoYW5nZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBkYXRlRGF0YSA9IHZhbHVlLnRvRGF0ZVN0cmluZygpO1xyXG5cclxuICAvL3N0YXRlIG9mIHRoaXMgY29tcG9uZW50XHJcbiAgY29uc3QgW3NlcnZpY2VUaW1lLCBzZXRTZXJ2aWNlVGltZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3JkZXJEYXRhLCBzZXRPcmRlckRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIG9yZGVyRGF0YS53b3JrVGltZSA9IHNlcnZpY2VUaW1lO1xyXG4gIG9yZGVyRGF0YS53b3JrRGF0ZSA9IGRhdGVEYXRhO1xyXG4gIG9yZGVyRGF0YS5zZXJ2aWNlTmFtZSA9IG5hbWU7XHJcbiAgb3JkZXJEYXRhLm9yZGVyUHJpY2UgPSBwcmljZTtcclxuICBvcmRlckRhdGEub3JkZXJEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIG9yZGVyRGF0YS5vcmRlclBpY3R1cmUgPSBzZXJ2aWNlUGljdHVyZTtcclxuICBvcmRlckRhdGEudGltZSA9IHRpbWU7XHJcbiAgLy9cclxuICBjb25zb2xlLmxvZyhvcmRlckRhdGEpO1xyXG5cclxuICAvL3N0YXRlIG9mIGNvbmRpdGlvbmFsIGZvcm0vIGNhbGVuZGFyIHJlbmRlcmVpbmdcclxuICBjb25zdCBbbmV4dCwgc2V0TmV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlcXVlc3QsIHNldFJlcXVlc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vc3RhdGUgb2YgZXJyb3Igb3IgY29ycmVjdCB0aW1lXHJcbiAgY29uc3QgW25leHR5LCBzZXROZXh0eV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvL1N1Y2Nlc3NmdWwgcGFnZSBjb25kaXRpb25cclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vbmV4dCBidXR0b24gZnVuY3Rpb25cclxuICBjb25zdCBmb3JtUmVuZGVyU2VjdGlvbkJ5TmV4dEJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGlmICghc2VydmljZVRpbWUpIHtcclxuICAgICAgc2V0TmV4dChmYWxzZSk7XHJcbiAgICAgIHNldE5leHR5KDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+UGxlYXNlIFNlbGVjdCB0aGUgdGltZTwvcD4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmV4dCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vUmVxdWVzdCBUbyBib29rIGJ1dHRvbiBvbkNsaWNrIEZ1bmN0aW9uXHJcbiAgY29uc3QgUmVxdWVzdFRvQm9va0ZvckFwcHJvdmFsID0gKCkgPT4ge1xyXG4gICAgaWYgKCFvcmRlckRhdGEubmFtZSAmJiAhb3JkZXJEYXRhLmVtYWlsKSB7XHJcbiAgICAgIHNldE5leHR5KDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+UGxlYXNlIEZpbGwgdGhlIERhdGEgQ29ycmVjdGx5PC9wPik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmZXRjaChgJHthcGl9L29yZGVyL2NyZWF0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmRlckRhdGEpLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgLy9hbGVydCgnT25lIFNlcnZpY2UgSXRlbSBBZGRlZCcpO1xyXG4gICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9wdGlvbnNNb3JuaW5nID0gW1xyXG4gICAgeyB2YWx1ZTogJzk6MDAgYW0nLCBsYWJlbDogJzk6MDAgYW0nIH0sXHJcbiAgICB7IHZhbHVlOiAnOTozMCBhbScsIGxhYmVsOiAnOTozMCBhbScgfSxcclxuICAgIHsgdmFsdWU6ICcxMDowMCBhbScsIGxhYmVsOiAnMTA6MDAgYW0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMTA6MzAgYW0nLCBsYWJlbDogJzEwOjMwIGFtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzExOjAwIGFtJywgbGFiZWw6ICcxMTowMCBhbScgfSxcclxuICAgIHsgdmFsdWU6ICcxMTozMCBhbScsIGxhYmVsOiAnMTE6MzAgYW0nIH0sXHJcbiAgXTtcclxuICBjb25zdCBvcHRpb25zQWZ0ZXJub29uID0gW1xyXG4gICAgeyB2YWx1ZTogJzEyOjAwIHBtJywgbGFiZWw6ICcxMjowMCBwbScgfSxcclxuICAgIHsgdmFsdWU6ICcxMjozMCBwbScsIGxhYmVsOiAnMTI6MzAgcG0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMTowMCBwbScsIGxhYmVsOiAnMTowMCBwbScgfSxcclxuICAgIHsgdmFsdWU6ICcxOjMwIHBtJywgbGFiZWw6ICcxOjMwIHBtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzI6MDAgcG0nLCBsYWJlbDogJzI6MDAgcG0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMjozMCBwbScsIGxhYmVsOiAnMjozMCBwbScgfSxcclxuICAgIHsgdmFsdWU6ICczOjAwIHBtJywgbGFiZWw6ICczOjAwIHBtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzM6MzAgcG0nLCBsYWJlbDogJzM6MzAgcG0nIH0sXHJcbiAgICB7IHZhbHVlOiAnNDozMCBwbScsIGxhYmVsOiAnNDozMCBwbScgfSxcclxuICBdO1xyXG4gIGNvbnN0IG9wdGlvbnNFdmVuaW5nID0gW3sgdmFsdWU6ICc1OjAwIGFtJywgbGFiZWw6ICc1OjAwIGFtJyB9XTtcclxuICAvL3JlYWN0LXNlbGVjdCB0aW1lU2VjdGlvblxyXG4gIGNvbnN0IGhhbmRsZVRpbWVDaGFuZ2UgPSAoc2VsZWN0KSA9PiB7XHJcbiAgICBzZXRTZXJ2aWNlVGltZShzZWxlY3QudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL3JlbmRlciBmb3JtXHJcblxyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCByZXNldCB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIHNldFJlcXVlc3QodHJ1ZSk7XHJcbiAgICBzZXRPcmRlckRhdGEoZGF0YSk7XHJcbiAgICByZXNldCgpO1xyXG4gIH07XHJcbiAgLy9yZW5kZXIgdGltZSBhbmQgZGF0ZShjYWxlbmRhciBhbmQgdGltZSBjb21wb25lbnRzKVxyXG4gIGNvbnN0IHJlbmRlckRhdGVBbmRUaW1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbCBtZD17eyBzcGFuOiA2LCBvZmZzZXQ6IDEgfX0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkNhbGVuZGFyU2VjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPVwiTW9ybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRpbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNNb3JuaW5nfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIkFmdGVybm9vblwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRpbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNBZnRlcm5vb259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWZ0ZXJub29uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCJFdmVuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGltZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc0V2ZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXZlbmluZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbD5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy9yZWFjdCBob29rIGZvcm0gdG8gZ2V0IGRhdGFcclxuXHJcbiAgY29uc3QgcmVuZGVySG9va0Zvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29sIG1kPXt7IHNwYW46IDYsIG9mZnNldDogMSB9fT5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKk5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIChcclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9ybS10ZXh0XCI+UGxlYXNlIGVudGVyIG5hbWU8L3NtYWxsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aMC05LS5dKyQvLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBFbWFpbC1JRFxyXG4gICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBob25lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBob25lTnVtYmVyICYmIChcclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBQaG9uZSBOdW1iZXJcclxuICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cInN0cmVldFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipTdHJlZXRcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5zdHJlZXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgc3RyZWV0XHJcbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbG9vclwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXB0L0Zsb29yIE5vLlwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipDaXR5XCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuY2l0eSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBjaXR5XHJcbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJzdGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIE1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPipSZXF1aXJlZCBJbmZvPC9zbWFsbD5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0QnV0dG9uU3R5bGV9IGJsb2NrIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db2w+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vc3VjY2Vzc0Z1bCBwYWdlIENvbXBvbmVudFxyXG4gIGNvbnN0IHJlbmRlclN1Y2Nlc3NmdWxQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgkJHtvcmRlckRhdGEub3JkZXJQaWN0dXJlfSlgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmdUZXh0fSB0ZXh0LWp1c3RpZnlgfT5PcmRlciBTdWNjZXNzPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvL21haW4gQ29tcG9uZW50XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHtzdWNjZXNzID8gKFxyXG4gICAgICAgIHJlbmRlclN1Y2Nlc3NmdWxQYWdlKClcclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxyXG4gICAgICAgICAgICAgIHtuZXh0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgPGgxPkFkZCBZb3VyIEluZm88L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8cD5UZWxsIHVzIGEgYml0IGFib3V0IHlvdXJzZWxmPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IW5leHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5ICBteS01IHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgU2NoZWR1bGUgT25saW5lXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgeyFuZXh0ICYmIHJlbmRlckRhdGVBbmRUaW1lKCl9XHJcbiAgICAgICAgICAgIHtuZXh0ICYmIHJlbmRlckhvb2tGb3JtKCl9XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0aWNreVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkYmFja2dyb3VuZEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0aWxlQm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1BhcnRpY3VsYXJTZXJ2aWNlRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD57ZGF0ZURhdGF9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PntzZXJ2aWNlVGltZX08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL2Jvb2svJHtQYXJ0aWN1bGFyU2VydmljZURhdGEuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHtyZXF1ZXN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgbXktM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17UmVxdWVzdFRvQm9va0ZvckFwcHJvdmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBteS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmb3JtUmVuZGVyU2VjdGlvbkJ5TmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZVRpbWUgPyAnJyA6IG5leHR5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogOCwgb2Zmc2V0OiAyIH19PjwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAjc3RpY2t5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA3cHggZ3JheTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxN3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGJvZHkge1xyXG4gICAgICAgICAgLy8gICBmb250LWZhbWlseTogQmVsbGVmYWlyO1xyXG4gICAgICAgICAgLy8gICBoZWlnaHQ6IDEwMDAwcHg7XHJcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgLy8gICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA3NjhweCkge1xyXG4gICAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNlcnZpY2U7XHJcblxyXG4vL2dldFN0YXRpYyBwcm9wcyBTZWN0aW9uXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS9zZXJ2aWNlcy9nZXRBbGxTZXJ2aWNlc2J5UGFyYW1zLyR7cGFyYW1zLmlkfWBcclxuICApO1xyXG4gIGNvbnN0IHNlcnZpY2VEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlcnZpY2VEYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbi8vZ2V0U3RhdGljIHBhdGhzIFNlY3Rpb25cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjIwMDAvYXBpL3NlcnZpY2VzL2dldEFsbFNlcnZpY2VzJyk7XHJcbiAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IHBhdGhzID0gW107XHJcbiAgc2VydmljZXMuc2VydmljZS5mb3JFYWNoKChzZXJ2aWNlKSA9PiBwYXRocy5wdXNoKGAvYm9vay8ke3NlcnZpY2UuX2lkfWApKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuLy8geyFvcmRlckRhdGEgJiYgKFxyXG4vLyAgIDxCdXR0b25cclxuLy8gICAgIGJsb2NrXHJcbi8vICAgICBzaXplPVwibGdcIlxyXG4vLyAgICAgY2xhc3NOYW1lPVwicHktMiBteS0zXCJcclxuLy8gICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG4vLyAgICAgb25DbGljaz17Zm9ybVJlbmRlclNlY3Rpb25CeU5leHRCdXR0b259XHJcbi8vICAgPlxyXG4vLyAgICAgTmV4dFxyXG4vLyAgIDwvQnV0dG9uPlxyXG4vLyApfVxyXG4vLyB7LyogIHtvcmRlckRhdGEubmFtZSAmJiBvcmRlckRhdGEuZW1haWwgJiYgKCAqL31cclxuLy8ge29yZGVyRGF0YSAmJiAoXHJcbi8vICAgPEJ1dHRvblxyXG4vLyAgICAgYmxvY2tcclxuLy8gICAgIHNpemU9XCJsZ1wiXHJcbi8vICAgICBjbGFzc05hbWU9XCJweS0yIG15LTNcIlxyXG4vLyAgICAgdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiXHJcbi8vICAgICBvbkNsaWNrPXtSZXF1ZXN0VG9Cb29rRm9yQXBwcm92YWx9XHJcbi8vICAgPlxyXG4vLyAgICAgUmVxdWVzdCBUbyBCb29rXHJcbi8vICAgPC9CdXR0b24+XHJcbi8vICl9XHJcblxyXG4vLyB7IW9yZGVyRGF0YSAmJiAhb3JkZXJEYXRhLm5hbWUgJiYgKFxyXG4vLyAgIDxCdXR0b25cclxuLy8gICAgIGJsb2NrXHJcbi8vICAgICBzaXplPVwibGdcIlxyXG4vLyAgICAgY2xhc3NOYW1lPVwicHktMiBteS0zXCJcclxuLy8gICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG4vLyAgICAgb25DbGljaz17Zm9ybVJlbmRlclNlY3Rpb25CeU5leHRCdXR0b259XHJcbi8vICAgPlxyXG4vLyAgICAgTmV4dFxyXG4vLyAgIDwvQnV0dG9uPlxyXG4vLyApfVxyXG4vLyB7LyogIHtvcmRlckRhdGEubmFtZSAmJiBvcmRlckRhdGEuZW1haWwgJiYgKCAqL31cclxuLy8ge29yZGVyRGF0YS5uYW1lICE9PSAnJyAmJiAoXHJcbi8vICAgPEJ1dHRvblxyXG4vLyAgICAgYmxvY2tcclxuLy8gICAgIHNpemU9XCJsZ1wiXHJcbi8vICAgICBjbGFzc05hbWU9XCJweS0yIG15LTNcIlxyXG4vLyAgICAgdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiXHJcbi8vICAgICBvbkNsaWNrPXtSZXF1ZXN0VG9Cb29rRm9yQXBwcm92YWx9XHJcbi8vICAgPlxyXG4vLyAgICAgUmVxdWVzdCBUbyBCb29rXHJcbi8vICAgPC9CdXR0b24+XHJcbi8vICl9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ASUS\\\\Documents\\\\Projects\\\\assignment\\\\VegaHomes\\\\client\\\\src\\\\pages\\\\book\\\\[id].js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 309,
    columnNumber: 5
  }, _this);
};

_s(SingleService, "q3LJl6NpUgVKaUwTf5NHdt0P5ZM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"]];
});

_c = SingleService;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (SingleService); //getStatic props Section
// {!orderData && (
//   <Button
//     block
//     size="lg"
//     className="py-2 my-3"
//     variant="outline-info"
//     onClick={formRenderSectionByNextButton}
//   >
//     Next
//   </Button>
// )}
// {/*  {orderData.name && orderData.email && ( */}
// {orderData && (
//   <Button
//     block
//     size="lg"
//     className="py-2 my-3"
//     variant="outline-info"
//     onClick={RequestToBookForApproval}
//   >
//     Request To Book
//   </Button>
// )}
// {!orderData && !orderData.name && (
//   <Button
//     block
//     size="lg"
//     className="py-2 my-3"
//     variant="outline-info"
//     onClick={formRenderSectionByNextButton}
//   >
//     Next
//   </Button>
// )}
// {/*  {orderData.name && orderData.email && ( */}
// {orderData.name !== '' && (
//   <Button
//     block
//     size="lg"
//     className="py-2 my-3"
//     variant="outline-info"
//     onClick={RequestToBookForApproval}
//   >
//     Request To Book
//   </Button>
// )}

var _c;

$RefreshReg$(_c, "SingleService");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jvb2svLmpzIl0sIm5hbWVzIjpbIlNpbmdsZVNlcnZpY2UiLCJzZXJ2aWNlRGF0YSIsIlBhcnRpY3VsYXJTZXJ2aWNlRGF0YSIsInNlcnZpY2UiLCJuYW1lIiwicHJpY2UiLCJzZXJ2aWNlUGljdHVyZSIsInNsdWciLCJ0aW1lIiwiZGVzY3JpcHRpb24iLCJ1c2VTdGF0ZSIsIkRhdGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0ZURhdGEiLCJ0b0RhdGVTdHJpbmciLCJzZXJ2aWNlVGltZSIsInNldFNlcnZpY2VUaW1lIiwib3JkZXJEYXRhIiwic2V0T3JkZXJEYXRhIiwid29ya1RpbWUiLCJ3b3JrRGF0ZSIsInNlcnZpY2VOYW1lIiwib3JkZXJQcmljZSIsIm9yZGVyRGVzY3JpcHRpb24iLCJvcmRlclBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsInNldE5leHQiLCJyZXF1ZXN0Iiwic2V0UmVxdWVzdCIsIm5leHR5Iiwic2V0TmV4dHkiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImZvcm1SZW5kZXJTZWN0aW9uQnlOZXh0QnV0dG9uIiwiUmVxdWVzdFRvQm9va0ZvckFwcHJvdmFsIiwiZW1haWwiLCJmZXRjaCIsImFwaSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwib3B0aW9uc01vcm5pbmciLCJsYWJlbCIsIm9wdGlvbnNBZnRlcm5vb24iLCJvcHRpb25zRXZlbmluZyIsImhhbmRsZVRpbWVDaGFuZ2UiLCJzZWxlY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJyZXNldCIsIm9uU3VibWl0IiwiZGF0YSIsInJlbmRlckRhdGVBbmRUaW1lIiwic3BhbiIsIm9mZnNldCIsInN0eWxlcyIsIkNhbGVuZGFyU2VjdGlvbiIsInJlbmRlckhvb2tGb3JtIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwicGhvbmVOdW1iZXIiLCJzdHJlZXQiLCJjaXR5Iiwic3VibWl0QnV0dG9uU3R5bGUiLCJyZW5kZXJTdWNjZXNzZnVsUGFnZSIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImJnVGV4dCIsImNhcmRiYWNrZ3JvdW5kRm9ybSIsImNhcmRUaXRpbGVCb3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ3pDLE1BQU1DLHFCQUFxQixHQUFHRCxXQUFXLENBQUNFLE9BQTFDO0FBRHlDLE1BR3ZDQyxJQUh1QyxHQVNyQ0YscUJBVHFDLENBR3ZDRSxJQUh1QztBQUFBLE1BSXZDQyxLQUp1QyxHQVNyQ0gscUJBVHFDLENBSXZDRyxLQUp1QztBQUFBLE1BS3ZDQyxjQUx1QyxHQVNyQ0oscUJBVHFDLENBS3ZDSSxjQUx1QztBQUFBLE1BTXZDQyxJQU51QyxHQVNyQ0wscUJBVHFDLENBTXZDSyxJQU51QztBQUFBLE1BT3ZDQyxJQVB1QyxHQVNyQ04scUJBVHFDLENBT3ZDTSxJQVB1QztBQUFBLE1BUXZDQyxXQVJ1QyxHQVNyQ1AscUJBVHFDLENBUXZDTyxXQVJ1QyxFQVd6Qzs7QUFYeUMsa0JBWWZDLHNEQUFRLENBQUMsSUFBSUMsSUFBSixFQUFELENBWk87QUFBQSxNQVlsQ0MsS0Faa0M7QUFBQSxNQVkzQkMsUUFaMkI7O0FBYXpDLE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxZQUFOLEVBQWpCLENBYnlDLENBZXpDOztBQWZ5QyxtQkFnQkhM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QTtBQUFBO0FBQUEsZUFoRUY7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFIRCxDQTVaRDs7R0FBTW5FLGE7VUF1Rld5RCxxRCxFQUltQ0Msd0Q7OztLQTNGOUMxRCxhOztBQThaU0EsNEVBQWYsRSxDQUVBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jvb2svW2lkXS42NTE1ODBlYjcxZjQyNzExY2VkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIEZvcm0sIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaW5nbGVTZXJ2aWNlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgJ3JlYWN0LWNhbGVuZGFyL2Rpc3QvQ2FsZW5kYXIuY3NzJztcclxuXHJcbmNvbnN0IFNpbmdsZVNlcnZpY2UgPSAoeyBzZXJ2aWNlRGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgUGFydGljdWxhclNlcnZpY2VEYXRhID0gc2VydmljZURhdGEuc2VydmljZTtcclxuICBjb25zdCB7XHJcbiAgICBuYW1lLFxyXG4gICAgcHJpY2UsXHJcbiAgICBzZXJ2aWNlUGljdHVyZSxcclxuICAgIHNsdWcsXHJcbiAgICB0aW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSA9IFBhcnRpY3VsYXJTZXJ2aWNlRGF0YTtcclxuXHJcbiAgLy9zdGF0ZSBvZiByZWFjdCBDYWxlbmRhclxyXG4gIGNvbnN0IFt2YWx1ZSwgb25DaGFuZ2VdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgZGF0ZURhdGEgPSB2YWx1ZS50b0RhdGVTdHJpbmcoKTtcclxuXHJcbiAgLy9zdGF0ZSBvZiB0aGlzIGNvbXBvbmVudFxyXG4gIGNvbnN0IFtzZXJ2aWNlVGltZSwgc2V0U2VydmljZVRpbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29yZGVyRGF0YSwgc2V0T3JkZXJEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBvcmRlckRhdGEud29ya1RpbWUgPSBzZXJ2aWNlVGltZTtcclxuICBvcmRlckRhdGEud29ya0RhdGUgPSBkYXRlRGF0YTtcclxuICBvcmRlckRhdGEuc2VydmljZU5hbWUgPSBuYW1lO1xyXG4gIG9yZGVyRGF0YS5vcmRlclByaWNlID0gcHJpY2U7XHJcbiAgb3JkZXJEYXRhLm9yZGVyRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICBvcmRlckRhdGEub3JkZXJQaWN0dXJlID0gc2VydmljZVBpY3R1cmU7XHJcbiAgb3JkZXJEYXRhLnRpbWUgPSB0aW1lO1xyXG4gIC8vXHJcbiAgY29uc29sZS5sb2cob3JkZXJEYXRhKTtcclxuXHJcbiAgLy9zdGF0ZSBvZiBjb25kaXRpb25hbCBmb3JtLyBjYWxlbmRhciByZW5kZXJlaW5nXHJcbiAgY29uc3QgW25leHQsIHNldE5leHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXF1ZXN0LCBzZXRSZXF1ZXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvL3N0YXRlIG9mIGVycm9yIG9yIGNvcnJlY3QgdGltZVxyXG4gIGNvbnN0IFtuZXh0eSwgc2V0TmV4dHldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy9TdWNjZXNzZnVsIHBhZ2UgY29uZGl0aW9uXHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvL25leHQgYnV0dG9uIGZ1bmN0aW9uXHJcbiAgY29uc3QgZm9ybVJlbmRlclNlY3Rpb25CeU5leHRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBpZiAoIXNlcnZpY2VUaW1lKSB7XHJcbiAgICAgIHNldE5leHQoZmFsc2UpO1xyXG4gICAgICBzZXROZXh0eSg8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlBsZWFzZSBTZWxlY3QgdGhlIHRpbWU8L3A+KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5leHQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvL1JlcXVlc3QgVG8gYm9vayBidXR0b24gb25DbGljayBGdW5jdGlvblxyXG4gIGNvbnN0IFJlcXVlc3RUb0Jvb2tGb3JBcHByb3ZhbCA9ICgpID0+IHtcclxuICAgIGlmICghb3JkZXJEYXRhLm5hbWUgJiYgIW9yZGVyRGF0YS5lbWFpbCkge1xyXG4gICAgICBzZXROZXh0eSg8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlBsZWFzZSBGaWxsIHRoZSBEYXRhIENvcnJlY3RseTwvcD4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2goYCR7YXBpfS9vcmRlci9jcmVhdGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3JkZXJEYXRhKSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIC8vYWxlcnQoJ09uZSBTZXJ2aWNlIEl0ZW0gQWRkZWQnKTtcclxuICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvcHRpb25zTW9ybmluZyA9IFtcclxuICAgIHsgdmFsdWU6ICc5OjAwIGFtJywgbGFiZWw6ICc5OjAwIGFtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzk6MzAgYW0nLCBsYWJlbDogJzk6MzAgYW0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMTA6MDAgYW0nLCBsYWJlbDogJzEwOjAwIGFtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzEwOjMwIGFtJywgbGFiZWw6ICcxMDozMCBhbScgfSxcclxuICAgIHsgdmFsdWU6ICcxMTowMCBhbScsIGxhYmVsOiAnMTE6MDAgYW0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMTE6MzAgYW0nLCBsYWJlbDogJzExOjMwIGFtJyB9LFxyXG4gIF07XHJcbiAgY29uc3Qgb3B0aW9uc0FmdGVybm9vbiA9IFtcclxuICAgIHsgdmFsdWU6ICcxMjowMCBwbScsIGxhYmVsOiAnMTI6MDAgcG0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMTI6MzAgcG0nLCBsYWJlbDogJzEyOjMwIHBtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzE6MDAgcG0nLCBsYWJlbDogJzE6MDAgcG0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMTozMCBwbScsIGxhYmVsOiAnMTozMCBwbScgfSxcclxuICAgIHsgdmFsdWU6ICcyOjAwIHBtJywgbGFiZWw6ICcyOjAwIHBtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzI6MzAgcG0nLCBsYWJlbDogJzI6MzAgcG0nIH0sXHJcbiAgICB7IHZhbHVlOiAnMzowMCBwbScsIGxhYmVsOiAnMzowMCBwbScgfSxcclxuICAgIHsgdmFsdWU6ICczOjMwIHBtJywgbGFiZWw6ICczOjMwIHBtJyB9LFxyXG4gICAgeyB2YWx1ZTogJzQ6MzAgcG0nLCBsYWJlbDogJzQ6MzAgcG0nIH0sXHJcbiAgXTtcclxuICBjb25zdCBvcHRpb25zRXZlbmluZyA9IFt7IHZhbHVlOiAnNTowMCBhbScsIGxhYmVsOiAnNTowMCBhbScgfV07XHJcbiAgLy9yZWFjdC1zZWxlY3QgdGltZVNlY3Rpb25cclxuICBjb25zdCBoYW5kbGVUaW1lQ2hhbmdlID0gKHNlbGVjdCkgPT4ge1xyXG4gICAgc2V0U2VydmljZVRpbWUoc2VsZWN0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9yZW5kZXIgZm9ybVxyXG5cclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgcmVzZXQgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXRSZXF1ZXN0KHRydWUpO1xyXG4gICAgc2V0T3JkZXJEYXRhKGRhdGEpO1xyXG4gICAgcmVzZXQoKTtcclxuICB9O1xyXG4gIC8vcmVuZGVyIHRpbWUgYW5kIGRhdGUoY2FsZW5kYXIgYW5kIHRpbWUgY29tcG9uZW50cylcclxuICBjb25zdCByZW5kZXJEYXRlQW5kVGltZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb2wgbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAxIH19PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5DYWxlbmRhclNlY3Rpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD1cIk1vcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zTW9ybmluZ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3JuaW5nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9XCJBZnRlcm5vb25cIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zQWZ0ZXJub29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFmdGVybm9vblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPVwiRXZlbmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRpbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNFdmVuaW5nfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV2ZW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db2w+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vcmVhY3QgaG9vayBmb3JtIHRvIGdldCBkYXRhXHJcblxyXG4gIGNvbnN0IHJlbmRlckhvb2tGb3JtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbCBtZD17eyBzcGFuOiA2LCBvZmZzZXQ6IDEgfX0+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibmFtZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipOYW1lXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGZvcm0tdGV4dFwiPlBsZWFzZSBlbnRlciBuYW1lPC9zbWFsbD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW2EtekEtWjAtOV8uKy1dK0BbYS16QS1aMC05LV0rXFwuW2EtekEtWjAtOS0uXSskLyxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgRW1haWwtSURcclxuICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwicGhvbmVOdW1iZXJcIj5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5waG9uZU51bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgTnVtYmVyXHJcbiAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJzdHJlZXRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RyZWV0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqU3RyZWV0XCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuc3RyZWV0ICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHN0cmVldFxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwicGhvbmVOdW1iZXJcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmxvb3JcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwdC9GbG9vciBOby5cIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiY2l0eVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNpdHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgY2l0eVxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwic3RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4qUmVxdWlyZWQgSW5mbzwvc21hbGw+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvblN0eWxlfSBibG9jayB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvL3N1Y2Nlc3NGdWwgcGFnZSBDb21wb25lbnRcclxuICBjb25zdCByZW5kZXJTdWNjZXNzZnVsUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJCR7b3JkZXJEYXRhLm9yZGVyUGljdHVyZX0pYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnVGV4dH0gdGV4dC1qdXN0aWZ5YH0+T3JkZXIgU3VjY2VzczwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy9tYWluIENvbXBvbmVudFxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7c3VjY2VzcyA/IChcclxuICAgICAgICByZW5kZXJTdWNjZXNzZnVsUGFnZSgpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fT5cclxuICAgICAgICAgICAgICB7bmV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5BZGQgWW91ciBJbmZvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHA+VGVsbCB1cyBhIGJpdCBhYm91dCB5b3Vyc2VsZjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgeyFuZXh0ICYmIChcclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtanVzdGlmeSAgbXktNSBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgIFNjaGVkdWxlIE9ubGluZVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgIHshbmV4dCAmJiByZW5kZXJEYXRlQW5kVGltZSgpfVxyXG4gICAgICAgICAgICB7bmV4dCAmJiByZW5kZXJIb29rRm9ybSgpfVxyXG4gICAgICAgICAgICA8Q29sIG1kPXs0fSBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGlja3lcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZGJhY2tncm91bmRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGlsZUJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQYXJ0aWN1bGFyU2VydmljZURhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e2RhdGVEYXRhfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD57c2VydmljZVRpbWV9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9ib29rLyR7UGFydGljdWxhclNlcnZpY2VEYXRhLl9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cmVxdWVzdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIG15LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1JlcXVlc3RUb0Jvb2tGb3JBcHByb3ZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgbXktM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Zm9ybVJlbmRlclNlY3Rpb25CeU5leHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VUaW1lID8gJycgOiBuZXh0eX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXt7IHNwYW46IDgsIG9mZnNldDogMiB9fT48L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgI3N0aWNreSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogZ29sZGVucm9kO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgN3B4IGdyYXk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTdyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBib2R5IHtcclxuICAgICAgICAgIC8vICAgZm9udC1mYW1pbHk6IEJlbGxlZmFpcjtcclxuICAgICAgICAgIC8vICAgaGVpZ2h0OiAxMDAwMHB4O1xyXG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgIC8vICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogNzY4cHgpIHtcclxuICAgICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVTZXJ2aWNlO1xyXG5cclxuLy9nZXRTdGF0aWMgcHJvcHMgU2VjdGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9hcGkvc2VydmljZXMvZ2V0QWxsU2VydmljZXNieVBhcmFtcy8ke3BhcmFtcy5pZH1gXHJcbiAgKTtcclxuICBjb25zdCBzZXJ2aWNlRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZXJ2aWNlRGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4vL2dldFN0YXRpYyBwYXRocyBTZWN0aW9uXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS9zZXJ2aWNlcy9nZXRBbGxTZXJ2aWNlcycpO1xyXG4gIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBwYXRocyA9IFtdO1xyXG4gIHNlcnZpY2VzLnNlcnZpY2UuZm9yRWFjaCgoc2VydmljZSkgPT4gcGF0aHMucHVzaChgL2Jvb2svJHtzZXJ2aWNlLl9pZH1gKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIHshb3JkZXJEYXRhICYmIChcclxuLy8gICA8QnV0dG9uXHJcbi8vICAgICBibG9ja1xyXG4vLyAgICAgc2l6ZT1cImxnXCJcclxuLy8gICAgIGNsYXNzTmFtZT1cInB5LTIgbXktM1wiXHJcbi8vICAgICB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJcclxuLy8gICAgIG9uQ2xpY2s9e2Zvcm1SZW5kZXJTZWN0aW9uQnlOZXh0QnV0dG9ufVxyXG4vLyAgID5cclxuLy8gICAgIE5leHRcclxuLy8gICA8L0J1dHRvbj5cclxuLy8gKX1cclxuLy8gey8qICB7b3JkZXJEYXRhLm5hbWUgJiYgb3JkZXJEYXRhLmVtYWlsICYmICggKi99XHJcbi8vIHtvcmRlckRhdGEgJiYgKFxyXG4vLyAgIDxCdXR0b25cclxuLy8gICAgIGJsb2NrXHJcbi8vICAgICBzaXplPVwibGdcIlxyXG4vLyAgICAgY2xhc3NOYW1lPVwicHktMiBteS0zXCJcclxuLy8gICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG4vLyAgICAgb25DbGljaz17UmVxdWVzdFRvQm9va0ZvckFwcHJvdmFsfVxyXG4vLyAgID5cclxuLy8gICAgIFJlcXVlc3QgVG8gQm9va1xyXG4vLyAgIDwvQnV0dG9uPlxyXG4vLyApfVxyXG5cclxuLy8geyFvcmRlckRhdGEgJiYgIW9yZGVyRGF0YS5uYW1lICYmIChcclxuLy8gICA8QnV0dG9uXHJcbi8vICAgICBibG9ja1xyXG4vLyAgICAgc2l6ZT1cImxnXCJcclxuLy8gICAgIGNsYXNzTmFtZT1cInB5LTIgbXktM1wiXHJcbi8vICAgICB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJcclxuLy8gICAgIG9uQ2xpY2s9e2Zvcm1SZW5kZXJTZWN0aW9uQnlOZXh0QnV0dG9ufVxyXG4vLyAgID5cclxuLy8gICAgIE5leHRcclxuLy8gICA8L0J1dHRvbj5cclxuLy8gKX1cclxuLy8gey8qICB7b3JkZXJEYXRhLm5hbWUgJiYgb3JkZXJEYXRhLmVtYWlsICYmICggKi99XHJcbi8vIHtvcmRlckRhdGEubmFtZSAhPT0gJycgJiYgKFxyXG4vLyAgIDxCdXR0b25cclxuLy8gICAgIGJsb2NrXHJcbi8vICAgICBzaXplPVwibGdcIlxyXG4vLyAgICAgY2xhc3NOYW1lPVwicHktMiBteS0zXCJcclxuLy8gICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG4vLyAgICAgb25DbGljaz17UmVxdWVzdFRvQm9va0ZvckFwcHJvdmFsfVxyXG4vLyAgID5cclxuLy8gICAgIFJlcXVlc3QgVG8gQm9va1xyXG4vLyAgIDwvQnV0dG9uPlxyXG4vLyApfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9