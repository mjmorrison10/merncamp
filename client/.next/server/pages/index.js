"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const token = state && state.token ? state.token : \"\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    // Add a response interceptor\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        // Any status code that lie within the range of 2xx cause this function to trigger\n        // Do something with response data\n        return response;\n    }, function(error) {\n        // Any status codes that falls outside the range of 2xx cause this function to trigger\n        // Do something with response error\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        }\n    // return Promise.reject(error);\n    });\n    // axios.interceptors.response.use(\n    //   console.log(\"intersector engage\"),\n    //   function (response) {\n    //     return response;\n    //   },\n    //   function (error) {\n    //     console.log(\"test---\");\n    //     let res = error.response;\n    //     console.log(\"error handling --->\", res.config);\n    //     if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n    //       setState(null);\n    //       window.localStorage.removeItem(\"auth\");\n    //       router.push(\"/login\");\n    //     }\n    //     // return Promise.reject(error);\n    //   }\n    // );\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\context\\\\index.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ2pDO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN0QyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJVCwrQ0FBUSxDQUFDLENBQUM7UUFDbENVLElBQUksRUFBRSxDQUFDLENBQUM7UUFDUkMsS0FBSyxFQUFFLENBQUU7SUFDWCxDQUFDO0lBRURULGdEQUFTLEtBQU8sQ0FBQztRQUNmTyxRQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07SUFDeEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ0MsTUFBTSxHQUFHYixzREFBUztJQUV4QixLQUFLLENBQUNPLEtBQUssR0FBR0gsS0FBSyxJQUFJQSxLQUFLLENBQUNHLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFLLEdBQUcsQ0FBRTtJQUNyRFIsK0RBQXNCLEdBQUdpQiwyQkFBMkI7SUFDcERqQixvRkFBNkMsSUFBSyxPQUFPLEVBQUVRLEtBQUs7SUFHaEUsRUFBNkI7SUFDN0JSLHNFQUErQixDQUM3QixRQUFRLENBQUV1QixRQUFRLEVBQUUsQ0FBQztRQUNuQixFQUFrRjtRQUNsRixFQUFrQztRQUNsQyxNQUFNLENBQUNBLFFBQVE7SUFDakIsQ0FBQyxFQUNELFFBQVEsQ0FBRUUsS0FBSyxFQUFFLENBQUM7UUFDaEIsRUFBc0Y7UUFDdEYsRUFBbUM7UUFDbkMsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0YsUUFBUTtRQUN4QixFQUFFLEVBQUVHLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUtGLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JFdkIsUUFBUSxDQUFDLElBQUk7WUFDYkssTUFBTSxDQUFDQyxZQUFZLENBQUNrQixVQUFVLENBQUMsQ0FBTTtZQUNyQ2hCLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDRCxFQUFnQztJQUNsQyxDQUFDO0lBR0gsRUFBbUM7SUFDbkMsRUFBdUM7SUFDdkMsRUFBMEI7SUFDMUIsRUFBdUI7SUFDdkIsRUFBTztJQUNQLEVBQXVCO0lBQ3ZCLEVBQThCO0lBQzlCLEVBQWdDO0lBQ2hDLEVBQXNEO0lBQ3RELEVBQThFO0lBQzlFLEVBQXdCO0lBQ3hCLEVBQWdEO0lBQ2hELEVBQStCO0lBQy9CLEVBQVE7SUFDUixFQUF1QztJQUN2QyxFQUFNO0lBQ04sRUFBSztJQUVMLE1BQU0sNkVBQ0g3QixXQUFXLENBQUM4QixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDNUI7WUFBQUEsS0FBSztZQUFFQyxRQUFRO1FBQUEsQ0FBQztrQkFDM0NGLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBzdGF0ZSAmJiBzdGF0ZS50b2tlbiA/IHN0YXRlLnRva2VuIDogXCJcIjtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gIFxyXG5cclxuICAvLyBBZGQgYSByZXNwb25zZSBpbnRlcmNlcHRvclxyXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxyXG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBkYXRhXHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gQW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZXJyb3JcclxuICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xyXG4gICAgICAgIHNldFN0YXRlKG51bGwpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICAvLyBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIC8vICAgY29uc29sZS5sb2coXCJpbnRlcnNlY3RvciBlbmdhZ2VcIiksXHJcbiAgLy8gICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIC8vICAgfSxcclxuICAvLyAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInRlc3QtLS1cIik7XHJcbiAgLy8gICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJlcnJvciBoYW5kbGluZyAtLS0+XCIsIHJlcy5jb25maWcpO1xyXG4gIC8vICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xyXG4gIC8vICAgICAgIHNldFN0YXRlKG51bGwpO1xyXG4gIC8vICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgLy8gICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgLy8gcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAvLyAgIH1cclxuICAvLyApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\n\n\nfunction Home() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"display-1 text-center py-5\",\n                        children: \"Home Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    JSON.stringify(state),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/default.jpg\",\n                        alt: \"Pedestrian crossing\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ007U0FFL0JFLElBQUksR0FBRyxDQUFDO0lBQ2YsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSUosaURBQVUsQ0FBQ0MsaURBQVc7SUFFaEQsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs4RkFDdkJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQUs7a0dBQ2pCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Z0dBQ2pCQyxDQUFFO3dCQUFDRCxTQUFTLEVBQUMsQ0FBNEI7a0NBQUMsQ0FBUzs7Ozs7O29CQUNuREUsSUFBSSxDQUFDQyxTQUFTLENBQUNOLEtBQUs7Z0dBQ3BCTyxDQUFHO3dCQUFDQyxHQUFHLEVBQUMsQ0FBcUI7d0JBQUNDLEdBQUcsRUFBQyxDQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRSxDQUFDO0FBRUQsaUVBQWVWLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0xIHRleHQtY2VudGVyIHB5LTVcIj5Ib21lIFBhZ2U8L2gxPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0YXRlKX1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kZWZhdWx0LmpwZ1wiIGFsdD1cIlBlZGVzdHJpYW4gY3Jvc3NpbmdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJIb21lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiSlNPTiIsInN0cmluZ2lmeSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();