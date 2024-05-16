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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetDetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_3__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    // Define a function to recursively search for an asset by ID\n    const findAssetById = (assets, id)=>{\n        for (const asset of assets){\n            if (asset.id === id) {\n                return asset; // Found the asset at the current level\n            }\n            if (asset.children) {\n                const foundInChild = findAssetById(asset.children, id); // Recursively search in children\n                if (foundInChild) {\n                    return foundInChild; // Found the asset in children\n                }\n            }\n        }\n        return undefined; // Asset with the provided ID not found\n    };\n    // Find the asset with the matching ID recursively\n    const asset = findAssetById(assets, parseInt(id));\n    if (!asset) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Asset not found\"\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    const renderAttributes = (attributes)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"mb-4\",\n            children: attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mb-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-semibold\",\n                            children: [\n                                attribute.key,\n                                \":\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        \" \",\n                        attribute.value.toString()\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderChildren = (children)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"pl-4 border-l-2 border-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetDetailsPage, {\n                        id: child.id.toString()\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                }, child.id, false, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-semibold mb-4\",\n                children: [\n                    asset.name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2\",\n                children: [\n                    \"ID: \",\n                    asset.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2\",\n                children: [\n                    \"Type: \",\n                    asset.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            asset.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-4\",\n                children: [\n                    \"Description: \",\n                    asset.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n                lineNumber: 72,\n                columnNumber: 29\n            }, undefined),\n            asset.attributes && renderAttributes(asset.attributes),\n            asset.children && renderChildren(asset.children)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetsDetailsPage.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetDetailsPage, \"XE8/Z4EzmpQ1657TfG9BfX+UgQM=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"AssetDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0c0RldGFpbHNQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNPO0FBQ1I7QUFPbEQsTUFBTUssbUJBQW9EO1FBQUMsRUFBRUMsRUFBRSxFQUFFOztJQUMvRCxNQUFNLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHTCxzRUFBZUE7SUFDakQsTUFBTSxDQUFDSSxRQUFRRSxVQUFVLEdBQUdQLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsdURBQXVEO1FBQ3ZEUSxVQUFVO2VBQUlMLDJEQUFjQTtlQUFLSTtTQUFjO0lBQ2pELEdBQUc7UUFBQ0E7S0FBYztJQUdsQiw2REFBNkQ7SUFDN0QsTUFBTUUsZ0JBQWdCLENBQUNILFFBQWlCRDtRQUN0QyxLQUFLLE1BQU1LLFNBQVNKLE9BQVE7WUFDMUIsSUFBSUksTUFBTUwsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQixPQUFPSyxPQUFPLHVDQUF1QztZQUN2RDtZQUNBLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtnQkFDbEIsTUFBTUMsZUFBZUgsY0FBY0MsTUFBTUMsUUFBUSxFQUFFTixLQUFLLGlDQUFpQztnQkFDekYsSUFBSU8sY0FBYztvQkFDaEIsT0FBT0EsY0FBYyw4QkFBOEI7Z0JBQ3JEO1lBQ0Y7UUFDRjtRQUNBLE9BQU9DLFdBQVcsdUNBQXVDO0lBQzNEO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1ILFFBQTJCRCxjQUFjSCxRQUFRUSxTQUFTVDtJQUVoRSxJQUFJLENBQUNLLE9BQU87UUFDVixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCLHFCQUNFLDhEQUFDQztZQUFHQyxXQUFVO3NCQUNYRixXQUFXRyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzFCLDhEQUFDQztvQkFBZUosV0FBVTs7c0NBQ3hCLDhEQUFDSzs0QkFBS0wsV0FBVTs7Z0NBQWlCRSxVQUFVSSxHQUFHO2dDQUFDOzs7Ozs7O3dCQUFRO3dCQUFFSixVQUFVSyxLQUFLLENBQUNDLFFBQVE7O21CQUQxRUw7Ozs7Ozs7Ozs7SUFNakI7SUFFQSxNQUFNTSxpQkFBaUIsQ0FBQ2pCO1FBQ3RCLHFCQUNFLDhEQUFDTztzQkFDRVAsU0FBU1MsR0FBRyxDQUFDUyxDQUFBQSxzQkFDWiw4REFBQ047b0JBQWtCSixXQUFVOzhCQUMzQiw0RUFBQ2Y7d0JBQWlCQyxJQUFJd0IsTUFBTXhCLEVBQUUsQ0FBQ3NCLFFBQVE7Ozs7OzttQkFEaENFLE1BQU14QixFQUFFOzs7Ozs7Ozs7O0lBTXpCO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlJLFdBQVU7OzBCQUNiLDhEQUFDVztnQkFBR1gsV0FBVTs7b0JBQThCVCxNQUFNcUIsSUFBSTtvQkFBQzs7Ozs7OzswQkFDdkQsOERBQUNDO2dCQUFFYixXQUFVOztvQkFBTztvQkFBS1QsTUFBTUwsRUFBRTs7Ozs7OzswQkFDakMsOERBQUMyQjtnQkFBRWIsV0FBVTs7b0JBQU87b0JBQU9ULE1BQU11QixJQUFJOzs7Ozs7O1lBQ3BDdkIsTUFBTXdCLFdBQVcsa0JBQUksOERBQUNGO2dCQUFFYixXQUFVOztvQkFBTztvQkFBY1QsTUFBTXdCLFdBQVc7Ozs7Ozs7WUFDeEV4QixNQUFNTyxVQUFVLElBQUlELGlCQUFpQk4sTUFBTU8sVUFBVTtZQUNyRFAsTUFBTUMsUUFBUSxJQUFJaUIsZUFBZWxCLE1BQU1DLFFBQVE7Ozs7Ozs7QUFHdEQ7R0FuRU1QOztRQUM4QkYsa0VBQWVBOzs7S0FEN0NFO0FBcUVOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXNzZXRzRGV0YWlsc1BhZ2UudHN4P2E4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFzc2V0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXNzZXRDb250ZXh0JztcbmltcG9ydCB7IEFzc2V0c01vY2tEYXRhIH0gZnJvbSBcIkAvZGF0YS9Bc3NldERhdGFcIjtcbmltcG9ydCB7IEFzc2V0LCBBc3NldEF0dHJpYnV0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQXNzZXREZXRhaWxzUGFnZVByb3BzIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgQXNzZXREZXRhaWxzUGFnZTogUmVhY3QuRkM8QXNzZXREZXRhaWxzUGFnZVByb3BzPiA9ICh7IGlkIH0pID0+IHtcbiAgY29uc3QgeyBhc3NldHM6IGNvbnRleHRBc3NldHMgfSA9IHVzZUFzc2V0Q29udGV4dCgpO1xuICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGU8QXNzZXRbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gTWVyZ2UgYXNzZXRzIGZyb20gY29udGV4dCB3aXRoIGFzc2V0cyBmcm9tIGRhdGEgZmlsZVxuICAgIHNldEFzc2V0cyhbLi4uQXNzZXRzTW9ja0RhdGEsIC4uLmNvbnRleHRBc3NldHNdKTtcbiAgfSwgW2NvbnRleHRBc3NldHNdKTtcblxuXG4gIC8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgYW4gYXNzZXQgYnkgSURcbiAgY29uc3QgZmluZEFzc2V0QnlJZCA9IChhc3NldHM6IEFzc2V0W10sIGlkOiBudW1iZXIpOiBBc3NldCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgZm9yIChjb25zdCBhc3NldCBvZiBhc3NldHMpIHtcbiAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0OyAvLyBGb3VuZCB0aGUgYXNzZXQgYXQgdGhlIGN1cnJlbnQgbGV2ZWxcbiAgICAgIH1cbiAgICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBmb3VuZEluQ2hpbGQgPSBmaW5kQXNzZXRCeUlkKGFzc2V0LmNoaWxkcmVuLCBpZCk7IC8vIFJlY3Vyc2l2ZWx5IHNlYXJjaCBpbiBjaGlsZHJlblxuICAgICAgICBpZiAoZm91bmRJbkNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kSW5DaGlsZDsgLy8gRm91bmQgdGhlIGFzc2V0IGluIGNoaWxkcmVuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gQXNzZXQgd2l0aCB0aGUgcHJvdmlkZWQgSUQgbm90IGZvdW5kXG4gIH07XG5cbiAgLy8gRmluZCB0aGUgYXNzZXQgd2l0aCB0aGUgbWF0Y2hpbmcgSUQgcmVjdXJzaXZlbHlcbiAgY29uc3QgYXNzZXQ6IEFzc2V0IHwgdW5kZWZpbmVkID0gZmluZEFzc2V0QnlJZChhc3NldHMsIHBhcnNlSW50KGlkKSk7XG5cbiAgaWYgKCFhc3NldCkge1xuICAgIHJldHVybiA8ZGl2PkFzc2V0IG5vdCBmb3VuZDwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckF0dHJpYnV0ZXMgPSAoYXR0cmlidXRlczogQXNzZXRBdHRyaWJ1dGVbXSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICB7YXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnthdHRyaWJ1dGUua2V5fTo8L3NwYW4+IHthdHRyaWJ1dGUudmFsdWUudG9TdHJpbmcoKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDaGlsZHJlbiA9IChjaGlsZHJlbjogQXNzZXRbXSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2NoaWxkLmlkfSBjbGFzc05hbWU9XCJwbC00IGJvcmRlci1sLTIgYm9yZGVyLWdyYXktNDAwXCI+XG4gICAgICAgICAgICA8QXNzZXREZXRhaWxzUGFnZSBpZD17Y2hpbGQuaWQudG9TdHJpbmcoKX0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e2Fzc2V0Lm5hbWV9IERldGFpbHM8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPklEOiB7YXNzZXQuaWR9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPlR5cGU6IHthc3NldC50eXBlfTwvcD5cbiAgICAgIHthc3NldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJtYi00XCI+RGVzY3JpcHRpb246IHthc3NldC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAge2Fzc2V0LmF0dHJpYnV0ZXMgJiYgcmVuZGVyQXR0cmlidXRlcyhhc3NldC5hdHRyaWJ1dGVzKX1cbiAgICAgIHthc3NldC5jaGlsZHJlbiAmJiByZW5kZXJDaGlsZHJlbihhc3NldC5jaGlsZHJlbil9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldERldGFpbHNQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXNzZXRDb250ZXh0IiwiQXNzZXRzTW9ja0RhdGEiLCJBc3NldERldGFpbHNQYWdlIiwiaWQiLCJhc3NldHMiLCJjb250ZXh0QXNzZXRzIiwic2V0QXNzZXRzIiwiZmluZEFzc2V0QnlJZCIsImFzc2V0IiwiY2hpbGRyZW4iLCJmb3VuZEluQ2hpbGQiLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsImRpdiIsInJlbmRlckF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJhdHRyaWJ1dGUiLCJpbmRleCIsImxpIiwic3BhbiIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJyZW5kZXJDaGlsZHJlbiIsImNoaWxkIiwiaDEiLCJuYW1lIiwicCIsInR5cGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetsDetailsPage.tsx\n"));

/***/ })

});