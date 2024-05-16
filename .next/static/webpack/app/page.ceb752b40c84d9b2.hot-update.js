"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/AssetFilter.tsx":
/*!****************************************!*\
  !*** ./src/components/AssetFilter.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types */ \"(app-pages-browser)/./src/types.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AssetFilter = (param)=>{\n    let { onFilter } = param;\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isMonitored, setIsMonitored] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleTypeChange = (event)=>{\n        const selectedType = event.target.value;\n        setType(selectedType);\n        onFilter(selectedType, isMonitored);\n    };\n    const handleIsMonitoredChange = (event)=>{\n        const checked = event.target.checked;\n        setIsMonitored(checked);\n        onFilter(type, checked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \" Filter: \"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"type\",\n                children: \"Type:\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"type\",\n                value: type,\n                onChange: handleTypeChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: _types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A,\n                        children: \"Type A\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: _types__WEBPACK_IMPORTED_MODULE_2__.AssetType.B,\n                        children: \"Type B\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: _types__WEBPACK_IMPORTED_MODULE_2__.AssetType.C,\n                        children: \"Type C\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: _types__WEBPACK_IMPORTED_MODULE_2__.AssetType.D,\n                        children: \"Type D\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: _types__WEBPACK_IMPORTED_MODULE_2__.AssetType.E,\n                        children: \"Type E\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"isMonitored\",\n                children: \"Is Monitored:\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: \"isMonitored\",\n                checked: isMonitored,\n                onChange: handleIsMonitoredChange\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetFilter.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetFilter, \"zx/qzEwMHiJACmQ1crfW7/QR3aE=\");\n_c = AssetFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetFilter);\nvar _c;\n$RefreshReg$(_c, \"AssetFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0RmlsdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXdDO0FBQ0o7QUFNcEMsTUFBTUcsY0FBMEM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQVU7SUFFeEQsTUFBTVEsbUJBQW1CLENBQUNDO1FBQ3hCLE1BQU1DLGVBQWVELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUN2Q1AsUUFBUUs7UUFDUlAsU0FBU08sY0FBY0o7SUFDekI7SUFFQSxNQUFNTywwQkFBMEIsQ0FBQ0o7UUFDL0IsTUFBTUssVUFBVUwsTUFBTUUsTUFBTSxDQUFDRyxPQUFPO1FBQ3BDUCxlQUFlTztRQUNmWCxTQUFTQyxNQUFNVTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNQyxTQUFROzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBT0MsSUFBRztnQkFBT1IsT0FBT1I7Z0JBQU1pQixVQUFVYjs7a0NBQ3ZDLDhEQUFDYzt3QkFBT1YsT0FBTTtrQ0FBRzs7Ozs7O2tDQUNqQiw4REFBQ1U7d0JBQU9WLE9BQU9YLDZDQUFTQSxDQUFDc0IsQ0FBQztrQ0FBRTs7Ozs7O2tDQUM1Qiw4REFBQ0Q7d0JBQU9WLE9BQU9YLDZDQUFTQSxDQUFDdUIsQ0FBQztrQ0FBRTs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQU9WLE9BQU9YLDZDQUFTQSxDQUFDd0IsQ0FBQztrQ0FBRTs7Ozs7O2tDQUM1Qiw4REFBQ0g7d0JBQU9WLE9BQU9YLDZDQUFTQSxDQUFDeUIsQ0FBQztrQ0FBRTs7Ozs7O2tDQUM1Qiw4REFBQ0o7d0JBQU9WLE9BQU9YLDZDQUFTQSxDQUFDMEIsQ0FBQztrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ1Y7Z0JBQU1DLFNBQVE7MEJBQWM7Ozs7OzswQkFDN0IsOERBQUNVO2dCQUNDeEIsTUFBSztnQkFDTGdCLElBQUc7Z0JBQ0hOLFNBQVNSO2dCQUNUZSxVQUFVUjs7Ozs7Ozs7Ozs7O0FBSWxCO0dBdENNWDtLQUFBQTtBQXdDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldEZpbHRlci50c3g/MWZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBc3NldFR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQXNzZXRGaWx0ZXJQcm9wcyB7XG4gIG9uRmlsdGVyOiAodHlwZTogc3RyaW5nLCBpc01vbml0b3JlZDogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgQXNzZXRGaWx0ZXI6IFJlYWN0LkZDPEFzc2V0RmlsdGVyUHJvcHM+ID0gKHsgb25GaWx0ZXIgfSkgPT4ge1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNNb25pdG9yZWQsIHNldElzTW9uaXRvcmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFR5cGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc2V0VHlwZShzZWxlY3RlZFR5cGUpO1xuICAgIG9uRmlsdGVyKHNlbGVjdGVkVHlwZSwgaXNNb25pdG9yZWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlzTW9uaXRvcmVkQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICBzZXRJc01vbml0b3JlZChjaGVja2VkKTtcbiAgICBvbkZpbHRlcih0eXBlLCBjaGVja2VkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+IEZpbHRlcjogPC9oMz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPlR5cGU6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJ0eXBlXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXtoYW5kbGVUeXBlQ2hhbmdlfT5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPXtBc3NldFR5cGUuQX0+VHlwZSBBPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9e0Fzc2V0VHlwZS5CfT5UeXBlIEI8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXNzZXRUeXBlLkN9PlR5cGUgQzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPXtBc3NldFR5cGUuRH0+VHlwZSBEPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9e0Fzc2V0VHlwZS5FfT5UeXBlIEU8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImlzTW9uaXRvcmVkXCI+SXMgTW9uaXRvcmVkOjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgaWQ9XCJpc01vbml0b3JlZFwiXG4gICAgICAgIGNoZWNrZWQ9e2lzTW9uaXRvcmVkfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSXNNb25pdG9yZWRDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRGaWx0ZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBc3NldFR5cGUiLCJBc3NldEZpbHRlciIsIm9uRmlsdGVyIiwidHlwZSIsInNldFR5cGUiLCJpc01vbml0b3JlZCIsInNldElzTW9uaXRvcmVkIiwiaGFuZGxlVHlwZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRUeXBlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJc01vbml0b3JlZENoYW5nZSIsImNoZWNrZWQiLCJkaXYiLCJoMyIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib25DaGFuZ2UiLCJvcHRpb24iLCJBIiwiQiIsIkMiLCJEIiwiRSIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetFilter.tsx\n"));

/***/ })

});