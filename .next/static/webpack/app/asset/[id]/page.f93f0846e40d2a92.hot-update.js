"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/asset/[id]/page",{

/***/ "(app-pages-browser)/./src/app/asset/[id]/page.tsx":
/*!*************************************!*\
  !*** ./src/app/asset/[id]/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AssetsDetailsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AssetsDetailsPage */ \"(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AssetDetails = ()=>{\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = extractIdFromPathname(pathName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetsDetailsPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            id: id\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined) // Pass the asset data as props to AssetDetailsPage\n         : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetails, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = AssetDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetails);\nfunction extractIdFromPathname(pathname) {\n    // Split the pathname by '/' and get the last segment\n    const segments = pathname.split(\"/\");\n    const lastSegment = segments[segments.length - 1];\n    // Use regular expression or other parsing methods to extract the ID\n    // For example, if the ID is numeric, you can use a regular expression like /\\d+/ to extract it\n    const idMatch = lastSegment.match(/\\d+/);\n    // Return the extracted ID or null if not found\n    return idMatch ? idMatch[0] : null;\n}\nvar _c;\n$RefreshReg$(_c, \"AssetDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXNzZXQvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHOEQ7QUFDakI7QUFFN0MsTUFBTUUsZUFBZTs7SUFDbkIsTUFBTUMsV0FBV0YsNERBQVdBO0lBQzVCLE1BQU1HLEtBQUtDLHNCQUFzQkY7SUFFakMscUJBQ0UsOERBQUNHO2tCQUNFRixtQkFDQyw4REFBQ0oscUVBQWdCQTtZQUFDSSxJQUFJQTs7Ozs7c0JBQU8sbURBQW1EO3lCQUVoRiw4REFBQ0c7c0JBQUU7Ozs7Ozs7Ozs7O0FBSVg7R0FiTUw7O1FBQ2FELHdEQUFXQTs7O0tBRHhCQztBQWVOLCtEQUFlQSxZQUFZQSxFQUFDO0FBRTVCLFNBQVNHLHNCQUFzQkcsUUFBZ0I7SUFDN0MscURBQXFEO0lBQ3JELE1BQU1DLFdBQVdELFNBQVNFLEtBQUssQ0FBQztJQUNoQyxNQUFNQyxjQUFjRixRQUFRLENBQUNBLFNBQVNHLE1BQU0sR0FBRyxFQUFFO0lBRWpELG9FQUFvRTtJQUNwRSwrRkFBK0Y7SUFDL0YsTUFBTUMsVUFBVUYsWUFBWUcsS0FBSyxDQUFDO0lBRWxDLCtDQUErQztJQUMvQyxPQUFPRCxVQUFVQSxPQUFPLENBQUMsRUFBRSxHQUFHO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXNzZXQvW2lkXS9wYWdlLnRzeD8xYTk3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5cbmltcG9ydCBBc3NldERldGFpbHNQYWdlIGZyb20gJ0AvY29tcG9uZW50cy9Bc3NldHNEZXRhaWxzUGFnZSc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcblxuY29uc3QgQXNzZXREZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGlkID0gZXh0cmFjdElkRnJvbVBhdGhuYW1lKHBhdGhOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aWQgPyAoXG4gICAgICAgIDxBc3NldERldGFpbHNQYWdlIGlkPXtpZH0gLz4gLy8gUGFzcyB0aGUgYXNzZXQgZGF0YSBhcyBwcm9wcyB0byBBc3NldERldGFpbHNQYWdlXG4gICAgICApIDogKFxuICAgICAgICA8cD5Bc3NldCBub3QgZm91bmQ8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXREZXRhaWxzO1xuXG5mdW5jdGlvbiBleHRyYWN0SWRGcm9tUGF0aG5hbWUocGF0aG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAvLyBTcGxpdCB0aGUgcGF0aG5hbWUgYnkgJy8nIGFuZCBnZXQgdGhlIGxhc3Qgc2VnbWVudFxuICBjb25zdCBzZWdtZW50cyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gIGNvbnN0IGxhc3RTZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gVXNlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvciBvdGhlciBwYXJzaW5nIG1ldGhvZHMgdG8gZXh0cmFjdCB0aGUgSURcbiAgLy8gRm9yIGV4YW1wbGUsIGlmIHRoZSBJRCBpcyBudW1lcmljLCB5b3UgY2FuIHVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBsaWtlIC9cXGQrLyB0byBleHRyYWN0IGl0XG4gIGNvbnN0IGlkTWF0Y2ggPSBsYXN0U2VnbWVudC5tYXRjaCgvXFxkKy8pO1xuXG4gIC8vIFJldHVybiB0aGUgZXh0cmFjdGVkIElEIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gIHJldHVybiBpZE1hdGNoID8gaWRNYXRjaFswXSA6IG51bGw7XG59Il0sIm5hbWVzIjpbIkFzc2V0RGV0YWlsc1BhZ2UiLCJ1c2VQYXRobmFtZSIsIkFzc2V0RGV0YWlscyIsInBhdGhOYW1lIiwiaWQiLCJleHRyYWN0SWRGcm9tUGF0aG5hbWUiLCJkaXYiLCJwIiwicGF0aG5hbWUiLCJzZWdtZW50cyIsInNwbGl0IiwibGFzdFNlZ21lbnQiLCJsZW5ndGgiLCJpZE1hdGNoIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/asset/[id]/page.tsx\n"));

/***/ })

});