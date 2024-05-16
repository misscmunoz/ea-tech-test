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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetTree = (param)=>{\n    let { assets, onDelete, onUpdate } = param;\n    _s();\n    const [isUpdateFormVisible, setUpdateFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAsset, setSelectedAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUpdate = (updatedAsset)=>{\n        if (selectedAsset) {\n            onUpdate(updatedAsset.id, updatedAsset);\n            setUpdateFormVisible(false); // Close the update form after submitting\n        }\n    };\n    const handleDelete = (id)=>{\n        onDelete(id);\n    };\n    const toggleUpdateForm = (asset)=>{\n        setUpdateFormVisible(!isUpdateFormVisible);\n        setSelectedAsset(asset);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 border border-gray-300 rounded-md mb-4\",\n        children: assets.map((asset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-gray-300 rounded-md mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold mb-2\",\n                        children: asset.name\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Type: \",\n                            asset.type\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    asset.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Description: \",\n                            asset.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 33\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/asset/\".concat(asset.id),\n                        passHref: true,\n                        legacyBehavior: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-blue-500\",\n                            children: \"View Details \"\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm\",\n                        onClick: ()=>toggleUpdateForm(asset),\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm\",\n                        onClick: ()=>handleDelete(asset.id),\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    asset.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetTree, {\n                            assets: asset.children,\n                            onDelete: onDelete,\n                            onUpdate: onUpdate\n                        }, void 0, false, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    isUpdateFormVisible && selectedAsset && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        initialAsset: selectedAsset,\n                        onCancel: ()=>setUpdateFormVisible(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, asset.id, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetTree.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetTree, \"g9hGepFVk9oRv7MXBtkQXE6jZEo=\");\n_c = AssetTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetTree);\nvar _c;\n$RefreshReg$(_c, \"AssetTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUVPO0FBUXBDLE1BQU1JLFlBQXNDO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDekUsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBZTtJQUVqRSxNQUFNVyxlQUFlLENBQUNDO1FBQ3BCLElBQUlILGVBQWU7WUFDakJILFNBQVNNLGFBQWFDLEVBQUUsRUFBRUQ7WUFDMUJKLHFCQUFxQixRQUFRLHlDQUF5QztRQUN4RTtJQUNGO0lBRUEsTUFBTU0sZUFBZSxDQUFDRDtRQUNwQlIsU0FBU1E7SUFDWDtJQUVBLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4QlIscUJBQXFCLENBQUNEO1FBQ3RCRyxpQkFBaUJNO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pkLE9BQU9lLEdBQUcsQ0FBQyxDQUFDSCxzQkFDWCw4REFBQ0M7Z0JBQW1CQyxXQUFVOztrQ0FDNUIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUE4QkYsTUFBTUssSUFBSTs7Ozs7O2tDQUN0RCw4REFBQ0M7OzRCQUFFOzRCQUFPTixNQUFNTyxJQUFJOzs7Ozs7O29CQUNuQlAsTUFBTVEsV0FBVyxrQkFBSSw4REFBQ0Y7d0JBQUVKLFdBQVU7OzRCQUFPOzRCQUFjRixNQUFNUSxXQUFXOzs7Ozs7O2tDQUN6RSw4REFBQ3ZCLGlEQUFJQTt3QkFBQ3dCLE1BQU0sVUFBbUIsT0FBVFQsTUFBTUgsRUFBRTt3QkFBSWEsUUFBUTt3QkFBQ0MsY0FBYztrQ0FDdkQsNEVBQUNDOzRCQUFFVixXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7a0NBRS9CLDhEQUFDVzt3QkFBT1gsV0FBVTt3QkFBK0VZLFNBQVMsSUFBTWYsaUJBQWlCQztrQ0FBUTs7Ozs7O2tDQUN6SSw4REFBQ2E7d0JBQU9YLFdBQVU7d0JBQW9JWSxTQUFTLElBQU1oQixhQUFhRSxNQUFNSCxFQUFFO2tDQUFHOzs7Ozs7b0JBQzVMRyxNQUFNZSxRQUFRLGtCQUNiLDhEQUFDZDt3QkFBSUMsV0FBVTtrQ0FFYiw0RUFBQ2Y7NEJBQVVDLFFBQVFZLE1BQU1lLFFBQVE7NEJBQUUxQixVQUFVQTs0QkFBVUMsVUFBVUE7Ozs7Ozs7Ozs7O29CQUduRUMsdUJBQXVCRSwrQkFDM0IsOERBQUNQLGtEQUFTQTt3QkFBQzhCLGNBQWN2Qjt3QkFBZ0J3QixVQUFVLElBQU16QixxQkFBcUI7Ozs7Ozs7ZUFoQnBFUSxNQUFNSCxFQUFFOzs7Ozs7Ozs7O0FBdUIxQjtHQTlDTVY7S0FBQUE7QUFnRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXNzZXRUcmVlLnRzeD9hMjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBBc3NldEZvcm0gZnJvbSBcIi4vQXNzZXRGb3JtXCI7XG5cbmludGVyZmFjZSBBc3NldFRyZWVQcm9wcyB7XG4gIGFzc2V0czogQXNzZXRbXTtcbiAgb25EZWxldGU6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICBvblVwZGF0ZTogKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFzc2V0VHJlZTogUmVhY3QuRkM8QXNzZXRUcmVlUHJvcHM+ID0gKHsgYXNzZXRzLCBvbkRlbGV0ZSwgb25VcGRhdGUgfSkgPT4ge1xuICBjb25zdCBbaXNVcGRhdGVGb3JtVmlzaWJsZSwgc2V0VXBkYXRlRm9ybVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRBc3NldCwgc2V0U2VsZWN0ZWRBc3NldF0gPSB1c2VTdGF0ZTxBc3NldCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICh1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQXNzZXQpIHtcbiAgICAgIG9uVXBkYXRlKHVwZGF0ZWRBc3NldC5pZCwgdXBkYXRlZEFzc2V0KTtcbiAgICAgIHNldFVwZGF0ZUZvcm1WaXNpYmxlKGZhbHNlKTsgLy8gQ2xvc2UgdGhlIHVwZGF0ZSBmb3JtIGFmdGVyIHN1Ym1pdHRpbmdcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBvbkRlbGV0ZShpZCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVXBkYXRlRm9ybSA9IChhc3NldDogQXNzZXQpID0+IHtcbiAgICBzZXRVcGRhdGVGb3JtVmlzaWJsZSghaXNVcGRhdGVGb3JtVmlzaWJsZSk7XG4gICAgc2V0U2VsZWN0ZWRBc3NldChhc3NldCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbWItNFwiPlxuICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXthc3NldC5pZH0gY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBtYi00XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+e2Fzc2V0Lm5hbWV9PC9oMj5cbiAgICAgICAgICA8cD5UeXBlOiB7YXNzZXQudHlwZX08L3A+XG4gICAgICAgICAge2Fzc2V0LmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5EZXNjcmlwdGlvbjoge2Fzc2V0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9hc3NldC8ke2Fzc2V0LmlkfWB9IHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlZpZXcgRGV0YWlscyA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgdGV4dC1zbVwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVVwZGF0ZUZvcm0oYXNzZXQpfT5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJlZC01MDAgdGV4dC1zbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShhc3NldC5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIHthc3NldC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTRcIj5cbiAgICAgICAgICAgICAgey8qIFJlY3Vyc2l2ZWx5IHJlbmRlciBjaGlsZHJlbiAqL31cbiAgICAgICAgICAgICAgPEFzc2V0VHJlZSBhc3NldHM9e2Fzc2V0LmNoaWxkcmVufSBvbkRlbGV0ZT17b25EZWxldGV9IG9uVXBkYXRlPXtvblVwZGF0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgIHtpc1VwZGF0ZUZvcm1WaXNpYmxlICYmIHNlbGVjdGVkQXNzZXQgJiYgKFxuICAgICAgICA8QXNzZXRGb3JtIGluaXRpYWxBc3NldD17c2VsZWN0ZWRBc3NldH0gIG9uQ2FuY2VsPXsoKSA9PiBzZXRVcGRhdGVGb3JtVmlzaWJsZShmYWxzZSl9IC8+XG4gICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0VHJlZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkFzc2V0Rm9ybSIsIkFzc2V0VHJlZSIsImFzc2V0cyIsIm9uRGVsZXRlIiwib25VcGRhdGUiLCJpc1VwZGF0ZUZvcm1WaXNpYmxlIiwic2V0VXBkYXRlRm9ybVZpc2libGUiLCJzZWxlY3RlZEFzc2V0Iiwic2V0U2VsZWN0ZWRBc3NldCIsImhhbmRsZVVwZGF0ZSIsInVwZGF0ZWRBc3NldCIsImlkIiwiaGFuZGxlRGVsZXRlIiwidG9nZ2xlVXBkYXRlRm9ybSIsImFzc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaDIiLCJuYW1lIiwicCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImhyZWYiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImluaXRpYWxBc3NldCIsIm9uQ2FuY2VsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetTree.tsx\n"));

/***/ })

});