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

/***/ "(app-pages-browser)/./src/context/AssetContext.tsx":
/*!**************************************!*\
  !*** ./src/context/AssetContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AssetProvider: function() { return /* binding */ AssetProvider; },\n/* harmony export */   useAssetContext: function() { return /* binding */ useAssetContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useAssetContext,AssetProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst AssetContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useAssetContext = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AssetContext);\n    if (!context) {\n        throw new Error(\"useAssetContext must be used within an AssetProvider\");\n    }\n    return context;\n};\n_s(useAssetContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst AssetProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addAsset = (newAsset)=>{\n        setAssets((prevAssets)=>[\n                ...prevAssets,\n                newAsset\n            ]);\n    };\n    const updateAsset = (id, updatedAsset)=>{\n        setAssets((prevAssets)=>prevAssets.map((asset)=>asset.id === id ? updatedAsset : asset));\n    };\n    const deleteAsset = (id)=>{\n        setAssets((prevAssets)=>prevAssets.filter((asset)=>asset.id !== id));\n    };\n    const onUpdateAsset = (id, updatedAsset)=>{\n        setAssets((prevAssets)=>{\n            const updateAssetRecursive = (prevAssets)=>{\n                return prevAssets.map((asset)=>{\n                    if (asset.id === id) {\n                        // Return a new object with updated values\n                        return {\n                            ...updatedAsset\n                        };\n                    }\n                    // Recursively update children assets\n                    if (asset.children) {\n                        return {\n                            ...asset,\n                            children: updateAssetRecursive(asset.children)\n                        };\n                    }\n                    return asset;\n                });\n            };\n            // Create a new array of assets with the updated values\n            const updatedAssets = prevAssets.map((asset)=>{\n                if (asset.id === id) {\n                    // Return a new object with updated values\n                    return {\n                        ...updatedAsset\n                    };\n                }\n                // Recursively update children assets\n                if (asset.children) {\n                    return {\n                        ...asset,\n                        children: updateAssetRecursive(asset.children)\n                    };\n                }\n                return asset;\n            });\n            return updatedAssets;\n        });\n    };\n    const onDeleteAsset = (id)=>{\n        setAssets((prevAssets)=>{\n            const deleteAssetAndChildren = (assets)=>{\n                return prevAssets.reduce((acc, asset)=>{\n                    if (asset.id === id) {\n                        // If the current asset matches the ID, skip it and its children\n                        return acc;\n                    }\n                    if (asset.children) {\n                        // Recursively delete children\n                        asset.children = deleteAssetAndChildren(asset.children);\n                    }\n                    // Keep the current asset\n                    acc.push(asset);\n                    return acc;\n                }, []);\n            };\n            // Filter out the asset and its children\n            return deleteAssetAndChildren(assets);\n        });\n    };\n    const contextValue = {\n        assets,\n        addAsset,\n        updateAsset,\n        deleteAsset,\n        onUpdateAsset,\n        onDeleteAsset\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/context/AssetContext.tsx\",\n        lineNumber: 117,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(AssetProvider, \"kEok2MW0Auf3zhfZaGBMDTnEYbY=\");\n_c = AssetProvider;\nvar _c;\n$RefreshReg$(_c, \"AssetProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0Fzc2V0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU4RTtBQVk5RSxNQUFNSSw2QkFBZUgsb0RBQWFBLENBQStCSTtBQUUxRCxNQUFNQyxrQkFBa0I7O0lBQzdCLE1BQU1DLFVBQVVMLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNHLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUU7R0FOV0Q7QUFZTixNQUFNRyxnQkFBOEM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3RFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBVSxFQUFFO0lBRWhELE1BQU1VLFdBQVcsQ0FBQ0M7UUFDaEJGLFVBQVVHLENBQUFBLGFBQWM7bUJBQUlBO2dCQUFZRDthQUFTO0lBQ25EO0lBRUEsTUFBTUUsY0FBYyxDQUFDQyxJQUFZQztRQUMvQk4sVUFBVUcsQ0FBQUEsYUFDUkEsV0FBV0ksR0FBRyxDQUFDQyxDQUFBQSxRQUFVQSxNQUFNSCxFQUFFLEtBQUtBLEtBQUtDLGVBQWVFO0lBRTlEO0lBRUEsTUFBTUMsY0FBYyxDQUFDSjtRQUNuQkwsVUFBVUcsQ0FBQUEsYUFBY0EsV0FBV08sTUFBTSxDQUFDRixDQUFBQSxRQUFTQSxNQUFNSCxFQUFFLEtBQUtBO0lBQ2xFO0lBRUEsTUFBTU0sZ0JBQWdCLENBQUNOLElBQVlDO1FBQ2pDTixVQUFVRyxDQUFBQTtZQUNSLE1BQU1TLHVCQUF1QixDQUFDVDtnQkFDNUIsT0FBT0EsV0FBV0ksR0FBRyxDQUFDQyxDQUFBQTtvQkFDcEIsSUFBSUEsTUFBTUgsRUFBRSxLQUFLQSxJQUFJO3dCQUNuQiwwQ0FBMEM7d0JBQzFDLE9BQU87NEJBQUUsR0FBR0MsWUFBWTt3QkFBQztvQkFDM0I7b0JBQ0EscUNBQXFDO29CQUNyQyxJQUFJRSxNQUFNVixRQUFRLEVBQUU7d0JBQ2xCLE9BQU87NEJBQ0wsR0FBR1UsS0FBSzs0QkFDUlYsVUFBVWMscUJBQXFCSixNQUFNVixRQUFRO3dCQUMvQztvQkFDRjtvQkFDQSxPQUFPVTtnQkFDVDtZQUNGO1lBRUEsdURBQXVEO1lBQ3ZELE1BQU1LLGdCQUF5QlYsV0FBV0ksR0FBRyxDQUFDQyxDQUFBQTtnQkFDNUMsSUFBSUEsTUFBTUgsRUFBRSxLQUFLQSxJQUFJO29CQUNuQiwwQ0FBMEM7b0JBQzFDLE9BQU87d0JBQUUsR0FBR0MsWUFBWTtvQkFBQztnQkFDM0I7Z0JBQ0EscUNBQXFDO2dCQUNyQyxJQUFJRSxNQUFNVixRQUFRLEVBQUU7b0JBQ2xCLE9BQU87d0JBQ0wsR0FBR1UsS0FBSzt3QkFDUlYsVUFBVWMscUJBQXFCSixNQUFNVixRQUFRO29CQUMvQztnQkFDRjtnQkFDQSxPQUFPVTtZQUNUO1lBRUEsT0FBT0s7UUFDVDtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCLENBQUNUO1FBQ3JCTCxVQUFVRyxDQUFBQTtZQUNSLE1BQU1ZLHlCQUF5QixDQUFDaEI7Z0JBQzlCLE9BQU9JLFdBQVdhLE1BQU0sQ0FBQyxDQUFDQyxLQUFLVDtvQkFDN0IsSUFBSUEsTUFBTUgsRUFBRSxLQUFLQSxJQUFJO3dCQUNuQixnRUFBZ0U7d0JBQ2hFLE9BQU9ZO29CQUNUO29CQUNBLElBQUlULE1BQU1WLFFBQVEsRUFBRTt3QkFDbEIsOEJBQThCO3dCQUM5QlUsTUFBTVYsUUFBUSxHQUFHaUIsdUJBQXVCUCxNQUFNVixRQUFRO29CQUN4RDtvQkFDQSx5QkFBeUI7b0JBQ3pCbUIsSUFBSUMsSUFBSSxDQUFDVjtvQkFDVCxPQUFPUztnQkFDVCxHQUFHLEVBQUU7WUFDUDtZQUVBLHdDQUF3QztZQUN4QyxPQUFPRix1QkFBdUJoQjtRQUNoQztJQUNGO0lBRUEsTUFBTW9CLGVBQWlDO1FBQ3JDcEI7UUFDQUU7UUFDQUc7UUFDQUs7UUFDQUU7UUFDQUc7SUFDRjtJQUVBLHFCQUFPLDhEQUFDdEIsYUFBYTRCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQWVyQjs7Ozs7O0FBQ3RELEVBQUU7SUF6RldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0Fzc2V0Q29udGV4dC50c3g/NmJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIEFzc2V0Q29udGV4dFR5cGUge1xuICBhc3NldHM6IEFzc2V0W107XG4gIGFkZEFzc2V0OiAobmV3QXNzZXQ6IEFzc2V0KSA9PiB2b2lkO1xuICB1cGRhdGVBc3NldDogKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHZvaWQ7XG4gIGRlbGV0ZUFzc2V0OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgb25VcGRhdGVBc3NldDogKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHZvaWQ7XG4gIG9uRGVsZXRlQXNzZXQ6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBBc3NldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEFzc2V0Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCB1c2VBc3NldENvbnRleHQgPSAoKTogQXNzZXRDb250ZXh0VHlwZSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFzc2V0Q29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXNzZXRDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXNzZXRQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuaW50ZXJmYWNlIEFzc2V0UHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBc3NldFByb3ZpZGVyOiBSZWFjdC5GQzxBc3NldFByb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGU8QXNzZXRbXT4oW10pO1xuXG4gIGNvbnN0IGFkZEFzc2V0ID0gKG5ld0Fzc2V0OiBBc3NldCkgPT4ge1xuICAgIHNldEFzc2V0cyhwcmV2QXNzZXRzID0+IFsuLi5wcmV2QXNzZXRzLCBuZXdBc3NldF0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUFzc2V0ID0gKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHtcbiAgICBzZXRBc3NldHMocHJldkFzc2V0cyA9PlxuICAgICAgcHJldkFzc2V0cy5tYXAoYXNzZXQgPT4gKGFzc2V0LmlkID09PSBpZCA/IHVwZGF0ZWRBc3NldCA6IGFzc2V0KSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUFzc2V0ID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRBc3NldHMocHJldkFzc2V0cyA9PiBwcmV2QXNzZXRzLmZpbHRlcihhc3NldCA9PiBhc3NldC5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZUFzc2V0ID0gKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHtcbiAgICBzZXRBc3NldHMocHJldkFzc2V0cyA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVBc3NldFJlY3Vyc2l2ZSA9IChwcmV2QXNzZXRzOiBBc3NldFtdKTogQXNzZXRbXSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2QXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIHVwZGF0ZWQgdmFsdWVzXG4gICAgICAgICAgICByZXR1cm4geyAuLi51cGRhdGVkQXNzZXQgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkcmVuIGFzc2V0c1xuICAgICAgICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiB1cGRhdGVBc3NldFJlY3Vyc2l2ZShhc3NldC5jaGlsZHJlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhc3NldDtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICBcbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBhcnJheSBvZiBhc3NldHMgd2l0aCB0aGUgdXBkYXRlZCB2YWx1ZXNcbiAgICAgIGNvbnN0IHVwZGF0ZWRBc3NldHM6IEFzc2V0W10gPSBwcmV2QXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIGlmIChhc3NldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAvLyBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggdXBkYXRlZCB2YWx1ZXNcbiAgICAgICAgICByZXR1cm4geyAuLi51cGRhdGVkQXNzZXQgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWN1cnNpdmVseSB1cGRhdGUgY2hpbGRyZW4gYXNzZXRzXG4gICAgICAgIGlmIChhc3NldC5jaGlsZHJlbikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hc3NldCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiB1cGRhdGVBc3NldFJlY3Vyc2l2ZShhc3NldC5jaGlsZHJlbilcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3NldDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdXBkYXRlZEFzc2V0cztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZUFzc2V0ID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRBc3NldHMocHJldkFzc2V0cyA9PiB7XG4gICAgICBjb25zdCBkZWxldGVBc3NldEFuZENoaWxkcmVuID0gKGFzc2V0czogQXNzZXRbXSk6IEFzc2V0W10gPT4ge1xuICAgICAgICByZXR1cm4gcHJldkFzc2V0cy5yZWR1Y2UoKGFjYywgYXNzZXQpID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBhc3NldCBtYXRjaGVzIHRoZSBJRCwgc2tpcCBpdCBhbmQgaXRzIGNoaWxkcmVuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXNzZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGRlbGV0ZSBjaGlsZHJlblxuICAgICAgICAgICAgYXNzZXQuY2hpbGRyZW4gPSBkZWxldGVBc3NldEFuZENoaWxkcmVuKGFzc2V0LmNoaWxkcmVuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gS2VlcCB0aGUgY3VycmVudCBhc3NldFxuICAgICAgICAgIGFjYy5wdXNoKGFzc2V0KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSBhcyBBc3NldFtdKTtcbiAgICAgIH07XG4gIFxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgYXNzZXQgYW5kIGl0cyBjaGlsZHJlblxuICAgICAgcmV0dXJuIGRlbGV0ZUFzc2V0QW5kQ2hpbGRyZW4oYXNzZXRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb250ZXh0VmFsdWU6IEFzc2V0Q29udGV4dFR5cGUgPSB7XG4gICAgYXNzZXRzLFxuICAgIGFkZEFzc2V0LFxuICAgIHVwZGF0ZUFzc2V0LFxuICAgIGRlbGV0ZUFzc2V0LFxuICAgIG9uVXBkYXRlQXNzZXQsXG4gICAgb25EZWxldGVBc3NldFxuICB9O1xuXG4gIHJldHVybiA8QXNzZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PntjaGlsZHJlbn08L0Fzc2V0Q29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFzc2V0Q29udGV4dCIsInVuZGVmaW5lZCIsInVzZUFzc2V0Q29udGV4dCIsImNvbnRleHQiLCJFcnJvciIsIkFzc2V0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFzc2V0cyIsInNldEFzc2V0cyIsImFkZEFzc2V0IiwibmV3QXNzZXQiLCJwcmV2QXNzZXRzIiwidXBkYXRlQXNzZXQiLCJpZCIsInVwZGF0ZWRBc3NldCIsIm1hcCIsImFzc2V0IiwiZGVsZXRlQXNzZXQiLCJmaWx0ZXIiLCJvblVwZGF0ZUFzc2V0IiwidXBkYXRlQXNzZXRSZWN1cnNpdmUiLCJ1cGRhdGVkQXNzZXRzIiwib25EZWxldGVBc3NldCIsImRlbGV0ZUFzc2V0QW5kQ2hpbGRyZW4iLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/AssetContext.tsx\n"));

/***/ })

});