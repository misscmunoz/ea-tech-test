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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AssetsDetailsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AssetsDetailsPage */ \"(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AssetDetails = ()=>{\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = extractIdFromPathname(pathName);\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.AssetProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetsDetailsPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: id\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, undefined) // Pass the asset data as props to AssetDetailsPage\n             : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Asset not found\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/app/asset/[id]/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetails, \"wkTRUpGo8QWOXSsHqC/7/cTelgI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext\n    ];\n});\n_c = AssetDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetails);\nfunction extractIdFromPathname(pathname) {\n    // Split the pathname by '/' and get the last segment\n    const segments = pathname.split(\"/\");\n    const lastSegment = segments[segments.length - 1];\n    // Use regular expression or other parsing methods to extract the ID\n    // For example, if the ID is numeric, you can use a regular expression like /\\d+/ to extract it\n    const idMatch = lastSegment.match(/\\d+/);\n    // Return the extracted ID or null if not found\n    return idMatch ? idMatch[0] : null;\n}\nvar _c;\n$RefreshReg$(_c, \"AssetDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXNzZXQvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRThEO0FBQ2pCO0FBQzJCO0FBRXhFLE1BQU1JLGVBQWU7O0lBQ25CLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNSyxLQUFLQyxzQkFBc0JGO0lBRWpDLE1BQU0sRUFBRUcsUUFBUUMsYUFBYSxFQUFFLEdBQUdOLHNFQUFlQTtJQUVqRCxxQkFDRSw4REFBQ0QsZ0VBQWFBO2tCQUNaLDRFQUFDUTtzQkFDRUosbUJBQ0MsOERBQUNOLHFFQUFnQkE7Z0JBQUNNLElBQUlBOzs7OzswQkFBTyxtREFBbUQ7NkJBRWhGLDhEQUFDSzswQkFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBakJNUDs7UUFDYUgsd0RBQVdBO1FBR01FLGtFQUFlQTs7O0tBSjdDQztBQW1CTiwrREFBZUEsWUFBWUEsRUFBQztBQUU1QixTQUFTRyxzQkFBc0JLLFFBQWdCO0lBQzdDLHFEQUFxRDtJQUNyRCxNQUFNQyxXQUFXRCxTQUFTRSxLQUFLLENBQUM7SUFDaEMsTUFBTUMsY0FBY0YsUUFBUSxDQUFDQSxTQUFTRyxNQUFNLEdBQUcsRUFBRTtJQUVqRCxvRUFBb0U7SUFDcEUsK0ZBQStGO0lBQy9GLE1BQU1DLFVBQVVGLFlBQVlHLEtBQUssQ0FBQztJQUVsQywrQ0FBK0M7SUFDL0MsT0FBT0QsVUFBVUEsT0FBTyxDQUFDLEVBQUUsR0FBRztBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Fzc2V0L1tpZF0vcGFnZS50c3g/MWE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEFzc2V0RGV0YWlsc1BhZ2UgZnJvbSAnQC9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgQXNzZXRQcm92aWRlciwgdXNlQXNzZXRDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5cbmNvbnN0IEFzc2V0RGV0YWlscyA9ICgpID0+IHtcbiAgY29uc3QgcGF0aE5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBpZCA9IGV4dHJhY3RJZEZyb21QYXRobmFtZShwYXRoTmFtZSk7XG5cbiAgY29uc3QgeyBhc3NldHM6IGNvbnRleHRBc3NldHMgfSA9IHVzZUFzc2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPEFzc2V0UHJvdmlkZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aWQgPyAoXG4gICAgICAgICAgPEFzc2V0RGV0YWlsc1BhZ2UgaWQ9e2lkfSAvPiAvLyBQYXNzIHRoZSBhc3NldCBkYXRhIGFzIHByb3BzIHRvIEFzc2V0RGV0YWlsc1BhZ2VcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5Bc3NldCBub3QgZm91bmQ8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Fzc2V0UHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldERldGFpbHM7XG5cbmZ1bmN0aW9uIGV4dHJhY3RJZEZyb21QYXRobmFtZShwYXRobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIC8vIFNwbGl0IHRoZSBwYXRobmFtZSBieSAnLycgYW5kIGdldCB0aGUgbGFzdCBzZWdtZW50XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgY29uc3QgbGFzdFNlZ21lbnQgPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXTtcblxuICAvLyBVc2UgcmVndWxhciBleHByZXNzaW9uIG9yIG90aGVyIHBhcnNpbmcgbWV0aG9kcyB0byBleHRyYWN0IHRoZSBJRFxuICAvLyBGb3IgZXhhbXBsZSwgaWYgdGhlIElEIGlzIG51bWVyaWMsIHlvdSBjYW4gdXNlIGEgcmVndWxhciBleHByZXNzaW9uIGxpa2UgL1xcZCsvIHRvIGV4dHJhY3QgaXRcbiAgY29uc3QgaWRNYXRjaCA9IGxhc3RTZWdtZW50Lm1hdGNoKC9cXGQrLyk7XG5cbiAgLy8gUmV0dXJuIHRoZSBleHRyYWN0ZWQgSUQgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgcmV0dXJuIGlkTWF0Y2ggPyBpZE1hdGNoWzBdIDogbnVsbDtcbn0iXSwibmFtZXMiOlsiQXNzZXREZXRhaWxzUGFnZSIsInVzZVBhdGhuYW1lIiwiQXNzZXRQcm92aWRlciIsInVzZUFzc2V0Q29udGV4dCIsIkFzc2V0RGV0YWlscyIsInBhdGhOYW1lIiwiaWQiLCJleHRyYWN0SWRGcm9tUGF0aG5hbWUiLCJhc3NldHMiLCJjb250ZXh0QXNzZXRzIiwiZGl2IiwicCIsInBhdGhuYW1lIiwic2VnbWVudHMiLCJzcGxpdCIsImxhc3RTZWdtZW50IiwibGVuZ3RoIiwiaWRNYXRjaCIsIm1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/asset/[id]/page.tsx\n"));

/***/ })

});