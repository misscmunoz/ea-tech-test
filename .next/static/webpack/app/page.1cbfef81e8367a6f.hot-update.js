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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _components_AssetTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n/* harmony import */ var _components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AssetFilter */ \"(app-pages-browser)/./src/components/AssetFilter.tsx\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define a recursive filtering function\nconst filterAssetsByType = (assets, targetType)=>{\n    return assets.reduce((filtered, asset)=>{\n        if (asset.type === targetType || asset.children && asset.children.some((child)=>child.type === targetType)) {\n            filtered.push(asset);\n        }\n        if (asset.children) {\n            filtered.push(...filterAssetsByType(asset.children, targetType));\n        }\n        return filtered;\n    }, []);\n};\nconst AssetMain = ()=>{\n    _s();\n    const { assets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext)();\n    const mergedAssets = [\n        ..._data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData,\n        ...assets\n    ];\n    const [filteredAssets, setFilteredAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mergedAssets);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mergedAssets = [\n            ..._data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData,\n            ...assets\n        ];\n        setFilteredAssets(mergedAssets);\n    }, [\n        assets\n    ]);\n    const handleFilter = (type, isMonitored)=>{\n        let filteredAssetsCopy = [\n            ...mergedAssets\n        ];\n        // Filter by type\n        if (type) {\n            filteredAssetsCopy = filterAssetsByType(filteredAssetsCopy, type);\n        }\n        // Filter by isMonitored\n        if (isMonitored) {\n            filteredAssetsCopy = filteredAssetsCopy.filter((asset)=>{\n                var _asset_attributes;\n                const isMonitoredAttribute = (_asset_attributes = asset.attributes) === null || _asset_attributes === void 0 ? void 0 : _asset_attributes.find((attr)=>attr.key === \"isMonitored\");\n                return (isMonitoredAttribute === null || isMonitoredAttribute === void 0 ? void 0 : isMonitoredAttribute.value) === true;\n            });\n        }\n        setFilteredAssets(filteredAssetsCopy);\n    };\n    const updateAssetRecursive = (assets, id, updatedAsset)=>{\n        return assets.map((asset)=>{\n            if (asset.id === id) {\n                return updatedAsset || asset;\n            }\n            if (asset.children) {\n                return {\n                    ...asset,\n                    children: updateAssetRecursive(asset.children, id, updatedAsset)\n                };\n            }\n            return asset;\n        });\n    };\n    const handleUpdate = (id, updatedAsset)=>{\n        setFilteredAssets((prevAssets)=>updateAssetRecursive(prevAssets, id, updatedAsset));\n    };\n    const handleDelete = (id)=>{\n        setFilteredAssets((prevAssets)=>{\n            const updatedAssets = prevAssets.filter((asset)=>{\n                if (asset.id === id) {\n                    // If the current asset matches the ID, remove it\n                    return false;\n                }\n                if (asset.children) {\n                    // Recursively delete from children if they exist\n                    asset.children = deleteAssetFromChildren(asset.children, id);\n                }\n                return true;\n            });\n            return updatedAssets;\n        });\n    };\n    const deleteAssetFromChildren = (children, id)=>{\n        return children.filter((child)=>{\n            if (child.id === id) {\n                // If the child matches the ID, remove it\n                return false;\n            }\n            if (child.children) {\n                // Recursively delete from children if they exist\n                child.children = deleteAssetFromChildren(child.children, id);\n            }\n            return true;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onFilter: handleFilter\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetTree__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                assets: filteredAssets,\n                onUpdate: handleUpdate,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetMain, \"dMGwYVWTrblkZYG4/OQvtRPMFNY=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext\n    ];\n});\n_c = AssetMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetMain);\nvar _c;\n$RefreshReg$(_c, \"AssetMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0TWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDQTtBQUNIO0FBQ0k7QUFDTTtBQUV0QjtBQUVwQyx3Q0FBd0M7QUFDeEMsTUFBTVEscUJBQXFCLENBQUNDLFFBQWlCQztJQUMzQyxPQUFPRCxPQUFPRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVUM7UUFDOUIsSUFBSUEsTUFBTUMsSUFBSSxLQUFLSixjQUFlRyxNQUFNRSxRQUFRLElBQUlGLE1BQU1FLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNSCxJQUFJLEtBQUtKLGFBQWM7WUFDNUdFLFNBQVNNLElBQUksQ0FBQ0w7UUFDaEI7UUFDQSxJQUFJQSxNQUFNRSxRQUFRLEVBQUU7WUFDbEJILFNBQVNNLElBQUksSUFBSVYsbUJBQW1CSyxNQUFNRSxRQUFRLEVBQUVMO1FBQ3REO1FBQ0EsT0FBT0U7SUFDVCxHQUFHLEVBQUU7QUFDUDtBQUVBLE1BQU1PLFlBQXNCOztJQUMxQixNQUFNLEVBQUVWLE1BQU0sRUFBRSxHQUFHSCxzRUFBZUE7SUFDbEMsTUFBTWMsZUFBZTtXQUFJakIsMkRBQWNBO1dBQUtNO0tBQU87SUFDbkQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHckIsK0NBQVFBLENBQVVtQjtJQUU5RGxCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLGVBQWU7ZUFBSWpCLDJEQUFjQTtlQUFLTTtTQUFPO1FBQ25EYSxrQkFBa0JGO0lBQ3BCLEdBQUc7UUFBQ1g7S0FBTztJQUVYLE1BQU1jLGVBQWUsQ0FBQ1QsTUFBY1U7UUFDbEMsSUFBSUMscUJBQXFCO2VBQUlMO1NBQWE7UUFFMUMsaUJBQWlCO1FBQ2pCLElBQUlOLE1BQU07WUFDUlcscUJBQXFCakIsbUJBQW1CaUIsb0JBQW9CWDtRQUM5RDtRQUVBLHdCQUF3QjtRQUN4QixJQUFJVSxhQUFhO1lBQ2ZDLHFCQUFxQkEsbUJBQW1CQyxNQUFNLENBQUNiLENBQUFBO29CQUNoQkE7Z0JBQTdCLE1BQU1jLHdCQUF1QmQsb0JBQUFBLE1BQU1lLFVBQVUsY0FBaEJmLHdDQUFBQSxrQkFBa0JnQixJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEdBQUcsS0FBSztnQkFDekUsT0FBT0osQ0FBQUEsaUNBQUFBLDJDQUFBQSxxQkFBc0JLLEtBQUssTUFBSztZQUN6QztRQUNGO1FBRUFWLGtCQUFrQkc7SUFDcEI7SUFFQSxNQUFNUSx1QkFBdUIsQ0FBQ3hCLFFBQWlCeUIsSUFBWUM7UUFDekQsT0FBTzFCLE9BQU8yQixHQUFHLENBQUN2QixDQUFBQTtZQUNoQixJQUFJQSxNQUFNcUIsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQixPQUFPQyxnQkFBZ0J0QjtZQUN6QjtZQUNBLElBQUlBLE1BQU1FLFFBQVEsRUFBRTtnQkFDbEIsT0FBTztvQkFDTCxHQUFHRixLQUFLO29CQUNSRSxVQUFVa0IscUJBQXFCcEIsTUFBTUUsUUFBUSxFQUFFbUIsSUFBSUM7Z0JBQ3JEO1lBQ0Y7WUFDQSxPQUFPdEI7UUFDVDtJQUNGO0lBRUEsTUFBTXdCLGVBQWUsQ0FBQ0gsSUFBWUM7UUFDaENiLGtCQUFrQmdCLENBQUFBLGFBQWNMLHFCQUFxQkssWUFBWUosSUFBSUM7SUFDdkU7SUFFQSxNQUFNSSxlQUFlLENBQUNMO1FBQ3BCWixrQkFBa0JnQixDQUFBQTtZQUNoQixNQUFNRSxnQkFBeUJGLFdBQVdaLE1BQU0sQ0FBQ2IsQ0FBQUE7Z0JBQy9DLElBQUlBLE1BQU1xQixFQUFFLEtBQUtBLElBQUk7b0JBQ25CLGlEQUFpRDtvQkFDakQsT0FBTztnQkFDVDtnQkFDQSxJQUFJckIsTUFBTUUsUUFBUSxFQUFFO29CQUNsQixpREFBaUQ7b0JBQ2pERixNQUFNRSxRQUFRLEdBQUcwQix3QkFBd0I1QixNQUFNRSxRQUFRLEVBQUVtQjtnQkFDM0Q7Z0JBQ0EsT0FBTztZQUNUO1lBQ0EsT0FBT007UUFDVDtJQUNGO0lBRUEsTUFBTUMsMEJBQTBCLENBQUMxQixVQUFtQm1CO1FBQ2xELE9BQU9uQixTQUFTVyxNQUFNLENBQUNULENBQUFBO1lBQ3JCLElBQUlBLE1BQU1pQixFQUFFLEtBQUtBLElBQUk7Z0JBQ25CLHlDQUF5QztnQkFDekMsT0FBTztZQUNUO1lBQ0EsSUFBSWpCLE1BQU1GLFFBQVEsRUFBRTtnQkFDbEIsaURBQWlEO2dCQUNqREUsTUFBTUYsUUFBUSxHQUFHMEIsd0JBQXdCeEIsTUFBTUYsUUFBUSxFQUFFbUI7WUFDM0Q7WUFDQSxPQUFPO1FBQ1Q7SUFDRjtJQUNBLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNuQyxrREFBU0E7Ozs7OzBCQUNWLDhEQUFDRiwrREFBV0E7Z0JBQUNzQyxVQUFVcEI7Ozs7OzswQkFDdkIsOERBQUNuQiw2REFBU0E7Z0JBQUNLLFFBQVFZO2dCQUFnQnVCLFVBQVVQO2dCQUFjUSxVQUFVTjs7Ozs7Ozs7Ozs7O0FBRzNFO0dBckZNcEI7O1FBQ2ViLGtFQUFlQTs7O0tBRDlCYTtBQXVGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldE1haW4udHN4PzdkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXNzZXRzTW9ja0RhdGEgfSBmcm9tIFwiLi4vZGF0YS9Bc3NldERhdGFcIjtcbmltcG9ydCBBc3NldFRyZWUgZnJvbSAnLi4vY29tcG9uZW50cy9Bc3NldFRyZWUnO1xuaW1wb3J0IEFzc2V0RmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fzc2V0RmlsdGVyXCI7XG5pbXBvcnQgeyB1c2VBc3NldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IEFzc2V0Rm9ybSBmcm9tICcuL0Fzc2V0Rm9ybSc7XG5cbi8vIERlZmluZSBhIHJlY3Vyc2l2ZSBmaWx0ZXJpbmcgZnVuY3Rpb25cbmNvbnN0IGZpbHRlckFzc2V0c0J5VHlwZSA9IChhc3NldHM6IEFzc2V0W10sIHRhcmdldFR5cGU6IHN0cmluZyk6IEFzc2V0W10gPT4ge1xuICByZXR1cm4gYXNzZXRzLnJlZHVjZSgoZmlsdGVyZWQsIGFzc2V0KSA9PiB7XG4gICAgaWYgKGFzc2V0LnR5cGUgPT09IHRhcmdldFR5cGUgfHwgKGFzc2V0LmNoaWxkcmVuICYmIGFzc2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQudHlwZSA9PT0gdGFyZ2V0VHlwZSkpKSB7XG4gICAgICBmaWx0ZXJlZC5wdXNoKGFzc2V0KTtcbiAgICB9XG4gICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICBmaWx0ZXJlZC5wdXNoKC4uLmZpbHRlckFzc2V0c0J5VHlwZShhc3NldC5jaGlsZHJlbiwgdGFyZ2V0VHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWQ7XG4gIH0sIFtdIGFzIEFzc2V0W10pO1xufTtcblxuY29uc3QgQXNzZXRNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUFzc2V0Q29udGV4dCgpO1xuICBjb25zdCBtZXJnZWRBc3NldHMgPSBbLi4uQXNzZXRzTW9ja0RhdGEsIC4uLmFzc2V0c11cbiAgY29uc3QgW2ZpbHRlcmVkQXNzZXRzLCBzZXRGaWx0ZXJlZEFzc2V0c10gPSB1c2VTdGF0ZTxBc3NldFtdPihtZXJnZWRBc3NldHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkQXNzZXRzID0gWy4uLkFzc2V0c01vY2tEYXRhLCAuLi5hc3NldHNdXG4gICAgc2V0RmlsdGVyZWRBc3NldHMobWVyZ2VkQXNzZXRzKTtcbiAgfSwgW2Fzc2V0c10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9ICh0eXBlOiBzdHJpbmcsIGlzTW9uaXRvcmVkOiBib29sZWFuKSA9PiB7XG4gICAgbGV0IGZpbHRlcmVkQXNzZXRzQ29weSA9IFsuLi5tZXJnZWRBc3NldHNdO1xuXG4gICAgLy8gRmlsdGVyIGJ5IHR5cGVcbiAgICBpZiAodHlwZSkge1xuICAgICAgZmlsdGVyZWRBc3NldHNDb3B5ID0gZmlsdGVyQXNzZXRzQnlUeXBlKGZpbHRlcmVkQXNzZXRzQ29weSwgdHlwZSk7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVyIGJ5IGlzTW9uaXRvcmVkXG4gICAgaWYgKGlzTW9uaXRvcmVkKSB7XG4gICAgICBmaWx0ZXJlZEFzc2V0c0NvcHkgPSBmaWx0ZXJlZEFzc2V0c0NvcHkuZmlsdGVyKGFzc2V0ID0+IHtcbiAgICAgICAgY29uc3QgaXNNb25pdG9yZWRBdHRyaWJ1dGUgPSBhc3NldC5hdHRyaWJ1dGVzPy5maW5kKGF0dHIgPT4gYXR0ci5rZXkgPT09ICdpc01vbml0b3JlZCcpO1xuICAgICAgICByZXR1cm4gaXNNb25pdG9yZWRBdHRyaWJ1dGU/LnZhbHVlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyZWRBc3NldHMoZmlsdGVyZWRBc3NldHNDb3B5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVBc3NldFJlY3Vyc2l2ZSA9IChhc3NldHM6IEFzc2V0W10sIGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldD86IEFzc2V0KTogQXNzZXRbXSA9PiB7XG4gICAgcmV0dXJuIGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZEFzc2V0IHx8IGFzc2V0O1xuICAgICAgfVxuICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgY2hpbGRyZW46IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKGFzc2V0LmNoaWxkcmVuLCBpZCwgdXBkYXRlZEFzc2V0KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFzc2V0O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgc2V0RmlsdGVyZWRBc3NldHMocHJldkFzc2V0cyA9PiB1cGRhdGVBc3NldFJlY3Vyc2l2ZShwcmV2QXNzZXRzLCBpZCwgdXBkYXRlZEFzc2V0KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyhwcmV2QXNzZXRzID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRBc3NldHM6IEFzc2V0W10gPSBwcmV2QXNzZXRzLmZpbHRlcihhc3NldCA9PiB7XG4gICAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBhc3NldCBtYXRjaGVzIHRoZSBJRCwgcmVtb3ZlIGl0XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGRlbGV0ZSBmcm9tIGNoaWxkcmVuIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgICBhc3NldC5jaGlsZHJlbiA9IGRlbGV0ZUFzc2V0RnJvbUNoaWxkcmVuKGFzc2V0LmNoaWxkcmVuLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1cGRhdGVkQXNzZXRzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUFzc2V0RnJvbUNoaWxkcmVuID0gKGNoaWxkcmVuOiBBc3NldFtdLCBpZDogbnVtYmVyKTogQXNzZXRbXSA9PiB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQuaWQgPT09IGlkKSB7XG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBtYXRjaGVzIHRoZSBJRCwgcmVtb3ZlIGl0XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbikge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBkZWxldGUgZnJvbSBjaGlsZHJlbiBpZiB0aGV5IGV4aXN0XG4gICAgICAgIGNoaWxkLmNoaWxkcmVuID0gZGVsZXRlQXNzZXRGcm9tQ2hpbGRyZW4oY2hpbGQuY2hpbGRyZW4sIGlkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QXNzZXRGb3JtIC8+XG4gICAgICA8QXNzZXRGaWx0ZXIgb25GaWx0ZXI9e2hhbmRsZUZpbHRlcn0gLz5cbiAgICAgIDxBc3NldFRyZWUgYXNzZXRzPXtmaWx0ZXJlZEFzc2V0c30gb25VcGRhdGU9e2hhbmRsZVVwZGF0ZX0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0TWFpbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFzc2V0c01vY2tEYXRhIiwiQXNzZXRUcmVlIiwiQXNzZXRGaWx0ZXIiLCJ1c2VBc3NldENvbnRleHQiLCJBc3NldEZvcm0iLCJmaWx0ZXJBc3NldHNCeVR5cGUiLCJhc3NldHMiLCJ0YXJnZXRUeXBlIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJhc3NldCIsInR5cGUiLCJjaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsInB1c2giLCJBc3NldE1haW4iLCJtZXJnZWRBc3NldHMiLCJmaWx0ZXJlZEFzc2V0cyIsInNldEZpbHRlcmVkQXNzZXRzIiwiaGFuZGxlRmlsdGVyIiwiaXNNb25pdG9yZWQiLCJmaWx0ZXJlZEFzc2V0c0NvcHkiLCJmaWx0ZXIiLCJpc01vbml0b3JlZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJmaW5kIiwiYXR0ciIsImtleSIsInZhbHVlIiwidXBkYXRlQXNzZXRSZWN1cnNpdmUiLCJpZCIsInVwZGF0ZWRBc3NldCIsIm1hcCIsImhhbmRsZVVwZGF0ZSIsInByZXZBc3NldHMiLCJoYW5kbGVEZWxldGUiLCJ1cGRhdGVkQXNzZXRzIiwiZGVsZXRlQXNzZXRGcm9tQ2hpbGRyZW4iLCJkaXYiLCJvbkZpbHRlciIsIm9uVXBkYXRlIiwib25EZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetMain.tsx\n"));

/***/ })

});