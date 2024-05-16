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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _components_AssetTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n/* harmony import */ var _components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AssetFilter */ \"(app-pages-browser)/./src/components/AssetFilter.tsx\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define a recursive filtering function\nconst filterAssetsByType = (assets, targetType)=>{\n    return assets.reduce((filtered, asset)=>{\n        // Check if the asset's type matches the target type\n        if (asset.type === targetType) {\n            // Add the asset to the filtered array\n            filtered.push(asset);\n        }\n        // Recursively filter children assets\n        if (asset.children) {\n            const filteredChildren = filterAssetsByType(asset.children, targetType);\n            // Concatenate the filtered children with the current filtered array\n            filtered.push(...filteredChildren);\n        }\n        return filtered;\n    }, []);\n};\nconst AssetMain = ()=>{\n    _s();\n    //   const { assets, updateAsset, deleteAsset} = useAssetContext();\n    //   const handleUpdate = (id: number, updatedAsset: Asset) => {\n    //     updateAsset(id, updatedAsset);\n    //   };\n    //   const handleDelete = (id: number) => {\n    //     deleteAsset(id);\n    //   };\n    //   const { assets } = useAssetContext();\n    //   const mergedAssets = [...AssetsMockData, ...assets]\n    //   const [filteredAssets, setFilteredAssets] = useState<Asset[]>(mergedAssets);\n    const { assets: contextAssets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Merge assets from context with assets from data file\n        setAssets([\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData,\n            ...contextAssets\n        ]);\n    }, [\n        contextAssets\n    ]);\n    const [filteredAssets, setFilteredAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(assets);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFilteredAssets(assets);\n    }, [\n        assets\n    ]);\n    const handleFilter = (type, isMonitored)=>{\n        let filteredAssetsCopy = [\n            ...assets\n        ];\n        // Filter by type\n        if (type) {\n            filteredAssetsCopy = filterAssetsByType(filteredAssetsCopy, type);\n        }\n        // Filter by isMonitored\n        if (isMonitored) {\n            filteredAssetsCopy = filteredAssetsCopy.filter((asset)=>{\n                var _asset_attributes;\n                console.log(asset);\n                const isMonitoredAttribute = (_asset_attributes = asset.attributes) === null || _asset_attributes === void 0 ? void 0 : _asset_attributes.find((attr)=>attr.key === \"isMonitored\");\n                return (isMonitoredAttribute === null || isMonitoredAttribute === void 0 ? void 0 : isMonitoredAttribute.value) === true;\n            });\n        }\n        setFilteredAssets(filteredAssetsCopy);\n    };\n    const handleUpdate = (id, updatedAsset)=>{\n        const updateAssetRecursive = (assets)=>{\n            return assets.map((asset)=>{\n                if (asset.id === id) {\n                    // Replace the old asset with the updated one\n                    return updatedAsset;\n                }\n                // Recursively update children assets\n                if (asset.children) {\n                    return {\n                        ...asset,\n                        children: updateAssetRecursive(asset.children)\n                    };\n                }\n                return asset;\n            });\n        };\n        const updatedAssets = filteredAssets.map((asset)=>{\n            if (asset.id === id) {\n                return updatedAsset; // Replace the old asset with the updated one\n            }\n            // Recursively update children assets\n            if (asset.children) {\n                return {\n                    ...asset,\n                    children: updateAssetRecursive(asset.children)\n                };\n            }\n            return asset;\n        });\n        setFilteredAssets(updatedAssets);\n    };\n    const handleDelete = (id)=>{\n        const deleteAssetAndChildren = (assets)=>{\n            return assets.reduce((acc, asset)=>{\n                if (asset.id === id) {\n                    // If the current asset matches the ID, skip it and its children\n                    return acc;\n                }\n                if (asset.children) {\n                    // Recursively delete children\n                    asset.children = deleteAssetAndChildren(asset.children);\n                }\n                // Keep the current asset\n                acc.push(asset);\n                return acc;\n            }, []);\n        };\n        // Filter out the asset and its children\n        const updatedAssets = deleteAssetAndChildren(filteredAssets);\n        setFilteredAssets(updatedAssets);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 141,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onFilter: handleFilter\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetTree__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                assets: filteredAssets,\n                onUpdate: handleUpdate,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetMain, \"4t8GictWD3EXgbJfs0DoRfCXyGc=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext\n    ];\n});\n_c = AssetMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetMain);\nvar _c;\n$RefreshReg$(_c, \"AssetMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0TWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDRjtBQUNIO0FBQ0k7QUFDTTtBQUV0QjtBQUVwQyx3Q0FBd0M7QUFDeEMsTUFBTVEscUJBQXFCLENBQUNDLFFBQWlCQztJQUN6QyxPQUFPRCxPQUFPRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVUM7UUFDOUIsb0RBQW9EO1FBQ3BELElBQUlBLE1BQU1DLElBQUksS0FBS0osWUFBWTtZQUM3QixzQ0FBc0M7WUFDdENFLFNBQVNHLElBQUksQ0FBQ0Y7UUFDaEI7UUFFQSxxQ0FBcUM7UUFDckMsSUFBSUEsTUFBTUcsUUFBUSxFQUFFO1lBQ2xCLE1BQU1DLG1CQUFtQlQsbUJBQW1CSyxNQUFNRyxRQUFRLEVBQUVOO1lBQzVELG9FQUFvRTtZQUNwRUUsU0FBU0csSUFBSSxJQUFJRTtRQUNuQjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxFQUFFO0FBQ1Q7QUFFQSxNQUFNTSxZQUFZOztJQUNsQixtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHFDQUFxQztJQUNyQyxPQUFPO0lBRVAsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixPQUFPO0lBRVAsMENBQTBDO0lBQzFDLHdEQUF3RDtJQUN4RCxpRkFBaUY7SUFFL0UsTUFBTSxFQUFFVCxRQUFRVSxhQUFhLEVBQUUsR0FBR2Isc0VBQWVBO0lBQ2pELE1BQU0sQ0FBQ0csUUFBUVcsVUFBVSxHQUFHbkIsK0NBQVFBLENBQVUsRUFBRTtJQUVoREMsZ0RBQVNBLENBQUM7UUFDUix1REFBdUQ7UUFDdkRrQixVQUFVO2VBQUlqQiwyREFBY0E7ZUFBS2dCO1NBQWM7SUFDakQsR0FBRztRQUFDQTtLQUFjO0lBRWxCLE1BQU0sQ0FBQ0UsZ0JBQWdCQyxrQkFBa0IsR0FBR3JCLCtDQUFRQSxDQUFVUTtJQUU5RFAsZ0RBQVNBLENBQUM7UUFDUm9CLGtCQUFrQmI7SUFDcEIsR0FBRztRQUFDQTtLQUFPO0lBR1gsTUFBTWMsZUFBZSxDQUFDVCxNQUFjVTtRQUNsQyxJQUFJQyxxQkFBcUI7ZUFBSWhCO1NBQU87UUFFcEMsaUJBQWlCO1FBQ2pCLElBQUlLLE1BQU07WUFDUlcscUJBQXFCakIsbUJBQW1CaUIsb0JBQW9CWDtRQUM5RDtRQUVBLHdCQUF3QjtRQUN4QixJQUFJVSxhQUFhO1lBQ2ZDLHFCQUFxQkEsbUJBQW1CQyxNQUFNLENBQUNiLENBQUFBO29CQUVoQkE7Z0JBRDdCYyxRQUFRQyxHQUFHLENBQUNmO2dCQUNaLE1BQU1nQix3QkFBdUJoQixvQkFBQUEsTUFBTWlCLFVBQVUsY0FBaEJqQix3Q0FBQUEsa0JBQWtCa0IsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxHQUFHLEtBQUs7Z0JBQ3pFLE9BQU9KLENBQUFBLGlDQUFBQSwyQ0FBQUEscUJBQXNCSyxLQUFLLE1BQUs7WUFDekM7UUFDRjtRQUVBWixrQkFBa0JHO0lBQ3BCO0lBR0EsTUFBTVUsZUFBZSxDQUFDQyxJQUFZQztRQUNoQyxNQUFNQyx1QkFBdUIsQ0FBQzdCO1lBQzVCLE9BQU9BLE9BQU84QixHQUFHLENBQUMxQixDQUFBQTtnQkFDaEIsSUFBSUEsTUFBTXVCLEVBQUUsS0FBS0EsSUFBSTtvQkFDbkIsNkNBQTZDO29CQUM3QyxPQUFPQztnQkFDVDtnQkFDQSxxQ0FBcUM7Z0JBQ3JDLElBQUl4QixNQUFNRyxRQUFRLEVBQUU7b0JBQ2xCLE9BQU87d0JBQ0wsR0FBR0gsS0FBSzt3QkFDUkcsVUFBVXNCLHFCQUFxQnpCLE1BQU1HLFFBQVE7b0JBQy9DO2dCQUNGO2dCQUNBLE9BQU9IO1lBQ1Q7UUFDRjtRQUVBLE1BQU0yQixnQkFBeUJuQixlQUFla0IsR0FBRyxDQUFDMUIsQ0FBQUE7WUFDaEQsSUFBSUEsTUFBTXVCLEVBQUUsS0FBS0EsSUFBSTtnQkFDbkIsT0FBT0MsY0FBYyw2Q0FBNkM7WUFDcEU7WUFDQSxxQ0FBcUM7WUFDckMsSUFBSXhCLE1BQU1HLFFBQVEsRUFBRTtnQkFDbEIsT0FBTztvQkFDTCxHQUFHSCxLQUFLO29CQUNSRyxVQUFVc0IscUJBQXFCekIsTUFBTUcsUUFBUTtnQkFDL0M7WUFDRjtZQUNBLE9BQU9IO1FBQ1Q7UUFFQVMsa0JBQWtCa0I7SUFDcEI7SUFFRixNQUFNQyxlQUFlLENBQUNMO1FBQ2xCLE1BQU1NLHlCQUF5QixDQUFDakM7WUFDOUIsT0FBT0EsT0FBT0UsTUFBTSxDQUFDLENBQUNnQyxLQUFLOUI7Z0JBQ3pCLElBQUlBLE1BQU11QixFQUFFLEtBQUtBLElBQUk7b0JBQ25CLGdFQUFnRTtvQkFDaEUsT0FBT087Z0JBQ1Q7Z0JBQ0EsSUFBSTlCLE1BQU1HLFFBQVEsRUFBRTtvQkFDbEIsOEJBQThCO29CQUM5QkgsTUFBTUcsUUFBUSxHQUFHMEIsdUJBQXVCN0IsTUFBTUcsUUFBUTtnQkFDeEQ7Z0JBQ0EseUJBQXlCO2dCQUN6QjJCLElBQUk1QixJQUFJLENBQUNGO2dCQUNULE9BQU84QjtZQUNULEdBQUcsRUFBRTtRQUNQO1FBRUEsd0NBQXdDO1FBQ3hDLE1BQU1ILGdCQUF5QkUsdUJBQXVCckI7UUFFdERDLGtCQUFrQmtCO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDRyw4REFBQ3JDLGtEQUFTQTs7Ozs7MEJBQ1YsOERBQUNGLCtEQUFXQTtnQkFBQ3dDLFVBQVV0Qjs7Ozs7OzBCQUN2Qiw4REFBQ25CLDZEQUFTQTtnQkFBQ0ssUUFBUVk7Z0JBQWdCeUIsVUFBVVg7Z0JBQWNZLFVBQVVOOzs7Ozs7Ozs7Ozs7QUFHN0U7R0FuSE12Qjs7UUFjOEJaLGtFQUFlQTs7O0tBZDdDWTtBQXFITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldE1haW4udHN4PzdkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NldHNNb2NrRGF0YSB9IGZyb20gXCIuLi9kYXRhL0Fzc2V0RGF0YVwiO1xuaW1wb3J0IEFzc2V0VHJlZSBmcm9tICcuLi9jb21wb25lbnRzL0Fzc2V0VHJlZSc7XG5pbXBvcnQgQXNzZXRGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXNzZXRGaWx0ZXJcIjtcbmltcG9ydCB7IHVzZUFzc2V0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXNzZXRDb250ZXh0JztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgQXNzZXRGb3JtIGZyb20gJy4vQXNzZXRGb3JtJztcblxuLy8gRGVmaW5lIGEgcmVjdXJzaXZlIGZpbHRlcmluZyBmdW5jdGlvblxuY29uc3QgZmlsdGVyQXNzZXRzQnlUeXBlID0gKGFzc2V0czogQXNzZXRbXSwgdGFyZ2V0VHlwZTogc3RyaW5nKTogQXNzZXRbXSA9PiB7XG4gICAgcmV0dXJuIGFzc2V0cy5yZWR1Y2UoKGZpbHRlcmVkLCBhc3NldCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGFzc2V0J3MgdHlwZSBtYXRjaGVzIHRoZSB0YXJnZXQgdHlwZVxuICAgICAgaWYgKGFzc2V0LnR5cGUgPT09IHRhcmdldFR5cGUpIHtcbiAgICAgICAgLy8gQWRkIHRoZSBhc3NldCB0byB0aGUgZmlsdGVyZWQgYXJyYXlcbiAgICAgICAgZmlsdGVyZWQucHVzaChhc3NldCk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gUmVjdXJzaXZlbHkgZmlsdGVyIGNoaWxkcmVuIGFzc2V0c1xuICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW4gPSBmaWx0ZXJBc3NldHNCeVR5cGUoYXNzZXQuY2hpbGRyZW4sIHRhcmdldFR5cGUpO1xuICAgICAgICAvLyBDb25jYXRlbmF0ZSB0aGUgZmlsdGVyZWQgY2hpbGRyZW4gd2l0aCB0aGUgY3VycmVudCBmaWx0ZXJlZCBhcnJheVxuICAgICAgICBmaWx0ZXJlZC5wdXNoKC4uLmZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9LCBbXSBhcyBBc3NldFtdKTtcbn07XG5cbmNvbnN0IEFzc2V0TWFpbiA9ICgpID0+IHtcbi8vICAgY29uc3QgeyBhc3NldHMsIHVwZGF0ZUFzc2V0LCBkZWxldGVBc3NldH0gPSB1c2VBc3NldENvbnRleHQoKTtcbi8vICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHtcbi8vICAgICB1cGRhdGVBc3NldChpZCwgdXBkYXRlZEFzc2V0KTtcbi8vICAgfTtcblxuLy8gICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuLy8gICAgIGRlbGV0ZUFzc2V0KGlkKTtcbi8vICAgfTtcblxuLy8gICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlQXNzZXRDb250ZXh0KCk7XG4vLyAgIGNvbnN0IG1lcmdlZEFzc2V0cyA9IFsuLi5Bc3NldHNNb2NrRGF0YSwgLi4uYXNzZXRzXVxuLy8gICBjb25zdCBbZmlsdGVyZWRBc3NldHMsIHNldEZpbHRlcmVkQXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KG1lcmdlZEFzc2V0cyk7XG5cbiAgY29uc3QgeyBhc3NldHM6IGNvbnRleHRBc3NldHMgfSA9IHVzZUFzc2V0Q29udGV4dCgpO1xuICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGU8QXNzZXRbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gTWVyZ2UgYXNzZXRzIGZyb20gY29udGV4dCB3aXRoIGFzc2V0cyBmcm9tIGRhdGEgZmlsZVxuICAgIHNldEFzc2V0cyhbLi4uQXNzZXRzTW9ja0RhdGEsIC4uLmNvbnRleHRBc3NldHNdKTtcbiAgfSwgW2NvbnRleHRBc3NldHNdKTtcblxuICBjb25zdCBbZmlsdGVyZWRBc3NldHMsIHNldEZpbHRlcmVkQXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KGFzc2V0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyhhc3NldHMpO1xuICB9LCBbYXNzZXRzXSk7XG5cblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAodHlwZTogc3RyaW5nLCBpc01vbml0b3JlZDogYm9vbGVhbikgPT4ge1xuICAgIGxldCBmaWx0ZXJlZEFzc2V0c0NvcHkgPSBbLi4uYXNzZXRzXTtcblxuICAgIC8vIEZpbHRlciBieSB0eXBlXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGZpbHRlcmVkQXNzZXRzQ29weSA9IGZpbHRlckFzc2V0c0J5VHlwZShmaWx0ZXJlZEFzc2V0c0NvcHksIHR5cGUpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlciBieSBpc01vbml0b3JlZFxuICAgIGlmIChpc01vbml0b3JlZCkge1xuICAgICAgZmlsdGVyZWRBc3NldHNDb3B5ID0gZmlsdGVyZWRBc3NldHNDb3B5LmZpbHRlcihhc3NldCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFzc2V0KTtcbiAgICAgICAgY29uc3QgaXNNb25pdG9yZWRBdHRyaWJ1dGUgPSBhc3NldC5hdHRyaWJ1dGVzPy5maW5kKGF0dHIgPT4gYXR0ci5rZXkgPT09ICdpc01vbml0b3JlZCcpO1xuICAgICAgICByZXR1cm4gaXNNb25pdG9yZWRBdHRyaWJ1dGU/LnZhbHVlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyZWRBc3NldHMoZmlsdGVyZWRBc3NldHNDb3B5KTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlQXNzZXRSZWN1cnNpdmUgPSAoYXNzZXRzOiBBc3NldFtdKTogQXNzZXRbXSA9PiB7XG4gICAgICByZXR1cm4gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBvbGQgYXNzZXQgd2l0aCB0aGUgdXBkYXRlZCBvbmVcbiAgICAgICAgICByZXR1cm4gdXBkYXRlZEFzc2V0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZHJlbiBhc3NldHNcbiAgICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmFzc2V0LFxuICAgICAgICAgICAgY2hpbGRyZW46IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKGFzc2V0LmNoaWxkcmVuKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzc2V0O1xuICAgICAgfSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgdXBkYXRlZEFzc2V0czogQXNzZXRbXSA9IGZpbHRlcmVkQXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkQXNzZXQ7IC8vIFJlcGxhY2UgdGhlIG9sZCBhc3NldCB3aXRoIHRoZSB1cGRhdGVkIG9uZVxuICAgICAgfVxuICAgICAgLy8gUmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkcmVuIGFzc2V0c1xuICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgY2hpbGRyZW46IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKGFzc2V0LmNoaWxkcmVuKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFzc2V0O1xuICAgIH0pO1xuICBcbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyh1cGRhdGVkQXNzZXRzKTtcbiAgfTsgIFxuXG5jb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUFzc2V0QW5kQ2hpbGRyZW4gPSAoYXNzZXRzOiBBc3NldFtdKTogQXNzZXRbXSA9PiB7XG4gICAgICByZXR1cm4gYXNzZXRzLnJlZHVjZSgoYWNjLCBhc3NldCkgPT4ge1xuICAgICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgYXNzZXQgbWF0Y2hlcyB0aGUgSUQsIHNraXAgaXQgYW5kIGl0cyBjaGlsZHJlblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZGVsZXRlIGNoaWxkcmVuXG4gICAgICAgICAgYXNzZXQuY2hpbGRyZW4gPSBkZWxldGVBc3NldEFuZENoaWxkcmVuKGFzc2V0LmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBLZWVwIHRoZSBjdXJyZW50IGFzc2V0XG4gICAgICAgIGFjYy5wdXNoKGFzc2V0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdIGFzIEFzc2V0W10pO1xuICAgIH07XG4gIFxuICAgIC8vIEZpbHRlciBvdXQgdGhlIGFzc2V0IGFuZCBpdHMgY2hpbGRyZW5cbiAgICBjb25zdCB1cGRhdGVkQXNzZXRzOiBBc3NldFtdID0gZGVsZXRlQXNzZXRBbmRDaGlsZHJlbihmaWx0ZXJlZEFzc2V0cyk7XG4gIFxuICAgIHNldEZpbHRlcmVkQXNzZXRzKHVwZGF0ZWRBc3NldHMpO1xuICB9OyAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8QXNzZXRGb3JtIC8+XG4gICAgICAgIDxBc3NldEZpbHRlciBvbkZpbHRlcj17aGFuZGxlRmlsdGVyfSAvPlxuICAgICAgICA8QXNzZXRUcmVlIGFzc2V0cz17ZmlsdGVyZWRBc3NldHN9IG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFzc2V0c01vY2tEYXRhIiwiQXNzZXRUcmVlIiwiQXNzZXRGaWx0ZXIiLCJ1c2VBc3NldENvbnRleHQiLCJBc3NldEZvcm0iLCJmaWx0ZXJBc3NldHNCeVR5cGUiLCJhc3NldHMiLCJ0YXJnZXRUeXBlIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJhc3NldCIsInR5cGUiLCJwdXNoIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZENoaWxkcmVuIiwiQXNzZXRNYWluIiwiY29udGV4dEFzc2V0cyIsInNldEFzc2V0cyIsImZpbHRlcmVkQXNzZXRzIiwic2V0RmlsdGVyZWRBc3NldHMiLCJoYW5kbGVGaWx0ZXIiLCJpc01vbml0b3JlZCIsImZpbHRlcmVkQXNzZXRzQ29weSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJpc01vbml0b3JlZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJmaW5kIiwiYXR0ciIsImtleSIsInZhbHVlIiwiaGFuZGxlVXBkYXRlIiwiaWQiLCJ1cGRhdGVkQXNzZXQiLCJ1cGRhdGVBc3NldFJlY3Vyc2l2ZSIsIm1hcCIsInVwZGF0ZWRBc3NldHMiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVBc3NldEFuZENoaWxkcmVuIiwiYWNjIiwiZGl2Iiwib25GaWx0ZXIiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetMain.tsx\n"));

/***/ })

});