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

/***/ "(app-pages-browser)/./src/components/AssetForm.tsx":
/*!**************************************!*\
  !*** ./src/components/AssetForm.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./src/types.ts\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetForm = (param)=>{\n    let { initialAsset, onSubmit, onCancel } = param;\n    _s();\n    const { addAsset, updateAsset } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Set default type\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Populate form fields with initial asset data if provided\n        if (initialAsset) {\n            setName(initialAsset.name);\n            setType(initialAsset.type);\n        }\n    }, [\n        initialAsset\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Create a new asset object with the form data\n        const newAsset = {\n            id: initialAsset ? initialAsset.id : Math.floor(Math.random() * 1000),\n            name,\n            type\n        };\n        // Call addAsset or updateAsset function from context based on whether an initial asset is provided\n        if (initialAsset) {\n            updateAsset(initialAsset.id, newAsset); // Update existing asset\n        } else {\n            addAsset(newAsset); // Add new asset\n        }\n        // Reset form fields\n        setName(\"\");\n        setType(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Reset type to default\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                onChange: (e)=>setName(e.target.value),\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: type,\n                onChange: (e)=>setType(e.target.value),\n                children: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType).map((assetType)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: assetType,\n                        children: assetType\n                    }, assetType, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                children: initialAsset ? \"Update Asset\" : \"Add Asset\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetForm, \"jdrm2v9q41bFAVpJN572oehYkLk=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext\n    ];\n});\n_c = AssetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetForm);\nvar _c;\n$RefreshReg$(_c, \"AssetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDUDtBQUNjO0FBUTFELE1BQU1LLFlBQXNDO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0UsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFHTixzRUFBZUE7SUFDakQsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBWUUsNkNBQVNBLENBQUNZLENBQUMsR0FBRyxtQkFBbUI7SUFFN0ViLGdEQUFTQSxDQUFDO1FBQ1IsMkRBQTJEO1FBQzNELElBQUlJLGNBQWM7WUFDaEJNLFFBQVFOLGFBQWFLLElBQUk7WUFDekJHLFFBQVFSLGFBQWFPLElBQUk7UUFDM0I7SUFDRixHQUFHO1FBQUNQO0tBQWE7SUFFakIsTUFBTVUsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQiwrQ0FBK0M7UUFDL0MsTUFBTUMsV0FBa0I7WUFDdEJDLElBQUlkLGVBQWVBLGFBQWFjLEVBQUUsR0FBR0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7WUFDaEVaO1lBQ0FFO1FBRUY7UUFFQSxtR0FBbUc7UUFDbkcsSUFBSVAsY0FBYztZQUNoQkksWUFBWUosYUFBYWMsRUFBRSxFQUFFRCxXQUFXLHdCQUF3QjtRQUNsRSxPQUFPO1lBQ0xWLFNBQVNVLFdBQVcsZ0JBQWdCO1FBQ3RDO1FBRUEsb0JBQW9CO1FBQ3BCUCxRQUFRO1FBQ1JFLFFBQVFYLDZDQUFTQSxDQUFDWSxDQUFDLEdBQUcsd0JBQXdCO0lBQ2hEO0lBRUEscUJBQ0UsOERBQUNTO1FBQUtqQixVQUFVUzs7MEJBQ2QsOERBQUNTO2dCQUFNWixNQUFLO2dCQUFPYSxPQUFPZjtnQkFBTWdCLFVBQVVWLENBQUFBLElBQUtMLFFBQVFLLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSztnQkFBR0csYUFBWTs7Ozs7OzBCQUNwRiw4REFBQ0M7Z0JBQU9KLE9BQU9iO2dCQUFNYyxVQUFVVixDQUFBQSxJQUFLSCxRQUFRRyxFQUFFVyxNQUFNLENBQUNGLEtBQUs7MEJBQ3ZESyxPQUFPQyxNQUFNLENBQUM3Qiw2Q0FBU0EsRUFBRThCLEdBQUcsQ0FBQ0MsQ0FBQUEsMEJBQzVCLDhEQUFDQzt3QkFBdUJULE9BQU9RO2tDQUFZQTt1QkFBOUJBOzs7Ozs7Ozs7OzBCQUlqQiw4REFBQ0U7Z0JBQU92QixNQUFLO2dCQUFTd0IsV0FBVTswQkFDN0IvQixlQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7O0FBSXpDO0dBakRNRDs7UUFDOEJELGtFQUFlQTs7O0tBRDdDQztBQW1ETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldEZvcm0udHN4P2MxNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXNzZXRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Bc3NldENvbnRleHQnO1xuXG5pbnRlcmZhY2UgQXNzZXRGb3JtUHJvcHMge1xuICBpbml0aWFsQXNzZXQ/OiBBc3NldDsgLy8gT3B0aW9uYWwgaW5pdGlhbCBhc3NldCBmb3IgdXBkYXRlXG4gIG9uU3VibWl0OiAoaWQ6IG51bWJlciwgdXBkYXRlZEFzc2V0OiBBc3NldCkgPT4gdm9pZDtcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFzc2V0Rm9ybTogUmVhY3QuRkM8QXNzZXRGb3JtUHJvcHM+ID0gKHsgaW5pdGlhbEFzc2V0LCBvblN1Ym1pdCwgb25DYW5jZWwgfSkgPT4ge1xuICBjb25zdCB7IGFkZEFzc2V0LCB1cGRhdGVBc3NldCB9ID0gdXNlQXNzZXRDb250ZXh0KCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8QXNzZXRUeXBlPihBc3NldFR5cGUuQSk7IC8vIFNldCBkZWZhdWx0IHR5cGVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBvcHVsYXRlIGZvcm0gZmllbGRzIHdpdGggaW5pdGlhbCBhc3NldCBkYXRhIGlmIHByb3ZpZGVkXG4gICAgaWYgKGluaXRpYWxBc3NldCkge1xuICAgICAgc2V0TmFtZShpbml0aWFsQXNzZXQubmFtZSk7XG4gICAgICBzZXRUeXBlKGluaXRpYWxBc3NldC50eXBlKTtcbiAgICB9XG4gIH0sIFtpbml0aWFsQXNzZXRdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGFzc2V0IG9iamVjdCB3aXRoIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zdCBuZXdBc3NldDogQXNzZXQgPSB7XG4gICAgICBpZDogaW5pdGlhbEFzc2V0ID8gaW5pdGlhbEFzc2V0LmlkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksIC8vIEdlbmVyYXRlIGEgcmFuZG9tIElEIGlmIG5vdCB1cGRhdGluZ1xuICAgICAgbmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICAvLyBBZGQgb3RoZXIgZmllbGRzIGFzIG5lZWRlZFxuICAgIH07XG5cbiAgICAvLyBDYWxsIGFkZEFzc2V0IG9yIHVwZGF0ZUFzc2V0IGZ1bmN0aW9uIGZyb20gY29udGV4dCBiYXNlZCBvbiB3aGV0aGVyIGFuIGluaXRpYWwgYXNzZXQgaXMgcHJvdmlkZWRcbiAgICBpZiAoaW5pdGlhbEFzc2V0KSB7XG4gICAgICB1cGRhdGVBc3NldChpbml0aWFsQXNzZXQuaWQsIG5ld0Fzc2V0KTsgLy8gVXBkYXRlIGV4aXN0aW5nIGFzc2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEFzc2V0KG5ld0Fzc2V0KTsgLy8gQWRkIG5ldyBhc3NldFxuICAgIH1cblxuICAgIC8vIFJlc2V0IGZvcm0gZmllbGRzXG4gICAgc2V0TmFtZSgnJyk7XG4gICAgc2V0VHlwZShBc3NldFR5cGUuQSk7IC8vIFJlc2V0IHR5cGUgdG8gZGVmYXVsdFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICA8c2VsZWN0IHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17ZSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlIGFzIEFzc2V0VHlwZSl9PlxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhBc3NldFR5cGUpLm1hcChhc3NldFR5cGUgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldFR5cGV9IHZhbHVlPXthc3NldFR5cGV9Pnthc3NldFR5cGV9PC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICB7LyogQWRkIG90aGVyIGZvcm0gZmllbGRzIGFzIG5lZWRlZCAqL31cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XG4gICAgICAgIHtpbml0aWFsQXNzZXQgPyAnVXBkYXRlIEFzc2V0JyA6ICdBZGQgQXNzZXQnfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXNzZXRUeXBlIiwidXNlQXNzZXRDb250ZXh0IiwiQXNzZXRGb3JtIiwiaW5pdGlhbEFzc2V0Iiwib25TdWJtaXQiLCJvbkNhbmNlbCIsImFkZEFzc2V0IiwidXBkYXRlQXNzZXQiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiQSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0Fzc2V0IiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmb3JtIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJhc3NldFR5cGUiLCJvcHRpb24iLCJidXR0b24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetForm.tsx\n"));

/***/ })

});