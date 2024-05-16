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

/***/ "(app-pages-browser)/./src/components/AssetsDetailsPage.tsx":
/*!**********************************************!*\
  !*** ./src/components/AssetsDetailsPage.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n\n\n\n// Define a function to recursively search for an asset by ID\nconst findAssetById = (assets, id)=>{\n    for (const asset of assets){\n        if (asset.id === id) {\n            return asset; // Found the asset at the current level\n        }\n        if (asset.children) {\n            const foundInChild = findAssetById(asset.children, id); // Recursively search in children\n            if (foundInChild) {\n                return foundInChild; // Found the asset in children\n            }\n        }\n    }\n    return undefined; // Asset with the provided ID not found\n};\nconst AssetDetailsPage = (param)=>{\n    let { id } = param;\n    // Retrieve asset details based on the ID\n    // Find the asset with the matching ID recursively\n    const asset = findAssetById(_data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData, parseInt(id));\n    console.log(asset);\n    if (!asset) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    asset.name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    asset.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type: \",\n                    asset.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    asset.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AssetDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"AssetDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDeUI7QUFPbkQsNkRBQTZEO0FBQzdELE1BQU1FLGdCQUFnQixDQUFDQyxRQUFpQkM7SUFDdEMsS0FBSyxNQUFNQyxTQUFTRixPQUFRO1FBQzFCLElBQUlFLE1BQU1ELEVBQUUsS0FBS0EsSUFBSTtZQUNuQixPQUFPQyxPQUFPLHVDQUF1QztRQUN2RDtRQUNBLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtZQUNsQixNQUFNQyxlQUFlTCxjQUFjRyxNQUFNQyxRQUFRLEVBQUVGLEtBQUssaUNBQWlDO1lBQ3pGLElBQUlHLGNBQWM7Z0JBQ2hCLE9BQU9BLGNBQWMsOEJBQThCO1lBQ3JEO1FBQ0Y7SUFDRjtJQUNBLE9BQU9DLFdBQVcsdUNBQXVDO0FBQzNEO0FBRUEsTUFBTUMsbUJBQW9EO1FBQUMsRUFBRUwsRUFBRSxFQUFFO0lBQy9ELHlDQUF5QztJQUV6QyxrREFBa0Q7SUFDcEQsTUFBTUMsUUFBMkJILGNBQWNELDJEQUFjQSxFQUFFUyxTQUFTTjtJQUl0RU8sUUFBUUMsR0FBRyxDQUFDUDtJQUVaLElBQUksQ0FBQ0EsT0FBTztRQUNWLHFCQUFPLDhEQUFDUTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7OzBCQUNDLDhEQUFDQzs7b0JBQUlULE1BQU1VLElBQUk7b0JBQUM7Ozs7Ozs7MEJBQ2hCLDhEQUFDQzs7b0JBQUU7b0JBQUtYLE1BQU1ELEVBQUU7Ozs7Ozs7MEJBQ2hCLDhEQUFDWTs7b0JBQUU7b0JBQU9YLE1BQU1ZLElBQUk7Ozs7Ozs7MEJBQ3BCLDhEQUFDRDs7b0JBQUU7b0JBQWNYLE1BQU1hLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUFJeEM7S0F2Qk1UO0FBeUJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXNzZXRzRGV0YWlsc1BhZ2UudHN4P2E4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXNzZXRzTW9ja0RhdGEgfSBmcm9tIFwiLi4vZGF0YS9Bc3NldERhdGFcIjtcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7IFxuXG5pbnRlcmZhY2UgQXNzZXREZXRhaWxzUGFnZVByb3BzIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgc2VhcmNoIGZvciBhbiBhc3NldCBieSBJRFxuY29uc3QgZmluZEFzc2V0QnlJZCA9IChhc3NldHM6IEFzc2V0W10sIGlkOiBudW1iZXIpOiBBc3NldCB8IHVuZGVmaW5lZCA9PiB7XG4gIGZvciAoY29uc3QgYXNzZXQgb2YgYXNzZXRzKSB7XG4gICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIGFzc2V0OyAvLyBGb3VuZCB0aGUgYXNzZXQgYXQgdGhlIGN1cnJlbnQgbGV2ZWxcbiAgICB9XG4gICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBmb3VuZEluQ2hpbGQgPSBmaW5kQXNzZXRCeUlkKGFzc2V0LmNoaWxkcmVuLCBpZCk7IC8vIFJlY3Vyc2l2ZWx5IHNlYXJjaCBpbiBjaGlsZHJlblxuICAgICAgaWYgKGZvdW5kSW5DaGlsZCkge1xuICAgICAgICByZXR1cm4gZm91bmRJbkNoaWxkOyAvLyBGb3VuZCB0aGUgYXNzZXQgaW4gY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gQXNzZXQgd2l0aCB0aGUgcHJvdmlkZWQgSUQgbm90IGZvdW5kXG59O1xuXG5jb25zdCBBc3NldERldGFpbHNQYWdlOiBSZWFjdC5GQzxBc3NldERldGFpbHNQYWdlUHJvcHM+ID0gKHsgaWQgfSkgPT4ge1xuICAvLyBSZXRyaWV2ZSBhc3NldCBkZXRhaWxzIGJhc2VkIG9uIHRoZSBJRFxuXG4gIC8vIEZpbmQgdGhlIGFzc2V0IHdpdGggdGhlIG1hdGNoaW5nIElEIHJlY3Vyc2l2ZWx5XG5jb25zdCBhc3NldDogQXNzZXQgfCB1bmRlZmluZWQgPSBmaW5kQXNzZXRCeUlkKEFzc2V0c01vY2tEYXRhLCBwYXJzZUludChpZCkpO1xuXG4gXG5cbiAgY29uc29sZS5sb2coYXNzZXQpO1xuXG4gIGlmICghYXNzZXQpIHtcbiAgICByZXR1cm4gPGRpdj5Bc3NldCBub3QgZm91bmQ8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2Fzc2V0Lm5hbWV9IERldGFpbHM8L2gxPlxuICAgICAgPHA+SUQ6IHthc3NldC5pZH08L3A+XG4gICAgICA8cD5UeXBlOiB7YXNzZXQudHlwZX08L3A+XG4gICAgICA8cD5EZXNjcmlwdGlvbjoge2Fzc2V0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHsvKiBEaXNwbGF5IG90aGVyIGRldGFpbHMgb2YgdGhlIGFzc2V0ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXREZXRhaWxzUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJBc3NldHNNb2NrRGF0YSIsImZpbmRBc3NldEJ5SWQiLCJhc3NldHMiLCJpZCIsImFzc2V0IiwiY2hpbGRyZW4iLCJmb3VuZEluQ2hpbGQiLCJ1bmRlZmluZWQiLCJBc3NldERldGFpbHNQYWdlIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJuYW1lIiwicCIsInR5cGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\n"));

/***/ })

});