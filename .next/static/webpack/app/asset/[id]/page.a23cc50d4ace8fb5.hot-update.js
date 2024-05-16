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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _AssetMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssetMain */ \"(app-pages-browser)/./src/components/AssetMain.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AssetDetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_3__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    // Define a function to recursively search for an asset by ID\n    const findAssetById = (assets, id)=>{\n        for (const asset of assets){\n            if (asset.id === id) {\n                return asset; // Found the asset at the current level\n            }\n            if (asset.children) {\n                const foundInChild = findAssetById(asset.children, id); // Recursively search in children\n                if (foundInChild) {\n                    return foundInChild; // Found the asset in children\n                }\n            }\n        }\n        return undefined; // Asset with the provided ID not found\n    };\n    // Find the asset with the matching ID recursively\n    const asset = findAssetById(assets, parseInt(id));\n    if (!asset) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, undefined);\n    }\n    const renderAttributes = (attributes)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        attribute.key,\n                        \": \",\n                        attribute.value.toString()\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderChildren = (children)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetMain__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            assetParam: children\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    asset.name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    asset.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type: \",\n                    asset.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    asset.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            asset.attributes && renderAttributes(asset.attributes)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetailsPage, \"XE8/Z4EzmpQ1657TfG9BfX+UgQM=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"AssetDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDTztBQUNSO0FBRWQ7QUFNcEMsTUFBTU0sbUJBQW9EO1FBQUMsRUFBRUMsRUFBRSxFQUFFOztJQUMvRCxNQUFNLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHTixzRUFBZUE7SUFDakQsTUFBTSxDQUFDSyxRQUFRRSxVQUFVLEdBQUdSLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsdURBQXVEO1FBQ3ZEUyxVQUFVO2VBQUlOLDJEQUFjQTtlQUFLSztTQUFjO0lBQ2pELEdBQUc7UUFBQ0E7S0FBYztJQUdsQiw2REFBNkQ7SUFDN0QsTUFBTUUsZ0JBQWdCLENBQUNILFFBQWlCRDtRQUN0QyxLQUFLLE1BQU1LLFNBQVNKLE9BQVE7WUFDMUIsSUFBSUksTUFBTUwsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQixPQUFPSyxPQUFPLHVDQUF1QztZQUN2RDtZQUNBLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtnQkFDbEIsTUFBTUMsZUFBZUgsY0FBY0MsTUFBTUMsUUFBUSxFQUFFTixLQUFLLGlDQUFpQztnQkFDekYsSUFBSU8sY0FBYztvQkFDaEIsT0FBT0EsY0FBYyw4QkFBOEI7Z0JBQ3JEO1lBQ0Y7UUFDRjtRQUNBLE9BQU9DLFdBQVcsdUNBQXVDO0lBQzNEO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1ILFFBQTJCRCxjQUFjSCxRQUFRUSxTQUFTVDtJQUVoRSxJQUFJLENBQUNLLE9BQU87UUFDVixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCLHFCQUNFLDhEQUFDQztzQkFDRUQsV0FBV0UsR0FBRyxDQUFDLENBQUNDLFdBQVdDLHNCQUMxQiw4REFBQ0M7O3dCQUNFRixVQUFVRyxHQUFHO3dCQUFDO3dCQUFHSCxVQUFVSSxLQUFLLENBQUNDLFFBQVE7O21CQURuQ0o7Ozs7Ozs7Ozs7SUFNakI7SUFFQSxNQUFNSyxpQkFBaUIsQ0FBQ2Y7UUFDdEIscUJBQ0UsOERBQUNSLGtEQUFTQTtZQUFDd0IsWUFBWWhCOzs7Ozs7SUFTM0I7SUFFQSxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDYTs7b0JBQUlsQixNQUFNbUIsSUFBSTtvQkFBQzs7Ozs7OzswQkFDaEIsOERBQUNDOztvQkFBRTtvQkFBS3BCLE1BQU1MLEVBQUU7Ozs7Ozs7MEJBQ2hCLDhEQUFDeUI7O29CQUFFO29CQUFPcEIsTUFBTXFCLElBQUk7Ozs7Ozs7MEJBQ3BCLDhEQUFDRDs7b0JBQUU7b0JBQWNwQixNQUFNc0IsV0FBVzs7Ozs7OztZQUNqQ3RCLE1BQU1PLFVBQVUsSUFBSUQsaUJBQWlCTixNQUFNTyxVQUFVOzs7Ozs7O0FBSTVEO0dBcEVNYjs7UUFDOEJILGtFQUFlQTs7O0tBRDdDRztBQXNFTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeD9hODU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBc3NldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5pbXBvcnQgeyBBc3NldHNNb2NrRGF0YSB9IGZyb20gXCJAL2RhdGEvQXNzZXREYXRhXCI7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRBdHRyaWJ1dGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBBc3NldE1haW4gZnJvbSBcIi4vQXNzZXRNYWluXCI7XG5cbmludGVyZmFjZSBBc3NldERldGFpbHNQYWdlUHJvcHMge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBBc3NldERldGFpbHNQYWdlOiBSZWFjdC5GQzxBc3NldERldGFpbHNQYWdlUHJvcHM+ID0gKHsgaWQgfSkgPT4ge1xuICBjb25zdCB7IGFzc2V0czogY29udGV4dEFzc2V0cyB9ID0gdXNlQXNzZXRDb250ZXh0KCk7XG4gIGNvbnN0IFthc3NldHMsIHNldEFzc2V0c10gPSB1c2VTdGF0ZTxBc3NldFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBNZXJnZSBhc3NldHMgZnJvbSBjb250ZXh0IHdpdGggYXNzZXRzIGZyb20gZGF0YSBmaWxlXG4gICAgc2V0QXNzZXRzKFsuLi5Bc3NldHNNb2NrRGF0YSwgLi4uY29udGV4dEFzc2V0c10pO1xuICB9LCBbY29udGV4dEFzc2V0c10pO1xuXG5cbiAgLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgc2VhcmNoIGZvciBhbiBhc3NldCBieSBJRFxuICBjb25zdCBmaW5kQXNzZXRCeUlkID0gKGFzc2V0czogQXNzZXRbXSwgaWQ6IG51bWJlcik6IEFzc2V0IHwgdW5kZWZpbmVkID0+IHtcbiAgICBmb3IgKGNvbnN0IGFzc2V0IG9mIGFzc2V0cykge1xuICAgICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gYXNzZXQ7IC8vIEZvdW5kIHRoZSBhc3NldCBhdCB0aGUgY3VycmVudCBsZXZlbFxuICAgICAgfVxuICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kSW5DaGlsZCA9IGZpbmRBc3NldEJ5SWQoYXNzZXQuY2hpbGRyZW4sIGlkKTsgLy8gUmVjdXJzaXZlbHkgc2VhcmNoIGluIGNoaWxkcmVuXG4gICAgICAgIGlmIChmb3VuZEluQ2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gZm91bmRJbkNoaWxkOyAvLyBGb3VuZCB0aGUgYXNzZXQgaW4gY2hpbGRyZW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBBc3NldCB3aXRoIHRoZSBwcm92aWRlZCBJRCBub3QgZm91bmRcbiAgfTtcblxuICAvLyBGaW5kIHRoZSBhc3NldCB3aXRoIHRoZSBtYXRjaGluZyBJRCByZWN1cnNpdmVseVxuICBjb25zdCBhc3NldDogQXNzZXQgfCB1bmRlZmluZWQgPSBmaW5kQXNzZXRCeUlkKGFzc2V0cywgcGFyc2VJbnQoaWQpKTtcblxuICBpZiAoIWFzc2V0KSB7XG4gICAgcmV0dXJuIDxkaXY+QXNzZXQgbm90IGZvdW5kPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgcmVuZGVyQXR0cmlidXRlcyA9IChhdHRyaWJ1dGVzOiBBc3NldEF0dHJpYnV0ZVtdKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2F0dHJpYnV0ZS5rZXl9OiB7YXR0cmlidXRlLnZhbHVlLnRvU3RyaW5nKCl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoY2hpbGRyZW46IEFzc2V0W10pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFzc2V0TWFpbiBhc3NldFBhcmFtPXtjaGlsZHJlbn0gLz5cbiAgICAgIC8vIDx1bD5cbiAgICAgIC8vICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAvLyAgICAgPGxpIGtleT17Y2hpbGQuaWR9PlxuICAgICAgLy8gICAgICAgPEFzc2V0TWFpbiBhc3NldFBhcmFtPXtjaGlsZH0gLz5cbiAgICAgIC8vICAgICA8L2xpPlxuICAgICAgLy8gICApKX1cbiAgICAgIC8vIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2Fzc2V0Lm5hbWV9IERldGFpbHM8L2gxPlxuICAgICAgPHA+SUQ6IHthc3NldC5pZH08L3A+XG4gICAgICA8cD5UeXBlOiB7YXNzZXQudHlwZX08L3A+XG4gICAgICA8cD5EZXNjcmlwdGlvbjoge2Fzc2V0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHthc3NldC5hdHRyaWJ1dGVzICYmIHJlbmRlckF0dHJpYnV0ZXMoYXNzZXQuYXR0cmlidXRlcyl9XG4gICAgICB7LyogRGlzcGxheSBvdGhlciBkZXRhaWxzIG9mIHRoZSBhc3NldCAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0RGV0YWlsc1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFzc2V0Q29udGV4dCIsIkFzc2V0c01vY2tEYXRhIiwiQXNzZXRNYWluIiwiQXNzZXREZXRhaWxzUGFnZSIsImlkIiwiYXNzZXRzIiwiY29udGV4dEFzc2V0cyIsInNldEFzc2V0cyIsImZpbmRBc3NldEJ5SWQiLCJhc3NldCIsImNoaWxkcmVuIiwiZm91bmRJbkNoaWxkIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJkaXYiLCJyZW5kZXJBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInVsIiwibWFwIiwiYXR0cmlidXRlIiwiaW5kZXgiLCJsaSIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJyZW5kZXJDaGlsZHJlbiIsImFzc2V0UGFyYW0iLCJoMSIsIm5hbWUiLCJwIiwidHlwZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\n"));

/***/ })

});