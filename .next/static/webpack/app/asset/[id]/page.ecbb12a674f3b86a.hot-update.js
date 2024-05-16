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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _AssetTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AssetDetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_3__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    const renderAttributes = (attributes)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        attribute.key,\n                        \": \",\n                        attribute.value.toString()\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderChildren = (children)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetTree__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        assets: child\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined)\n                }, child.id, false, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined);\n    };\n    // Define a function to recursively search for an asset by ID\n    const findAssetById = (assets, id)=>{\n        for (const asset of assets){\n            if (asset.id === id) {\n                return asset; // Found the asset at the current level\n            }\n            if (asset.children) {\n                const foundInChild = findAssetById(asset.children, id); // Recursively search in children\n                if (foundInChild) {\n                    return foundInChild; // Found the asset in children\n                }\n            }\n        }\n        return undefined; // Asset with the provided ID not found\n    };\n    // Find the asset with the matching ID recursively\n    const asset = findAssetById(assets, parseInt(id));\n    if (!asset) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 64,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    asset.name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    asset.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type: \",\n                    asset.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    asset.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            asset.attributes && renderAttributes(asset.attributes),\n            asset.children && renderChildren(asset.children)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetailsPage, \"XE8/Z4EzmpQ1657TfG9BfX+UgQM=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"AssetDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDTztBQUNSO0FBRWQ7QUFNcEMsTUFBTU0sbUJBQW9EO1FBQUMsRUFBRUMsRUFBRSxFQUFFOztJQUMvRCxNQUFNLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHTixzRUFBZUE7SUFDakQsTUFBTSxDQUFDSyxRQUFRRSxVQUFVLEdBQUdSLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsdURBQXVEO1FBQ3ZEUyxVQUFVO2VBQUlOLDJEQUFjQTtlQUFLSztTQUFjO0lBQ2pELEdBQUc7UUFBQ0E7S0FBYztJQUVsQixNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEIscUJBQ0UsOERBQUNDO3NCQUNFRCxXQUFXRSxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzFCLDhEQUFDQzs7d0JBQ0VGLFVBQVVHLEdBQUc7d0JBQUM7d0JBQUdILFVBQVVJLEtBQUssQ0FBQ0MsUUFBUTs7bUJBRG5DSjs7Ozs7Ozs7OztJQU1qQjtJQUVBLE1BQU1LLGlCQUFpQixDQUFDQztRQUN0QixxQkFDRSw4REFBQ1Q7c0JBQ0VTLFNBQVNSLEdBQUcsQ0FBQ1MsQ0FBQUEsc0JBQ1osOERBQUNOOzhCQUNDLDRFQUFDWixrREFBU0E7d0JBQUNHLFFBQVFlOzs7Ozs7bUJBRFpBLE1BQU1oQixFQUFFOzs7Ozs7Ozs7O0lBTXpCO0lBRUEsNkRBQTZEO0lBQzdELE1BQU1pQixnQkFBZ0IsQ0FBQ2hCLFFBQWlCRDtRQUN0QyxLQUFLLE1BQU1rQixTQUFTakIsT0FBUTtZQUMxQixJQUFJaUIsTUFBTWxCLEVBQUUsS0FBS0EsSUFBSTtnQkFDbkIsT0FBT2tCLE9BQU8sdUNBQXVDO1lBQ3ZEO1lBQ0EsSUFBSUEsTUFBTUgsUUFBUSxFQUFFO2dCQUNsQixNQUFNSSxlQUFlRixjQUFjQyxNQUFNSCxRQUFRLEVBQUVmLEtBQUssaUNBQWlDO2dCQUN6RixJQUFJbUIsY0FBYztvQkFDaEIsT0FBT0EsY0FBYyw4QkFBOEI7Z0JBQ3JEO1lBQ0Y7UUFDRjtRQUNBLE9BQU9DLFdBQVcsdUNBQXVDO0lBQzNEO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1GLFFBQTJCRCxjQUFjaEIsUUFBUW9CLFNBQVNyQjtJQUVoRSxJQUFJLENBQUNrQixPQUFPO1FBQ1YscUJBQU8sOERBQUNJO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNDOztvQkFBSUwsTUFBTU0sSUFBSTtvQkFBQzs7Ozs7OzswQkFDaEIsOERBQUNDOztvQkFBRTtvQkFBS1AsTUFBTWxCLEVBQUU7Ozs7Ozs7MEJBQ2hCLDhEQUFDeUI7O29CQUFFO29CQUFPUCxNQUFNUSxJQUFJOzs7Ozs7OzBCQUNwQiw4REFBQ0Q7O29CQUFFO29CQUFjUCxNQUFNUyxXQUFXOzs7Ozs7O1lBQ2pDVCxNQUFNYixVQUFVLElBQUlELGlCQUFpQmMsTUFBTWIsVUFBVTtZQUNyRGEsTUFBTUgsUUFBUSxJQUFJRCxlQUFlSSxNQUFNSCxRQUFROzs7Ozs7O0FBR3REO0dBbEVNaEI7O1FBQzhCSCxrRUFBZUE7OztLQUQ3Q0c7QUFvRU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldHNEZXRhaWxzUGFnZS50c3g/YTg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXNzZXRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Bc3NldENvbnRleHQnO1xuaW1wb3J0IHsgQXNzZXRzTW9ja0RhdGEgfSBmcm9tIFwiQC9kYXRhL0Fzc2V0RGF0YVwiO1xuaW1wb3J0IHsgQXNzZXQsIEF0dHJpYnV0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEFzc2V0VHJlZSBmcm9tIFwiLi9Bc3NldFRyZWVcIjtcblxuaW50ZXJmYWNlIEFzc2V0RGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFzc2V0RGV0YWlsc1BhZ2U6IFJlYWN0LkZDPEFzc2V0RGV0YWlsc1BhZ2VQcm9wcz4gPSAoeyBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzOiBjb250ZXh0QXNzZXRzIH0gPSB1c2VBc3NldENvbnRleHQoKTtcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE1lcmdlIGFzc2V0cyBmcm9tIGNvbnRleHQgd2l0aCBhc3NldHMgZnJvbSBkYXRhIGZpbGVcbiAgICBzZXRBc3NldHMoWy4uLkFzc2V0c01vY2tEYXRhLCAuLi5jb250ZXh0QXNzZXRzXSk7XG4gIH0sIFtjb250ZXh0QXNzZXRzXSk7XG5cbiAgY29uc3QgcmVuZGVyQXR0cmlidXRlcyA9IChhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVbXSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHthdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHthdHRyaWJ1dGUua2V5fToge2F0dHJpYnV0ZS52YWx1ZS50b1N0cmluZygpfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNoaWxkcmVuID0gKGNoaWxkcmVuOiBBc3NldFtdKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17Y2hpbGQuaWR9PlxuICAgICAgICAgICAgPEFzc2V0VHJlZSBhc3NldHM9e2NoaWxkfSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIC8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgYW4gYXNzZXQgYnkgSURcbiAgY29uc3QgZmluZEFzc2V0QnlJZCA9IChhc3NldHM6IEFzc2V0W10sIGlkOiBudW1iZXIpOiBBc3NldCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgZm9yIChjb25zdCBhc3NldCBvZiBhc3NldHMpIHtcbiAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0OyAvLyBGb3VuZCB0aGUgYXNzZXQgYXQgdGhlIGN1cnJlbnQgbGV2ZWxcbiAgICAgIH1cbiAgICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBmb3VuZEluQ2hpbGQgPSBmaW5kQXNzZXRCeUlkKGFzc2V0LmNoaWxkcmVuLCBpZCk7IC8vIFJlY3Vyc2l2ZWx5IHNlYXJjaCBpbiBjaGlsZHJlblxuICAgICAgICBpZiAoZm91bmRJbkNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kSW5DaGlsZDsgLy8gRm91bmQgdGhlIGFzc2V0IGluIGNoaWxkcmVuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gQXNzZXQgd2l0aCB0aGUgcHJvdmlkZWQgSUQgbm90IGZvdW5kXG4gIH07XG5cbiAgLy8gRmluZCB0aGUgYXNzZXQgd2l0aCB0aGUgbWF0Y2hpbmcgSUQgcmVjdXJzaXZlbHlcbiAgY29uc3QgYXNzZXQ6IEFzc2V0IHwgdW5kZWZpbmVkID0gZmluZEFzc2V0QnlJZChhc3NldHMsIHBhcnNlSW50KGlkKSk7XG5cbiAgaWYgKCFhc3NldCkge1xuICAgIHJldHVybiA8ZGl2PkFzc2V0IG5vdCBmb3VuZDwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57YXNzZXQubmFtZX0gRGV0YWlsczwvaDE+XG4gICAgICA8cD5JRDoge2Fzc2V0LmlkfTwvcD5cbiAgICAgIDxwPlR5cGU6IHthc3NldC50eXBlfTwvcD5cbiAgICAgIDxwPkRlc2NyaXB0aW9uOiB7YXNzZXQuZGVzY3JpcHRpb259PC9wPlxuICAgICAge2Fzc2V0LmF0dHJpYnV0ZXMgJiYgcmVuZGVyQXR0cmlidXRlcyhhc3NldC5hdHRyaWJ1dGVzKX1cbiAgICAgIHthc3NldC5jaGlsZHJlbiAmJiByZW5kZXJDaGlsZHJlbihhc3NldC5jaGlsZHJlbil9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldERldGFpbHNQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBc3NldENvbnRleHQiLCJBc3NldHNNb2NrRGF0YSIsIkFzc2V0VHJlZSIsIkFzc2V0RGV0YWlsc1BhZ2UiLCJpZCIsImFzc2V0cyIsImNvbnRleHRBc3NldHMiLCJzZXRBc3NldHMiLCJyZW5kZXJBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInVsIiwibWFwIiwiYXR0cmlidXRlIiwiaW5kZXgiLCJsaSIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJyZW5kZXJDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJmaW5kQXNzZXRCeUlkIiwiYXNzZXQiLCJmb3VuZEluQ2hpbGQiLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsImRpdiIsImgxIiwibmFtZSIsInAiLCJ0eXBlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\n"));

/***/ })

});