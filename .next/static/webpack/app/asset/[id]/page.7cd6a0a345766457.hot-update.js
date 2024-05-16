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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetDetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_3__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    // Define a function to recursively search for an asset by ID\n    const findAssetById = (assets, id)=>{\n        for (const asset of assets){\n            if (asset.id === id) {\n                return asset; // Found the asset at the current level\n            }\n            if (asset.children) {\n                const foundInChild = findAssetById(asset.children, id); // Recursively search in children\n                if (foundInChild) {\n                    return foundInChild; // Found the asset in children\n                }\n            }\n        }\n        return undefined; // Asset with the provided ID not found\n    };\n    // Find the asset with the matching ID recursively\n    const asset = findAssetById(assets, parseInt(id));\n    if (!asset) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    const renderAttributes = (attributes)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        attribute.key,\n                        \": \",\n                        attribute.value.toString()\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    asset.name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    asset.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type: \",\n                    asset.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    asset.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            asset.attributes && renderAttributes(asset.attributes)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetailsPage, \"XE8/Z4EzmpQ1657TfG9BfX+UgQM=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"AssetDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNPO0FBQ1I7QUFPbEQsTUFBTUssbUJBQW9EO1FBQUMsRUFBRUMsRUFBRSxFQUFFOztJQUMvRCxNQUFNLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHTCxzRUFBZUE7SUFDakQsTUFBTSxDQUFDSSxRQUFRRSxVQUFVLEdBQUdQLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsdURBQXVEO1FBQ3ZEUSxVQUFVO2VBQUlMLDJEQUFjQTtlQUFLSTtTQUFjO0lBQ2pELEdBQUc7UUFBQ0E7S0FBYztJQUdsQiw2REFBNkQ7SUFDN0QsTUFBTUUsZ0JBQWdCLENBQUNILFFBQWlCRDtRQUN0QyxLQUFLLE1BQU1LLFNBQVNKLE9BQVE7WUFDMUIsSUFBSUksTUFBTUwsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQixPQUFPSyxPQUFPLHVDQUF1QztZQUN2RDtZQUNBLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtnQkFDbEIsTUFBTUMsZUFBZUgsY0FBY0MsTUFBTUMsUUFBUSxFQUFFTixLQUFLLGlDQUFpQztnQkFDekYsSUFBSU8sY0FBYztvQkFDaEIsT0FBT0EsY0FBYyw4QkFBOEI7Z0JBQ3JEO1lBQ0Y7UUFDRjtRQUNBLE9BQU9DLFdBQVcsdUNBQXVDO0lBQzNEO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1ILFFBQTJCRCxjQUFjSCxRQUFRUSxTQUFTVDtJQUVoRSxJQUFJLENBQUNLLE9BQU87UUFDVixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCLHFCQUNFLDhEQUFDQztzQkFDRUQsV0FBV0UsR0FBRyxDQUFDLENBQUNDLFdBQVdDLHNCQUMxQiw4REFBQ0M7O3dCQUNFRixVQUFVRyxHQUFHO3dCQUFDO3dCQUFHSCxVQUFVSSxLQUFLLENBQUNDLFFBQVE7O21CQURuQ0o7Ozs7Ozs7Ozs7SUFNakI7SUFFQSxxQkFDRSw4REFBQ047OzBCQUNDLDhEQUFDVzs7b0JBQUloQixNQUFNaUIsSUFBSTtvQkFBQzs7Ozs7OzswQkFDaEIsOERBQUNDOztvQkFBRTtvQkFBS2xCLE1BQU1MLEVBQUU7Ozs7Ozs7MEJBQ2hCLDhEQUFDdUI7O29CQUFFO29CQUFPbEIsTUFBTW1CLElBQUk7Ozs7Ozs7MEJBQ3BCLDhEQUFDRDs7b0JBQUU7b0JBQWNsQixNQUFNb0IsV0FBVzs7Ozs7OztZQUNqQ3BCLE1BQU1PLFVBQVUsSUFBSUQsaUJBQWlCTixNQUFNTyxVQUFVOzs7Ozs7O0FBSTVEO0dBdkRNYjs7UUFDOEJGLGtFQUFlQTs7O0tBRDdDRTtBQXlETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeD9hODU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBc3NldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5pbXBvcnQgeyBBc3NldHNNb2NrRGF0YSB9IGZyb20gXCJAL2RhdGEvQXNzZXREYXRhXCI7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRBdHRyaWJ1dGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIEFzc2V0RGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFzc2V0RGV0YWlsc1BhZ2U6IFJlYWN0LkZDPEFzc2V0RGV0YWlsc1BhZ2VQcm9wcz4gPSAoeyBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzOiBjb250ZXh0QXNzZXRzIH0gPSB1c2VBc3NldENvbnRleHQoKTtcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE1lcmdlIGFzc2V0cyBmcm9tIGNvbnRleHQgd2l0aCBhc3NldHMgZnJvbSBkYXRhIGZpbGVcbiAgICBzZXRBc3NldHMoWy4uLkFzc2V0c01vY2tEYXRhLCAuLi5jb250ZXh0QXNzZXRzXSk7XG4gIH0sIFtjb250ZXh0QXNzZXRzXSk7XG5cblxuICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byByZWN1cnNpdmVseSBzZWFyY2ggZm9yIGFuIGFzc2V0IGJ5IElEXG4gIGNvbnN0IGZpbmRBc3NldEJ5SWQgPSAoYXNzZXRzOiBBc3NldFtdLCBpZDogbnVtYmVyKTogQXNzZXQgfCB1bmRlZmluZWQgPT4ge1xuICAgIGZvciAoY29uc3QgYXNzZXQgb2YgYXNzZXRzKSB7XG4gICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhc3NldDsgLy8gRm91bmQgdGhlIGFzc2V0IGF0IHRoZSBjdXJyZW50IGxldmVsXG4gICAgICB9XG4gICAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgZm91bmRJbkNoaWxkID0gZmluZEFzc2V0QnlJZChhc3NldC5jaGlsZHJlbiwgaWQpOyAvLyBSZWN1cnNpdmVseSBzZWFyY2ggaW4gY2hpbGRyZW5cbiAgICAgICAgaWYgKGZvdW5kSW5DaGlsZCkge1xuICAgICAgICAgIHJldHVybiBmb3VuZEluQ2hpbGQ7IC8vIEZvdW5kIHRoZSBhc3NldCBpbiBjaGlsZHJlblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIEFzc2V0IHdpdGggdGhlIHByb3ZpZGVkIElEIG5vdCBmb3VuZFxuICB9O1xuXG4gIC8vIEZpbmQgdGhlIGFzc2V0IHdpdGggdGhlIG1hdGNoaW5nIElEIHJlY3Vyc2l2ZWx5XG4gIGNvbnN0IGFzc2V0OiBBc3NldCB8IHVuZGVmaW5lZCA9IGZpbmRBc3NldEJ5SWQoYXNzZXRzLCBwYXJzZUludChpZCkpO1xuXG4gIGlmICghYXNzZXQpIHtcbiAgICByZXR1cm4gPGRpdj5Bc3NldCBub3QgZm91bmQ8L2Rpdj47XG4gIH1cblxuICBjb25zdCByZW5kZXJBdHRyaWJ1dGVzID0gKGF0dHJpYnV0ZXM6IEFzc2V0QXR0cmlidXRlW10pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7YXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7YXR0cmlidXRlLmtleX06IHthdHRyaWJ1dGUudmFsdWUudG9TdHJpbmcoKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2Fzc2V0Lm5hbWV9IERldGFpbHM8L2gxPlxuICAgICAgPHA+SUQ6IHthc3NldC5pZH08L3A+XG4gICAgICA8cD5UeXBlOiB7YXNzZXQudHlwZX08L3A+XG4gICAgICA8cD5EZXNjcmlwdGlvbjoge2Fzc2V0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHthc3NldC5hdHRyaWJ1dGVzICYmIHJlbmRlckF0dHJpYnV0ZXMoYXNzZXQuYXR0cmlidXRlcyl9XG4gICAgICB7LyogRGlzcGxheSBvdGhlciBkZXRhaWxzIG9mIHRoZSBhc3NldCAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0RGV0YWlsc1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFzc2V0Q29udGV4dCIsIkFzc2V0c01vY2tEYXRhIiwiQXNzZXREZXRhaWxzUGFnZSIsImlkIiwiYXNzZXRzIiwiY29udGV4dEFzc2V0cyIsInNldEFzc2V0cyIsImZpbmRBc3NldEJ5SWQiLCJhc3NldCIsImNoaWxkcmVuIiwiZm91bmRJbkNoaWxkIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJkaXYiLCJyZW5kZXJBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInVsIiwibWFwIiwiYXR0cmlidXRlIiwiaW5kZXgiLCJsaSIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJoMSIsIm5hbWUiLCJwIiwidHlwZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\n"));

/***/ })

});