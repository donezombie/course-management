webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n */ \"./i18n.js\");\n/* harmony import */ var redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux/store */ \"./redux/store.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var scss_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! helpers */ \"./helpers/index.js\");\n\n\nvar _jsxFileName = \"/Users/dzb/Desktop/next-js-dzb/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeStart\", function (url) {\n  console.log(\"Loading: \".concat(url));\n  nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeComplete\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeError\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();\n});\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      function trigger() {\n        \"use strict\";\n\n        var headerNode = document.querySelector(\".mdk-header\");\n        var layoutNode = document.querySelector(\".mdk-header-layout\");\n        var componentNode = layoutNode ? layoutNode : headerNode;\n\n        if (componentNode) {\n          componentNode.addEventListener(\"domfactory-component-upgraded\", function () {\n            headerNode.mdkHeader.eventTarget.addEventListener(\"scroll\", function () {\n              var progress = headerNode.mdkHeader.getScrollState().progress;\n              var navbarNode = headerNode.querySelector(\"#default-navbar\");\n              navbarNode.classList.toggle(\"bg-transparent\", progress <= 0.2);\n            });\n          });\n        }\n      }\n\n      ;\n      alert('hi');\n      trigger();\n    }, 1000);\n    Object(helpers__WEBPACK_IMPORTED_MODULE_11__[\"importExternalJS\"])();\n  }, []);\n  return __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18nextProvider\"], {\n    i18n: i18n__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    content: \"IE=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"assets/favicon.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    charset: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    \"http-equiv\": \"X-UA-Compatible\",\n    content: \"IE=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/vendor/perfect-scrollbar.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/vendor/fix-footer.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/material-icons.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/fontawesome.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/preloader.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/app.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  })), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  })), __jsx(\"script\", {\n    src: \"assets/vendor/jquery.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"assets/vendor/popper.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"assets/vendor/bootstrap.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }), __jsx(\"script\", {\n    src: \"assets/vendor/perfect-scrollbar.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }), __jsx(\"script\", {\n    src: \"assets/vendor/dom-factory.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }), __jsx(\"script\", {\n    src: \"assets/vendor/fix-footer.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }), __jsx(\"script\", {\n    src: \"assets/js/app.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  })));\n}\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwidXJsIiwiY29uc29sZSIsImxvZyIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJoZWFkZXJOb2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5b3V0Tm9kZSIsImNvbXBvbmVudE5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwibWRrSGVhZGVyIiwiZXZlbnRUYXJnZXQiLCJwcm9ncmVzcyIsImdldFNjcm9sbFN0YXRlIiwibmF2YmFyTm9kZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFsZXJ0IiwiaW1wb3J0RXh0ZXJuYWxKUyIsImkxOG4iLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsb0JBQXdCRixHQUF4QjtBQUNBRyxrREFBUyxDQUFDQyxLQUFWO0FBQ0QsQ0FIRDtBQUlBUCxrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUksZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFDQVIsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1JLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDO0FBRWUsU0FBU0MsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3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OEJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpFSixFQW1FSTtBQUFRLE9BQUcsRUFBQyw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkVKLEVBcUVJO0FBQVEsT0FBRyxFQUFDLGtCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyRUosQ0FERixDQURGO0FBMkVEOztHQTFHdUJGLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEkxOG5leHRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5cIjtcblxuaW1wb3J0IHN0b3JlIGZyb20gXCJyZWR1eC9zdG9yZVwiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwic2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgaW1wb3J0RXh0ZXJuYWxKUyB9IGZyb20gXCJoZWxwZXJzXCI7XG5cblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbn0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmdW5jdGlvbiB0cmlnZ2VyKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGhlYWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1kay1oZWFkZXJcIik7XG4gICAgICAgIHZhciBsYXlvdXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZGstaGVhZGVyLWxheW91dFwiKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5vZGUgPSBsYXlvdXROb2RlID8gbGF5b3V0Tm9kZSA6IGhlYWRlck5vZGU7XG4gICAgICAgIGlmIChjb21wb25lbnROb2RlKSB7XG4gICAgICAgICAgY29tcG9uZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJkb21mYWN0b3J5LWNvbXBvbmVudC11cGdyYWRlZFwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBoZWFkZXJOb2RlLm1ka0hlYWRlci5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwic2Nyb2xsXCIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gaGVhZGVyTm9kZS5tZGtIZWFkZXIuZ2V0U2Nyb2xsU3RhdGUoKS5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgIHZhciBuYXZiYXJOb2RlID0gaGVhZGVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiI2RlZmF1bHQtbmF2YmFyXCIpO1xuICAgICAgICAgICAgICAgICAgbmF2YmFyTm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiYmctdHJhbnNwYXJlbnRcIiwgcHJvZ3Jlc3MgPD0gMC4yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFsZXJ0KCdoaScpXG4gICAgICB0cmlnZ2VyKCk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICBpbXBvcnRFeHRlcm5hbEpTKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxJMThuZXh0UHJvdmlkZXIgaTE4bj17aTE4bn0+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJhc3NldHMvZmF2aWNvbi5qcGdcIiAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAlN0NSb2JvdG86NDAwLDUwMCU3Q0V4bysyOjYwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImFzc2V0cy92ZW5kb3IvcGVyZmVjdC1zY3JvbGxiYXIuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCJhc3NldHMvdmVuZG9yL2ZpeC1mb290ZXIuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL21hdGVyaWFsLWljb25zLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy9mb250YXdlc29tZS5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvcHJlbG9hZGVyLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImFzc2V0cy9jc3MvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIHsvKiA8ZGl2IGlkPVwiZHpiLXByb2dyZXNzLWJhclwiIC8+ICovfVxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9wZXJmZWN0LXNjcm9sbGJhci5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9kb20tZmFjdG9yeS5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2ZpeC1mb290ZXIuanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL2pzL2FwcC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L0kxOG5leHRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})