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

/***/ "(app-pages-browser)/./src/components/AssetTree.tsx":
/*!**************************************!*\
  !*** ./src/components/AssetTree.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AssetTree = (param)=>{\n    let { assets } = param;\n    _s();\n    const { assets: contextAssets, onUpdateAsset, onDeleteAsset } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [isUpdateFormVisible, setUpdateFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAsset, setSelectedAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUpdate = (updatedAsset)=>{\n        if (selectedAsset) {\n            onUpdateAsset(selectedAsset.id, updatedAsset); // Pass the ID of the selected asset\n            setUpdateFormVisible(false); // Close the update form after submitting\n        }\n    };\n    const handleDelete = (id)=>{\n        onDeleteAsset(id);\n    };\n    const toggleUpdateForm = (asset)=>{\n        setUpdateFormVisible(!isUpdateFormVisible);\n        setSelectedAsset(asset);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md mb-4\",\n        children: assets.map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-gray-300 rounded-md mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold mb-2\",\n                                        children: asset.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Type: \",\n                                            asset.type\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    asset.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-2\",\n                                        children: [\n                                            \"Description: \",\n                                            asset.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/asset/\".concat(asset.id),\n                                        passHref: true,\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"text-blue-500\",\n                                            children: \"View Details \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm\",\n                                        onClick: ()=>toggleUpdateForm(asset),\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm\",\n                                        onClick: ()=>handleDelete(asset.id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    isUpdateFormVisible && selectedAsset && selectedAsset.id === asset.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            initialAsset: selectedAsset,\n                            onSubmit: (id, updatedAsset)=>handleUpdate(updatedAsset),\n                            onCancel: ()=>setUpdateFormVisible(false)\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    asset.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetTree, {\n                            assets: asset.children\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, asset.id, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetTree, \"BaiRMvJQQpD5kGy9n1n7CjoC/cQ=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetTree);\nvar _c;\n$RefreshReg$(_c, \"AssetTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQzdCO0FBRU87QUFNcEMsTUFBTUssWUFBc0M7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3JELE1BQU0sRUFBRUEsUUFBUUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRSxHQUFHUCxzRUFBZUE7SUFDL0UsTUFBTSxDQUFDUSxxQkFBcUJDLHFCQUFxQixHQUFHViwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBZTtJQUVqRSxNQUFNYSxlQUFlLENBQUNDO1FBQ3BCLElBQUlILGVBQWU7WUFDakJKLGNBQWNJLGNBQWNJLEVBQUUsRUFBRUQsZUFBZSxvQ0FBb0M7WUFDbkZKLHFCQUFxQixRQUFRLHlDQUF5QztRQUN4RTtJQUNGO0lBRUEsTUFBTU0sZUFBZSxDQUFDRDtRQUNwQlAsY0FBY087SUFDaEI7SUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEJSLHFCQUFxQixDQUFDRDtRQUN0QkcsaUJBQWlCTTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaZixPQUFPZ0IsR0FBRyxDQUFDLENBQUNILHNCQUNYLDhEQUFDQztnQkFBbUJDLFdBQVU7O2tDQUM1Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDs7a0RBQ0MsOERBQUNHO3dDQUFHRixXQUFVO2tEQUE4QkYsTUFBTUssSUFBSTs7Ozs7O2tEQUN0RCw4REFBQ0M7OzRDQUFFOzRDQUFPTixNQUFNTyxJQUFJOzs7Ozs7O29DQUNuQlAsTUFBTVEsV0FBVyxrQkFBSSw4REFBQ0Y7d0NBQUVKLFdBQVU7OzRDQUFPOzRDQUFjRixNQUFNUSxXQUFXOzs7Ozs7O2tEQUN6RSw4REFBQ3hCLGlEQUFJQTt3Q0FBQ3lCLE1BQU0sVUFBbUIsT0FBVFQsTUFBTUgsRUFBRTt3Q0FBSWEsUUFBUTt3Q0FBQ0MsY0FBYztrREFDdkQsNEVBQUNDOzRDQUFFVixXQUFVO3NEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2pDLDhEQUFDRDs7a0RBQ0MsOERBQUNZO3dDQUFPWCxXQUFVO3dDQUErRVksU0FBUyxJQUFNZixpQkFBaUJDO2tEQUFROzs7Ozs7a0RBQ3pJLDhEQUFDYTt3Q0FBT1gsV0FBVTt3Q0FBb0lZLFNBQVMsSUFBTWhCLGFBQWFFLE1BQU1ILEVBQUU7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFHaE1OLHVCQUF1QkUsaUJBQWlCQSxjQUFjSSxFQUFFLEtBQUtHLE1BQU1ILEVBQUUsa0JBQ3BFLDhEQUFDSTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2pCLGtEQUFTQTs0QkFBQzhCLGNBQWN0Qjs0QkFBZXVCLFVBQVUsQ0FBQ25CLElBQVlELGVBQXdCRCxhQUFhQzs0QkFBZXFCLFVBQVUsSUFBTXpCLHFCQUFxQjs7Ozs7Ozs7Ozs7b0JBRzNKUSxNQUFNa0IsUUFBUSxrQkFDYiw4REFBQ2pCO3dCQUFJQyxXQUFVO2tDQUViLDRFQUFDaEI7NEJBQVVDLFFBQVFhLE1BQU1rQixRQUFROzs7Ozs7Ozs7Ozs7ZUF2QjdCbEIsTUFBTUgsRUFBRTs7Ozs7Ozs7OztBQThCMUI7R0F0RE1YOztRQUM0REgsa0VBQWVBOzs7S0FEM0VHO0FBd0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3g/YTI1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFzc2V0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXNzZXRDb250ZXh0JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQXNzZXRGb3JtIGZyb20gXCIuL0Fzc2V0Rm9ybVwiO1xuXG5pbnRlcmZhY2UgQXNzZXRUcmVlUHJvcHMge1xuICBhc3NldHM6IEFzc2V0W107XG59XG5cbmNvbnN0IEFzc2V0VHJlZTogUmVhY3QuRkM8QXNzZXRUcmVlUHJvcHM+ID0gKHsgYXNzZXRzIH0pID0+IHtcbiAgY29uc3QgeyBhc3NldHM6IGNvbnRleHRBc3NldHMsIG9uVXBkYXRlQXNzZXQsIG9uRGVsZXRlQXNzZXQgfSA9IHVzZUFzc2V0Q29udGV4dCgpO1xuICBjb25zdCBbaXNVcGRhdGVGb3JtVmlzaWJsZSwgc2V0VXBkYXRlRm9ybVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRBc3NldCwgc2V0U2VsZWN0ZWRBc3NldF0gPSB1c2VTdGF0ZTxBc3NldCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICh1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQXNzZXQpIHtcbiAgICAgIG9uVXBkYXRlQXNzZXQoc2VsZWN0ZWRBc3NldC5pZCwgdXBkYXRlZEFzc2V0KTsgLy8gUGFzcyB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIGFzc2V0XG4gICAgICBzZXRVcGRhdGVGb3JtVmlzaWJsZShmYWxzZSk7IC8vIENsb3NlIHRoZSB1cGRhdGUgZm9ybSBhZnRlciBzdWJtaXR0aW5nXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgb25EZWxldGVBc3NldChpZCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVXBkYXRlRm9ybSA9IChhc3NldDogQXNzZXQpID0+IHtcbiAgICBzZXRVcGRhdGVGb3JtVmlzaWJsZSghaXNVcGRhdGVGb3JtVmlzaWJsZSk7XG4gICAgc2V0U2VsZWN0ZWRBc3NldChhc3NldCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbWItNFwiPlxuICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXthc3NldC5pZH0gY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPnthc3NldC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxwPlR5cGU6IHthc3NldC50eXBlfTwvcD5cbiAgICAgICAgICAgICAge2Fzc2V0LmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5EZXNjcmlwdGlvbjoge2Fzc2V0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXNzZXQvJHthc3NldC5pZH1gfSBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+VmlldyBEZXRhaWxzIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIHRleHQtc21cIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVVcGRhdGVGb3JtKGFzc2V0KX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmVkLTUwMCB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGFzc2V0LmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNVcGRhdGVGb3JtVmlzaWJsZSAmJiBzZWxlY3RlZEFzc2V0ICYmIHNlbGVjdGVkQXNzZXQuaWQgPT09IGFzc2V0LmlkICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8QXNzZXRGb3JtIGluaXRpYWxBc3NldD17c2VsZWN0ZWRBc3NldH0gb25TdWJtaXQ9eyhpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiBoYW5kbGVVcGRhdGUodXBkYXRlZEFzc2V0KX0gb25DYW5jZWw9eygpID0+IHNldFVwZGF0ZUZvcm1WaXNpYmxlKGZhbHNlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2Fzc2V0LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICB7LyogUmVjdXJzaXZlbHkgcmVuZGVyIGNoaWxkcmVuICovfVxuICAgICAgICAgICAgICA8QXNzZXRUcmVlIGFzc2V0cz17YXNzZXQuY2hpbGRyZW59Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFRyZWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VBc3NldENvbnRleHQiLCJMaW5rIiwiQXNzZXRGb3JtIiwiQXNzZXRUcmVlIiwiYXNzZXRzIiwiY29udGV4dEFzc2V0cyIsIm9uVXBkYXRlQXNzZXQiLCJvbkRlbGV0ZUFzc2V0IiwiaXNVcGRhdGVGb3JtVmlzaWJsZSIsInNldFVwZGF0ZUZvcm1WaXNpYmxlIiwic2VsZWN0ZWRBc3NldCIsInNldFNlbGVjdGVkQXNzZXQiLCJoYW5kbGVVcGRhdGUiLCJ1cGRhdGVkQXNzZXQiLCJpZCIsImhhbmRsZURlbGV0ZSIsInRvZ2dsZVVwZGF0ZUZvcm0iLCJhc3NldCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImgyIiwibmFtZSIsInAiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5pdGlhbEFzc2V0Iiwib25TdWJtaXQiLCJvbkNhbmNlbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetTree.tsx\n"));

/***/ })

});