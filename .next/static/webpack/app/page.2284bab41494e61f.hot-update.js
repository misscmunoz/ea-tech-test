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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./src/types.ts\");\n/* harmony import */ var _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AssetContext */ \"(app-pages-browser)/./src/context/AssetContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AssetForm = (param)=>{\n    let { initialAsset, onSubmit, onCancel } = param;\n    _s();\n    const { addAsset } = (0,_context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Set default type\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Populate form fields with initial asset data if provided\n        if (initialAsset) {\n            setName(initialAsset.name);\n            setType(initialAsset.type);\n            setDescription(initialAsset.description);\n            setAttributes(initialAsset.attributes || []);\n        }\n    }, [\n        initialAsset\n    ]);\n    const handleNameChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleAttributeChange = (index, e)=>{\n        const { name, value } = e.target;\n        const updatedAttributes = [\n            ...attributes\n        ];\n        updatedAttributes[index] = {\n            ...updatedAttributes[index],\n            [name]: value\n        };\n        setAttributes(updatedAttributes);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Create a new asset object with the form data\n        const newAsset = {\n            id: initialAsset ? initialAsset.id : Math.floor(Math.random() * 1000),\n            name,\n            type,\n            description,\n            attributes\n        };\n        console.log(\"hellooo\");\n        // Call addAsset or updateAsset function from context based on whether an initial asset is provided\n        if (onSubmit) {\n            console.log(\"hey\");\n            if (initialAsset) {\n                console.log(\"boo\");\n                onSubmit(initialAsset.id, newAsset); // Update existing asset\n            }\n        } else {\n            addAsset(newAsset); // Add new asset\n        }\n        // Reset form fields\n        setName(\"\");\n        setType(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType.A); // Reset type to default\n        setDescription(\"\");\n        setAttributes([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"name\",\n                value: name,\n                onChange: handleNameChange,\n                placeholder: \"Name\",\n                className: \"border border-gray-300 rounded-md px-2 py-1 mb-2\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"type\",\n                children: \"Type\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"type\",\n                value: type,\n                onChange: handleTypeChange,\n                className: \"border border-gray-300 rounded-md px-2 py-1 mb-2\",\n                children: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__.AssetType).map((assetType)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: assetType,\n                        children: assetType\n                    }, assetType, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"description\",\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"description\",\n                value: description,\n                onChange: handleDescriptionChange,\n                placeholder: \"Description\",\n                className: \"border border-gray-300 rounded-md px-2 py-1 mb-2\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Attributes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"key\",\n                                    value: attribute.key,\n                                    onChange: (e)=>handleAttributeChange(index, e),\n                                    placeholder: \"Key\",\n                                    className: \"border border-gray-300 rounded-md px-2 py-1 mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"value\",\n                                    value: attribute.value,\n                                    onChange: (e)=>handleAttributeChange(index, e),\n                                    placeholder: \"Value\",\n                                    className: \"border border-gray-300 rounded-md px-2 py-1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>setAttributes([\n                                ...attributes,\n                                {\n                                    key: \"\",\n                                    value: \"\"\n                                }\n                            ]),\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded\",\n                        children: \"Add Attribute\"\n                    }, void 0, false, {\n                        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded\",\n                children: initialAsset ? \"Update Asset\" : \"Add Asset\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            initialAsset && onCancel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: onCancel,\n                className: \"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2\",\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missymunoz/Documents/UITechTest/asset_dashboard/src/components/AssetForm.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetForm, \"rOwaXEz6N+yZ5JqmL444lmWO8GE=\", false, function() {\n    return [\n        _context_AssetContext__WEBPACK_IMPORTED_MODULE_3__.useAssetContext\n    ];\n});\n_c = AssetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetForm);\nvar _c;\n$RefreshReg$(_c, \"AssetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDUztBQUNGO0FBUTFELE1BQU1LLFlBQXNDO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0UsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0wsc0VBQWVBO0lBQ3BDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQVlFLDZDQUFTQSxDQUFDVyxDQUFDLEdBQUcsbUJBQW1CO0lBQzdFLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBbUI7SUFDakUsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQW1CLEVBQUU7SUFFakVDLGdEQUFTQSxDQUFDO1FBQ1IsMkRBQTJEO1FBQzNELElBQUlJLGNBQWM7WUFDaEJLLFFBQVFMLGFBQWFJLElBQUk7WUFDekJHLFFBQVFQLGFBQWFNLElBQUk7WUFDekJJLGVBQWVWLGFBQWFTLFdBQVc7WUFDdkNHLGNBQWNaLGFBQWFXLFVBQVUsSUFBSSxFQUFFO1FBQzdDO0lBQ0YsR0FBRztRQUFDWDtLQUFhO0lBRWpCLE1BQU1hLG1CQUFtQixDQUFDQztRQUN4QlQsUUFBUVMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNIO1FBQ3hCUCxRQUFRTyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNRSwwQkFBMEIsQ0FBQ0o7UUFDL0JKLGVBQWVJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1HLHdCQUF3QixDQUFDQyxPQUFlTjtRQUM1QyxNQUFNLEVBQUVWLElBQUksRUFBRVksS0FBSyxFQUFFLEdBQUdGLEVBQUVDLE1BQU07UUFD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K0U7Ozs7Ozs7Ozs7OztBQU0xSTtHQXhHTXRDOztRQUNpQkQsa0VBQWVBOzs7S0FEaENDO0FBMEdOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0Rm9ybS50c3g/YzE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFzc2V0LCBBc3NldFR5cGUsIEFzc2V0QXR0cmlidXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXNzZXRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Bc3NldENvbnRleHQnO1xuXG5pbnRlcmZhY2UgQXNzZXRGb3JtUHJvcHMge1xuICBpbml0aWFsQXNzZXQ/OiBBc3NldDsgLy8gT3B0aW9uYWwgaW5pdGlhbCBhc3NldCBmb3IgdXBkYXRlXG4gIG9uU3VibWl0PzogKGlkOiBudW1iZXIsIHVwZGF0ZWRBc3NldDogQXNzZXQpID0+IHZvaWQ7IC8vIE9wdGlvbmFsIG9uU3VibWl0IGZvciB1cGRhdGluZ1xuICBvbkNhbmNlbD86ICgpID0+IHZvaWQ7IC8vIE9wdGlvbmFsIG9uQ2FuY2VsIGZvciB1cGRhdGluZ1xufVxuXG5jb25zdCBBc3NldEZvcm06IFJlYWN0LkZDPEFzc2V0Rm9ybVByb3BzPiA9ICh7IGluaXRpYWxBc3NldCwgb25TdWJtaXQsIG9uQ2FuY2VsIH0pID0+IHtcbiAgY29uc3QgeyBhZGRBc3NldCB9ID0gdXNlQXNzZXRDb250ZXh0KCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8QXNzZXRUeXBlPihBc3NldFR5cGUuQSk7IC8vIFNldCBkZWZhdWx0IHR5cGVcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPignJyk7XG4gIGNvbnN0IFthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzXSA9IHVzZVN0YXRlPEFzc2V0QXR0cmlidXRlW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBvcHVsYXRlIGZvcm0gZmllbGRzIHdpdGggaW5pdGlhbCBhc3NldCBkYXRhIGlmIHByb3ZpZGVkXG4gICAgaWYgKGluaXRpYWxBc3NldCkge1xuICAgICAgc2V0TmFtZShpbml0aWFsQXNzZXQubmFtZSk7XG4gICAgICBzZXRUeXBlKGluaXRpYWxBc3NldC50eXBlKTtcbiAgICAgIHNldERlc2NyaXB0aW9uKGluaXRpYWxBc3NldC5kZXNjcmlwdGlvbik7XG4gICAgICBzZXRBdHRyaWJ1dGVzKGluaXRpYWxBc3NldC5hdHRyaWJ1dGVzIHx8IFtdKTtcbiAgICB9XG4gIH0sIFtpbml0aWFsQXNzZXRdKTtcblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlIGFzIEFzc2V0VHlwZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXR0cmlidXRlQ2hhbmdlID0gKGluZGV4OiBudW1iZXIsIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdXBkYXRlZEF0dHJpYnV0ZXMgPSBbLi4uYXR0cmlidXRlc107XG4gICAgdXBkYXRlZEF0dHJpYnV0ZXNbaW5kZXhdID0geyAuLi51cGRhdGVkQXR0cmlidXRlc1tpbmRleF0sIFtuYW1lXTogdmFsdWUgfTtcbiAgICBzZXRBdHRyaWJ1dGVzKHVwZGF0ZWRBdHRyaWJ1dGVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGFzc2V0IG9iamVjdCB3aXRoIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zdCBuZXdBc3NldDogQXNzZXQgPSB7XG4gICAgICBpZDogaW5pdGlhbEFzc2V0ID8gaW5pdGlhbEFzc2V0LmlkIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksIC8vIEdlbmVyYXRlIGEgcmFuZG9tIElEIGlmIG5vdCB1cGRhdGluZ1xuICAgICAgbmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCdoZWxsb29vJyk7XG4gIFxuICAgIC8vIENhbGwgYWRkQXNzZXQgb3IgdXBkYXRlQXNzZXQgZnVuY3Rpb24gZnJvbSBjb250ZXh0IGJhc2VkIG9uIHdoZXRoZXIgYW4gaW5pdGlhbCBhc3NldCBpcyBwcm92aWRlZFxuICAgIGlmIChvblN1Ym1pdCkge1xuICAgICAgY29uc29sZS5sb2coJ2hleScpO1xuICAgICAgaWYgKGluaXRpYWxBc3NldCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYm9vJyk7XG4gICAgICAgIG9uU3VibWl0KGluaXRpYWxBc3NldC5pZCwgbmV3QXNzZXQpOyAvLyBVcGRhdGUgZXhpc3RpbmcgYXNzZXRcbiAgICAgIH0gXG4gICAgfWVsc2Uge1xuICAgICAgYWRkQXNzZXQobmV3QXNzZXQpOyAvLyBBZGQgbmV3IGFzc2V0XG4gICAgfVxuXG4gIFxuICAgIC8vIFJlc2V0IGZvcm0gZmllbGRzXG4gICAgc2V0TmFtZSgnJyk7XG4gICAgc2V0VHlwZShBc3NldFR5cGUuQSk7IC8vIFJlc2V0IHR5cGUgdG8gZGVmYXVsdFxuICAgIHNldERlc2NyaXB0aW9uKCcnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKFtdKTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJOYW1lXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMSBtYi0yXCIgLz5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+VHlwZTwvbGFiZWw+XG4gICAgICA8c2VsZWN0IGlkPVwidHlwZVwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlVHlwZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMSBtYi0yXCI+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKEFzc2V0VHlwZSkubWFwKGFzc2V0VHlwZSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2Fzc2V0VHlwZX0gdmFsdWU9e2Fzc2V0VHlwZX0+e2Fzc2V0VHlwZX08L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZX0gcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC0yIHB5LTEgbWItMlwiIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5BdHRyaWJ1dGVzPC9sYWJlbD5cbiAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IG1iLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJrZXlcIiB2YWx1ZT17YXR0cmlidXRlLmtleX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UoaW5kZXgsIGUpfSBwbGFjZWhvbGRlcj1cIktleVwiIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC0yIHB5LTEgbXItMlwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidmFsdWVcIiB2YWx1ZT17YXR0cmlidXRlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUF0dHJpYnV0ZUNoYW5nZShpbmRleCwgZSl9IHBsYWNlaG9sZGVyPVwiVmFsdWVcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtMiBweS0xXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldEF0dHJpYnV0ZXMoWy4uLmF0dHJpYnV0ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX0gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWRcIj5BZGQgQXR0cmlidXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cbiAgICAgICAge2luaXRpYWxBc3NldCA/ICdVcGRhdGUgQXNzZXQnIDogJ0FkZCBBc3NldCd9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtpbml0aWFsQXNzZXQgJiYgb25DYW5jZWwgJiYgKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNhbmNlbH0gY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbWwtMlwiPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBc3NldFR5cGUiLCJ1c2VBc3NldENvbnRleHQiLCJBc3NldEZvcm0iLCJpbml0aWFsQXNzZXQiLCJvblN1Ym1pdCIsIm9uQ2FuY2VsIiwiYWRkQXNzZXQiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiQSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImhhbmRsZU5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UiLCJoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UiLCJpbmRleCIsInVwZGF0ZWRBdHRyaWJ1dGVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJuZXdBc3NldCIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJhc3NldFR5cGUiLCJvcHRpb24iLCJkaXYiLCJhdHRyaWJ1dGUiLCJrZXkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetForm.tsx\n"));

/***/ })

});