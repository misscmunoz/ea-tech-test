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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./src/types.ts\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetForm = (param)=>{\n    let { initialAsset, onSubmit, onCancel } = param;\n    _s();\n    const { addAsset, assets } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Set default type\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Populate form fields with initial asset data if provided\n        if (initialAsset) {\n            setName(initialAsset.name);\n            setType(initialAsset.type);\n            setDescription(initialAsset.description);\n            setAttributes(initialAsset.attributes || []);\n        }\n    }, [\n        initialAsset\n    ]);\n    const handleNameChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleAttributeChange = (index, e)=>{\n        const { name, value } = e.target;\n        const updatedAttributes = [\n            ...attributes\n        ];\n        updatedAttributes[index] = {\n            ...updatedAttributes[index],\n            [name]: value\n        };\n        setAttributes(updatedAttributes);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Create a new asset object with the form data\n        const newAsset = {\n            id: initialAsset ? initialAsset.id : Math.floor(Math.random() * 1000),\n            name,\n            type,\n            description,\n            attributes\n        };\n        // Call addAsset or updateAsset function from context based on whether an initial asset is provided\n        if (onSubmit) {\n            if (initialAsset) {\n                onSubmit(initialAsset.id, newAsset); // Update existing asset\n            }\n        } else {\n            addAsset(newAsset); // Add new asset\n        }\n        // Reset form fields\n        setName(\"\");\n        setType(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Reset type to default\n        setDescription(\"\");\n        setAttributes([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"name\",\n                value: name,\n                onChange: handleNameChange,\n                placeholder: \"Name\",\n                className: \"border border-gray-300 rounded-md px-2 py-1 mb-2\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"type\",\n                children: \"Type\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"type\",\n                value: type,\n                onChange: handleTypeChange,\n                className: \"border border-gray-300 rounded-md px-2 py-1 mb-2\",\n                children: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType).map((assetType)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: assetType,\n                        children: assetType\n                    }, assetType, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"description\",\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"description\",\n                value: description,\n                onChange: handleDescriptionChange,\n                placeholder: \"Description\",\n                className: \"border border-gray-300 rounded-md px-2 py-1 mb-2\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Attributes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"key\",\n                                    value: attribute.key,\n                                    onChange: (e)=>handleAttributeChange(index, e),\n                                    placeholder: \"Key\",\n                                    className: \"border border-gray-300 rounded-md px-2 py-1 mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"value\",\n                                    value: attribute.value,\n                                    onChange: (e)=>handleAttributeChange(index, e),\n                                    placeholder: \"Value\",\n                                    className: \"border border-gray-300 rounded-md px-2 py-1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>setAttributes([\n                                ...attributes,\n                                {\n                                    key: \"\",\n                                    value: \"\"\n                                }\n                            ]),\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded\",\n                        children: \"Add Attribute\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                children: initialAsset ? \"Update Asset\" : \"Add Asset\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            initialAsset && onCancel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: onCancel,\n                className: \"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2\",\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetForm, \"PmKy4QxyT0OPdEvUEtxHqJyzJzk=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext\n    ];\n});\n_c = AssetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetForm);\nvar _c;\n$RefreshReg$(_c, \"AssetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDUztBQUNGO0FBUTFELE1BQU1LLFlBQXNDO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0UsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRSxHQUFHTixzRUFBZUE7SUFDNUMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBWUUsNkNBQVNBLENBQUNZLENBQUMsR0FBRyxtQkFBbUI7SUFDN0UsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBcUI7SUFDbkUsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQW1CLEVBQUU7SUFFakVDLGdEQUFTQSxDQUFDO1FBQ1IsMkRBQTJEO1FBQzNELElBQUlJLGNBQWM7WUFDaEJNLFFBQVFOLGFBQWFLLElBQUk7WUFDekJHLFFBQVFSLGFBQWFPLElBQUk7WUFDekJJLGVBQWVYLGFBQWFVLFdBQVc7WUFDdkNHLGNBQWNiLGFBQWFZLFVBQVUsSUFBSSxFQUFFO1FBQzdDO0lBQ0YsR0FBRztRQUFDWjtLQUFhO0lBRWpCLE1BQU1jLG1CQUFtQixDQUFDQztRQUN4QlQsUUFBUVMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNIO1FBQ3hCUCxRQUFRTyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNRSwwQkFBMEIsQ0FBQ0o7UUFDL0JKLGVBQWVJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1HLHdCQUF3QixDQUFDQyxPQUFlTjtRQUM1QyxNQUFNLEVBQUVWLElBQUksRUFBRVksS0FBSyxFQUFFLEdBQUdGLEVB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QSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3g/YzE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFzc2V0LCBBc3NldFR5cGUsIEFzc2V0QXR0cmlidXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXNzZXRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Bc3NldENvbnRleHQnO1xuXG5pbnRlcmZhY2UgQXNzZXRGb3JtUHJvcHMge1xuICBpbml0aWFsQXNzZXQ/OiBBc3NldDsgLy8gT3B0aW9uYWwgaW5pdGlhbCBhc3NldCBmb3IgdXBkYXRlXG4gIG9uU3VibWl0PzogKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHZvaWQ7IC8vIE9wdGlvbmFsIG9uU3VibWl0IGZvciB1cGRhdGluZ1xuICBvbkNhbmNlbD86ICgpID0+IHZvaWQ7IC8vIE9wdGlvbmFsIG9uQ2FuY2VsIGZvciB1cGRhdGluZ1xufVxuXG5jb25zdCBBc3NldEZvcm06IFJlYWN0LkZDPEFzc2V0Rm9ybVByb3BzPiA9ICh7IGluaXRpYWxBc3NldCwgb25TdWJtaXQsIG9uQ2FuY2VsIH0pID0+IHtcbiAgY29uc3QgeyBhZGRBc3NldCwgYXNzZXRzIH0gPSB1c2VBc3NldENvbnRleHQoKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxBc3NldFR5cGU+KEFzc2V0VHlwZS5BKTsgLy8gU2V0IGRlZmF1bHQgdHlwZVxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oJycpO1xuICBjb25zdCBbYXR0cmlidXRlcywgc2V0QXR0cmlidXRlc10gPSB1c2VTdGF0ZTxBc3NldEF0dHJpYnV0ZVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQb3B1bGF0ZSBmb3JtIGZpZWxkcyB3aXRoIGluaXRpYWwgYXNzZXQgZGF0YSBpZiBwcm92aWRlZFxuICAgIGlmIChpbml0aWFsQXNzZXQpIHtcbiAgICAgIHNldE5hbWUoaW5pdGlhbEFzc2V0Lm5hbWUpO1xuICAgICAgc2V0VHlwZShpbml0aWFsQXNzZXQudHlwZSk7XG4gICAgICBzZXREZXNjcmlwdGlvbihpbml0aWFsQXNzZXQuZGVzY3JpcHRpb24pO1xuICAgICAgc2V0QXR0cmlidXRlcyhpbml0aWFsQXNzZXQuYXR0cmlidXRlcyB8fCBbXSk7XG4gICAgfVxuICB9LCBbaW5pdGlhbEFzc2V0XSk7XG5cbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0VHlwZShlLnRhcmdldC52YWx1ZSBhcyBBc3NldFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUF0dHJpYnV0ZUNoYW5nZSA9IChpbmRleDogbnVtYmVyLCBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHVwZGF0ZWRBdHRyaWJ1dGVzID0gWy4uLmF0dHJpYnV0ZXNdO1xuICAgIHVwZGF0ZWRBdHRyaWJ1dGVzW2luZGV4XSA9IHsgLi4udXBkYXRlZEF0dHJpYnV0ZXNbaW5kZXhdLCBbbmFtZV06IHZhbHVlIH07XG4gICAgc2V0QXR0cmlidXRlcyh1cGRhdGVkQXR0cmlidXRlcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIENyZWF0ZSBhIG5ldyBhc3NldCBvYmplY3Qgd2l0aCB0aGUgZm9ybSBkYXRhXG4gICAgY29uc3QgbmV3QXNzZXQ6IEFzc2V0ID0ge1xuICAgICAgaWQ6IGluaXRpYWxBc3NldCA/IGluaXRpYWxBc3NldC5pZCA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApLCAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBJRCBpZiBub3QgdXBkYXRpbmdcbiAgICAgIG5hbWUsXG4gICAgICB0eXBlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgIH07XG5cbiAgICAvLyBDYWxsIGFkZEFzc2V0IG9yIHVwZGF0ZUFzc2V0IGZ1bmN0aW9uIGZyb20gY29udGV4dCBiYXNlZCBvbiB3aGV0aGVyIGFuIGluaXRpYWwgYXNzZXQgaXMgcHJvdmlkZWRcbiAgICBpZiAob25TdWJtaXQpIHtcbiAgICAgIGlmIChpbml0aWFsQXNzZXQpIHtcbiAgICAgICAgb25TdWJtaXQoaW5pdGlhbEFzc2V0LmlkLCBuZXdBc3NldCk7IC8vIFVwZGF0ZSBleGlzdGluZyBhc3NldFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRBc3NldChuZXdBc3NldCk7IC8vIEFkZCBuZXcgYXNzZXRcbiAgICB9XG5cbiAgICAvLyBSZXNldCBmb3JtIGZpZWxkc1xuICAgIHNldE5hbWUoJycpO1xuICAgIHNldFR5cGUoQXNzZXRUeXBlLkEpOyAvLyBSZXNldCB0eXBlIHRvIGRlZmF1bHRcbiAgICBzZXREZXNjcmlwdGlvbignJyk7XG4gICAgc2V0QXR0cmlidXRlcyhbXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIk5hbWVcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtMiBweS0xIG1iLTJcIiAvPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5UeXBlPC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJ0eXBlXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXtoYW5kbGVUeXBlQ2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtMiBweS0xIG1iLTJcIj5cbiAgICAgICAge09iamVjdC52YWx1ZXMoQXNzZXRUeXBlKS5tYXAoYXNzZXRUeXBlID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17YXNzZXRUeXBlfSB2YWx1ZT17YXNzZXRUeXBlfT57YXNzZXRUeXBlfTwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMSBtYi0yXCIgLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPkF0dHJpYnV0ZXM8L2xhYmVsPlxuICAgICAgICB7YXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggbWItMlwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImtleVwiIHZhbHVlPXthdHRyaWJ1dGUua2V5fSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUF0dHJpYnV0ZUNoYW5nZShpbmRleCwgZSl9IHBsYWNlaG9sZGVyPVwiS2V5XCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMSBtci0yXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ2YWx1ZVwiIHZhbHVlPXthdHRyaWJ1dGUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQXR0cmlidXRlQ2hhbmdlKGluZGV4LCBlKX0gcGxhY2Vob2xkZXI9XCJWYWx1ZVwiIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC0yIHB5LTFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0QXR0cmlidXRlcyhbLi4uYXR0cmlidXRlcywgeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0pfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZFwiPkFkZCBBdHRyaWJ1dGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxuICAgICAgICB7aW5pdGlhbEFzc2V0ID8gJ1VwZGF0ZSBBc3NldCcgOiAnQWRkIEFzc2V0J31cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2luaXRpYWxBc3NldCAmJiBvbkNhbmNlbCAmJiAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2FuY2VsfSBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtbC0yXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFzc2V0VHlwZSIsInVzZUFzc2V0Q29udGV4dCIsIkFzc2V0Rm9ybSIsImluaXRpYWxBc3NldCIsIm9uU3VibWl0Iiwib25DYW5jZWwiLCJhZGRBc3NldCIsImFzc2V0cyIsIm5hbWUiLCJzZXROYW1lIiwidHlwZSIsInNldFR5cGUiLCJBIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwiaGFuZGxlTmFtZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVR5cGVDaGFuZ2UiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImhhbmRsZUF0dHJpYnV0ZUNoYW5nZSIsImluZGV4IiwidXBkYXRlZEF0dHJpYnV0ZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0Fzc2V0IiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwic2VsZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiYXNzZXRUeXBlIiwib3B0aW9uIiwiZGl2IiwiYXR0cmlidXRlIiwia2V5IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetForm.tsx\n"));

/***/ })

});