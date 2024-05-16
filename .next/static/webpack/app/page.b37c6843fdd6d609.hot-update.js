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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./src/types.ts\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetForm = (param)=>{\n    let { initialAsset } = param;\n    _s();\n    const { addAsset, updateAsset } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Set default type\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Populate form fields with initial asset data if provided\n        if (initialAsset) {\n            setName(initialAsset.name);\n            setType(initialAsset.type);\n        }\n    }, [\n        initialAsset\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Create a new asset object with the form data\n        const newAsset = {\n            id: initialAsset ? initialAsset.id : Math.floor(Math.random() * 1000),\n            name,\n            type\n        };\n        // Call addAsset or updateAsset function from context based on whether an initial asset is provided\n        if (initialAsset) {\n            updateAsset(initialAsset.id, newAsset); // Update existing asset\n        } else {\n            addAsset(newAsset); // Add new asset\n        }\n        // Reset form fields\n        setName(\"\");\n        setType(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Reset type to default\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                onChange: (e)=>setName(e.target.value),\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: type,\n                onChange: (e)=>setType(e.target.value),\n                children: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType).map((assetType)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: assetType,\n                        children: assetType\n                    }, assetType, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                children: initialAsset ? \"Update Asset\" : \"Add Asset\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetForm, \"jdrm2v9q41bFAVpJN572oehYkLk=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext\n    ];\n});\n_c = AssetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetForm);\nvar _c;\n$RefreshReg$(_c, \"AssetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDUDtBQUNjO0FBTTFELE1BQU1LLFlBQXNDO1FBQUMsRUFBRUMsWUFBWSxFQUFFOztJQUMzRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdKLHNFQUFlQTtJQUNqRCxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFZRSw2Q0FBU0EsQ0FBQ1UsQ0FBQyxHQUFHLG1CQUFtQjtJQUU3RVgsZ0RBQVNBLENBQUM7UUFDUiwyREFBMkQ7UUFDM0QsSUFBSUksY0FBYztZQUNoQkksUUFBUUosYUFBYUcsSUFBSTtZQUN6QkcsUUFBUU4sYUFBYUssSUFBSTtRQUMzQjtJQUNGLEdBQUc7UUFBQ0w7S0FBYTtJQUVqQixNQUFNUSxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLCtDQUErQztRQUMvQyxNQUFNQyxXQUFrQjtZQUN0QkMsSUFBSVosZUFBZUEsYUFBYVksRUFBRSxHQUFHQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztZQUNoRVo7WUFDQUU7UUFFRjtRQUVBLG1HQUFtRztRQUNuRyxJQUFJTCxjQUFjO1lBQ2hCRSxZQUFZRixhQUFhWSxFQUFFLEVBQUVELFdBQVcsd0JBQXdCO1FBQ2xFLE9BQU87WUFDTFYsU0FBU1UsV0FBVyxnQkFBZ0I7UUFDdEM7UUFFQSxvQkFBb0I7UUFDcEJQLFFBQVE7UUFDUkUsUUFBUVQsNkNBQVNBLENBQUNVLENBQUMsR0FBRyx3QkFBd0I7SUFDaEQ7SUFFQSxxQkFDRSw4REFBQ1M7UUFBS0MsVUFBVVQ7OzBCQUNkLDhEQUFDVTtnQkFBTWIsTUFBSztnQkFBT2MsT0FBT2hCO2dCQUFNaUIsVUFBVVgsQ0FBQUEsSUFBS0wsUUFBUUssRUFBRVksTUFBTSxDQUFDRixLQUFLO2dCQUFHRyxhQUFZOzs7Ozs7MEJBQ3BGLDhEQUFDQztnQkFBT0osT0FBT2Q7Z0JBQU1lLFVBQVVYLENBQUFBLElBQUtILFFBQVFHLEVBQUVZLE1BQU0sQ0FBQ0YsS0FBSzswQkFDdkRLLE9BQU9DLE1BQU0sQ0FBQzVCLDZDQUFTQSxFQUFFNkIsR0FBRyxDQUFDQyxDQUFBQSwwQkFDNUIsOERBQUNDO3dCQUF1QlQsT0FBT1E7a0NBQVlBO3VCQUE5QkE7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDRTtnQkFBT3hCLE1BQUs7Z0JBQVN5QixXQUFVOzBCQUM3QjlCLGVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7QUFJekM7R0FqRE1EOztRQUM4QkQsa0VBQWVBOzs7S0FEN0NDO0FBbUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3g/YzE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFzc2V0LCBBc3NldFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VBc3NldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fzc2V0Q29udGV4dCc7XG5cbmludGVyZmFjZSBBc3NldEZvcm1Qcm9wcyB7XG4gIGluaXRpYWxBc3NldD86IEFzc2V0OyAvLyBPcHRpb25hbCBpbml0aWFsIGFzc2V0IGZvciB1cGRhdGVcbn1cblxuY29uc3QgQXNzZXRGb3JtOiBSZWFjdC5GQzxBc3NldEZvcm1Qcm9wcz4gPSAoeyBpbml0aWFsQXNzZXQgfSkgPT4ge1xuICBjb25zdCB7IGFkZEFzc2V0LCB1cGRhdGVBc3NldCB9ID0gdXNlQXNzZXRDb250ZXh0KCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8QXNzZXRUeXBlPihBc3NldFR5cGUuQSk7IC8vIFNldCBkZWZhdWx0IHR5cGVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBvcHVsYXRlIGZvcm0gZmllbGRzIHdpdGggaW5pdGlhbCBhc3NldCBkYXRhIGlmIHByb3ZpZGVkXG4gICAgaWYgKGluaXRpYWxBc3NldCkge1xuICAgICAgc2V0TmFtZShpbml0aWFsQXNzZXQubmFtZSk7XG4gICAgICBzZXRUeXBlKGluaXRpYWxBc3NldC50eXBlKTtcbiAgICB9XG4gIH0sIFtpbml0aWFsQXNzZXRdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGFzc2V0IG9iamVjdCB3aXRoIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zdCBuZXdBc3NldDogQXNzZXQgPSB7XG4gICAgICBpZDogaW5pdGlhbEFzc2V0ID8gaW5pdGlhbEFzc2V0LmlkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksIC8vIEdlbmVyYXRlIGEgcmFuZG9tIElEIGlmIG5vdCB1cGRhdGluZ1xuICAgICAgbmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICAvLyBBZGQgb3RoZXIgZmllbGRzIGFzIG5lZWRlZFxuICAgIH07XG5cbiAgICAvLyBDYWxsIGFkZEFzc2V0IG9yIHVwZGF0ZUFzc2V0IGZ1bmN0aW9uIGZyb20gY29udGV4dCBiYXNlZCBvbiB3aGV0aGVyIGFuIGluaXRpYWwgYXNzZXQgaXMgcHJvdmlkZWRcbiAgICBpZiAoaW5pdGlhbEFzc2V0KSB7XG4gICAgICB1cGRhdGVBc3NldChpbml0aWFsQXNzZXQuaWQsIG5ld0Fzc2V0KTsgLy8gVXBkYXRlIGV4aXN0aW5nIGFzc2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEFzc2V0KG5ld0Fzc2V0KTsgLy8gQWRkIG5ldyBhc3NldFxuICAgIH1cblxuICAgIC8vIFJlc2V0IGZvcm0gZmllbGRzXG4gICAgc2V0TmFtZSgnJyk7XG4gICAgc2V0VHlwZShBc3NldFR5cGUuQSk7IC8vIFJlc2V0IHR5cGUgdG8gZGVmYXVsdFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICA8c2VsZWN0IHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17ZSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlIGFzIEFzc2V0VHlwZSl9PlxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhBc3NldFR5cGUpLm1hcChhc3NldFR5cGUgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldFR5cGV9IHZhbHVlPXthc3NldFR5cGV9Pnthc3NldFR5cGV9PC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICB7LyogQWRkIG90aGVyIGZvcm0gZmllbGRzIGFzIG5lZWRlZCAqL31cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XG4gICAgICAgIHtpbml0aWFsQXNzZXQgPyAnVXBkYXRlIEFzc2V0JyA6ICdBZGQgQXNzZXQnfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXNzZXRUeXBlIiwidXNlQXNzZXRDb250ZXh0IiwiQXNzZXRGb3JtIiwiaW5pdGlhbEFzc2V0IiwiYWRkQXNzZXQiLCJ1cGRhdGVBc3NldCIsIm5hbWUiLCJzZXROYW1lIiwidHlwZSIsInNldFR5cGUiLCJBIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3QXNzZXQiLCJpZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiYXNzZXRUeXBlIiwib3B0aW9uIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetForm.tsx\n"));

/***/ })

});