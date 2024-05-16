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

/***/ "(app-pages-browser)/./src/components/AssetMain.tsx":
/*!**************************************!*\
  !*** ./src/components/AssetMain.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _components_AssetTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n/* harmony import */ var _components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AssetFilter */ \"(app-pages-browser)/./src/components/AssetFilter.tsx\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define a recursive filtering function\nconst filterAssetsByType = (assets, targetType)=>{\n    return assets.reduce((filtered, asset)=>{\n        if (asset.type === targetType || asset.children && asset.children.some((child)=>child.type === targetType)) {\n            filtered.push(asset);\n        }\n        if (asset.children) {\n            filtered.push(...filterAssetsByType(asset.children, targetType));\n        }\n        return filtered;\n    }, []);\n};\nconst AssetMain = ()=>{\n    _s();\n    const { assets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext)();\n    const mergedAssets = [\n        ..._data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData,\n        ...assets\n    ];\n    const [filteredAssets, setFilteredAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mergedAssets);\n    const handleFilter = (type, isMonitored)=>{\n        let filteredAssetsCopy = [\n            ...mergedAssets\n        ];\n        // Filter by type\n        if (type) {\n            filteredAssetsCopy = filterAssetsByType(filteredAssetsCopy, type);\n        }\n        // Filter by isMonitored\n        if (isMonitored) {\n            filteredAssetsCopy = filteredAssetsCopy.filter((asset)=>{\n                var _asset_attributes;\n                const isMonitoredAttribute = (_asset_attributes = asset.attributes) === null || _asset_attributes === void 0 ? void 0 : _asset_attributes.find((attr)=>attr.key === \"isMonitored\");\n                return (isMonitoredAttribute === null || isMonitoredAttribute === void 0 ? void 0 : isMonitoredAttribute.value) === true;\n            });\n        }\n        setFilteredAssets(filteredAssetsCopy);\n    };\n    const updateAssetRecursive = (assets, id, updatedAsset)=>{\n        return assets.map((asset)=>{\n            if (asset.id === id) {\n                return updatedAsset || asset;\n            }\n            if (asset.children) {\n                return {\n                    ...asset,\n                    children: updateAssetRecursive(asset.children, id, updatedAsset)\n                };\n            }\n            return asset;\n        });\n    };\n    const handleUpdate = (id, updatedAsset)=>{\n        setFilteredAssets((prevAssets)=>updateAssetRecursive(prevAssets, id, updatedAsset));\n    };\n    const handleDelete = (id)=>{\n        setFilteredAssets((prevAssets)=>{\n            const updatedAssets = prevAssets.filter((asset)=>{\n                if (asset.id === id) {\n                    // If the current asset matches the ID, remove it\n                    return false;\n                }\n                if (asset.children) {\n                    // Recursively delete from children if they exist\n                    asset.children = deleteAssetFromChildren(asset.children, id);\n                }\n                return true;\n            });\n            return updatedAssets;\n        });\n    };\n    const deleteAssetFromChildren = (children, id)=>{\n        return children.filter((child)=>{\n            if (child.id === id) {\n                // If the child matches the ID, remove it\n                return false;\n            }\n            if (child.children) {\n                // Recursively delete from children if they exist\n                child.children = deleteAssetFromChildren(child.children, id);\n            }\n            return true;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onFilter: handleFilter\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetTree__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                assets: filteredAssets,\n                onUpdate: handleUpdate,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetMain, \"Tyi4yMRy7ud97xLw/Rz/Pc8aOWI=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext\n    ];\n});\n_c = AssetMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetMain);\nvar _c;\n$RefreshReg$(_c, \"AssetMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0TWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDVztBQUNIO0FBQ0k7QUFDTTtBQUV0QjtBQUVwQyx3Q0FBd0M7QUFDeEMsTUFBTU8scUJBQXFCLENBQUNDLFFBQWlCQztJQUMzQyxPQUFPRCxPQUFPRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVUM7UUFDOUIsSUFBSUEsTUFBTUMsSUFBSSxLQUFLSixjQUFlRyxNQUFNRSxRQUFRLElBQUlGLE1BQU1FLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNSCxJQUFJLEtBQUtKLGFBQWM7WUFDNUdFLFNBQVNNLElBQUksQ0FBQ0w7UUFDaEI7UUFDQSxJQUFJQSxNQUFNRSxRQUFRLEVBQUU7WUFDbEJILFNBQVNNLElBQUksSUFBSVYsbUJBQW1CSyxNQUFNRSxRQUFRLEVBQUVMO1FBQ3REO1FBQ0EsT0FBT0U7SUFDVCxHQUFHLEVBQUU7QUFDUDtBQUVBLE1BQU1PLFlBQXNCOztJQUMxQixNQUFNLEVBQUVWLE1BQU0sRUFBRSxHQUFHSCxzRUFBZUE7SUFDbEMsTUFBTWMsZUFBZTtXQUFJakIsMkRBQWNBO1dBQUtNO0tBQU87SUFDbkQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHcEIsK0NBQVFBLENBQVVrQjtJQUU5RCxNQUFNRyxlQUFlLENBQUNULE1BQWNVO1FBQ2xDLElBQUlDLHFCQUFxQjtlQUFJTDtTQUFhO1FBRTFDLGlCQUFpQjtRQUNqQixJQUFJTixNQUFNO1lBQ1JXLHFCQUFxQmpCLG1CQUFtQmlCLG9CQUFvQlg7UUFDOUQ7UUFFQSx3QkFBd0I7UUFDeEIsSUFBSVUsYUFBYTtZQUNmQyxxQkFBcUJBLG1CQUFtQkMsTUFBTSxDQUFDYixDQUFBQTtvQkFDaEJBO2dCQUE3QixNQUFNYyx3QkFBdUJkLG9CQUFBQSxNQUFNZSxVQUFVLGNBQWhCZix3Q0FBQUEsa0JBQWtCZ0IsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxHQUFHLEtBQUs7Z0JBQ3pFLE9BQU9KLENBQUFBLGlDQUFBQSwyQ0FBQUEscUJBQXNCSyxLQUFLLE1BQUs7WUFDekM7UUFDRjtRQUVBVixrQkFBa0JHO0lBQ3BCO0lBRUEsTUFBTVEsdUJBQXVCLENBQUN4QixRQUFpQnlCLElBQVlDO1FBQ3pELE9BQU8xQixPQUFPMkIsR0FBRyxDQUFDdkIsQ0FBQUE7WUFDaEIsSUFBSUEsTUFBTXFCLEVBQUUsS0FBS0EsSUFBSTtnQkFDbkIsT0FBT0MsZ0JBQWdCdEI7WUFDekI7WUFDQSxJQUFJQSxNQUFNRSxRQUFRLEVBQUU7Z0JBQ2xCLE9BQU87b0JBQ0wsR0FBR0YsS0FBSztvQkFDUkUsVUFBVWtCLHFCQUFxQnBCLE1BQU1FLFFBQVEsRUFBRW1CLElBQUlDO2dCQUNyRDtZQUNGO1lBQ0EsT0FBT3RCO1FBQ1Q7SUFDRjtJQUVBLE1BQU13QixlQUFlLENBQUNILElBQVlDO1FBQ2hDYixrQkFBa0JnQixDQUFBQSxhQUFjTCxxQkFBcUJLLFlBQVlKLElBQUlDO0lBQ3ZFO0lBRUEsTUFBTUksZUFBZSxDQUFDTDtRQUNwQlosa0JBQWtCZ0IsQ0FBQUE7WUFDaEIsTUFBTUUsZ0JBQXlCRixXQUFXWixNQUFNLENBQUNiLENBQUFBO2dCQUMvQyxJQUFJQSxNQUFNcUIsRUFBRSxLQUFLQSxJQUFJO29CQUNuQixpREFBaUQ7b0JBQ2pELE9BQU87Z0JBQ1Q7Z0JBQ0EsSUFBSXJCLE1BQU1FLFFBQVEsRUFBRTtvQkFDbEIsaURBQWlEO29CQUNqREYsTUFBTUUsUUFBUSxHQUFHMEIsd0JBQXdCNUIsTUFBTUUsUUFBUSxFQUFFbUI7Z0JBQzNEO2dCQUNBLE9BQU87WUFDVDtZQUNBLE9BQU9NO1FBQ1Q7SUFDRjtJQUVBLE1BQU1DLDBCQUEwQixDQUFDMUIsVUFBbUJtQjtRQUNsRCxPQUFPbkIsU0FBU1csTUFBTSxDQUFDVCxDQUFBQTtZQUNyQixJQUFJQSxNQUFNaUIsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQix5Q0FBeUM7Z0JBQ3pDLE9BQU87WUFDVDtZQUNBLElBQUlqQixNQUFNRixRQUFRLEVBQUU7Z0JBQ2xCLGlEQUFpRDtnQkFDakRFLE1BQU1GLFFBQVEsR0FBRzBCLHdCQUF3QnhCLE1BQU1GLFFBQVEsRUFBRW1CO1lBQzNEO1lBQ0EsT0FBTztRQUNUO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDbkMsa0RBQVNBOzs7OzswQkFDViw4REFBQ0YsK0RBQVdBO2dCQUFDc0MsVUFBVXBCOzs7Ozs7MEJBQ3ZCLDhEQUFDbkIsNkRBQVNBO2dCQUFDSyxRQUFRWTtnQkFBZ0J1QixVQUFVUDtnQkFBY1EsVUFBVU47Ozs7Ozs7Ozs7OztBQUczRTtHQWhGTXBCOztRQUNlYixrRUFBZUE7OztLQUQ5QmE7QUFrRk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXNzZXRNYWluLnRzeD83ZGEzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NldHNNb2NrRGF0YSB9IGZyb20gXCIuLi9kYXRhL0Fzc2V0RGF0YVwiO1xuaW1wb3J0IEFzc2V0VHJlZSBmcm9tICcuLi9jb21wb25lbnRzL0Fzc2V0VHJlZSc7XG5pbXBvcnQgQXNzZXRGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXNzZXRGaWx0ZXJcIjtcbmltcG9ydCB7IHVzZUFzc2V0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXNzZXRDb250ZXh0JztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgQXNzZXRGb3JtIGZyb20gJy4vQXNzZXRGb3JtJztcblxuLy8gRGVmaW5lIGEgcmVjdXJzaXZlIGZpbHRlcmluZyBmdW5jdGlvblxuY29uc3QgZmlsdGVyQXNzZXRzQnlUeXBlID0gKGFzc2V0czogQXNzZXRbXSwgdGFyZ2V0VHlwZTogc3RyaW5nKTogQXNzZXRbXSA9PiB7XG4gIHJldHVybiBhc3NldHMucmVkdWNlKChmaWx0ZXJlZCwgYXNzZXQpID0+IHtcbiAgICBpZiAoYXNzZXQudHlwZSA9PT0gdGFyZ2V0VHlwZSB8fCAoYXNzZXQuY2hpbGRyZW4gJiYgYXNzZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC50eXBlID09PSB0YXJnZXRUeXBlKSkpIHtcbiAgICAgIGZpbHRlcmVkLnB1c2goYXNzZXQpO1xuICAgIH1cbiAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgIGZpbHRlcmVkLnB1c2goLi4uZmlsdGVyQXNzZXRzQnlUeXBlKGFzc2V0LmNoaWxkcmVuLCB0YXJnZXRUeXBlKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfSwgW10gYXMgQXNzZXRbXSk7XG59O1xuXG5jb25zdCBBc3NldE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlQXNzZXRDb250ZXh0KCk7XG4gIGNvbnN0IG1lcmdlZEFzc2V0cyA9IFsuLi5Bc3NldHNNb2NrRGF0YSwgLi4uYXNzZXRzXVxuICBjb25zdCBbZmlsdGVyZWRBc3NldHMsIHNldEZpbHRlcmVkQXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KG1lcmdlZEFzc2V0cyk7XG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKHR5cGU6IHN0cmluZywgaXNNb25pdG9yZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBsZXQgZmlsdGVyZWRBc3NldHNDb3B5ID0gWy4uLm1lcmdlZEFzc2V0c107XG5cbiAgICAvLyBGaWx0ZXIgYnkgdHlwZVxuICAgIGlmICh0eXBlKSB7XG4gICAgICBmaWx0ZXJlZEFzc2V0c0NvcHkgPSBmaWx0ZXJBc3NldHNCeVR5cGUoZmlsdGVyZWRBc3NldHNDb3B5LCB0eXBlKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgYnkgaXNNb25pdG9yZWRcbiAgICBpZiAoaXNNb25pdG9yZWQpIHtcbiAgICAgIGZpbHRlcmVkQXNzZXRzQ29weSA9IGZpbHRlcmVkQXNzZXRzQ29weS5maWx0ZXIoYXNzZXQgPT4ge1xuICAgICAgICBjb25zdCBpc01vbml0b3JlZEF0dHJpYnV0ZSA9IGFzc2V0LmF0dHJpYnV0ZXM/LmZpbmQoYXR0ciA9PiBhdHRyLmtleSA9PT0gJ2lzTW9uaXRvcmVkJyk7XG4gICAgICAgIHJldHVybiBpc01vbml0b3JlZEF0dHJpYnV0ZT8udmFsdWUgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyhmaWx0ZXJlZEFzc2V0c0NvcHkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUFzc2V0UmVjdXJzaXZlID0gKGFzc2V0czogQXNzZXRbXSwgaWQ6IG51bWJlciwgdXBkYXRlZEFzc2V0PzogQXNzZXQpOiBBc3NldFtdID0+IHtcbiAgICByZXR1cm4gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkQXNzZXQgfHwgYXNzZXQ7XG4gICAgICB9XG4gICAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5hc3NldCxcbiAgICAgICAgICBjaGlsZHJlbjogdXBkYXRlQXNzZXRSZWN1cnNpdmUoYXNzZXQuY2hpbGRyZW4sIGlkLCB1cGRhdGVkQXNzZXQpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXQ7XG4gICAgfSk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoaWQ6IG51bWJlciwgdXBkYXRlZEFzc2V0OiBBc3NldCkgPT4ge1xuICAgIHNldEZpbHRlcmVkQXNzZXRzKHByZXZBc3NldHMgPT4gdXBkYXRlQXNzZXRSZWN1cnNpdmUocHJldkFzc2V0cywgaWQsIHVwZGF0ZWRBc3NldCkpO1xuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyhwcmV2QXNzZXRzID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRBc3NldHM6IEFzc2V0W10gPSBwcmV2QXNzZXRzLmZpbHRlcihhc3NldCA9PiB7XG4gICAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBhc3NldCBtYXRjaGVzIHRoZSBJRCwgcmVtb3ZlIGl0XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGRlbGV0ZSBmcm9tIGNoaWxkcmVuIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgICBhc3NldC5jaGlsZHJlbiA9IGRlbGV0ZUFzc2V0RnJvbUNoaWxkcmVuKGFzc2V0LmNoaWxkcmVuLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1cGRhdGVkQXNzZXRzO1xuICAgIH0pO1xuICB9O1xuICBcbiAgY29uc3QgZGVsZXRlQXNzZXRGcm9tQ2hpbGRyZW4gPSAoY2hpbGRyZW46IEFzc2V0W10sIGlkOiBudW1iZXIpOiBBc3NldFtdID0+IHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIG1hdGNoZXMgdGhlIElELCByZW1vdmUgaXRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGRlbGV0ZSBmcm9tIGNoaWxkcmVuIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgY2hpbGQuY2hpbGRyZW4gPSBkZWxldGVBc3NldEZyb21DaGlsZHJlbihjaGlsZC5jaGlsZHJlbiwgaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBc3NldEZvcm0gLz5cbiAgICAgIDxBc3NldEZpbHRlciBvbkZpbHRlcj17aGFuZGxlRmlsdGVyfSAvPlxuICAgICAgPEFzc2V0VHJlZSBhc3NldHM9e2ZpbHRlcmVkQXNzZXRzfSBvblVwZGF0ZT17aGFuZGxlVXBkYXRlfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRNYWluOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXNzZXRzTW9ja0RhdGEiLCJBc3NldFRyZWUiLCJBc3NldEZpbHRlciIsInVzZUFzc2V0Q29udGV4dCIsIkFzc2V0Rm9ybSIsImZpbHRlckFzc2V0c0J5VHlwZSIsImFzc2V0cyIsInRhcmdldFR5cGUiLCJyZWR1Y2UiLCJmaWx0ZXJlZCIsImFzc2V0IiwidHlwZSIsImNoaWxkcmVuIiwic29tZSIsImNoaWxkIiwicHVzaCIsIkFzc2V0TWFpbiIsIm1lcmdlZEFzc2V0cyIsImZpbHRlcmVkQXNzZXRzIiwic2V0RmlsdGVyZWRBc3NldHMiLCJoYW5kbGVGaWx0ZXIiLCJpc01vbml0b3JlZCIsImZpbHRlcmVkQXNzZXRzQ29weSIsImZpbHRlciIsImlzTW9uaXRvcmVkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImZpbmQiLCJhdHRyIiwia2V5IiwidmFsdWUiLCJ1cGRhdGVBc3NldFJlY3Vyc2l2ZSIsImlkIiwidXBkYXRlZEFzc2V0IiwibWFwIiwiaGFuZGxlVXBkYXRlIiwicHJldkFzc2V0cyIsImhhbmRsZURlbGV0ZSIsInVwZGF0ZWRBc3NldHMiLCJkZWxldGVBc3NldEZyb21DaGlsZHJlbiIsImRpdiIsIm9uRmlsdGVyIiwib25VcGRhdGUiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetMain.tsx\n"));

/***/ })

});