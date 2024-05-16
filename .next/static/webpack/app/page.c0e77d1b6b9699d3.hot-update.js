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

/***/ "(app-pages-browser)/./src/components/AssetTree.tsx":
/*!**************************************!*\
  !*** ./src/components/AssetTree.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst AssetTree = (param)=>{\n    let { assets, onDelete, onUpdate } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md mb-4\",\n        children: assets.map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-gray-300 rounded-md mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold mb-2\",\n                        children: asset.name\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Type: \",\n                            asset.type\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    asset.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Description: \",\n                            asset.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 33\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/asset/\".concat(asset.id),\n                        passHref: true,\n                        legacyBehavior: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-blue-500\",\n                            children: \"View Details \"\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500\",\n                        onClick: ()=>handleDelete(asset.id),\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    asset.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetTree, {\n                            assets: asset.children,\n                            onUpdate: handleUpdate,\n                            onDelete: handleDelete\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, asset.id, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AssetTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetTree);\nvar _c;\n$RefreshReg$(_c, \"AssetTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBCO0FBQ0c7QUFTN0IsTUFBTUUsWUFBc0M7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBRXpFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaSixPQUFPSyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNIO2dCQUFtQkMsV0FBVTs7a0NBQzVCLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBOEJFLE1BQU1FLElBQUk7Ozs7OztrQ0FDdEQsOERBQUNDOzs0QkFBRTs0QkFBT0gsTUFBTUksSUFBSTs7Ozs7OztvQkFDbkJKLE1BQU1LLFdBQVcsa0JBQUksOERBQUNGO3dCQUFFTCxXQUFVOzs0QkFBTzs0QkFBY0UsTUFBTUssV0FBVzs7Ozs7OztrQ0FDekUsOERBQUNiLGlEQUFJQTt3QkFBQ2MsTUFBTSxVQUFtQixPQUFUTixNQUFNTyxFQUFFO3dCQUFJQyxRQUFRO3dCQUFDQyxjQUFjO2tDQUN2RCw0RUFBQ0M7NEJBQUVaLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7OztrQ0FFL0IsOERBQUNhO3dCQUFPYixXQUFVO3dCQUE0SGMsU0FBUyxJQUFNQyxhQUFhYixNQUFNTyxFQUFFO2tDQUFHOzs7Ozs7b0JBQ3BMUCxNQUFNYyxRQUFRLGtCQUNiLDhEQUFDakI7d0JBQUlDLFdBQVU7a0NBRWIsNEVBQUNMOzRCQUFVQyxRQUFRTSxNQUFNYyxRQUFROzRCQUFFbEIsVUFBVW1COzRCQUFjcEIsVUFBVWtCOzs7Ozs7Ozs7Ozs7ZUFYakViLE1BQU1PLEVBQUU7Ozs7Ozs7Ozs7QUFrQjFCO0tBdkJNZDtBQXlCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldFRyZWUudHN4P2EyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBBc3NldFRyZWVQcm9wcyB7XG4gIGFzc2V0czogQXNzZXRbXTtcbiAgb25EZWxldGU6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICBvblVwZGF0ZTogKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFzc2V0VHJlZTogUmVhY3QuRkM8QXNzZXRUcmVlUHJvcHM+ID0gKHsgYXNzZXRzLCBvbkRlbGV0ZSwgb25VcGRhdGUgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG1iLTRcIj5cbiAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YXNzZXQuaWR9IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbWItNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPnthc3NldC5uYW1lfTwvaDI+XG4gICAgICAgICAgPHA+VHlwZToge2Fzc2V0LnR5cGV9PC9wPlxuICAgICAgICAgIHthc3NldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJtYi0yXCI+RGVzY3JpcHRpb246IHthc3NldC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXNzZXQvJHthc3NldC5pZH1gfSBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5WaWV3IERldGFpbHMgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJlZC01MDBcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYXNzZXQuaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICB7YXNzZXQuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XG4gICAgICAgICAgICAgIHsvKiBSZWN1cnNpdmVseSByZW5kZXIgY2hpbGRyZW4gKi99XG4gICAgICAgICAgICAgIDxBc3NldFRyZWUgYXNzZXRzPXthc3NldC5jaGlsZHJlbn0gb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFRyZWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkFzc2V0VHJlZSIsImFzc2V0cyIsIm9uRGVsZXRlIiwib25VcGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhc3NldCIsImgyIiwibmFtZSIsInAiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJocmVmIiwiaWQiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVEZWxldGUiLCJjaGlsZHJlbiIsImhhbmRsZVVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetTree.tsx\n"));

/***/ })

});