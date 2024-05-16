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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetTree = (param)=>{\n    let { assets, onDelete, onUpdate } = param;\n    _s();\n    const [isUpdateFormVisible, setUpdateFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAsset, setSelectedAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUpdate = (updatedAsset)=>{\n        if (selectedAsset) {\n            onUpdate(updatedAsset.id, updatedAsset);\n            setUpdateFormVisible(false); // Close the update form after submitting\n        }\n    };\n    const handleDelete = (id)=>{\n        onDelete(id);\n    };\n    const toggleUpdateForm = (asset)=>{\n        setUpdateFormVisible(!isUpdateFormVisible);\n        setSelectedAsset(asset);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md mb-4\",\n        children: assets.map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-gray-300 rounded-md mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold mb-2\",\n                        children: asset.name\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Type: \",\n                            asset.type\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    asset.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Description: \",\n                            asset.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 33\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/asset/\".concat(asset.id),\n                        passHref: true,\n                        legacyBehavior: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-blue-500\",\n                            children: \"View Details \"\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm\",\n                        onClick: ()=>toggleUpdateForm(asset),\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm\",\n                        onClick: ()=>handleDelete(asset.id),\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    asset.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetTree, {\n                            assets: asset.children,\n                            onDelete: onDelete,\n                            onUpdate: onUpdate\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    isUpdateFormVisible && selectedAsset && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        initialAsset: selectedAsset,\n                        onSubmit: (updatedAsset)=>handleUpdate(updatedAsset),\n                        onCancel: ()=>setUpdateFormVisible(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, asset.id, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetTree, \"g9hGepFVk9oRv7MXBtkQXE6jZEo=\");\n_c = AssetTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetTree);\nvar _c;\n$RefreshReg$(_c, \"AssetTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUVPO0FBUXBDLE1BQU1JLFlBQXNDO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDekUsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBZTtJQUVqRSxNQUFNVyxlQUFlLENBQUNDO1FBQ3BCLElBQUlILGVBQWU7WUFDakJILFNBQVNNLGFBQWFDLEVBQUUsRUFBRUQ7WUFDMUJKLHFCQUFxQixRQUFRLHlDQUF5QztRQUN4RTtJQUNGO0lBRUEsTUFBTU0sZUFBZSxDQUFDRDtRQUNwQlIsU0FBU1E7SUFDWDtJQUVBLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4QlIscUJBQXFCLENBQUNEO1FBQ3RCRyxpQkFBaUJNO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pkLE9BQU9lLEdBQUcsQ0FBQyxDQUFDSCxzQkFDWCw4REFBQ0M7Z0JBQW1CQyxXQUFVOztrQ0FDNUIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUE4QkYsTUFBTUssSUFBSTs7Ozs7O2tDQUN0RCw4REFBQ0M7OzRCQUFFOzRCQUFPTixNQUFNTyxJQUFJOzs7Ozs7O29CQUNuQlAsTUFBTVEsV0FBVyxrQkFBSSw4REFBQ0Y7d0JBQUVKLFdBQVU7OzRCQUFPOzRCQUFjRixNQUFNUSxXQUFXOzs7Ozs7O2tDQUN6RSw4REFBQ3ZCLGlEQUFJQTt3QkFBQ3dCLE1BQU0sVUFBbUIsT0FBVFQsTUFBTUgsRUFBRTt3QkFBSWEsUUFBUTt3QkFBQ0MsY0FBYztrQ0FDdkQsNEVBQUNDOzRCQUFFVixXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7a0NBRS9CLDhEQUFDVzt3QkFBT1gsV0FBVTt3QkFBK0VZLFNBQVMsSUFBTWYsaUJBQWlCQztrQ0FBUTs7Ozs7O2tDQUN6SSw4REFBQ2E7d0JBQU9YLFdBQVU7d0JBQW9JWSxTQUFTLElBQU1oQixhQUFhRSxNQUFNSCxFQUFFO2tDQUFHOzs7Ozs7b0JBQzVMRyxNQUFNZSxRQUFRLGtCQUNiLDhEQUFDZDt3QkFBSUMsV0FBVTtrQ0FFYiw0RUFBQ2Y7NEJBQVVDLFFBQVFZLE1BQU1lLFFBQVE7NEJBQUUxQixVQUFVQTs0QkFBVUMsVUFBVUE7Ozs7Ozs7Ozs7O29CQUduRUMsdUJBQXVCRSwrQkFDM0IsOERBQUNQLGtEQUFTQTt3QkFBQzhCLGNBQWN2Qjt3QkFBZXdCLFVBQVUsQ0FBQ3JCLGVBQXdCRCxhQUFhQzt3QkFBZXNCLFVBQVUsSUFBTTFCLHFCQUFxQjs7Ozs7OztlQWhCbElRLE1BQU1ILEVBQUU7Ozs7Ozs7Ozs7QUF1QjFCO0dBOUNNVjtLQUFBQTtBQWdETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldFRyZWUudHN4P2EyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEFzc2V0Rm9ybSBmcm9tIFwiLi9Bc3NldEZvcm1cIjtcblxuaW50ZXJmYWNlIEFzc2V0VHJlZVByb3BzIHtcbiAgYXNzZXRzOiBBc3NldFtdO1xuICBvbkRlbGV0ZTogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uVXBkYXRlOiAoaWQ6IG51bWJlciwgdXBkYXRlZEFzc2V0OiBBc3NldCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQXNzZXRUcmVlOiBSZWFjdC5GQzxBc3NldFRyZWVQcm9wcz4gPSAoeyBhc3NldHMsIG9uRGVsZXRlLCBvblVwZGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFtpc1VwZGF0ZUZvcm1WaXNpYmxlLCBzZXRVcGRhdGVGb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFzc2V0LCBzZXRTZWxlY3RlZEFzc2V0XSA9IHVzZVN0YXRlPEFzc2V0IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gKHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRBc3NldCkge1xuICAgICAgb25VcGRhdGUodXBkYXRlZEFzc2V0LmlkLCB1cGRhdGVkQXNzZXQpO1xuICAgICAgc2V0VXBkYXRlRm9ybVZpc2libGUoZmFsc2UpOyAvLyBDbG9zZSB0aGUgdXBkYXRlIGZvcm0gYWZ0ZXIgc3VibWl0dGluZ1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIG9uRGVsZXRlKGlkKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVVcGRhdGVGb3JtID0gKGFzc2V0OiBBc3NldCkgPT4ge1xuICAgIHNldFVwZGF0ZUZvcm1WaXNpYmxlKCFpc1VwZGF0ZUZvcm1WaXNpYmxlKTtcbiAgICBzZXRTZWxlY3RlZEFzc2V0KGFzc2V0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBtYi00XCI+XG4gICAgICB7YXNzZXRzLm1hcCgoYXNzZXQpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Fzc2V0LmlkfSBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG1iLTRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj57YXNzZXQubmFtZX08L2gyPlxuICAgICAgICAgIDxwPlR5cGU6IHthc3NldC50eXBlfTwvcD5cbiAgICAgICAgICB7YXNzZXQuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwibWItMlwiPkRlc2NyaXB0aW9uOiB7YXNzZXQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICA8TGluayBocmVmPXtgL2Fzc2V0LyR7YXNzZXQuaWR9YH0gcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+VmlldyBEZXRhaWxzIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlVXBkYXRlRm9ybShhc3NldCl9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmVkLTUwMCB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGFzc2V0LmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAge2Fzc2V0LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICB7LyogUmVjdXJzaXZlbHkgcmVuZGVyIGNoaWxkcmVuICovfVxuICAgICAgICAgICAgICA8QXNzZXRUcmVlIGFzc2V0cz17YXNzZXQuY2hpbGRyZW59IG9uRGVsZXRlPXtvbkRlbGV0ZX0gb25VcGRhdGU9e29uVXBkYXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICAge2lzVXBkYXRlRm9ybVZpc2libGUgJiYgc2VsZWN0ZWRBc3NldCAmJiAoXG4gICAgICAgIDxBc3NldEZvcm0gaW5pdGlhbEFzc2V0PXtzZWxlY3RlZEFzc2V0fSBvblN1Ym1pdD17KHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IGhhbmRsZVVwZGF0ZSh1cGRhdGVkQXNzZXQpfSBvbkNhbmNlbD17KCkgPT4gc2V0VXBkYXRlRm9ybVZpc2libGUoZmFsc2UpfSAvPlxuICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFRyZWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJBc3NldEZvcm0iLCJBc3NldFRyZWUiLCJhc3NldHMiLCJvbkRlbGV0ZSIsIm9uVXBkYXRlIiwiaXNVcGRhdGVGb3JtVmlzaWJsZSIsInNldFVwZGF0ZUZvcm1WaXNpYmxlIiwic2VsZWN0ZWRBc3NldCIsInNldFNlbGVjdGVkQXNzZXQiLCJoYW5kbGVVcGRhdGUiLCJ1cGRhdGVkQXNzZXQiLCJpZCIsImhhbmRsZURlbGV0ZSIsInRvZ2dsZVVwZGF0ZUZvcm0iLCJhc3NldCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImgyIiwibmFtZSIsInAiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJidXR0b24iLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJpbml0aWFsQXNzZXQiLCJvblN1Ym1pdCIsIm9uQ2FuY2VsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetTree.tsx\n"));

/***/ })

});