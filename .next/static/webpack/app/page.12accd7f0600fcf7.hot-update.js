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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetTree = (param)=>{\n    let { assets, onDelete, onUpdate } = param;\n    _s();\n    const [isUpdateFormVisible, setUpdateFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAsset, setSelectedAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUpdate = (id, updatedAsset)=>{\n        if (selectedAsset) {\n            onUpdate(selectedAsset.id, updatedAsset);\n            setUpdateFormVisible(false); // Close the update form after submitting\n        }\n    };\n    const handleDelete = (id)=>{\n        onDelete(id);\n    };\n    const toggleUpdateForm = (asset1)=>{\n        setUpdateFormVisible(!isUpdateFormVisible);\n        setSelectedAsset(asset1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md mb-4\",\n        children: [\n            assets.map((asset1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border border-gray-300 rounded-md mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-semibold mb-2\",\n                            children: asset1.name\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Type: \",\n                                asset1.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        asset1.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-2\",\n                            children: [\n                                \"Description: \",\n                                asset1.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/asset/\".concat(asset1.id),\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-blue-500\",\n                                children: \"View Details \"\n                            }, void 0, false, {\n                                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm\",\n                            onClick: ()=>toggleUpdateForm(asset1),\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm\",\n                            onClick: ()=>handleDelete(asset1.id),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        asset1.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetTree, {\n                                assets: asset1.children,\n                                onDelete: onDelete,\n                                onUpdate: onUpdate\n                            }, void 0, false, {\n                                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, asset1.id, true, {\n                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)),\n            isUpdateFormVisible && selectedAsset && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                initialAsset: selectedAsset,\n                onSubmit: (id, updatedAsset)=>handleUpdate(asset.id, updatedAsset),\n                onCancel: ()=>setUpdateFormVisible(false)\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetTree, \"g9hGepFVk9oRv7MXBtkQXE6jZEo=\");\n_c = AssetTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetTree);\nvar _c;\n$RefreshReg$(_c, \"AssetTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUVPO0FBUXBDLE1BQU1JLFlBQXNDO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDekUsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBZTtJQUVqRSxNQUFNVyxlQUFlLENBQUNDLElBQVlDO1FBQ2hDLElBQUlKLGVBQWU7WUFDakJILFNBQVNHLGNBQWNHLEVBQUUsRUFBRUM7WUFDM0JMLHFCQUFxQixRQUFRLHlDQUF5QztRQUN4RTtJQUNGO0lBRUEsTUFBTU0sZUFBZSxDQUFDRjtRQUNwQlAsU0FBU087SUFDWDtJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QlIscUJBQXFCLENBQUNEO1FBQ3RCRyxpQkFBaUJNO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1pkLE9BQU9lLEdBQUcsQ0FBQyxDQUFDSCx1QkFDWCw4REFBQ0M7b0JBQW1CQyxXQUFVOztzQ0FDNUIsOERBQUNFOzRCQUFHRixXQUFVO3NDQUE4QkYsT0FBTUssSUFBSTs7Ozs7O3NDQUN0RCw4REFBQ0M7O2dDQUFFO2dDQUFPTixPQUFNTyxJQUFJOzs7Ozs7O3dCQUNuQlAsT0FBTVEsV0FBVyxrQkFBSSw4REFBQ0Y7NEJBQUVKLFdBQVU7O2dDQUFPO2dDQUFjRixPQUFNUSxXQUFXOzs7Ozs7O3NDQUN6RSw4REFBQ3ZCLGlEQUFJQTs0QkFBQ3dCLE1BQU0sVUFBbUIsT0FBVFQsT0FBTUosRUFBRTs0QkFBSWMsUUFBUTs0QkFBQ0MsY0FBYztzQ0FDdkQsNEVBQUNDO2dDQUFFVixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDVzs0QkFBT1gsV0FBVTs0QkFBK0VZLFNBQVMsSUFBTWYsaUJBQWlCQztzQ0FBUTs7Ozs7O3NDQUN6SSw4REFBQ2E7NEJBQU9YLFdBQVU7NEJBQW9JWSxTQUFTLElBQU1oQixhQUFhRSxPQUFNSixFQUFFO3NDQUFHOzs7Ozs7d0JBQzVMSSxPQUFNZSxRQUFRLGtCQUNiLDhEQUFDZDs0QkFBSUMsV0FBVTtzQ0FFYiw0RUFBQ2Y7Z0NBQVVDLFFBQVFZLE9BQU1lLFFBQVE7Z0NBQUUxQixVQUFVQTtnQ0FBVUMsVUFBVUE7Ozs7Ozs7Ozs7OzttQkFaN0RVLE9BQU1KLEVBQUU7Ozs7O1lBaUJuQkwsdUJBQXVCRSwrQkFDdEIsOERBQUNQLGtEQUFTQTtnQkFBQzhCLGNBQWN2QjtnQkFBZXdCLFVBQVUsQ0FBQ3JCLElBQVlDLGVBQXdCRixhQUFhSyxNQUFNSixFQUFFLEVBQUVDO2dCQUFlcUIsVUFBVSxJQUFNMUIscUJBQXFCOzs7Ozs7Ozs7Ozs7QUFJMUs7R0E3Q01MO0tBQUFBO0FBK0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3g/YTI1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQXNzZXRGb3JtIGZyb20gXCIuL0Fzc2V0Rm9ybVwiO1xuXG5pbnRlcmZhY2UgQXNzZXRUcmVlUHJvcHMge1xuICBhc3NldHM6IEFzc2V0W107XG4gIG9uRGVsZXRlOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgb25VcGRhdGU6IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB2b2lkO1xufVxuXG5jb25zdCBBc3NldFRyZWU6IFJlYWN0LkZDPEFzc2V0VHJlZVByb3BzPiA9ICh7IGFzc2V0cywgb25EZWxldGUsIG9uVXBkYXRlIH0pID0+IHtcbiAgY29uc3QgW2lzVXBkYXRlRm9ybVZpc2libGUsIHNldFVwZGF0ZUZvcm1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkQXNzZXQsIHNldFNlbGVjdGVkQXNzZXRdID0gdXNlU3RhdGU8QXNzZXQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoaWQ6IG51bWJlciwgdXBkYXRlZEFzc2V0OiBBc3NldCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFzc2V0KSB7XG4gICAgICBvblVwZGF0ZShzZWxlY3RlZEFzc2V0LmlkLCB1cGRhdGVkQXNzZXQpO1xuICAgICAgc2V0VXBkYXRlRm9ybVZpc2libGUoZmFsc2UpOyAvLyBDbG9zZSB0aGUgdXBkYXRlIGZvcm0gYWZ0ZXIgc3VibWl0dGluZ1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIG9uRGVsZXRlKGlkKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVVcGRhdGVGb3JtID0gKGFzc2V0OiBBc3NldCkgPT4ge1xuICAgIHNldFVwZGF0ZUZvcm1WaXNpYmxlKCFpc1VwZGF0ZUZvcm1WaXNpYmxlKTtcbiAgICBzZXRTZWxlY3RlZEFzc2V0KGFzc2V0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBtYi00XCI+XG4gICAgICB7YXNzZXRzLm1hcCgoYXNzZXQpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Fzc2V0LmlkfSBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG1iLTRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj57YXNzZXQubmFtZX08L2gyPlxuICAgICAgICAgIDxwPlR5cGU6IHthc3NldC50eXBlfTwvcD5cbiAgICAgICAgICB7YXNzZXQuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwibWItMlwiPkRlc2NyaXB0aW9uOiB7YXNzZXQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICA8TGluayBocmVmPXtgL2Fzc2V0LyR7YXNzZXQuaWR9YH0gcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+VmlldyBEZXRhaWxzIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlVXBkYXRlRm9ybShhc3NldCl9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmVkLTUwMCB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGFzc2V0LmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAge2Fzc2V0LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICB7LyogUmVjdXJzaXZlbHkgcmVuZGVyIGNoaWxkcmVuICovfVxuICAgICAgICAgICAgICA8QXNzZXRUcmVlIGFzc2V0cz17YXNzZXQuY2hpbGRyZW59IG9uRGVsZXRlPXtvbkRlbGV0ZX0gb25VcGRhdGU9e29uVXBkYXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIHtpc1VwZGF0ZUZvcm1WaXNpYmxlICYmIHNlbGVjdGVkQXNzZXQgJiYgKFxuICAgICAgICA8QXNzZXRGb3JtIGluaXRpYWxBc3NldD17c2VsZWN0ZWRBc3NldH0gb25TdWJtaXQ9eyhpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiBoYW5kbGVVcGRhdGUoYXNzZXQuaWQsIHVwZGF0ZWRBc3NldCl9IG9uQ2FuY2VsPXsoKSA9PiBzZXRVcGRhdGVGb3JtVmlzaWJsZShmYWxzZSl9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRUcmVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQXNzZXRGb3JtIiwiQXNzZXRUcmVlIiwiYXNzZXRzIiwib25EZWxldGUiLCJvblVwZGF0ZSIsImlzVXBkYXRlRm9ybVZpc2libGUiLCJzZXRVcGRhdGVGb3JtVmlzaWJsZSIsInNlbGVjdGVkQXNzZXQiLCJzZXRTZWxlY3RlZEFzc2V0IiwiaGFuZGxlVXBkYXRlIiwiaWQiLCJ1cGRhdGVkQXNzZXQiLCJoYW5kbGVEZWxldGUiLCJ0b2dnbGVVcGRhdGVGb3JtIiwiYXNzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJoMiIsIm5hbWUiLCJwIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiaHJlZiIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnV0dG9uIiwib25DbGljayIsImNoaWxkcmVuIiwiaW5pdGlhbEFzc2V0Iiwib25TdWJtaXQiLCJvbkNhbmNlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetTree.tsx\n"));

/***/ })

});