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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AssetTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n/* harmony import */ var _components_AssetFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AssetFilter */ \"(app-pages-browser)/./src/components/AssetFilter.tsx\");\n/* harmony import */ var _components_AssetMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AssetMain */ \"(app-pages-browser)/./src/components/AssetMain.tsx\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.AssetProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Asset Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onFilter: handleFilter\n                }, void 0, false, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetTree__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    assets: filteredAssets,\n                    onUpdate: handleUpdate,\n                    onDelete: handleDelete\n                }, void 0, false, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetMain__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR3dDO0FBQ1E7QUFFSTtBQUVMO0FBQ3lCO0FBR3hFLE1BQU1LLE9BQWlCO0lBQ3JCLHFCQUNFLDhEQUFDRCxnRUFBYUE7a0JBQ1osNEVBQUNFOzs4QkFDQyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0wsK0RBQVdBO29CQUFDTSxVQUFVQzs7Ozs7OzhCQUN2Qiw4REFBQ1IsNkRBQVNBO29CQUFDUyxRQUFRQztvQkFBZ0JDLFVBQVVDO29CQUFjQyxVQUFVQzs7Ozs7OzhCQUNyRSw4REFBQ1osNkRBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCO0tBWE1FO0FBYU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0VHJlZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Bc3NldFRyZWVcIjtcbmltcG9ydCB7IEFzc2V0c01vY2tEYXRhIH0gZnJvbSBcIi4uL2RhdGEvQXNzZXREYXRhXCI7XG5pbXBvcnQgQXNzZXRGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXNzZXRGaWx0ZXJcIjtcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQXNzZXRNYWluIGZyb20gXCJAL2NvbXBvbmVudHMvQXNzZXRNYWluXCI7XG5pbXBvcnQgeyBBc3NldFByb3ZpZGVyLCB1c2VBc3NldENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvQXNzZXRDb250ZXh0JztcblxuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXNzZXRQcm92aWRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Bc3NldCBEYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8QXNzZXRGaWx0ZXIgb25GaWx0ZXI9e2hhbmRsZUZpbHRlcn0gLz5cbiAgICAgICAgPEFzc2V0VHJlZSBhc3NldHM9e2ZpbHRlcmVkQXNzZXRzfSBvblVwZGF0ZT17aGFuZGxlVXBkYXRlfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxuICAgICAgICA8QXNzZXRNYWluIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Fzc2V0UHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFzc2V0VHJlZSIsIkFzc2V0RmlsdGVyIiwiQXNzZXRNYWluIiwiQXNzZXRQcm92aWRlciIsIkhvbWUiLCJkaXYiLCJoMSIsIm9uRmlsdGVyIiwiaGFuZGxlRmlsdGVyIiwiYXNzZXRzIiwiZmlsdGVyZWRBc3NldHMiLCJvblVwZGF0ZSIsImhhbmRsZVVwZGF0ZSIsIm9uRGVsZXRlIiwiaGFuZGxlRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});