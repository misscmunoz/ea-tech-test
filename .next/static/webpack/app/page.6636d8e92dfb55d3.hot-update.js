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

/***/ "(app-pages-browser)/./src/components/AssetTree.tsx":
/*!**************************************!*\
  !*** ./src/components/AssetTree.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AssetTree = (param)=>{\n    let { assets } = param;\n    _s();\n    const { assets: contextAssets, onUpdateAsset, onDeleteAsset } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext)();\n    const [isUpdateFormVisible, setUpdateFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAsset, setSelectedAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ...AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    const handleUpdate = (updatedAsset)=>{\n        if (selectedAsset) {\n            onUpdateAsset(selectedAsset.id, updatedAsset); // Pass the ID of the selected asset\n            setUpdateFormVisible(false); // Close the update form after submitting\n        }\n    };\n    const handleDelete = (id)=>{\n        onDeleteAsset(id);\n    };\n    const toggleUpdateForm = (asset)=>{\n        setUpdateFormVisible(!isUpdateFormVisible);\n        setSelectedAsset(asset);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md mb-4\",\n        children: assets.map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-gray-300 rounded-md mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold mb-2\",\n                                        children: asset.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Type: \",\n                                            asset.type\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    asset.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-2\",\n                                        children: [\n                                            \"Description: \",\n                                            asset.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/asset/\".concat(asset.id),\n                                        passHref: true,\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"text-blue-500\",\n                                            children: \"View Details \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm\",\n                                        onClick: ()=>toggleUpdateForm(asset),\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm\",\n                                        onClick: ()=>handleDelete(asset.id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    isUpdateFormVisible && selectedAsset && selectedAsset.id === asset.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            initialAsset: selectedAsset,\n                            onSubmit: (id, updatedAsset)=>handleUpdate(updatedAsset),\n                            onCancel: ()=>setUpdateFormVisible(false)\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined),\n                    asset.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetTree, {\n                            assets: asset.children\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, asset.id, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetTree, \"Lc/UtFPwN9cfiv8SsUr3DgFdIXw=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_2__.useAssetContext\n    ];\n});\n_c = AssetTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetTree);\nvar _c;\n$RefreshReg$(_c, \"AssetTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ087QUFDN0I7QUFFTztBQU1wQyxNQUFNTSxZQUFzQztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDckQsTUFBTSxFQUFFQSxRQUFRQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQUdQLHNFQUFlQTtJQUMvRSxNQUFNLENBQUNRLHFCQUFxQkMscUJBQXFCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ1ksZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFlO0lBRWpFQyxnREFBU0EsQ0FBQztRQUNSLHVEQUF1RDtRQUN2RGEsVUFBVTtlQUFJQztlQUFtQlI7U0FBYztJQUNqRCxHQUFHO1FBQUNBO0tBQWM7SUFHbEIsTUFBTVMsZUFBZSxDQUFDQztRQUNwQixJQUFJTCxlQUFlO1lBQ2pCSixjQUFjSSxjQUFjTSxFQUFFLEVBQUVELGVBQWUsb0NBQW9DO1lBQ25GTixxQkFBcUIsUUFBUSx5Q0FBeUM7UUFDeEU7SUFDRjtJQUVBLE1BQU1RLGVBQWUsQ0FBQ0Q7UUFDcEJULGNBQWNTO0lBQ2hCO0lBRUEsTUFBTUUsbUJBQW1CLENBQUNDO1FBQ3hCVixxQkFBcUIsQ0FBQ0Q7UUFDdEJHLGlCQUFpQlE7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWmpCLE9BQU9rQixHQUFHLENBQUMsQ0FBQ0gsc0JBQ1gsOERBQUNDO2dCQUFtQkMsV0FBVTs7a0NBQzVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOztrREFDQyw4REFBQ0c7d0NBQUdGLFdBQVU7a0RBQThCRixNQUFNSyxJQUFJOzs7Ozs7a0RBQ3RELDhEQUFDQzs7NENBQUU7NENBQU9OLE1BQU1PLElBQUk7Ozs7Ozs7b0NBQ25CUCxNQUFNUSxXQUFXLGtCQUFJLDhEQUFDRjt3Q0FBRUosV0FBVTs7NENBQU87NENBQWNGLE1BQU1RLFdBQVc7Ozs7Ozs7a0RBQ3pFLDhEQUFDMUIsaURBQUlBO3dDQUFDMkIsTUFBTSxVQUFtQixPQUFUVCxNQUFNSCxFQUFFO3dDQUFJYSxRQUFRO3dDQUFDQyxjQUFjO2tEQUN2RCw0RUFBQ0M7NENBQUVWLFdBQVU7c0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHakMsOERBQUNEOztrREFDQyw4REFBQ1k7d0NBQU9YLFdBQVU7d0NBQStFWSxTQUFTLElBQU1mLGlCQUFpQkM7a0RBQVE7Ozs7OztrREFDekksOERBQUNhO3dDQUFPWCxXQUFVO3dDQUFvSVksU0FBUyxJQUFNaEIsYUFBYUUsTUFBTUgsRUFBRTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUdoTVIsdUJBQXVCRSxpQkFBaUJBLGNBQWNNLEVBQUUsS0FBS0csTUFBTUgsRUFBRSxrQkFDcEUsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbkIsa0RBQVNBOzRCQUFDZ0MsY0FBY3hCOzRCQUFleUIsVUFBVSxDQUFDbkIsSUFBWUQsZUFBd0JELGFBQWFDOzRCQUFlcUIsVUFBVSxJQUFNM0IscUJBQXFCOzs7Ozs7Ozs7OztvQkFHM0pVLE1BQU1rQixRQUFRLGtCQUNiLDhEQUFDakI7d0JBQUlDLFdBQVU7a0NBRWIsNEVBQUNsQjs0QkFBVUMsUUFBUWUsTUFBTWtCLFFBQVE7Ozs7Ozs7Ozs7OztlQXZCN0JsQixNQUFNSCxFQUFFOzs7Ozs7Ozs7O0FBOEIxQjtHQTVETWI7O1FBQzRESCxrRUFBZUE7OztLQUQzRUc7QUE4RE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXNzZXRUcmVlLnRzeD9hMjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBc3NldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEFzc2V0Rm9ybSBmcm9tIFwiLi9Bc3NldEZvcm1cIjtcblxuaW50ZXJmYWNlIEFzc2V0VHJlZVByb3BzIHtcbiAgYXNzZXRzOiBBc3NldFtdO1xufVxuXG5jb25zdCBBc3NldFRyZWU6IFJlYWN0LkZDPEFzc2V0VHJlZVByb3BzPiA9ICh7IGFzc2V0cyB9KSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzOiBjb250ZXh0QXNzZXRzLCBvblVwZGF0ZUFzc2V0LCBvbkRlbGV0ZUFzc2V0IH0gPSB1c2VBc3NldENvbnRleHQoKTtcbiAgY29uc3QgW2lzVXBkYXRlRm9ybVZpc2libGUsIHNldFVwZGF0ZUZvcm1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkQXNzZXQsIHNldFNlbGVjdGVkQXNzZXRdID0gdXNlU3RhdGU8QXNzZXQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE1lcmdlIGFzc2V0cyBmcm9tIGNvbnRleHQgd2l0aCBhc3NldHMgZnJvbSBkYXRhIGZpbGVcbiAgICBzZXRBc3NldHMoWy4uLkFzc2V0c01vY2tEYXRhLCAuLi5jb250ZXh0QXNzZXRzXSk7XG4gIH0sIFtjb250ZXh0QXNzZXRzXSk7XG5cblxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSAodXBkYXRlZEFzc2V0OiBBc3NldCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFzc2V0KSB7XG4gICAgICBvblVwZGF0ZUFzc2V0KHNlbGVjdGVkQXNzZXQuaWQsIHVwZGF0ZWRBc3NldCk7IC8vIFBhc3MgdGhlIElEIG9mIHRoZSBzZWxlY3RlZCBhc3NldFxuICAgICAgc2V0VXBkYXRlRm9ybVZpc2libGUoZmFsc2UpOyAvLyBDbG9zZSB0aGUgdXBkYXRlIGZvcm0gYWZ0ZXIgc3VibWl0dGluZ1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIG9uRGVsZXRlQXNzZXQoaWQpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVVwZGF0ZUZvcm0gPSAoYXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgc2V0VXBkYXRlRm9ybVZpc2libGUoIWlzVXBkYXRlRm9ybVZpc2libGUpO1xuICAgIHNldFNlbGVjdGVkQXNzZXQoYXNzZXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG1iLTRcIj5cbiAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YXNzZXQuaWR9IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj57YXNzZXQubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cD5UeXBlOiB7YXNzZXQudHlwZX08L3A+XG4gICAgICAgICAgICAgIHthc3NldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJtYi0yXCI+RGVzY3JpcHRpb246IHthc3NldC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Fzc2V0LyR7YXNzZXQuaWR9YH0gcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlZpZXcgRGV0YWlscyA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlVXBkYXRlRm9ybShhc3NldCl9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJlZC01MDAgdGV4dC1zbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShhc3NldC5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzVXBkYXRlRm9ybVZpc2libGUgJiYgc2VsZWN0ZWRBc3NldCAmJiBzZWxlY3RlZEFzc2V0LmlkID09PSBhc3NldC5pZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgPEFzc2V0Rm9ybSBpbml0aWFsQXNzZXQ9e3NlbGVjdGVkQXNzZXR9IG9uU3VibWl0PXsoaWQ6IG51bWJlciwgdXBkYXRlZEFzc2V0OiBBc3NldCkgPT4gaGFuZGxlVXBkYXRlKHVwZGF0ZWRBc3NldCl9IG9uQ2FuY2VsPXsoKSA9PiBzZXRVcGRhdGVGb3JtVmlzaWJsZShmYWxzZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthc3NldC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTRcIj5cbiAgICAgICAgICAgICAgey8qIFJlY3Vyc2l2ZWx5IHJlbmRlciBjaGlsZHJlbiAqL31cbiAgICAgICAgICAgICAgPEFzc2V0VHJlZSBhc3NldHM9e2Fzc2V0LmNoaWxkcmVufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0VHJlZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUFzc2V0Q29udGV4dCIsIkxpbmsiLCJBc3NldEZvcm0iLCJBc3NldFRyZWUiLCJhc3NldHMiLCJjb250ZXh0QXNzZXRzIiwib25VcGRhdGVBc3NldCIsIm9uRGVsZXRlQXNzZXQiLCJpc1VwZGF0ZUZvcm1WaXNpYmxlIiwic2V0VXBkYXRlRm9ybVZpc2libGUiLCJzZWxlY3RlZEFzc2V0Iiwic2V0U2VsZWN0ZWRBc3NldCIsInNldEFzc2V0cyIsIkFzc2V0c01vY2tEYXRhIiwiaGFuZGxlVXBkYXRlIiwidXBkYXRlZEFzc2V0IiwiaWQiLCJoYW5kbGVEZWxldGUiLCJ0b2dnbGVVcGRhdGVGb3JtIiwiYXNzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJoMiIsIm5hbWUiLCJwIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiaHJlZiIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnV0dG9uIiwib25DbGljayIsImluaXRpYWxBc3NldCIsIm9uU3VibWl0Iiwib25DYW5jZWwiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetTree.tsx\n"));

/***/ })

});