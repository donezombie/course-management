webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n */ \"./i18n.js\");\n/* harmony import */ var redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux/store */ \"./redux/store.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var scss_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/dzb/Desktop/next-js-dzb/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeStart\", function (url) {\n  console.log(\"Loading: \".concat(url));\n  nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeComplete\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(\"routeChangeError\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done();\n});\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // (function () {\n    //   \"use strict\";\n    //   var headerNode = document.querySelector(\".mdk-header\");\n    //   var layoutNode = document.querySelector(\".mdk-header-layout\");\n    //   var componentNode = layoutNode ? layoutNode : headerNode;\n    //   if (componentNode) {\n    //     componentNode.addEventListener(\n    //       \"domfactory-component-upgraded\",\n    //       function () {\n    //         headerNode.mdkHeader.eventTarget.addEventListener(\n    //           \"scroll\",\n    //           function () {\n    //             var progress = headerNode.mdkHeader.getScrollState().progress;\n    //             var navbarNode = headerNode.querySelector(\"#default-navbar\");\n    //             navbarNode.classList.toggle(\"bg-transparent\", progress <= 0.2);\n    //           }\n    //         );\n    //       }\n    //     );\n    //   }\n    // })();\n    var listJSExternal = ['assets/vendor/jquery.min.js', 'assets/vendor/popper.min.js', 'assets/vendor/bootstrap.min.js', 'assets/vendor/perfect-scrollbar.min.js', 'assets/vendor/dom-factory.js', 'assets/vendor/material-design-kit.js', 'assets/vendor/fix-footer.js', 'assets/js/app.js'];\n\n    for (var _i = 0, _listJSExternal = listJSExternal; _i < _listJSExternal.length; _i++) {\n      var jsSrc = _listJSExternal[_i];\n      var script = document.createElement(\"script\");\n      script.src = jsSrc;\n      document.body.appendChild(script);\n    } // <script src=\"assets/vendor/jquery.min.js\"></script>\n    // <script src=\"assets/vendor/popper.min.js\"></script>\n    // <script src=\"assets/vendor/bootstrap.min.js\"></script>\n    // <script src=\"assets/vendor/perfect-scrollbar.min.js\"></script>\n    // <script src=\"assets/vendor/dom-factory.js\"></script>\n    // <script src=\"assets/vendor/material-design-kit.js\" async></script>\n    // <script src=\"assets/vendor/fix-footer.js\"></script>\n    // <script src=\"assets/js/app.js\"></script>\n\n  }, []);\n  return __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"I18nextProvider\"], {\n    i18n: i18n__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    content: \"IE=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"assets/favicon.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    charset: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    \"http-equiv\": \"X-UA-Compatible\",\n    content: \"IE=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/vendor/perfect-scrollbar.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/vendor/fix-footer.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/material-icons.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/fontawesome.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/preloader.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }), __jsx(\"link\", {\n    type: \"text/css\",\n    href: \"assets/css/app.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  })), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwidXJsIiwiY29uc29sZSIsImxvZyIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwibGlzdEpTRXh0ZXJuYWwiLCJqc1NyYyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImkxOG4iLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsb0JBQXdCRixHQUF4QjtBQUNBRyxrREFBUyxDQUFDQyxLQUFWO0FBQ0QsQ0FIRDtBQUlBUCxrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUksZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFDQVIsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1JLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDO0FBRWUsU0FBU0MsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdERDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsUUFBSSxFQUFDLG9CQUEzQjtBQUFnRCxPQUFHLEVBQUMsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhERixFQWtERTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxERixDQURGLEVBd0RFLE1BQUMsU0FBRCx5RkFBZVgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBeERGLENBREYsQ0FERjtBQThERDs7R0F0SHVCRixLOztLQUFBQSxLIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBpMThuIGZyb20gXCJpMThuXCI7XG5cbmltcG9ydCBzdG9yZSBmcm9tIFwicmVkdXgvc3RvcmVcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcInNjc3Mvc3R5bGVzLnNjc3NcIjtcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xufSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgLy8gICB2YXIgaGVhZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWRrLWhlYWRlclwiKTtcbiAgICAvLyAgIHZhciBsYXlvdXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZGstaGVhZGVyLWxheW91dFwiKTtcbiAgICAvLyAgIHZhciBjb21wb25lbnROb2RlID0gbGF5b3V0Tm9kZSA/IGxheW91dE5vZGUgOiBoZWFkZXJOb2RlO1xuICAgIC8vICAgaWYgKGNvbXBvbmVudE5vZGUpIHtcbiAgICAvLyAgICAgY29tcG9uZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgIC8vICAgICAgIFwiZG9tZmFjdG9yeS1jb21wb25lbnQtdXBncmFkZWRcIixcbiAgICAvLyAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICBoZWFkZXJOb2RlLm1ka0hlYWRlci5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFxuICAgIC8vICAgICAgICAgICBcInNjcm9sbFwiLFxuICAgIC8vICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gaGVhZGVyTm9kZS5tZGtIZWFkZXIuZ2V0U2Nyb2xsU3RhdGUoKS5wcm9ncmVzcztcbiAgICAvLyAgICAgICAgICAgICB2YXIgbmF2YmFyTm9kZSA9IGhlYWRlck5vZGUucXVlcnlTZWxlY3RvcihcIiNkZWZhdWx0LW5hdmJhclwiKTtcbiAgICAvLyAgICAgICAgICAgICBuYXZiYXJOb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJiZy10cmFuc3BhcmVudFwiLCBwcm9ncmVzcyA8PSAwLjIpO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KSgpO1xuICAgIGxldCBsaXN0SlNFeHRlcm5hbCA9IFtcbiAgICAgICdhc3NldHMvdmVuZG9yL2pxdWVyeS5taW4uanMnLFxuICAgICAgJ2Fzc2V0cy92ZW5kb3IvcG9wcGVyLm1pbi5qcycsXG4gICAgICAnYXNzZXRzL3ZlbmRvci9ib290c3RyYXAubWluLmpzJyxcbiAgICAgICdhc3NldHMvdmVuZG9yL3BlcmZlY3Qtc2Nyb2xsYmFyLm1pbi5qcycsXG4gICAgICAnYXNzZXRzL3ZlbmRvci9kb20tZmFjdG9yeS5qcycsXG4gICAgICAnYXNzZXRzL3ZlbmRvci9tYXRlcmlhbC1kZXNpZ24ta2l0LmpzJyxcbiAgICAgICdhc3NldHMvdmVuZG9yL2ZpeC1mb290ZXIuanMnLFxuICAgICAgJ2Fzc2V0cy9qcy9hcHAuanMnXG4gICAgXTtcblxuICAgIGZvciAobGV0IGpzU3JjIG9mIGxpc3RKU0V4dGVybmFsKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0LnNyYyA9IGpzU3JjOyAgXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIC8vIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAvLyA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgLy8gPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cblxuICAgIC8vIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9wZXJmZWN0LXNjcm9sbGJhci5taW4uanNcIj48L3NjcmlwdD5cblxuICAgIC8vIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9kb20tZmFjdG9yeS5qc1wiPjwvc2NyaXB0PlxuXG4gICAgLy8gPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL21hdGVyaWFsLWRlc2lnbi1raXQuanNcIiBhc3luYz48L3NjcmlwdD5cblxuICAgIC8vIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9maXgtZm9vdGVyLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAvLyA8c2NyaXB0IHNyYz1cImFzc2V0cy9qcy9hcHAuanNcIj48L3NjcmlwdD5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEkxOG5leHRQcm92aWRlciBpMThuPXtpMThufT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImFzc2V0cy9mYXZpY29uLmpwZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCU3Q1JvYm90bzo0MDAsNTAwJTdDRXhvKzI6NjAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICBocmVmPVwiYXNzZXRzL3ZlbmRvci9wZXJmZWN0LXNjcm9sbGJhci5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImFzc2V0cy92ZW5kb3IvZml4LWZvb3Rlci5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvbWF0ZXJpYWwtaWNvbnMuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL2ZvbnRhd2Vzb21lLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy9wcmVsb2FkZXIuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGluayB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiYXNzZXRzL2Nzcy9hcHAuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgey8qIDxkaXYgaWQ9XCJkemItcHJvZ3Jlc3MtYmFyXCIgLz4gKi99XG5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L0kxOG5leHRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})