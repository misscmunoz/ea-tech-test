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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _components_AssetTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n/* harmony import */ var _components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AssetFilter */ \"(app-pages-browser)/./src/components/AssetFilter.tsx\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define a recursive filtering function\nconst filterAssetsByType = (assets, targetType)=>{\n    return assets.reduce((filtered, asset)=>{\n        // Check if the asset's type matches the target type\n        if (asset.type === targetType) {\n            // Add the asset to the filtered array\n            filtered.push(asset);\n        }\n        // Recursively filter children assets\n        if (asset.children) {\n            const filteredChildren = filterAssetsByType(asset.children, targetType);\n            // Concatenate the filtered children with the current filtered array\n            filtered.push(...filteredChildren);\n        }\n        return filtered;\n    }, []);\n};\nconst AssetMain = ()=>{\n    _s();\n    const { assets: contextAssets, onUpdateAsset } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    const [filteredAssets, setFilteredAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(assets);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFilteredAssets(assets);\n    }, [\n        assets\n    ]);\n    const handleFilter = (type, isMonitored)=>{\n        let filteredAssetsCopy = [\n            ...assets\n        ];\n        // Filter by type\n        if (type) {\n            filteredAssetsCopy = filterAssetsByType(filteredAssetsCopy, type);\n        }\n        // Filter by isMonitored\n        if (isMonitored) {\n            filteredAssetsCopy = filteredAssetsCopy.filter((asset)=>{\n                var _asset_attributes;\n                console.log(asset);\n                const isMonitoredAttribute = (_asset_attributes = asset.attributes) === null || _asset_attributes === void 0 ? void 0 : _asset_attributes.find((attr)=>attr.key === \"isMonitored\");\n                return (isMonitoredAttribute === null || isMonitoredAttribute === void 0 ? void 0 : isMonitoredAttribute.value) === true;\n            });\n        }\n        setFilteredAssets(filteredAssetsCopy);\n    };\n    //   const handleUpdate = (id: number, updatedAsset: Asset) => {\n    //     const updateAssetRecursive = (assets: Asset[]): Asset[] => {\n    //       return assets.map(asset => {\n    //         if (asset.id === id) {\n    //           // Replace the old asset with the updated one\n    //           return updatedAsset;\n    //         }\n    //         // Recursively update children assets\n    //         if (asset.children) {\n    //           return {\n    //             ...asset,\n    //             children: updateAssetRecursive(asset.children)\n    //           };\n    //         }\n    //         return asset;\n    //       });\n    //     };\n    //     const updatedAssets: Asset[] = filteredAssets.map(asset => {\n    //       if (asset.id === id) {\n    //         return updatedAsset; // Replace the old asset with the updated one\n    //       }\n    //       // Recursively update children assets\n    //       if (asset.children) {\n    //         return {\n    //           ...asset,\n    //           children: updateAssetRecursive(asset.children)\n    //         };\n    //       }\n    //       return asset;\n    //     });\n    //     setFilteredAssets(updatedAssets);\n    //   };  \n    // const handleDelete = (id: number) => {\n    //     const deleteAssetAndChildren = (assets: Asset[]): Asset[] => {\n    //       return assets.reduce((acc, asset) => {\n    //         if (asset.id === id) {\n    //           // If the current asset matches the ID, skip it and its children\n    //           return acc;\n    //         }\n    //         if (asset.children) {\n    //           // Recursively delete children\n    //           asset.children = deleteAssetAndChildren(asset.children);\n    //         }\n    //         // Keep the current asset\n    //         acc.push(asset);\n    //         return acc;\n    //       }, [] as Asset[]);\n    //     };\n    //     // Filter out the asset and its children\n    //     const updatedAssets: Asset[] = deleteAssetAndChildren(filteredAssets);\n    //     setFilteredAssets(updatedAssets);\n    //   };  \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onFilter: handleFilter\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetTree__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                assets: filteredAssets\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetMain, \"FUj4fLqfJ4823uu+j1e5VgBe9Y4=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext\n    ];\n});\n_c = AssetMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetMain);\nvar _c;\n$RefreshReg$(_c, \"AssetMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0TWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDRjtBQUNIO0FBQ0k7QUFDTTtBQUV0QjtBQUVwQyx3Q0FBd0M7QUFDeEMsTUFBTVEscUJBQXFCLENBQUNDLFFBQWlCQztJQUN6QyxPQUFPRCxPQUFPRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVUM7UUFDOUIsb0RBQW9EO1FBQ3BELElBQUlBLE1BQU1DLElBQUksS0FBS0osWUFBWTtZQUM3QixzQ0FBc0M7WUFDdENFLFNBQVNHLElBQUksQ0FBQ0Y7UUFDaEI7UUFFQSxxQ0FBcUM7UUFDckMsSUFBSUEsTUFBTUcsUUFBUSxFQUFFO1lBQ2xCLE1BQU1DLG1CQUFtQlQsbUJBQW1CSyxNQUFNRyxRQUFRLEVBQUVOO1lBQzVELG9FQUFvRTtZQUNwRUUsU0FBU0csSUFBSSxJQUFJRTtRQUNuQjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxFQUFFO0FBQ1Q7QUFFQSxNQUFNTSxZQUFZOztJQUNoQixNQUFNLEVBQUVULFFBQVFVLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQUdkLHNFQUFlQTtJQUNoRSxNQUFNLENBQUNHLFFBQVFZLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFVLEVBQUU7SUFFaERDLGdEQUFTQSxDQUFDO1FBQ1IsdURBQXVEO1FBQ3ZEbUIsVUFBVTtlQUFJbEIsMkRBQWNBO2VBQUtnQjtTQUFjO0lBQ2pELEdBQUc7UUFBQ0E7S0FBYztJQUVsQixNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUd0QiwrQ0FBUUEsQ0FBVVE7SUFFOURQLGdEQUFTQSxDQUFDO1FBQ1JxQixrQkFBa0JkO0lBQ3BCLEdBQUc7UUFBQ0E7S0FBTztJQUdYLE1BQU1lLGVBQWUsQ0FBQ1YsTUFBY1c7UUFDbEMsSUFBSUMscUJBQXFCO2VBQUlqQjtTQUFPO1FBRXBDLGlCQUFpQjtRQUNqQixJQUFJSyxNQUFNO1lBQ1JZLHFCQUFxQmxCLG1CQUFtQmtCLG9CQUFvQlo7UUFDOUQ7UUFFQSx3QkFBd0I7UUFDeEIsSUFBSVcsYUFBYTtZQUNmQyxxQkFBcUJBLG1CQUFtQkMsTUFBTSxDQUFDZCxDQUFBQTtvQkFFaEJBO2dCQUQ3QmUsUUFBUUMsR0FBRyxDQUFDaEI7Z0JBQ1osTUFBTWlCLHdCQUF1QmpCLG9CQUFBQSxNQUFNa0IsVUFBVSxjQUFoQmxCLHdDQUFBQSxrQkFBa0JtQixJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEdBQUcsS0FBSztnQkFDekUsT0FBT0osQ0FBQUEsaUNBQUFBLDJDQUFBQSxxQkFBc0JLLEtBQUssTUFBSztZQUN6QztRQUNGO1FBRUFaLGtCQUFrQkc7SUFDcEI7SUFHRixnRUFBZ0U7SUFDaEUsbUVBQW1FO0lBQ25FLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsMERBQTBEO0lBQzFELGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDZEQUE2RDtJQUM3RCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osU0FBUztJQUVULG1FQUFtRTtJQUNuRSwrQkFBK0I7SUFDL0IsNkVBQTZFO0lBQzdFLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMkRBQTJEO0lBQzNELGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFFVix3Q0FBd0M7SUFDeEMsU0FBUztJQUVULHlDQUF5QztJQUN6QyxxRUFBcUU7SUFDckUsK0NBQStDO0lBQy9DLGlDQUFpQztJQUNqQyw2RUFBNkU7SUFDN0Usd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMkNBQTJDO0lBQzNDLHFFQUFxRTtJQUNyRSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFFVCwrQ0FBK0M7SUFDL0MsNkVBQTZFO0lBRTdFLHdDQUF3QztJQUN4QyxTQUFTO0lBRVAscUJBQ0UsOERBQUNVOzswQkFDRyw4REFBQzdCLGtEQUFTQTs7Ozs7MEJBQ1YsOERBQUNGLCtEQUFXQTtnQkFBQ2dDLFVBQVViOzs7Ozs7MEJBQ3ZCLDhEQUFDcEIsNkRBQVNBO2dCQUFDSyxRQUFRYTs7Ozs7Ozs7Ozs7O0FBRzNCO0dBdEdNSjs7UUFDNkNaLGtFQUFlQTs7O0tBRDVEWTtBQXdHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldE1haW4udHN4PzdkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NldHNNb2NrRGF0YSB9IGZyb20gXCIuLi9kYXRhL0Fzc2V0RGF0YVwiO1xuaW1wb3J0IEFzc2V0VHJlZSBmcm9tICcuLi9jb21wb25lbnRzL0Fzc2V0VHJlZSc7XG5pbXBvcnQgQXNzZXRGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXNzZXRGaWx0ZXJcIjtcbmltcG9ydCB7IHVzZUFzc2V0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXNzZXRDb250ZXh0JztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgQXNzZXRGb3JtIGZyb20gJy4vQXNzZXRGb3JtJztcblxuLy8gRGVmaW5lIGEgcmVjdXJzaXZlIGZpbHRlcmluZyBmdW5jdGlvblxuY29uc3QgZmlsdGVyQXNzZXRzQnlUeXBlID0gKGFzc2V0czogQXNzZXRbXSwgdGFyZ2V0VHlwZTogc3RyaW5nKTogQXNzZXRbXSA9PiB7XG4gICAgcmV0dXJuIGFzc2V0cy5yZWR1Y2UoKGZpbHRlcmVkLCBhc3NldCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGFzc2V0J3MgdHlwZSBtYXRjaGVzIHRoZSB0YXJnZXQgdHlwZVxuICAgICAgaWYgKGFzc2V0LnR5cGUgPT09IHRhcmdldFR5cGUpIHtcbiAgICAgICAgLy8gQWRkIHRoZSBhc3NldCB0byB0aGUgZmlsdGVyZWQgYXJyYXlcbiAgICAgICAgZmlsdGVyZWQucHVzaChhc3NldCk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gUmVjdXJzaXZlbHkgZmlsdGVyIGNoaWxkcmVuIGFzc2V0c1xuICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW4gPSBmaWx0ZXJBc3NldHNCeVR5cGUoYXNzZXQuY2hpbGRyZW4sIHRhcmdldFR5cGUpO1xuICAgICAgICAvLyBDb25jYXRlbmF0ZSB0aGUgZmlsdGVyZWQgY2hpbGRyZW4gd2l0aCB0aGUgY3VycmVudCBmaWx0ZXJlZCBhcnJheVxuICAgICAgICBmaWx0ZXJlZC5wdXNoKC4uLmZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9LCBbXSBhcyBBc3NldFtdKTtcbn07XG5cbmNvbnN0IEFzc2V0TWFpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBhc3NldHM6IGNvbnRleHRBc3NldHMsIG9uVXBkYXRlQXNzZXQgfSA9IHVzZUFzc2V0Q29udGV4dCgpO1xuICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGU8QXNzZXRbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gTWVyZ2UgYXNzZXRzIGZyb20gY29udGV4dCB3aXRoIGFzc2V0cyBmcm9tIGRhdGEgZmlsZVxuICAgIHNldEFzc2V0cyhbLi4uQXNzZXRzTW9ja0RhdGEsIC4uLmNvbnRleHRBc3NldHNdKTtcbiAgfSwgW2NvbnRleHRBc3NldHNdKTtcblxuICBjb25zdCBbZmlsdGVyZWRBc3NldHMsIHNldEZpbHRlcmVkQXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KGFzc2V0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyhhc3NldHMpO1xuICB9LCBbYXNzZXRzXSk7XG5cblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAodHlwZTogc3RyaW5nLCBpc01vbml0b3JlZDogYm9vbGVhbikgPT4ge1xuICAgIGxldCBmaWx0ZXJlZEFzc2V0c0NvcHkgPSBbLi4uYXNzZXRzXTtcblxuICAgIC8vIEZpbHRlciBieSB0eXBlXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGZpbHRlcmVkQXNzZXRzQ29weSA9IGZpbHRlckFzc2V0c0J5VHlwZShmaWx0ZXJlZEFzc2V0c0NvcHksIHR5cGUpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlciBieSBpc01vbml0b3JlZFxuICAgIGlmIChpc01vbml0b3JlZCkge1xuICAgICAgZmlsdGVyZWRBc3NldHNDb3B5ID0gZmlsdGVyZWRBc3NldHNDb3B5LmZpbHRlcihhc3NldCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFzc2V0KTtcbiAgICAgICAgY29uc3QgaXNNb25pdG9yZWRBdHRyaWJ1dGUgPSBhc3NldC5hdHRyaWJ1dGVzPy5maW5kKGF0dHIgPT4gYXR0ci5rZXkgPT09ICdpc01vbml0b3JlZCcpO1xuICAgICAgICByZXR1cm4gaXNNb25pdG9yZWRBdHRyaWJ1dGU/LnZhbHVlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyZWRBc3NldHMoZmlsdGVyZWRBc3NldHNDb3B5KTtcbiAgfTtcblxuXG4vLyAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4vLyAgICAgY29uc3QgdXBkYXRlQXNzZXRSZWN1cnNpdmUgPSAoYXNzZXRzOiBBc3NldFtdKTogQXNzZXRbXSA9PiB7XG4vLyAgICAgICByZXR1cm4gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4vLyAgICAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbi8vICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBvbGQgYXNzZXQgd2l0aCB0aGUgdXBkYXRlZCBvbmVcbi8vICAgICAgICAgICByZXR1cm4gdXBkYXRlZEFzc2V0O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZHJlbiBhc3NldHNcbi8vICAgICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIC4uLmFzc2V0LFxuLy8gICAgICAgICAgICAgY2hpbGRyZW46IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKGFzc2V0LmNoaWxkcmVuKVxuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGFzc2V0O1xuLy8gICAgICAgfSk7XG4vLyAgICAgfTtcbiAgXG4vLyAgICAgY29uc3QgdXBkYXRlZEFzc2V0czogQXNzZXRbXSA9IGZpbHRlcmVkQXNzZXRzLm1hcChhc3NldCA9PiB7XG4vLyAgICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4vLyAgICAgICAgIHJldHVybiB1cGRhdGVkQXNzZXQ7IC8vIFJlcGxhY2UgdGhlIG9sZCBhc3NldCB3aXRoIHRoZSB1cGRhdGVkIG9uZVxuLy8gICAgICAgfVxuLy8gICAgICAgLy8gUmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkcmVuIGFzc2V0c1xuLy8gICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4vLyAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgLi4uYXNzZXQsXG4vLyAgICAgICAgICAgY2hpbGRyZW46IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKGFzc2V0LmNoaWxkcmVuKVxuLy8gICAgICAgICB9O1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIGFzc2V0O1xuLy8gICAgIH0pO1xuICBcbi8vICAgICBzZXRGaWx0ZXJlZEFzc2V0cyh1cGRhdGVkQXNzZXRzKTtcbi8vICAgfTsgIFxuXG4vLyBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuLy8gICAgIGNvbnN0IGRlbGV0ZUFzc2V0QW5kQ2hpbGRyZW4gPSAoYXNzZXRzOiBBc3NldFtdKTogQXNzZXRbXSA9PiB7XG4vLyAgICAgICByZXR1cm4gYXNzZXRzLnJlZHVjZSgoYWNjLCBhc3NldCkgPT4ge1xuLy8gICAgICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4vLyAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgYXNzZXQgbWF0Y2hlcyB0aGUgSUQsIHNraXAgaXQgYW5kIGl0cyBjaGlsZHJlblxuLy8gICAgICAgICAgIHJldHVybiBhY2M7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4vLyAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZGVsZXRlIGNoaWxkcmVuXG4vLyAgICAgICAgICAgYXNzZXQuY2hpbGRyZW4gPSBkZWxldGVBc3NldEFuZENoaWxkcmVuKGFzc2V0LmNoaWxkcmVuKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAvLyBLZWVwIHRoZSBjdXJyZW50IGFzc2V0XG4vLyAgICAgICAgIGFjYy5wdXNoKGFzc2V0KTtcbi8vICAgICAgICAgcmV0dXJuIGFjYztcbi8vICAgICAgIH0sIFtdIGFzIEFzc2V0W10pO1xuLy8gICAgIH07XG4gIFxuLy8gICAgIC8vIEZpbHRlciBvdXQgdGhlIGFzc2V0IGFuZCBpdHMgY2hpbGRyZW5cbi8vICAgICBjb25zdCB1cGRhdGVkQXNzZXRzOiBBc3NldFtdID0gZGVsZXRlQXNzZXRBbmRDaGlsZHJlbihmaWx0ZXJlZEFzc2V0cyk7XG4gIFxuLy8gICAgIHNldEZpbHRlcmVkQXNzZXRzKHVwZGF0ZWRBc3NldHMpO1xuLy8gICB9OyAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8QXNzZXRGb3JtIC8+XG4gICAgICAgIDxBc3NldEZpbHRlciBvbkZpbHRlcj17aGFuZGxlRmlsdGVyfSAvPlxuICAgICAgICA8QXNzZXRUcmVlIGFzc2V0cz17ZmlsdGVyZWRBc3NldHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFzc2V0c01vY2tEYXRhIiwiQXNzZXRUcmVlIiwiQXNzZXRGaWx0ZXIiLCJ1c2VBc3NldENvbnRleHQiLCJBc3NldEZvcm0iLCJmaWx0ZXJBc3NldHNCeVR5cGUiLCJhc3NldHMiLCJ0YXJnZXRUeXBlIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJhc3NldCIsInR5cGUiLCJwdXNoIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZENoaWxkcmVuIiwiQXNzZXRNYWluIiwiY29udGV4dEFzc2V0cyIsIm9uVXBkYXRlQXNzZXQiLCJzZXRBc3NldHMiLCJmaWx0ZXJlZEFzc2V0cyIsInNldEZpbHRlcmVkQXNzZXRzIiwiaGFuZGxlRmlsdGVyIiwiaXNNb25pdG9yZWQiLCJmaWx0ZXJlZEFzc2V0c0NvcHkiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNNb25pdG9yZWRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwiZmluZCIsImF0dHIiLCJrZXkiLCJ2YWx1ZSIsImRpdiIsIm9uRmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetMain.tsx\n"));

/***/ })

});