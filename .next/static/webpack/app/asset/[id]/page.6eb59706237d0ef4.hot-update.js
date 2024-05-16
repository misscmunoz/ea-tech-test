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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetDetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_3__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    // Define a function to recursively search for an asset by ID\n    const findAssetById = (assets, id)=>{\n        for (const asset of assets){\n            if (asset.id === id) {\n                return asset; // Found the asset at the current level\n            }\n            if (asset.children) {\n                const foundInChild = findAssetById(asset.children, id); // Recursively search in children\n                if (foundInChild) {\n                    return foundInChild; // Found the asset in children\n                }\n            }\n        }\n        return undefined; // Asset with the provided ID not found\n    };\n    // Find the asset with the matching ID recursively\n    const asset = findAssetById(assets, parseInt(id));\n    if (!asset) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    asset.name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    asset.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type: \",\n                    asset.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    asset.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetailsPage, \"XE8/Z4EzmpQ1657TfG9BfX+UgQM=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"AssetDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNPO0FBQ1I7QUFPbEQsTUFBTUssbUJBQW9EO1FBQUMsRUFBRUMsRUFBRSxFQUFFOztJQUMvRCxNQUFNLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHTCxzRUFBZUE7SUFDakQsTUFBTSxDQUFDSSxRQUFRRSxVQUFVLEdBQUdQLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsdURBQXVEO1FBQ3ZEUSxVQUFVO2VBQUlMLDJEQUFjQTtlQUFLSTtTQUFjO0lBQ2pELEdBQUc7UUFBQ0E7S0FBYztJQUdsQiw2REFBNkQ7SUFDN0QsTUFBTUUsZ0JBQWdCLENBQUNILFFBQWlCRDtRQUN0QyxLQUFLLE1BQU1LLFNBQVNKLE9BQVE7WUFDMUIsSUFBSUksTUFBTUwsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQixPQUFPSyxPQUFPLHVDQUF1QztZQUN2RDtZQUNBLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtnQkFDbEIsTUFBTUMsZUFBZUgsY0FBY0MsTUFBTUMsUUFBUSxFQUFFTixLQUFLLGlDQUFpQztnQkFDekYsSUFBSU8sY0FBYztvQkFDaEIsT0FBT0EsY0FBYyw4QkFBOEI7Z0JBQ3JEO1lBQ0Y7UUFDRjtRQUNBLE9BQU9DLFdBQVcsdUNBQXVDO0lBQzNEO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1ILFFBQTJCRCxjQUFjSCxRQUFRUSxTQUFTVDtJQUVoRSxJQUFJLENBQUNLLE9BQU87UUFDVixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBOzswQkFDQyw4REFBQ0M7O29CQUFJTixNQUFNTyxJQUFJO29CQUFDOzs7Ozs7OzBCQUNoQiw4REFBQ0M7O29CQUFFO29CQUFLUixNQUFNTCxFQUFFOzs7Ozs7OzBCQUNoQiw4REFBQ2E7O29CQUFFO29CQUFPUixNQUFNUyxJQUFJOzs7Ozs7OzBCQUNwQiw4REFBQ0Q7O29CQUFFO29CQUFjUixNQUFNVSxXQUFXOzs7Ozs7Ozs7Ozs7O0FBSXhDO0dBMUNNaEI7O1FBQzhCRixrRUFBZUE7OztLQUQ3Q0U7QUE0Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldHNEZXRhaWxzUGFnZS50c3g/YTg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXNzZXRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Bc3NldENvbnRleHQnO1xuaW1wb3J0IHsgQXNzZXRzTW9ja0RhdGEgfSBmcm9tIFwiQC9kYXRhL0Fzc2V0RGF0YVwiO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIEFzc2V0RGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFzc2V0RGV0YWlsc1BhZ2U6IFJlYWN0LkZDPEFzc2V0RGV0YWlsc1BhZ2VQcm9wcz4gPSAoeyBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzOiBjb250ZXh0QXNzZXRzIH0gPSB1c2VBc3NldENvbnRleHQoKTtcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE1lcmdlIGFzc2V0cyBmcm9tIGNvbnRleHQgd2l0aCBhc3NldHMgZnJvbSBkYXRhIGZpbGVcbiAgICBzZXRBc3NldHMoWy4uLkFzc2V0c01vY2tEYXRhLCAuLi5jb250ZXh0QXNzZXRzXSk7XG4gIH0sIFtjb250ZXh0QXNzZXRzXSk7XG5cblxuICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byByZWN1cnNpdmVseSBzZWFyY2ggZm9yIGFuIGFzc2V0IGJ5IElEXG4gIGNvbnN0IGZpbmRBc3NldEJ5SWQgPSAoYXNzZXRzOiBBc3NldFtdLCBpZDogbnVtYmVyKTogQXNzZXQgfCB1bmRlZmluZWQgPT4ge1xuICAgIGZvciAoY29uc3QgYXNzZXQgb2YgYXNzZXRzKSB7XG4gICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhc3NldDsgLy8gRm91bmQgdGhlIGFzc2V0IGF0IHRoZSBjdXJyZW50IGxldmVsXG4gICAgICB9XG4gICAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgZm91bmRJbkNoaWxkID0gZmluZEFzc2V0QnlJZChhc3NldC5jaGlsZHJlbiwgaWQpOyAvLyBSZWN1cnNpdmVseSBzZWFyY2ggaW4gY2hpbGRyZW5cbiAgICAgICAgaWYgKGZvdW5kSW5DaGlsZCkge1xuICAgICAgICAgIHJldHVybiBmb3VuZEluQ2hpbGQ7IC8vIEZvdW5kIHRoZSBhc3NldCBpbiBjaGlsZHJlblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIEFzc2V0IHdpdGggdGhlIHByb3ZpZGVkIElEIG5vdCBmb3VuZFxuICB9O1xuXG4gIC8vIEZpbmQgdGhlIGFzc2V0IHdpdGggdGhlIG1hdGNoaW5nIElEIHJlY3Vyc2l2ZWx5XG4gIGNvbnN0IGFzc2V0OiBBc3NldCB8IHVuZGVmaW5lZCA9IGZpbmRBc3NldEJ5SWQoYXNzZXRzLCBwYXJzZUludChpZCkpO1xuXG4gIGlmICghYXNzZXQpIHtcbiAgICByZXR1cm4gPGRpdj5Bc3NldCBub3QgZm91bmQ8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2Fzc2V0Lm5hbWV9IERldGFpbHM8L2gxPlxuICAgICAgPHA+SUQ6IHthc3NldC5pZH08L3A+XG4gICAgICA8cD5UeXBlOiB7YXNzZXQudHlwZX08L3A+XG4gICAgICA8cD5EZXNjcmlwdGlvbjoge2Fzc2V0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHsvKiBEaXNwbGF5IG90aGVyIGRldGFpbHMgb2YgdGhlIGFzc2V0ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXREZXRhaWxzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXNzZXRDb250ZXh0IiwiQXNzZXRzTW9ja0RhdGEiLCJBc3NldERldGFpbHNQYWdlIiwiaWQiLCJhc3NldHMiLCJjb250ZXh0QXNzZXRzIiwic2V0QXNzZXRzIiwiZmluZEFzc2V0QnlJZCIsImFzc2V0IiwiY2hpbGRyZW4iLCJmb3VuZEluQ2hpbGQiLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsImRpdiIsImgxIiwibmFtZSIsInAiLCJ0eXBlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/data/AssetData.ts":
/*!*******************************!*\
  !*** ./src/data/AssetData.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AssetsMockData: function() { return /* binding */ AssetsMockData; }\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./src/types.ts\");\n\nconst AssetsMockData = [\n    {\n        id: 100000,\n        name: \"Asset 1\",\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.A,\n        description: \"This is a type A asset\",\n        attributes: [\n            {\n                key: \"isMonitored\",\n                value: true\n            },\n            {\n                key: \"OS Version\",\n                value: \"1.2.3\"\n            },\n            {\n                key: \"Voltage\",\n                value: \"855.23\"\n            }\n        ],\n        children: [\n            {\n                id: 100004,\n                name: \"Asset 4\",\n                type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.B,\n                children: [\n                    {\n                        id: 100020,\n                        name: \"Asset 20\",\n                        type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.C,\n                        children: [\n                            {\n                                id: 100030,\n                                name: \"Asset 30\",\n                                type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.D,\n                                attributes: [\n                                    {\n                                        key: \"power\",\n                                        value: \"40\"\n                                    },\n                                    {\n                                        key: \"material\",\n                                        value: \"plastic\"\n                                    }\n                                ]\n                            }\n                        ]\n                    },\n                    {\n                        id: 100031,\n                        name: \"Asset 31\",\n                        type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.D,\n                        description: \"this is asset of type D\"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        id: 100002,\n        name: \"Asset 2\",\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.A\n    },\n    {\n        id: 100003,\n        name: \"Asset 3\",\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.B,\n        children: [\n            {\n                id: 100050,\n                name: \"Asset 50\",\n                type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.C\n            },\n            {\n                id: 100051,\n                name: \"Asset 51\",\n                type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.C,\n                attributes: [\n                    {\n                        key: \"isMonitored\",\n                        value: true\n                    }\n                ]\n            },\n            {\n                id: 100052,\n                name: \"Asset 52\",\n                type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.C,\n                children: [\n                    {\n                        id: 100055,\n                        name: \"Asset 55\",\n                        type: _types__WEBPACK_IMPORTED_MODULE_0__.AssetType.E\n                    }\n                ]\n            }\n        ]\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9kYXRhL0Fzc2V0RGF0YS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUdyQyxNQUFNQyxpQkFBMEI7SUFDckM7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU1KLDZDQUFTQSxDQUFDSyxDQUFDO1FBQ2pCQyxhQUFhO1FBQ2JDLFlBQVk7WUFDVjtnQkFDRUMsS0FBSztnQkFDTEMsT0FBTztZQUNUO1lBQ0E7Z0JBQ0VELEtBQUs7Z0JBQ0xDLE9BQU87WUFDVDtZQUNBO2dCQUNFRCxLQUFLO2dCQUNMQyxPQUFPO1lBQ1Q7U0FDRDtRQUNEQyxVQUFVO1lBQ1I7Z0JBQ0VSLElBQUk7Z0JBQ0pDLE1BQU07Z0JBQ05DLE1BQU1KLDZDQUFTQSxDQUFDVyxDQUFDO2dCQUNqQkQsVUFBVTtvQkFDUjt3QkFDRVIsSUFBSTt3QkFDSkMsTUFBTTt3QkFDTkMsTUFBTUosNkNBQVNBLENBQUNZLENBQUM7d0JBQ2pCRixVQUFVOzRCQUNSO2dDQUNFUixJQUFJO2dDQUNKQyxNQUFNO2dDQUNOQyxNQUFNSiw2Q0FBU0EsQ0FBQ2EsQ0FBQztnQ0FDakJOLFlBQVk7b0NBQ1Y7d0NBQ0VDLEtBQUs7d0NBQ0xDLE9BQU87b0NBQ1Q7b0NBQ0E7d0NBQ0VELEtBQUs7d0NBQ0xDLE9BQU87b0NBQ1Q7aUNBQ0Q7NEJBQ0g7eUJBQ0Q7b0JBQ0g7b0JBQ0E7d0JBQ0VQLElBQUk7d0JBQ0pDLE1BQU07d0JBQ05DLE1BQU1KLDZDQUFTQSxDQUFDYSxDQUFDO3dCQUNqQlAsYUFBYTtvQkFDZjtpQkFDRDtZQUNIO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNSiw2Q0FBU0EsQ0FBQ0ssQ0FBQztJQUNuQjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNSiw2Q0FBU0EsQ0FBQ1csQ0FBQztRQUNqQkQsVUFBVTtZQUNSO2dCQUNFUixJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxNQUFNSiw2Q0FBU0EsQ0FBQ1ksQ0FBQztZQUNuQjtZQUNBO2dCQUNFVixJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxNQUFNSiw2Q0FBU0EsQ0FBQ1ksQ0FBQztnQkFDakJMLFlBQVk7b0JBQ1Y7d0JBQ0VDLEtBQUs7d0JBQ0xDLE9BQU87b0JBQ1Q7aUJBQ0Q7WUFDSDtZQUNBO2dCQUNFUCxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxNQUFNSiw2Q0FBU0EsQ0FBQ1ksQ0FBQztnQkFDakJGLFVBQVU7b0JBQ1I7d0JBQ0VSLElBQUk7d0JBQ0pDLE1BQU07d0JBQ05DLE1BQU1KLDZDQUFTQSxDQUFDYyxDQUFDO29CQUNuQjtpQkFDRDtZQUNIO1NBQ0Q7SUFDSDtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvQXNzZXREYXRhLnRzP2YwZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNzZXQsIEFzc2V0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NldHNNb2NrRGF0YTogQXNzZXRbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMTAwMDAwLFxyXG4gICAgbmFtZTogXCJBc3NldCAxXCIsXHJcbiAgICB0eXBlOiBBc3NldFR5cGUuQSxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB0eXBlIEEgYXNzZXRcIixcclxuICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogXCJpc01vbml0b3JlZFwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIk9TIFZlcnNpb25cIixcclxuICAgICAgICB2YWx1ZTogXCIxLjIuM1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcIlZvbHRhZ2VcIixcclxuICAgICAgICB2YWx1ZTogXCI4NTUuMjNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwMDAwNCxcclxuICAgICAgICBuYW1lOiBcIkFzc2V0IDRcIixcclxuICAgICAgICB0eXBlOiBBc3NldFR5cGUuQixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTAwMDIwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFzc2V0IDIwXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IEFzc2V0VHlwZS5DLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxMDAwMzAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkFzc2V0IDMwXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBc3NldFR5cGUuRCxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJwb3dlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJwbGFzdGljXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTAwMDMxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFzc2V0IDMxXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IEFzc2V0VHlwZS5ELFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0aGlzIGlzIGFzc2V0IG9mIHR5cGUgRFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDAwMDIsXHJcbiAgICBuYW1lOiBcIkFzc2V0IDJcIixcclxuICAgIHR5cGU6IEFzc2V0VHlwZS5BLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwMDAwMyxcclxuICAgIG5hbWU6IFwiQXNzZXQgM1wiLFxyXG4gICAgdHlwZTogQXNzZXRUeXBlLkIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwMDA1MCxcclxuICAgICAgICBuYW1lOiBcIkFzc2V0IDUwXCIsXHJcbiAgICAgICAgdHlwZTogQXNzZXRUeXBlLkMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTAwMDUxLFxyXG4gICAgICAgIG5hbWU6IFwiQXNzZXQgNTFcIixcclxuICAgICAgICB0eXBlOiBBc3NldFR5cGUuQyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCJpc01vbml0b3JlZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMDAwNTIsXHJcbiAgICAgICAgbmFtZTogXCJBc3NldCA1MlwiLFxyXG4gICAgICAgIHR5cGU6IEFzc2V0VHlwZS5DLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMDAwNTUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXNzZXQgNTVcIixcclxuICAgICAgICAgICAgdHlwZTogQXNzZXRUeXBlLkUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbIkFzc2V0VHlwZSIsIkFzc2V0c01vY2tEYXRhIiwiaWQiLCJuYW1lIiwidHlwZSIsIkEiLCJkZXNjcmlwdGlvbiIsImF0dHJpYnV0ZXMiLCJrZXkiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiQiIsIkMiLCJEIiwiRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/data/AssetData.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AssetType: function() { return /* binding */ AssetType; }\n/* harmony export */ });\nvar AssetType;\n(function(AssetType) {\n    AssetType[\"A\"] = \"A\";\n    AssetType[\"B\"] = \"B\";\n    AssetType[\"C\"] = \"C\";\n    AssetType[\"D\"] = \"D\";\n    AssetType[\"E\"] = \"E\";\n})(AssetType || (AssetType = {}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90eXBlcy50cyIsIm1hcHBpbmdzIjoiOzs7OztVQUFZQTs7Ozs7O0dBQUFBLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90eXBlcy50cz8yNjljIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFzc2V0VHlwZSB7XG4gICAgQSA9IFwiQVwiLFxuICAgIEIgPSBcIkJcIixcbiAgICBDID0gXCJDXCIsXG4gICAgRCA9IFwiRFwiLFxuICAgIEUgPSBcIkVcIixcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyO1xuICB9XG4gIFxuICBleHBvcnQgaW50ZXJmYWNlIEFzc2V0IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0eXBlOiBBc3NldFR5cGU7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgYXR0cmlidXRlcz86IEF0dHJpYnV0ZVtdO1xuICAgIGNoaWxkcmVuPzogQXNzZXRbXTtcbiAgfVxuIl0sIm5hbWVzIjpbIkFzc2V0VHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/types.ts\n"));

/***/ })

});