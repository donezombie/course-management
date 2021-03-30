webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n */ \"./i18n.js\");\n/* harmony import */ var redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux/store */ \"./redux/store.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var scss_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/dzb/Desktop/next-js-dzb/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeStart\", function (url) {\n  console.log(\"Loading: \".concat(url));\n  nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeComplete\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeError\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();\n});\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // (function () {\n    //   \"use strict\";\n    //   var headerNode = document.querySelector(\".mdk-header\");\n    //   var layoutNode = document.querySelector(\".mdk-header-layout\");\n    //   var componentNode = layoutNode ? layoutNode : headerNode;\n    //   if (componentNode) {\n    //     componentNode.addEventListener(\n    //       \"domfactory-component-upgraded\",\n    //       function () {\n    //         headerNode.mdkHeader.eventTarget.addEventListener(\n    //           \"scroll\",\n    //           function () {\n    //             var progress = headerNode.mdkHeader.getScrollState().progress;\n    //             var navbarNode = headerNode.querySelector(\"#default-navbar\");\n    //             navbarNode.classList.toggle(\"bg-transparent\", progress <= 0.2);\n    //           }\n    //         );\n    //       }\n    //     );\n    //   }\n    // })();\n    var listJSExternal = ['assets/vendor/jquery.min.js', 'assets/vendor/popper.min.js', 'assets/vendor/bootstrap.min.js', 'assets/vendor/perfect-scrollbar.min.js', 'assets/vendor/dom-factory.js', 'assets/vendor/material-design-kit.js', 'assets/vendor/fix-footer.js', 'assets/js/app.js'];\n\n    for (jsSrc in listJSExternal) {\n      var script = document.createElement(\"script\");\n      console.log({\n        jsSrc: jsSrc\n      });\n      script.src = jsSrc;\n      script.async = true;\n      document.body.appendChild(script);\n    } // <script src=\"assets/vendor/jquery.min.js\"></script>\n    // <script src=\"assets/vendor/popper.min.js\"></script>\n    // <script src=\"assets/vendor/bootstrap.min.js\"></script>\n    // <script src=\"assets/vendor/perfect-scrollbar.min.js\"></script>\n    // <script src=\"assets/vendor/dom-factory.js\"></script>\n    // <script src=\"assets/vendor/material-design-kit.js\" async></script>\n    // <script src=\"assets/vendor/fix-footer.js\"></script>\n    // <script src=\"assets/js/app.js\"></script>\n\n  }, []);\n  return __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18nextProvider\"], {\n    i18n: i18n__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    content: \"IE=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"assets/favicon.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    charset: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    \"http-equiv\": \"X-UA-Compatible\",\n    content: \"IE=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/vendor/perfect-scrollbar.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/vendor/fix-footer.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/material-icons.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/fontawesome.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/preloader.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/app.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  })), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwidXJsIiwiY29uc29sZSIsImxvZyIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwibGlzdEpTRXh0ZXJuYWwiLCJqc1NyYyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaTE4biIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQUEsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxVQUFDQyxHQUFELEVBQVM7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixvQkFBd0JGLEdBQXhCO0FBQ0FHLGtEQUFTLENBQUNDLEtBQVY7QUFDRCxDQUhEO0FBSUFQLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0M7QUFBQSxTQUFNSSxnREFBUyxDQUFDRSxJQUFWLEVBQU47QUFBQSxDQUF4QztBQUNBUixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUksZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBckM7QUFFZSxTQUFTQyxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0REMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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SSxFQUFDLDBCQUZQO0FBR0UsT0FBRyxFQUFDLFlBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFDRixFQWdERTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFFBQUksRUFBQyxvQkFBM0I7QUFBZ0QsT0FBRyxFQUFDLFlBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoREYsRUFrREU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsREYsQ0FERixFQXdERSxNQUFDLFNBQUQseUZBQWVaLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXhERixDQURGLENBREY7QUE4REQ7O0dBMUh1QkYsSzs7S0FBQUEsSyIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgSTE4bmV4dFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgaTE4biBmcm9tIFwiaTE4blwiO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSBcInJlZHV4L3N0b3JlXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCJzY3NzL3N0eWxlcy5zY3NzXCI7XG5cblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbn0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIFwidXNlIHN0cmljdFwiO1xuICAgIC8vICAgdmFyIGhlYWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1kay1oZWFkZXJcIik7XG4gICAgLy8gICB2YXIgbGF5b3V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWRrLWhlYWRlci1sYXlvdXRcIik7XG4gICAgLy8gICB2YXIgY29tcG9uZW50Tm9kZSA9IGxheW91dE5vZGUgPyBsYXlvdXROb2RlIDogaGVhZGVyTm9kZTtcbiAgICAvLyAgIGlmIChjb21wb25lbnROb2RlKSB7XG4gICAgLy8gICAgIGNvbXBvbmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAvLyAgICAgICBcImRvbWZhY3RvcnktY29tcG9uZW50LXVwZ3JhZGVkXCIsXG4gICAgLy8gICAgICAgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgaGVhZGVyTm9kZS5tZGtIZWFkZXIuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAvLyAgICAgICAgICAgXCJzY3JvbGxcIixcbiAgICAvLyAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGhlYWRlck5vZGUubWRrSGVhZGVyLmdldFNjcm9sbFN0YXRlKCkucHJvZ3Jlc3M7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG5hdmJhck5vZGUgPSBoZWFkZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIjZGVmYXVsdC1uYXZiYXJcIik7XG4gICAgLy8gICAgICAgICAgICAgbmF2YmFyTm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiYmctdHJhbnNwYXJlbnRcIiwgcHJvZ3Jlc3MgPD0gMC4yKTtcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9XG4gICAgLy8gfSkoKTtcbiAgICBsZXQgbGlzdEpTRXh0ZXJuYWwgPSBbXG4gICAgICAnYXNzZXRzL3ZlbmRvci9qcXVlcnkubWluLmpzJyxcbiAgICAgICdhc3NldHMvdmVuZG9yL3BvcHBlci5taW4uanMnLFxuICAgICAgJ2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLm1pbi5qcycsXG4gICAgICAnYXNzZXRzL3ZlbmRvci9wZXJmZWN0LXNjcm9sbGJhci5taW4uanMnLFxuICAgICAgJ2Fzc2V0cy92ZW5kb3IvZG9tLWZhY3RvcnkuanMnLFxuICAgICAgJ2Fzc2V0cy92ZW5kb3IvbWF0ZXJpYWwtZGVzaWduLWtpdC5qcycsXG4gICAgICAnYXNzZXRzL3ZlbmRvci9maXgtZm9vdGVyLmpzJyxcbiAgICAgICdhc3NldHMvanMvYXBwLmpzJ1xuICAgIF07XG5cbiAgICBmb3IgKGpzU3JjIGluIGxpc3RKU0V4dGVybmFsKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBcbiAgICAgIGNvbnNvbGUubG9nKHsganNTcmMgfSlcbiAgICAgIHNjcmlwdC5zcmMgPSBqc1NyYztcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gIFxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICAvLyA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgLy8gPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cblxuICAgIC8vIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAvLyA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvcGVyZmVjdC1zY3JvbGxiYXIubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAvLyA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvZG9tLWZhY3RvcnkuanNcIj48L3NjcmlwdD5cblxuICAgIC8vIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9tYXRlcmlhbC1kZXNpZ24ta2l0LmpzXCIgYXN5bmM+PC9zY3JpcHQ+XG5cbiAgICAvLyA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvZml4LWZvb3Rlci5qc1wiPjwvc2NyaXB0PlxuXG4gICAgLy8gPHNjcmlwdCBzcmM9XCJhc3NldHMvanMvYXBwLmpzXCI+PC9zY3JpcHQ+XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxJMThuZXh0UHJvdmlkZXIgaTE4bj17aTE4bn0+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJhc3NldHMvZmF2aWNvbi5qcGdcIiAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAlN0NSb2JvdG86NDAwLDUwMCU3Q0V4bysyOjYwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImFzc2V0cy92ZW5kb3IvcGVyZmVjdC1zY3JvbGxiYXIuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCJhc3NldHMvdmVuZG9yL2ZpeC1mb290ZXIuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL21hdGVyaWFsLWljb25zLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy9mb250YXdlc29tZS5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvcHJlbG9hZGVyLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImFzc2V0cy9jc3MvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIHsvKiA8ZGl2IGlkPVwiZHpiLXByb2dyZXNzLWJhclwiIC8+ICovfVxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9JMThuZXh0UHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})