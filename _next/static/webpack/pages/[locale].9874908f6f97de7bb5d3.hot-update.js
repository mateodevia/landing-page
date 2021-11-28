webpackHotUpdate_N_E("pages/[locale]",{

/***/ "./components/CertificationsSection/CertificationsSection.jsx":
/*!********************************************************************!*\
  !*** ./components/CertificationsSection/CertificationsSection.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CertificationsSection.module.css */ \"./components/CertificationsSection/CertificationsSection.module.css\");\n/* harmony import */ var _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-views-utils */ \"./node_modules/react-swipeable-views-utils/lib/index.js\");\n/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/mateodevia/Documents/Personal/Desarrollo/Pagina Web Personal/landing-page/components/CertificationsSection/CertificationsSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AutoPlaySwipeableViews = Object(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4__[\"autoPlay\"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a);\n_c = AutoPlaySwipeableViews;\n\nvar CertificationsSection = function CertificationsSection() {\n  _s();\n\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(0),\n      activeStep = _useState[0],\n      setActiveStep = _useState[1];\n\n  var _useTranslation = Object(next_i18next__WEBPACK_IMPORTED_MODULE_5__[\"useTranslation\"])(\"common\"),\n      t = _useTranslation.t;\n\n  var handleNext = function handleNext() {\n    setActiveStep(function (prevActiveStep) {\n      var next = prevActiveStep + 1;\n      return next < diplomas.length ? next : prevActiveStep;\n    });\n  };\n\n  var handleBack = function handleBack() {\n    setActiveStep(function (prevActiveStep) {\n      var next = prevActiveStep - 1;\n      return next >= 0 ? next : prevActiveStep;\n    });\n  };\n\n  var handleStepChange = function handleStepChange(step) {\n    setActiveStep(step);\n  };\n\n  var diplomas = [{\n    label: t(\"cumLaudeDiploma\"),\n    imgPath: \"Certifications/Cum Laude.png\"\n  }, {\n    label: t(\"bachelorDiploma\"),\n    imgPath: \"Certifications/Ingeniero de Sistemas y Computación.png\"\n  }, {\n    label: t(\"gitDiploma\"),\n    imgPath: \"Certifications/Github Introduction Course.png\"\n  }, {\n    label: t(\"dockerDiploma\"),\n    imgPath: \"Certifications/Docker.png\"\n  }, {\n    label: t(\"mlIntroductionDiploma\"),\n    imgPath: \"Certifications/Introducción a Machine Learning.png\"\n  }, {\n    label: t(\"mlPracticalFundamentalsDiploma\"),\n    imgPath: \"Certifications/Fundamentos Prácticos de Machine Learning.png\"\n  }, {\n    label: t(\"gitDiploma\"),\n    imgPath: \"Certifications/Github Introduction Course.png\"\n  }, {\n    label: t(\"cvDiploma\"),\n    imgPath: \"Certifications/Creación de Portafolio y CV.png\"\n  }, {\n    label: t(\"profesionalProfileDiploma\"),\n    imgPath: \"Certifications/Optimización del Perfil Profesional.png\"\n  }, {\n    label: t(\"personalGrowthDiploma\"),\n    imgPath: \"Certifications/Herramientas para el crecimiento Personal.png\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flexbox\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"red-button \" + _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow_button,\n      onClick: handleBack,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow_icon,\n        src: \"Certifications/leftArrow.svg\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AutoPlaySwipeableViews, {\n      axis: theme.direction === \"rtl\" ? \"x-reverse\" : \"x\",\n      index: activeStep,\n      onChangeIndex: handleStepChange,\n      enableMouseEvents: true,\n      children: diplomas.map(function (step, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: Math.abs(activeStep - index) <= 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carousel_flex_container,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carousel_image_container,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                className: _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carousel_image,\n                src: step.imgPath,\n                alt: step.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }, _this) : null\n        }, step.label, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"red-button \" + _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow_button,\n      onClick: handleNext,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _CertificationsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow_icon,\n        src: \"Certifications/rightArrow.svg\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CertificationsSection, \"9geeBkQX3p3ZkogQBUNgyyWIyLs=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"], next_i18next__WEBPACK_IMPORTED_MODULE_5__[\"useTranslation\"]];\n});\n\n_c2 = CertificationsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CertificationsSection);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AutoPlaySwipeableViews\");\n$RefreshReg$(_c2, \"CertificationsSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZXJ0aWZpY2F0aW9uc1NlY3Rpb24vQ2VydGlmaWNhdGlvbnNTZWN0aW9uLmpzeD83Zjg5Il0sIm5hbWVzIjpbIkF1dG9QbGF5U3dpcGVhYmxlVmlld3MiLCJhdXRvUGxheSIsIlN3aXBlYWJsZVZpZXdzIiwiQ2VydGlmaWNhdGlvbnNTZWN0aW9uIiwidGhlbWUiLCJ1c2VUaGVtZSIsInVzZVN0YXRlIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJuZXh0IiwiZGlwbG9tYXMiLCJsZW5ndGgiLCJoYW5kbGVCYWNrIiwiaGFuZGxlU3RlcENoYW5nZSIsInN0ZXAiLCJsYWJlbCIsImltZ1BhdGgiLCJzdHlsZXMiLCJhcnJvd19idXR0b24iLCJhcnJvd19pY29uIiwiZGlyZWN0aW9uIiwibWFwIiwiaW5kZXgiLCJNYXRoIiwiYWJzIiwiY2Fyb3VzZWxfZmxleF9jb250YWluZXIiLCJjYXJvdXNlbF9pbWFnZV9jb250YWluZXIiLCJjYXJvdXNlbF9pbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHNCQUFzQixHQUFHQyw0RUFBUSxDQUFDQyw0REFBRCxDQUF2QztLQUFNRixzQjs7QUFFTixJQUFNRyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFDbEMsTUFBTUMsS0FBSyxHQUFHQyx5RUFBUSxFQUF0Qjs7QUFEa0Msa0JBRUVDLHNEQUFRLENBQUMsQ0FBRCxDQUZWO0FBQUEsTUFFM0JDLFVBRjJCO0FBQUEsTUFFZkMsYUFGZTs7QUFBQSx3QkFHcEJDLG1FQUFjLENBQUMsUUFBRCxDQUhNO0FBQUEsTUFHMUJDLENBSDBCLG1CQUcxQkEsQ0FIMEI7O0FBS2xDLE1BQU1DLFVBQVUsR0FBRyxTQUFi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cUNBQ0U7QUFDRSx5QkFBUyxFQUFFVCx3RUFBTSxDQUFDVSxjQURwQjtBQUVFLG1CQUFHLEVBQUViLElBQUksQ0FBQ0UsT0FGWjtBQUdFLG1CQUFHLEVBQUVGLElBQUksQ0FBQ0M7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsR0FVRztBQVhOLFdBQVVELElBQUksQ0FBQ0MsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWlDRTtBQUNFLGVBQVMsRUFBRSxnQkFBZ0JFLHdFQUFNLENBQUNDLFlBRHBDO0FBRUUsYUFBTyxFQUFFWCxVQUZYO0FBQUEsNkJBSUU7QUFDRSxpQkFBUyxFQUFFVSx3RUFBTSxDQUFDRSxVQURwQjtBQUVFLFdBQUcsRUFBQywrQkFGTjtBQUdFLFdBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOENELENBaEhEOztHQUFNcEIscUI7VUFDVUUsaUUsRUFFQUksMkQ7OztNQUhWTixxQjtBQWlIU0Esb0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NlcnRpZmljYXRpb25zU2VjdGlvbi9DZXJ0aWZpY2F0aW9uc1NlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DZXJ0aWZpY2F0aW9uc1NlY3Rpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgU3dpcGVhYmxlVmlld3MgZnJvbSBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiO1xuaW1wb3J0IHsgYXV0b1BsYXkgfSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzLXV0aWxzXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJuZXh0LWkxOG5leHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEF1dG9QbGF5U3dpcGVhYmxlVmlld3MgPSBhdXRvUGxheShTd2lwZWFibGVWaWV3cyk7XG5cbmNvbnN0IENlcnRpZmljYXRpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihcImNvbW1vblwiKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gcHJldkFjdGl2ZVN0ZXAgKyAxO1xuICAgICAgcmV0dXJuIG5leHQgPCBkaXBsb21hcy5sZW5ndGggPyBuZXh0IDogcHJldkFjdGl2ZVN0ZXA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IHByZXZBY3RpdmVTdGVwIC0gMTtcbiAgICAgIHJldHVybiBuZXh0ID49IDAgPyBuZXh0IDogcHJldkFjdGl2ZVN0ZXA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3RlcENoYW5nZSA9IChzdGVwKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcChzdGVwKTtcbiAgfTtcblxuICBjb25zdCBkaXBsb21hcyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogdChcImN1bUxhdWRlRGlwbG9tYVwiKSxcbiAgICAgIGltZ1BhdGg6IFwiQ2VydGlmaWNhdGlvbnMvQ3VtIExhdWRlLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHQoXCJiYWNoZWxvckRpcGxvbWFcIiksXG4gICAgICBpbWdQYXRoOiBcIkNlcnRpZmljYXRpb25zL0luZ2VuaWVybyBkZSBTaXN0ZW1hcyB5IENvbXB1dGFjacOzbi5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0KFwiZ2l0RGlwbG9tYVwiKSxcbiAgICAgIGltZ1BhdGg6IFwiQ2VydGlmaWNhdGlvbnMvR2l0aHViIEludHJvZHVjdGlvbiBDb3Vyc2UucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdChcImRvY2tlckRpcGxvbWFcIiksXG4gICAgICBpbWdQYXRoOiBcIkNlcnRpZmljYXRpb25zL0RvY2tlci5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0KFwibWxJbnRyb2R1Y3Rpb25EaXBsb21hXCIpLFxuICAgICAgaW1nUGF0aDogXCJDZXJ0aWZpY2F0aW9ucy9JbnRyb2R1Y2Npw7NuIGEgTWFjaGluZSBMZWFybmluZy5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0KFwibWxQcmFjdGljYWxGdW5kYW1lbnRhbHNEaXBsb21hXCIpLFxuICAgICAgaW1nUGF0aDogXCJDZXJ0aWZpY2F0aW9ucy9GdW5kYW1lbnRvcyBQcsOhY3RpY29zIGRlIE1hY2hpbmUgTGVhcm5pbmcucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdChcImdpdERpcGxvbWFcIiksXG4gICAgICBpbWdQYXRoOiBcIkNlcnRpZmljYXRpb25zL0dpdGh1YiBJbnRyb2R1Y3Rpb24gQ291cnNlLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHQoXCJjdkRpcGxvbWFcIiksXG4gICAgICBpbWdQYXRoOiBcIkNlcnRpZmljYXRpb25zL0NyZWFjacOzbiBkZSBQb3J0YWZvbGlvIHkgQ1YucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdChcInByb2Zlc2lvbmFsUHJvZmlsZURpcGxvbWFcIiksXG4gICAgICBpbWdQYXRoOiBcIkNlcnRpZmljYXRpb25zL09wdGltaXphY2nDs24gZGVsIFBlcmZpbCBQcm9mZXNpb25hbC5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0KFwicGVyc29uYWxHcm93dGhEaXBsb21hXCIpLFxuICAgICAgaW1nUGF0aDogXCJDZXJ0aWZpY2F0aW9ucy9IZXJyYW1pZW50YXMgcGFyYSBlbCBjcmVjaW1pZW50byBQZXJzb25hbC5wbmdcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhib3gnPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1wicmVkLWJ1dHRvbiBcIiArIHN0eWxlcy5hcnJvd19idXR0b259XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd19pY29ufVxuICAgICAgICAgIHNyYz0nQ2VydGlmaWNhdGlvbnMvbGVmdEFycm93LnN2ZydcbiAgICAgICAgICBhbHQ9JydcbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPEF1dG9QbGF5U3dpcGVhYmxlVmlld3NcbiAgICAgICAgYXhpcz17dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJ4LXJldmVyc2VcIiA6IFwieFwifVxuICAgICAgICBpbmRleD17YWN0aXZlU3RlcH1cbiAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlU3RlcENoYW5nZX1cbiAgICAgICAgZW5hYmxlTW91c2VFdmVudHNcbiAgICAgID5cbiAgICAgICAge2RpcGxvbWFzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17c3RlcC5sYWJlbH0+XG4gICAgICAgICAgICB7TWF0aC5hYnMoYWN0aXZlU3RlcCAtIGluZGV4KSA8PSAyID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2ZsZXhfY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2ltYWdlX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3N0ZXAuaW1nUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtzdGVwLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L0F1dG9QbGF5U3dpcGVhYmxlVmlld3M+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17XCJyZWQtYnV0dG9uIFwiICsgc3R5bGVzLmFycm93X2J1dHRvbn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFycm93X2ljb259XG4gICAgICAgICAgc3JjPSdDZXJ0aWZpY2F0aW9ucy9yaWdodEFycm93LnN2ZydcbiAgICAgICAgICBhbHQ9JydcbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRpb25zU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CertificationsSection/CertificationsSection.jsx\n");

/***/ })

})