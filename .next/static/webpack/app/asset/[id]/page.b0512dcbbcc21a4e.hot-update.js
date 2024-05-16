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

/***/ "(app-pages-browser)/./src/context/AssetContext.tsx":
/*!**************************************!*\
  !*** ./src/context/AssetContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AssetProvider: function() { return /* binding */ AssetProvider; },\n/* harmony export */   useAssetContext: function() { return /* binding */ useAssetContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useAssetContext,AssetProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst AssetContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useAssetContext = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AssetContext);\n    if (!context) {\n        throw new Error(\"useAssetContext must be used within an AssetProvider\");\n    }\n    return context;\n};\n_s(useAssetContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst AssetProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addAsset = (newAsset)=>{\n        setAssets((prevAssets)=>[\n                ...prevAssets,\n                newAsset\n            ]);\n    };\n    const updateAsset = (id, updatedAsset)=>{\n        setAssets((prevAssets)=>prevAssets.map((asset)=>asset.id === id ? updatedAsset : asset));\n    };\n    const deleteAsset = (id)=>{\n        setAssets((prevAssets)=>prevAssets.filter((asset)=>asset.id !== id));\n    };\n    const onUpdateAsset = (id, updatedAsset)=>{\n        setAssets((prevAssets)=>{\n            console.log(\"update asset!!!\", prevAssets);\n            console.log(\"!!!!! previous\", updatedAsset);\n            const updateAssetRecursive = (prevAssets)=>{\n                return prevAssets.map((asset)=>{\n                    if (asset.id === id) {\n                        // Return a new object with updated values\n                        return {\n                            ...updatedAsset\n                        };\n                    }\n                    // Recursively update children assets\n                    if (asset.children) {\n                        return {\n                            ...asset,\n                            children: updateAssetRecursive(asset.children)\n                        };\n                    }\n                    return asset;\n                });\n            };\n            // Create a new array of assets with the updated values\n            const updatedAssets = prevAssets.map((asset)=>{\n                if (asset.id === id) {\n                    // Return a new object with updated values\n                    return {\n                        ...updatedAsset\n                    };\n                }\n                // Recursively update children assets\n                if (asset.children) {\n                    return {\n                        ...asset,\n                        children: updateAssetRecursive(asset.children)\n                    };\n                }\n                return asset;\n            });\n            return updatedAssets;\n        });\n    };\n    const onDeleteAsset = (id)=>{\n        setAssets((prevAssets)=>{\n            const deleteAssetAndChildren = (assets)=>{\n                return prevAssets.reduce((acc, asset)=>{\n                    if (asset.id === id) {\n                        // If the current asset matches the ID, skip it and its children\n                        return acc;\n                    }\n                    if (asset.children) {\n                        // Recursively delete children\n                        asset.children = deleteAssetAndChildren(asset.children);\n                    }\n                    // Keep the current asset\n                    acc.push(asset);\n                    return acc;\n                }, []);\n            };\n            // Filter out the asset and its children\n            return deleteAssetAndChildren(assets);\n        });\n    };\n    const contextValue = {\n        assets,\n        addAsset,\n        updateAsset,\n        deleteAsset,\n        onUpdateAsset,\n        onDeleteAsset\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/context/AssetContext.tsx\",\n        lineNumber: 119,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(AssetProvider, \"kEok2MW0Auf3zhfZaGBMDTnEYbY=\");\n_c = AssetProvider;\nvar _c;\n$RefreshReg$(_c, \"AssetProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0Fzc2V0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU4RTtBQVk5RSxNQUFNSSw2QkFBZUgsb0RBQWFBLENBQStCSTtBQUUxRCxNQUFNQyxrQkFBa0I7O0lBQzdCLE1BQU1DLFVBQVVMLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNHLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUU7R0FOV0Q7QUFZTixNQUFNRyxnQkFBOEM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3RFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBVSxFQUFFO0lBRWhELE1BQU1VLFdBQVcsQ0FBQ0M7UUFDaEJGLFVBQVVHLENBQUFBLGFBQWM7bUJBQUlBO2dCQUFZRDthQUFTO0lBQ25EO0lBRUEsTUFBTUUsY0FBYyxDQUFDQyxJQUFZQztRQUMvQk4sVUFBVUcsQ0FBQUEsYUFDUkEsV0FBV0ksR0FBRyxDQUFDQyxDQUFBQSxRQUFVQSxNQUFNSCxFQUFFLEtBQUtBLEtBQUtDLGVBQWVFO0lBRTlEO0lBRUEsTUFBTUMsY0FBYyxDQUFDSjtRQUNuQkwsVUFBVUcsQ0FBQUEsYUFBY0EsV0FBV08sTUFBTSxDQUFDRixDQUFBQSxRQUFTQSxNQUFNSCxFQUFFLEtBQUtBO0lBQ2xFO0lBRUEsTUFBTU0sZ0JBQWdCLENBQUNOLElBQVlDO1FBQ2pDTixVQUFVRyxDQUFBQTtZQUNSUyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CVjtZQUMvQlMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlA7WUFDOUIsTUFBTVEsdUJBQXVCLENBQUNYO2dCQUM1QixPQUFPQSxXQUFXSSxHQUFHLENBQUNDLENBQUFBO29CQUNwQixJQUFJQSxNQUFNSCxFQUFFLEtBQUtBLElBQUk7d0JBQ25CLDBDQUEwQzt3QkFDMUMsT0FBTzs0QkFBRSxHQUFHQyxZQUFZO3dCQUFDO29CQUMzQjtvQkFDQSxxQ0FBcUM7b0JBQ3JDLElBQUlFLE1BQU1WLFFBQVEsRUFBRTt3QkFDbEIsT0FBTzs0QkFDTCxHQUFHVSxLQUFLOzRCQUNSVixVQUFVZ0IscUJBQXFCTixNQUFNVixRQUFRO3dCQUMvQztvQkFDRjtvQkFDQSxPQUFPVTtnQkFDVDtZQUNGO1lBRUEsdURBQXVEO1lBQ3ZELE1BQU1PLGdCQUF5QlosV0FBV0ksR0FBRyxDQUFDQyxDQUFBQTtnQkFDNUMsSUFBSUEsTUFBTUgsRUFBRSxLQUFLQSxJQUFJO29CQUNuQiwwQ0FBMEM7b0JBQzFDLE9BQU87d0JBQUUsR0FBR0MsWUFBWTtvQkFBQztnQkFDM0I7Z0JBQ0EscUNBQXFDO2dCQUNyQyxJQUFJRSxNQUFNVixRQUFRLEVBQUU7b0JBQ2xCLE9BQU87d0JBQ0wsR0FBR1UsS0FBSzt3QkFDUlYsVUFBVWdCLHFCQUFxQk4sTUFBTVYsUUFBUTtvQkFDL0M7Z0JBQ0Y7Z0JBQ0EsT0FBT1U7WUFDVDtZQUVBLE9BQU9PO1FBQ1Q7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQixDQUFDWDtRQUNyQkwsVUFBVUcsQ0FBQUE7WUFDUixNQUFNYyx5QkFBeUIsQ0FBQ2xCO2dCQUM5QixPQUFPSSxXQUFXZSxNQUFNLENBQUMsQ0FBQ0MsS0FBS1g7b0JBQzdCLElBQUlBLE1BQU1ILEVBQUUsS0FBS0EsSUFBSTt3QkFDbkIsZ0VBQWdFO3dCQUNoRSxPQUFPYztvQkFDVDtvQkFDQSxJQUFJWCxNQUFNVixRQUFRLEVBQUU7d0JBQ2xCLDhCQUE4Qjt3QkFDOUJVLE1BQU1WLFFBQVEsR0FBR21CLHVCQUF1QlQsTUFBTVYsUUFBUTtvQkFDeEQ7b0JBQ0EseUJBQXlCO29CQUN6QnFCLElBQUlDLElBQUksQ0FBQ1o7b0JBQ1QsT0FBT1c7Z0JBQ1QsR0FBRyxFQUFFO1lBQ1A7WUFFQSx3Q0FBd0M7WUFDeEMsT0FBT0YsdUJBQXVCbEI7UUFDaEM7SUFDRjtJQUVBLE1BQU1zQixlQUFpQztRQUNyQ3RCO1FBQ0FFO1FBQ0FHO1FBQ0FLO1FBQ0FFO1FBQ0FLO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ3hCLGFBQWE4QixRQUFRO1FBQUNDLE9BQU9GO2tCQUFldkI7Ozs7OztBQUN0RCxFQUFFO0lBM0ZXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9Bc3NldENvbnRleHQudHN4PzZiZDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBBc3NldENvbnRleHRUeXBlIHtcbiAgYXNzZXRzOiBBc3NldFtdO1xuICBhZGRBc3NldDogKG5ld0Fzc2V0OiBBc3NldCkgPT4gdm9pZDtcbiAgdXBkYXRlQXNzZXQ6IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB2b2lkO1xuICBkZWxldGVBc3NldDogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uVXBkYXRlQXNzZXQ6IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB2b2lkO1xuICBvbkRlbGV0ZUFzc2V0OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgQXNzZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBc3NldENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgdXNlQXNzZXRDb250ZXh0ID0gKCk6IEFzc2V0Q29udGV4dFR5cGUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBc3NldENvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUFzc2V0Q29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEFzc2V0UHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmludGVyZmFjZSBBc3NldFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQXNzZXRQcm92aWRlcjogUmVhY3QuRkM8QXNzZXRQcm92aWRlclByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlPEFzc2V0W10+KFtdKTtcblxuICBjb25zdCBhZGRBc3NldCA9IChuZXdBc3NldDogQXNzZXQpID0+IHtcbiAgICBzZXRBc3NldHMocHJldkFzc2V0cyA9PiBbLi4ucHJldkFzc2V0cywgbmV3QXNzZXRdKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVBc3NldCA9IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgc2V0QXNzZXRzKHByZXZBc3NldHMgPT5cbiAgICAgIHByZXZBc3NldHMubWFwKGFzc2V0ID0+IChhc3NldC5pZCA9PT0gaWQgPyB1cGRhdGVkQXNzZXQgOiBhc3NldCkpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVBc3NldCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QXNzZXRzKHByZXZBc3NldHMgPT4gcHJldkFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGVBc3NldCA9IChpZDogbnVtYmVyLCB1cGRhdGVkQXNzZXQ6IEFzc2V0KSA9PiB7XG4gICAgc2V0QXNzZXRzKHByZXZBc3NldHMgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBhc3NldCEhIScsIHByZXZBc3NldHMpO1xuICAgICAgY29uc29sZS5sb2coJyEhISEhIHByZXZpb3VzJywgdXBkYXRlZEFzc2V0KVxuICAgICAgY29uc3QgdXBkYXRlQXNzZXRSZWN1cnNpdmUgPSAocHJldkFzc2V0czogQXNzZXRbXSk6IEFzc2V0W10gPT4ge1xuICAgICAgICByZXR1cm4gcHJldkFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCB1cGRhdGVkIHZhbHVlc1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4udXBkYXRlZEFzc2V0IH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZHJlbiBhc3NldHNcbiAgICAgICAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmFzc2V0LFxuICAgICAgICAgICAgICBjaGlsZHJlbjogdXBkYXRlQXNzZXRSZWN1cnNpdmUoYXNzZXQuY2hpbGRyZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXNzZXQ7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgYXJyYXkgb2YgYXNzZXRzIHdpdGggdGhlIHVwZGF0ZWQgdmFsdWVzXG4gICAgICBjb25zdCB1cGRhdGVkQXNzZXRzOiBBc3NldFtdID0gcHJldkFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgLy8gUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIHVwZGF0ZWQgdmFsdWVzXG4gICAgICAgICAgcmV0dXJuIHsgLi4udXBkYXRlZEFzc2V0IH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkcmVuIGFzc2V0c1xuICAgICAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgICBjaGlsZHJlbjogdXBkYXRlQXNzZXRSZWN1cnNpdmUoYXNzZXQuY2hpbGRyZW4pXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXNzZXQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHVwZGF0ZWRBc3NldHM7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVBc3NldCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QXNzZXRzKHByZXZBc3NldHMgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQXNzZXRBbmRDaGlsZHJlbiA9IChhc3NldHM6IEFzc2V0W10pOiBBc3NldFtdID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZBc3NldHMucmVkdWNlKChhY2MsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgYXNzZXQgbWF0Y2hlcyB0aGUgSUQsIHNraXAgaXQgYW5kIGl0cyBjaGlsZHJlblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzc2V0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBkZWxldGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFzc2V0LmNoaWxkcmVuID0gZGVsZXRlQXNzZXRBbmRDaGlsZHJlbihhc3NldC5jaGlsZHJlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEtlZXAgdGhlIGN1cnJlbnQgYXNzZXRcbiAgICAgICAgICBhY2MucHVzaChhc3NldCk7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10gYXMgQXNzZXRbXSk7XG4gICAgICB9O1xuICBcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIGFzc2V0IGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgIHJldHVybiBkZWxldGVBc3NldEFuZENoaWxkcmVuKGFzc2V0cyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udGV4dFZhbHVlOiBBc3NldENvbnRleHRUeXBlID0ge1xuICAgIGFzc2V0cyxcbiAgICBhZGRBc3NldCxcbiAgICB1cGRhdGVBc3NldCxcbiAgICBkZWxldGVBc3NldCxcbiAgICBvblVwZGF0ZUFzc2V0LFxuICAgIG9uRGVsZXRlQXNzZXRcbiAgfTtcblxuICByZXR1cm4gPEFzc2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9Bc3NldENvbnRleHQuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBc3NldENvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBc3NldENvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiLCJBc3NldFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhc3NldHMiLCJzZXRBc3NldHMiLCJhZGRBc3NldCIsIm5ld0Fzc2V0IiwicHJldkFzc2V0cyIsInVwZGF0ZUFzc2V0IiwiaWQiLCJ1cGRhdGVkQXNzZXQiLCJtYXAiLCJhc3NldCIsImRlbGV0ZUFzc2V0IiwiZmlsdGVyIiwib25VcGRhdGVBc3NldCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVBc3NldFJlY3Vyc2l2ZSIsInVwZGF0ZWRBc3NldHMiLCJvbkRlbGV0ZUFzc2V0IiwiZGVsZXRlQXNzZXRBbmRDaGlsZHJlbiIsInJlZHVjZSIsImFjYyIsInB1c2giLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/AssetContext.tsx\n"));

/***/ })

});