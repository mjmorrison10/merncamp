"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    }), state = ref[0], setState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    /*\r\n// Add a request interceptor\r\naxios.interceptors.request.use(function (config) {\r\n  // Do something before request is sent\r\n  return config;\r\n}, function (error) {\r\n  // Do something with request error\r\n  return Promise.reject(error);\r\n});\r\n*/ // Add a response interceptor\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        // Any status code that lie within the range of 2xx cause this function to trigger\n        // Do something with response data\n        return response;\n    }, function(error) {\n        // Any status codes that falls outside the range of 2xx cause this function to trigger\n        // Do something with response error\n        var res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem('auth');\n            router.push(\"/login\");\n        }\n    // return Promise.reject(error);\n    });\n    // axios.interceptors.response.use(\n    //   console.log(\"intersector engage\"),\n    //   function (response) {\n    //     return response;\n    //   },\n    //   function (error) {\n    //     console.log(\"test---\");\n    //     let res = error.response;\n    //     console.log(\"error handling --->\", res.config);\n    //     if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n    //       setState(null);\n    //       window.localStorage.removeItem(\"auth\");\n    //       router.push(\"/login\");\n    //     }\n    //     // return Promise.reject(error);\n    //   }\n    // );\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\context\\\\index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserProvider, \"QD/uwx2uR6dZ5guTTGOMBbT8ivU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UserProvider;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNqQztBQUNjOzs7QUFFdkMsR0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxHQUFLLENBQUNLLFlBQVksR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM5QixHQUFLLENBQXFCUCxHQUd4QixHQUh3QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ2xDUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ1JDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQyxHQUhNQyxLQUFLLEdBQWNWLEdBR3hCLEtBSFlXLFFBQVEsR0FBSVgsR0FHeEI7SUFFRkUsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmUyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07SUFDeEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0MsTUFBTSxHQUFHYixzREFBUztJQUN4QixFQVNBO0lBR0FELEtBQUssQ0FBQ2UsWUFBWSxDQUFDQztRQUVmLEVBQWtGO1FBQ2xGLEVBQWtDO1FBQ2xDLE1BQU0sQ0FBQ0E7SUFDVCxDQUFDLEVBQ0QsUUFBUSxDQUFFRSxLQUFLO1FBQ2IsRUFBc0Y7UUFDdEYsRUFBbUM7O1FBRW5DLEVBQUUsRUFBRUMsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRzswRUFDUDtZQUNiVCxNQUFNLENBQUNDLFlBQVksQ0FBQ1csVUFBVSxDQUFDLENBQU07WUFDckNULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLENBQVE7UUFDdEIsQ0FBQztJQUNELEVBQWdDO0lBQ2xDLENBQUM7SUFHSCxFQUFtQztJQUNuQyxFQUF1QztJQUN2QyxFQUEwQjtJQUMxQixFQUF1QjtJQUN2QixFQUFPO0lBQ1AsRUFBdUI7SUFDdkIsRUFBOEI7SUFDOUIsRUFBZ0M7SUFDaEMsRUFBc0Q7SUFDdEQsRUFBOEU7SUFDOUUsRUFBd0I7SUFDeEIsRUFBZ0Q7SUFDaEQsRUFBK0I7SUFDL0IsRUFBUTtJQUNSLEVBQXVDO0lBQ3ZDLEVBQU07SUFDTixFQUFLO0lBRUwsTUFBTSx1QkFDSHRCLFdBQVcsQ0FBQ3VCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNuQjtZQUFBQSxLQUFLO1lBQUVDLFFBQVE7UUFBQSxDQUFDOzs7Ozs7O0FBSWxELENBQUM7R0FqRUtMLFlBQVk7O1FBVURGLFNBQVM7OztLQVZwQkUsWUFBWTtBQW1FbEIsTUFBTSxHQUFHRCxXQUFXLEVBQUVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXI6IHt9LFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8qXHJcbi8vIEFkZCBhIHJlcXVlc3QgaW50ZXJjZXB0b3JcclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAvLyBEbyBzb21ldGhpbmcgYmVmb3JlIHJlcXVlc3QgaXMgc2VudFxyXG4gIHJldHVybiBjb25maWc7XHJcbn0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuKi9cclxuXHJcbiAgLy8gQWRkIGEgcmVzcG9uc2UgaW50ZXJjZXB0b3JcclxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vIEFueSBzdGF0dXMgY29kZSB0aGF0IGxpZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZGF0YVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIEFueSBzdGF0dXMgY29kZXMgdGhhdCBmYWxscyBvdXRzaWRlIHRoZSByYW5nZSBvZiAyeHggY2F1c2UgdGhpcyBmdW5jdGlvbiB0byB0cmlnZ2VyXHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGVycm9yXHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZVxyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgc2V0U3RhdGUobnVsbClcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICAvLyBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIC8vICAgY29uc29sZS5sb2coXCJpbnRlcnNlY3RvciBlbmdhZ2VcIiksXHJcbiAgLy8gICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIC8vICAgfSxcclxuICAvLyAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInRlc3QtLS1cIik7XHJcbiAgLy8gICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJlcnJvciBoYW5kbGluZyAtLS0+XCIsIHJlcy5jb25maWcpO1xyXG4gIC8vICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xyXG4gIC8vICAgICAgIHNldFN0YXRlKG51bGwpO1xyXG4gIC8vICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgLy8gICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgLy8gcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAvLyAgIH1cclxuICAvLyApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJ0b2tlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJyZW1vdmVJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});