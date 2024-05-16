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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_AssetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/AssetData */ \"(app-pages-browser)/./src/data/AssetData.ts\");\n/* harmony import */ var _components_AssetTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AssetTree */ \"(app-pages-browser)/./src/components/AssetTree.tsx\");\n/* harmony import */ var _components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AssetFilter */ \"(app-pages-browser)/./src/components/AssetFilter.tsx\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n/* harmony import */ var _AssetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssetForm */ \"(app-pages-browser)/./src/components/AssetForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define a recursive filtering function\nconst filterAssetsByType = (assets, targetType)=>{\n    return assets.reduce((filtered, asset)=>{\n        // Check if the asset's type matches the target type\n        if (asset.type === targetType) {\n            // Add the asset to the filtered array\n            filtered.push(asset);\n        }\n        // Recursively filter children assets\n        if (asset.children) {\n            const filteredChildren = filterAssetsByType(asset.children, targetType);\n            // Concatenate the filtered children with the current filtered array\n            filtered.push(...filteredChildren);\n        }\n        return filtered;\n    }, []);\n};\nconst AssetMain = (param)=>{\n    let { assetParam } = param;\n    _s();\n    const { assets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext)();\n    const mergedAssets = [\n        ..._data_AssetData__WEBPACK_IMPORTED_MODULE_2__.AssetsMockData,\n        ...assets\n    ];\n    const [filteredAssets, setFilteredAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mergedAssets);\n    const handleFilter = (type, isMonitored)=>{\n        let filteredAssetsCopy = [\n            ...mergedAssets\n        ];\n        // Filter by type\n        if (type) {\n            filteredAssetsCopy = filterAssetsByType(filteredAssetsCopy, type);\n        }\n        // Filter by isMonitored\n        if (isMonitored) {\n            filteredAssetsCopy = filteredAssetsCopy.filter((asset)=>{\n                var _asset_attributes;\n                console.log(asset);\n                const isMonitoredAttribute = (_asset_attributes = asset.attributes) === null || _asset_attributes === void 0 ? void 0 : _asset_attributes.find((attr)=>attr.key === \"isMonitored\");\n                return (isMonitoredAttribute === null || isMonitoredAttribute === void 0 ? void 0 : isMonitoredAttribute.value) === true;\n            });\n        }\n        setFilteredAssets(filteredAssetsCopy);\n    };\n    const updateAssetRecursive = (assets, id, updatedAsset)=>{\n        return assets.map((asset)=>{\n            if (asset.id === id) {\n                return updatedAsset || asset; // Replace the old asset with the updated one if provided, otherwise keep the existing asset\n            }\n            // Recursively update children assets\n            if (asset.children) {\n                return {\n                    ...asset,\n                    children: updateAssetRecursive(asset.children, id, updatedAsset)\n                };\n            }\n            return asset;\n        });\n    };\n    const handleUpdate = (id, updatedAsset)=>{\n        setFilteredAssets((prevAssets)=>updateAssetRecursive(prevAssets, id, updatedAsset));\n    };\n    const handleDelete = (id)=>{\n        setFilteredAssets((prevAssets)=>{\n            const filtered = prevAssets.filter((asset)=>asset.id !== id); // Remove the asset with the specified ID\n            return filtered.map((asset)=>({\n                    ...asset,\n                    children: asset.children ? handleDeleteFromChildren(asset.children, id) : undefined\n                }));\n        });\n    };\n    const handleDeleteFromChildren = (children, id)=>{\n        return children.filter((child)=>{\n            if (child.id === id) {\n                return false; // Remove the child if it matches the ID\n            }\n            if (child.children) {\n                child.children = handleDeleteFromChildren(child.children, id); // Recursively delete from children\n            }\n            return true;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AssetForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onFilter: handleFilter\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AssetTree__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                assets: filteredAssets,\n                onUpdate: handleUpdate,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetMain.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetMain, \"Tyi4yMRy7ud97xLw/Rz/Pc8aOWI=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_5__.useAssetContext\n    ];\n});\n_c = AssetMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetMain);\nvar _c;\n$RefreshReg$(_c, \"AssetMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0TWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDVztBQUNIO0FBQ0k7QUFDTTtBQUV0QjtBQUVwQyx3Q0FBd0M7QUFDeEMsTUFBTU8scUJBQXFCLENBQUNDLFFBQWlCQztJQUMzQyxPQUFPRCxPQUFPRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVUM7UUFDOUIsb0RBQW9EO1FBQ3BELElBQUlBLE1BQU1DLElBQUksS0FBS0osWUFBWTtZQUM3QixzQ0FBc0M7WUFDdENFLFNBQVNHLElBQUksQ0FBQ0Y7UUFDaEI7UUFFQSxxQ0FBcUM7UUFDckMsSUFBSUEsTUFBTUcsUUFBUSxFQUFFO1lBQ2xCLE1BQU1DLG1CQUFtQlQsbUJBQW1CSyxNQUFNRyxRQUFRLEVBQUVOO1lBQzVELG9FQUFvRTtZQUNwRUUsU0FBU0csSUFBSSxJQUFJRTtRQUNuQjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7QUFNQSxNQUFNTSxZQUFzQztRQUFDLEVBQUVDLFVBQVUsRUFBRTs7SUFDekQsTUFBTSxFQUFFVixNQUFNLEVBQUUsR0FBR0gsc0VBQWVBO0lBQ2xDLE1BQU1jLGVBQWU7V0FBSWpCLDJEQUFjQTtXQUFLTTtLQUFPO0lBQ25ELE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR3BCLCtDQUFRQSxDQUFVa0I7SUFFOUQsTUFBTUcsZUFBZSxDQUFDVCxNQUFjVTtRQUNsQyxJQUFJQyxxQkFBcUI7ZUFBSUw7U0FBYTtRQUUxQyxpQkFBaUI7UUFDakIsSUFBSU4sTUFBTTtZQUNSVyxxQkFBcUJqQixtQkFBbUJpQixvQkFBb0JYO1FBQzlEO1FBRUEsd0JBQXdCO1FBQ3hCLElBQUlVLGFBQWE7WUFDZkMscUJBQXFCQSxtQkFBbUJDLE1BQU0sQ0FBQ2IsQ0FBQUE7b0JBRWhCQTtnQkFEN0JjLFFBQVFDLEdBQUcsQ0FBQ2Y7Z0JBQ1osTUFBTWdCLHdCQUF1QmhCLG9CQUFBQSxNQUFNaUIsVUFBVSxjQUFoQmpCLHdDQUFBQSxrQkFBa0JrQixJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEdBQUcsS0FBSztnQkFDekUsT0FBT0osQ0FBQUEsaUNBQUFBLDJDQUFBQSxxQkFBc0JLLEtBQUssTUFBSztZQUN6QztRQUNGO1FBRUFaLGtCQUFrQkc7SUFDcEI7SUFFQSxNQUFNVSx1QkFBdUIsQ0FBQzFCLFFBQWlCMkIsSUFBWUM7UUFDekQsT0FBTzVCLE9BQU82QixHQUFHLENBQUN6QixDQUFBQTtZQUNoQixJQUFJQSxNQUFNdUIsRUFBRSxLQUFLQSxJQUFJO2dCQUNuQixPQUFPQyxnQkFBZ0J4QixPQUFPLDRGQUE0RjtZQUM1SDtZQUNBLHFDQUFxQztZQUNyQyxJQUFJQSxNQUFNRyxRQUFRLEVBQUU7Z0JBQ2xCLE9BQU87b0JBQ0wsR0FBR0gsS0FBSztvQkFDUkcsVUFBVW1CLHFCQUFxQnRCLE1BQU1HLFFBQVEsRUFBRW9CLElBQUlDO2dCQUNyRDtZQUNGO1lBQ0EsT0FBT3hCO1FBQ1Q7SUFDRjtJQUVBLE1BQU0wQixlQUFlLENBQUNILElBQVlDO1FBQ2hDZixrQkFBa0JrQixDQUFBQSxhQUFjTCxxQkFBcUJLLFlBQVlKLElBQUlDO0lBQ3ZFO0lBRUEsTUFBTUksZUFBZSxDQUFDTDtRQUNwQmQsa0JBQWtCa0IsQ0FBQUE7WUFDaEIsTUFBTTVCLFdBQVc0QixXQUFXZCxNQUFNLENBQUNiLENBQUFBLFFBQVNBLE1BQU11QixFQUFFLEtBQUtBLEtBQUsseUNBQXlDO1lBQ3ZHLE9BQU94QixTQUFTMEIsR0FBRyxDQUFDekIsQ0FBQUEsUUFBVTtvQkFBRSxHQUFHQSxLQUFLO29CQUFFRyxVQUFVSCxNQUFNRyxRQUFRLEdBQUcwQix5QkFBeUI3QixNQUFNRyxRQUFRLEVBQUVvQixNQUFNTztnQkFBVTtRQUNoSTtJQUNGO0lBRUEsTUFBTUQsMkJBQTJCLENBQUMxQixVQUFtQm9CO1FBQ25ELE9BQU9wQixTQUFTVSxNQUFNLENBQUNrQixDQUFBQTtZQUNyQixJQUFJQSxNQUFNUixFQUFFLEtBQUtBLElBQUk7Z0JBQ25CLE9BQU8sT0FBTyx3Q0FBd0M7WUFDeEQ7WUFDQSxJQUFJUSxNQUFNNUIsUUFBUSxFQUFFO2dCQUNsQjRCLE1BQU01QixRQUFRLEdBQUcwQix5QkFBeUJFLE1BQU01QixRQUFRLEVBQUVvQixLQUFLLG1DQUFtQztZQUNwRztZQUNBLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNTOzswQkFDQyw4REFBQ3RDLGtEQUFTQTs7Ozs7MEJBQ1YsOERBQUNGLCtEQUFXQTtnQkFBQ3lDLFVBQVV2Qjs7Ozs7OzBCQUN2Qiw4REFBQ25CLDZEQUFTQTtnQkFBQ0ssUUFBUVk7Z0JBQWdCMEIsVUFBVVI7Z0JBQWNTLFVBQVVQOzs7Ozs7Ozs7Ozs7QUFHM0U7R0F2RU12Qjs7UUFDZVosa0VBQWVBOzs7S0FEOUJZO0FBeUVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0TWFpbi50c3g/N2RhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXNzZXRzTW9ja0RhdGEgfSBmcm9tIFwiLi4vZGF0YS9Bc3NldERhdGFcIjtcbmltcG9ydCBBc3NldFRyZWUgZnJvbSAnLi4vY29tcG9uZW50cy9Bc3NldFRyZWUnO1xuaW1wb3J0IEFzc2V0RmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fzc2V0RmlsdGVyXCI7XG5pbXBvcnQgeyB1c2VBc3NldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IEFzc2V0Rm9ybSBmcm9tICcuL0Fzc2V0Rm9ybSc7XG5cbi8vIERlZmluZSBhIHJlY3Vyc2l2ZSBmaWx0ZXJpbmcgZnVuY3Rpb25cbmNvbnN0IGZpbHRlckFzc2V0c0J5VHlwZSA9IChhc3NldHM6IEFzc2V0W10sIHRhcmdldFR5cGU6IHN0cmluZyk6IEFzc2V0W10gPT4ge1xuICByZXR1cm4gYXNzZXRzLnJlZHVjZSgoZmlsdGVyZWQsIGFzc2V0KSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGFzc2V0J3MgdHlwZSBtYXRjaGVzIHRoZSB0YXJnZXQgdHlwZVxuICAgIGlmIChhc3NldC50eXBlID09PSB0YXJnZXRUeXBlKSB7XG4gICAgICAvLyBBZGQgdGhlIGFzc2V0IHRvIHRoZSBmaWx0ZXJlZCBhcnJheVxuICAgICAgZmlsdGVyZWQucHVzaChhc3NldCk7XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbHkgZmlsdGVyIGNoaWxkcmVuIGFzc2V0c1xuICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgY29uc3QgZmlsdGVyZWRDaGlsZHJlbiA9IGZpbHRlckFzc2V0c0J5VHlwZShhc3NldC5jaGlsZHJlbiwgdGFyZ2V0VHlwZSk7XG4gICAgICAvLyBDb25jYXRlbmF0ZSB0aGUgZmlsdGVyZWQgY2hpbGRyZW4gd2l0aCB0aGUgY3VycmVudCBmaWx0ZXJlZCBhcnJheVxuICAgICAgZmlsdGVyZWQucHVzaCguLi5maWx0ZXJlZENoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWQ7XG4gIH0sIFtdIGFzIEFzc2V0W10pO1xufTtcblxuaW50ZXJmYWNlIEFzc2V0TWFpblByb3BzIHtcbiAgYXNzZXRQYXJhbT86IEFzc2V0W107XG59XG5cbmNvbnN0IEFzc2V0TWFpbjogUmVhY3QuRkM8QXNzZXRNYWluUHJvcHM+ID0gKHsgYXNzZXRQYXJhbSB9KSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzIH0gPSB1c2VBc3NldENvbnRleHQoKTtcbiAgY29uc3QgbWVyZ2VkQXNzZXRzID0gWy4uLkFzc2V0c01vY2tEYXRhLCAuLi5hc3NldHNdXG4gIGNvbnN0IFtmaWx0ZXJlZEFzc2V0cywgc2V0RmlsdGVyZWRBc3NldHNdID0gdXNlU3RhdGU8QXNzZXRbXT4obWVyZ2VkQXNzZXRzKTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAodHlwZTogc3RyaW5nLCBpc01vbml0b3JlZDogYm9vbGVhbikgPT4ge1xuICAgIGxldCBmaWx0ZXJlZEFzc2V0c0NvcHkgPSBbLi4ubWVyZ2VkQXNzZXRzXTtcblxuICAgIC8vIEZpbHRlciBieSB0eXBlXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGZpbHRlcmVkQXNzZXRzQ29weSA9IGZpbHRlckFzc2V0c0J5VHlwZShmaWx0ZXJlZEFzc2V0c0NvcHksIHR5cGUpO1xuICAgIH1cblxuICAgIC8vIEZpbHRlciBieSBpc01vbml0b3JlZFxuICAgIGlmIChpc01vbml0b3JlZCkge1xuICAgICAgZmlsdGVyZWRBc3NldHNDb3B5ID0gZmlsdGVyZWRBc3NldHNDb3B5LmZpbHRlcihhc3NldCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFzc2V0KTtcbiAgICAgICAgY29uc3QgaXNNb25pdG9yZWRBdHRyaWJ1dGUgPSBhc3NldC5hdHRyaWJ1dGVzPy5maW5kKGF0dHIgPT4gYXR0ci5rZXkgPT09ICdpc01vbml0b3JlZCcpO1xuICAgICAgICByZXR1cm4gaXNNb25pdG9yZWRBdHRyaWJ1dGU/LnZhbHVlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyZWRBc3NldHMoZmlsdGVyZWRBc3NldHNDb3B5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVBc3NldFJlY3Vyc2l2ZSA9IChhc3NldHM6IEFzc2V0W10sIGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldD86IEFzc2V0KTogQXNzZXRbXSA9PiB7XG4gICAgcmV0dXJuIGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZEFzc2V0IHx8IGFzc2V0OyAvLyBSZXBsYWNlIHRoZSBvbGQgYXNzZXQgd2l0aCB0aGUgdXBkYXRlZCBvbmUgaWYgcHJvdmlkZWQsIG90aGVyd2lzZSBrZWVwIHRoZSBleGlzdGluZyBhc3NldFxuICAgICAgfVxuICAgICAgLy8gUmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkcmVuIGFzc2V0c1xuICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgY2hpbGRyZW46IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKGFzc2V0LmNoaWxkcmVuLCBpZCwgdXBkYXRlZEFzc2V0KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFzc2V0O1xuICAgIH0pO1xuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHtcbiAgICBzZXRGaWx0ZXJlZEFzc2V0cyhwcmV2QXNzZXRzID0+IHVwZGF0ZUFzc2V0UmVjdXJzaXZlKHByZXZBc3NldHMsIGlkLCB1cGRhdGVkQXNzZXQpKTtcbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0RmlsdGVyZWRBc3NldHMocHJldkFzc2V0cyA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHByZXZBc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmlkICE9PSBpZCk7IC8vIFJlbW92ZSB0aGUgYXNzZXQgd2l0aCB0aGUgc3BlY2lmaWVkIElEXG4gICAgICByZXR1cm4gZmlsdGVyZWQubWFwKGFzc2V0ID0+ICh7IC4uLmFzc2V0LCBjaGlsZHJlbjogYXNzZXQuY2hpbGRyZW4gPyBoYW5kbGVEZWxldGVGcm9tQ2hpbGRyZW4oYXNzZXQuY2hpbGRyZW4sIGlkKSA6IHVuZGVmaW5lZCB9KSk7XG4gICAgfSk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVEZWxldGVGcm9tQ2hpbGRyZW4gPSAoY2hpbGRyZW46IEFzc2V0W10sIGlkOiBudW1iZXIpOiBBc3NldFtdID0+IHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBSZW1vdmUgdGhlIGNoaWxkIGlmIGl0IG1hdGNoZXMgdGhlIElEXG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQuY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGQuY2hpbGRyZW4gPSBoYW5kbGVEZWxldGVGcm9tQ2hpbGRyZW4oY2hpbGQuY2hpbGRyZW4sIGlkKTsgLy8gUmVjdXJzaXZlbHkgZGVsZXRlIGZyb20gY2hpbGRyZW5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEFzc2V0Rm9ybSAvPlxuICAgICAgPEFzc2V0RmlsdGVyIG9uRmlsdGVyPXtoYW5kbGVGaWx0ZXJ9IC8+XG4gICAgICA8QXNzZXRUcmVlIGFzc2V0cz17ZmlsdGVyZWRBc3NldHN9IG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFzc2V0c01vY2tEYXRhIiwiQXNzZXRUcmVlIiwiQXNzZXRGaWx0ZXIiLCJ1c2VBc3NldENvbnRleHQiLCJBc3NldEZvcm0iLCJmaWx0ZXJBc3NldHNCeVR5cGUiLCJhc3NldHMiLCJ0YXJnZXRUeXBlIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJhc3NldCIsInR5cGUiLCJwdXNoIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZENoaWxkcmVuIiwiQXNzZXRNYWluIiwiYXNzZXRQYXJhbSIsIm1lcmdlZEFzc2V0cyIsImZpbHRlcmVkQXNzZXRzIiwic2V0RmlsdGVyZWRBc3NldHMiLCJoYW5kbGVGaWx0ZXIiLCJpc01vbml0b3JlZCIsImZpbHRlcmVkQXNzZXRzQ29weSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJpc01vbml0b3JlZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJmaW5kIiwiYXR0ciIsImtleSIsInZhbHVlIiwidXBkYXRlQXNzZXRSZWN1cnNpdmUiLCJpZCIsInVwZGF0ZWRBc3NldCIsIm1hcCIsImhhbmRsZVVwZGF0ZSIsInByZXZBc3NldHMiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVEZWxldGVGcm9tQ2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJjaGlsZCIsImRpdiIsIm9uRmlsdGVyIiwib25VcGRhdGUiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetMain.tsx\n"));

/***/ })

});