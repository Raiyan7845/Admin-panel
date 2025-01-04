"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/components/dashboard/layout/user-popover.tsx":
/*!**********************************************************!*\
  !*** ./src/components/dashboard/layout/user-popover.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserPopover: function() { return /* binding */ UserPopover; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Divider */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemIcon/ListItemIcon.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_MenuList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/MenuList */ \"(app-pages-browser)/./node_modules/@mui/material/MenuList/MenuList.js\");\n/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Popover */ \"(app-pages-browser)/./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _phosphor_icons_react_dist_ssr_SignOut__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @phosphor-icons/react/dist/ssr/SignOut */ \"(app-pages-browser)/./node_modules/@phosphor-icons/react/dist/ssr/SignOut.mjs\");\n/* harmony import */ var _phosphor_icons_react_dist_ssr_User__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @phosphor-icons/react/dist/ssr/User */ \"(app-pages-browser)/./node_modules/@phosphor-icons/react/dist/ssr/User.mjs\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/paths */ \"(app-pages-browser)/./src/paths.ts\");\n/* harmony import */ var _lib_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/auth/client */ \"(app-pages-browser)/./src/lib/auth/client.ts\");\n/* harmony import */ var _lib_default_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/default-logger */ \"(app-pages-browser)/./src/lib/default-logger.ts\");\n/* harmony import */ var _hooks_use_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/use-user */ \"(app-pages-browser)/./src/hooks/use-user.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction UserPopover(param) {\n    let { anchorEl, onClose, open } = param;\n    _s();\n    const { checkSession } = (0,_hooks_use_user__WEBPACK_IMPORTED_MODULE_7__.useUser)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSignOut = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{\n        try {\n            const { error } = await _lib_auth_client__WEBPACK_IMPORTED_MODULE_5__.authClient.signOut();\n            if (error) {\n                _lib_default_logger__WEBPACK_IMPORTED_MODULE_6__.logger.error(\"Sign out error\", error);\n                return;\n            }\n            // Refresh the auth state\n            await (checkSession === null || checkSession === void 0 ? void 0 : checkSession());\n            // UserProvider, for this case, will not refresh the router and we need to do it manually\n            router.refresh();\n        // After refresh, AuthGuard will handle the redirect\n        } catch (err) {\n            _lib_default_logger__WEBPACK_IMPORTED_MODULE_6__.logger.error(\"Sign out error\", err);\n        }\n    }, [\n        checkSession,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        anchorEl: anchorEl,\n        anchorOrigin: {\n            horizontal: \"left\",\n            vertical: \"bottom\"\n        },\n        onClose: onClose,\n        open: open,\n        slotProps: {\n            paper: {\n                sx: {\n                    width: \"240px\"\n                }\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    p: \"16px 20px \"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        variant: \"subtitle1\",\n                        children: \"Sofia Rivers\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        color: \"text.secondary\",\n                        variant: \"body2\",\n                        children: \"sofia.rivers@devias.io\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuList__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                disablePadding: true,\n                sx: {\n                    p: \"8px\",\n                    \"& .MuiMenuItem-root\": {\n                        borderRadius: 1\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        component: next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        href: _paths__WEBPACK_IMPORTED_MODULE_4__.paths.dashboard.account,\n                        onClick: onClose,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react_dist_ssr_User__WEBPACK_IMPORTED_MODULE_15__.User, {\n                                    fontSize: \"var(--icon-fontSize-md)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            \"Profile\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        onClick: handleSignOut,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react_dist_ssr_SignOut__WEBPACK_IMPORTED_MODULE_16__.SignOut, {\n                                    fontSize: \"var(--icon-fontSize-md)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            \"Sign out\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Raiyan\\\\Desktop\\\\admin panel\\\\material-kit-react-main\\\\material-kit-react-main\\\\src\\\\components\\\\dashboard\\\\layout\\\\user-popover.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(UserPopover, \"iHbraEQLpUpigGjtReeDCw4NqO4=\", false, function() {\n    return [\n        _hooks_use_user__WEBPACK_IMPORTED_MODULE_7__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UserPopover;\nvar _c;\n$RefreshReg$(_c, \"UserPopover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9sYXlvdXQvdXNlci1wb3BvdmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDSTtBQUNTO0FBQ1I7QUFDUTtBQUNVO0FBQ1I7QUFDQTtBQUNGO0FBQ007QUFFOEI7QUFDVDtBQUV2QztBQUNlO0FBQ0Q7QUFDSDtBQVFwQyxTQUFTa0IsWUFBWSxLQUE2QztRQUE3QyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFvQixHQUE3Qzs7SUFDMUIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0wsd0RBQU9BO0lBRWhDLE1BQU1NLFNBQVNyQiwwREFBU0E7SUFFeEIsTUFBTXNCLGdCQUFnQnhCLDhDQUFpQixDQUFDO1FBQ3RDLElBQUk7WUFDRixNQUFNLEVBQUUwQixLQUFLLEVBQUUsR0FBRyxNQUFNWCx3REFBVUEsQ0FBQ1ksT0FBTztZQUUxQyxJQUFJRCxPQUFPO2dCQUNUVix1REFBTUEsQ0FBQ1UsS0FBSyxDQUFDLGtCQUFrQkE7Z0JBQy9CO1lBQ0Y7WUFFQSx5QkFBeUI7WUFDekIsT0FBTUoseUJBQUFBLG1DQUFBQTtZQUVOLHlGQUF5RjtZQUN6RkMsT0FBT0ssT0FBTztRQUNkLG9EQUFvRDtRQUN0RCxFQUFFLE9BQU9DLEtBQUs7WUFDWmIsdURBQU1BLENBQUNVLEtBQUssQ0FBQyxrQkFBa0JHO1FBQ2pDO0lBQ0YsR0FBRztRQUFDUDtRQUFjQztLQUFPO0lBRXpCLHFCQUNFLDhEQUFDZiw2REFBT0E7UUFDTlcsVUFBVUE7UUFDVlcsY0FBYztZQUFFQyxZQUFZO1lBQVFDLFVBQVU7UUFBUztRQUN2RFosU0FBU0E7UUFDVEMsTUFBTUE7UUFDTlksV0FBVztZQUFFQyxPQUFPO2dCQUFFQyxJQUFJO29CQUFFQyxPQUFPO2dCQUFRO1lBQUU7UUFBRTs7MEJBRS9DLDhEQUFDakMseURBQUdBO2dCQUFDZ0MsSUFBSTtvQkFBRUUsR0FBRztnQkFBYTs7a0NBQ3pCLDhEQUFDNUIsaUVBQVVBO3dCQUFDNkIsU0FBUTtrQ0FBWTs7Ozs7O2tDQUNoQyw4REFBQzdCLGlFQUFVQTt3QkFBQzhCLE9BQU07d0JBQWlCRCxTQUFRO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDbEMsOERBQU9BOzs7OzswQkFDUiw4REFBQ0csK0RBQVFBO2dCQUFDaUMsY0FBYztnQkFBQ0wsSUFBSTtvQkFBRUUsR0FBRztvQkFBTyx1QkFBdUI7d0JBQUVJLGNBQWM7b0JBQUU7Z0JBQUU7O2tDQUVsRiw4REFBQ25DLCtEQUFRQTt3QkFBQ29DLFdBQVd6QyxpREFBVUE7d0JBQUUwQyxNQUFNN0IseUNBQUtBLENBQUM4QixTQUFTLENBQUNDLE9BQU87d0JBQUVDLFNBQVMxQjs7MENBQ3ZFLDhEQUFDZixtRUFBWUE7MENBQ1gsNEVBQUNRLHNFQUFRQTtvQ0FBQ2tDLFVBQVM7Ozs7Ozs7Ozs7OzRCQUNOOzs7Ozs7O2tDQUdqQiw4REFBQ3pDLCtEQUFRQTt3QkFBQ3dDLFNBQVN0Qjs7MENBQ2pCLDhEQUFDbkIsbUVBQVlBOzBDQUNYLDRFQUFDTSw0RUFBV0E7b0NBQUNvQyxVQUFTOzs7Ozs7Ozs7Ozs0QkFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QjtHQXpEZ0I3Qjs7UUFDV0Qsb0RBQU9BO1FBRWpCZixzREFBU0E7OztLQUhWZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dC91c2VyLXBvcG92ZXIudHN4Pzg5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlckxpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcbmltcG9ydCBNZW51TGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVMaXN0JztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUG9wb3Zlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgR2VhclNpeCBhcyBHZWFyU2l4SWNvbiB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdC9kaXN0L3Nzci9HZWFyU2l4JztcbmltcG9ydCB7IFNpZ25PdXQgYXMgU2lnbk91dEljb24gfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QvZGlzdC9zc3IvU2lnbk91dCc7XG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJJY29uIH0gZnJvbSAnQHBob3NwaG9yLWljb25zL3JlYWN0L2Rpc3Qvc3NyL1VzZXInO1xuXG5pbXBvcnQgeyBwYXRocyB9IGZyb20gJ0AvcGF0aHMnO1xuaW1wb3J0IHsgYXV0aENsaWVudCB9IGZyb20gJ0AvbGliL2F1dGgvY2xpZW50JztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0AvbGliL2RlZmF1bHQtbG9nZ2VyJztcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAL2hvb2tzL3VzZS11c2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUG9wb3ZlclByb3BzIHtcbiAgYW5jaG9yRWw6IEVsZW1lbnQgfCBudWxsO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvcGVuOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlclBvcG92ZXIoeyBhbmNob3JFbCwgb25DbG9zZSwgb3BlbiB9OiBVc2VyUG9wb3ZlclByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IGNoZWNrU2Vzc2lvbiB9ID0gdXNlVXNlcigpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGF1dGhDbGllbnQuc2lnbk91dCgpO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdTaWduIG91dCBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWZyZXNoIHRoZSBhdXRoIHN0YXRlXG4gICAgICBhd2FpdCBjaGVja1Nlc3Npb24/LigpO1xuXG4gICAgICAvLyBVc2VyUHJvdmlkZXIsIGZvciB0aGlzIGNhc2UsIHdpbGwgbm90IHJlZnJlc2ggdGhlIHJvdXRlciBhbmQgd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseVxuICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgIC8vIEFmdGVyIHJlZnJlc2gsIEF1dGhHdWFyZCB3aWxsIGhhbmRsZSB0aGUgcmVkaXJlY3RcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ2dlci5lcnJvcignU2lnbiBvdXQgZXJyb3InLCBlcnIpO1xuICAgIH1cbiAgfSwgW2NoZWNrU2Vzc2lvbiwgcm91dGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgYW5jaG9yT3JpZ2luPXt7IGhvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nIH19XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgb3Blbj17b3Blbn1cbiAgICAgIHNsb3RQcm9wcz17eyBwYXBlcjogeyBzeDogeyB3aWR0aDogJzI0MHB4JyB9IH0gfX1cbiAgICA+XG4gICAgICA8Qm94IHN4PXt7IHA6ICcxNnB4IDIwcHggJyB9fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlNvZmlhIFJpdmVyczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgIHNvZmlhLnJpdmVyc0BkZXZpYXMuaW9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Cb3g+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPE1lbnVMaXN0IGRpc2FibGVQYWRkaW5nIHN4PXt7IHA6ICc4cHgnLCAnJiAuTXVpTWVudUl0ZW0tcm9vdCc6IHsgYm9yZGVyUmFkaXVzOiAxIH0gfX0+XG4gICAgICAgXG4gICAgICAgIDxNZW51SXRlbSBjb21wb25lbnQ9e1JvdXRlckxpbmt9IGhyZWY9e3BhdGhzLmRhc2hib2FyZC5hY2NvdW50fSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPFVzZXJJY29uIGZvbnRTaXplPVwidmFyKC0taWNvbi1mb250U2l6ZS1tZClcIiAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9PlxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8U2lnbk91dEljb24gZm9udFNpemU9XCJ2YXIoLS1pY29uLWZvbnRTaXplLW1kKVwiIC8+XG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgU2lnbiBvdXRcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudUxpc3Q+XG4gICAgPC9Qb3BvdmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyTGluayIsInVzZVJvdXRlciIsIkJveCIsIkRpdmlkZXIiLCJMaXN0SXRlbUljb24iLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiUG9wb3ZlciIsIlR5cG9ncmFwaHkiLCJTaWduT3V0IiwiU2lnbk91dEljb24iLCJVc2VyIiwiVXNlckljb24iLCJwYXRocyIsImF1dGhDbGllbnQiLCJsb2dnZXIiLCJ1c2VVc2VyIiwiVXNlclBvcG92ZXIiLCJhbmNob3JFbCIsIm9uQ2xvc2UiLCJvcGVuIiwiY2hlY2tTZXNzaW9uIiwicm91dGVyIiwiaGFuZGxlU2lnbk91dCIsInVzZUNhbGxiYWNrIiwiZXJyb3IiLCJzaWduT3V0IiwicmVmcmVzaCIsImVyciIsImFuY2hvck9yaWdpbiIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInNsb3RQcm9wcyIsInBhcGVyIiwic3giLCJ3aWR0aCIsInAiLCJ2YXJpYW50IiwiY29sb3IiLCJkaXNhYmxlUGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbXBvbmVudCIsImhyZWYiLCJkYXNoYm9hcmQiLCJhY2NvdW50Iiwib25DbGljayIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/layout/user-popover.tsx\n"));

/***/ })

});