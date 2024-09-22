"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/events/page",{

/***/ "(app-pages-browser)/./app/events/page.js":
/*!****************************!*\
  !*** ./app/events/page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_EventCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EventCard */ \"(app-pages-browser)/./components/EventCard.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Events = ()=>{\n    _s();\n    const [eventsData, setEventsData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // const searchParams = useSearchParams();\n    // const artist = searchParams.get('artist');\n    // const tag = searchParams.get('tag');\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchEvents = async ()=>{\n            const res = await fetch(\"https://qevent-backend.labs.crio.do/events\");\n            const data = await res.json();\n            setEventsData(data);\n        };\n        fetchEvents();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (eventsData.length === 0) return;\n        let filteredEvents = eventsData;\n        if (artist) {\n            filteredEvents = filteredEvents.filter((event)=>event.artist.toLowerCase() === artist.toLowerCase());\n        }\n        if (tag) {\n            filteredEvents = filteredEvents.filter((event)=>event.tags.includes(tag) === true);\n        }\n        setEvents(filteredEvents);\n    }, [\n        eventsData,\n        artist,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap items-center justify-around mt-8 mb-32\",\n            children: events.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    eventData: event\n                }, event.id, false, {\n                    fileName: \"/Users/rajpatel/Desktop/NextJsEvent/app/events/page.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/rajpatel/Desktop/NextJsEvent/app/events/page.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rajpatel/Desktop/NextJsEvent/app/events/page.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Events, \"5gIyHk0kruT7MKHkGm18o5ppOqI=\");\n_c = Events;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\nvar _c;\n$RefreshReg$(_c, \"Events\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ldmVudHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQztBQUNHO0FBQ0M7QUFFbkQsTUFBTUssU0FBUzs7SUFDYixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUV2QywwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxjQUFjO1lBQ2xCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtZQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7WUFDM0JQLGNBQWNNO1FBQ2hCO1FBQ0FIO0lBQ0YsR0FBRyxFQUFFO0lBRUxQLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUcsV0FBV1MsTUFBTSxLQUFLLEdBQUc7UUFFN0IsSUFBSUMsaUJBQWlCVjtRQUNyQixJQUFJVyxRQUFRO1lBQ1ZELGlCQUFpQkEsZUFBZUUsTUFBTSxDQUNwQyxDQUFDQyxRQUFVQSxNQUFNRixNQUFNLENBQUNHLFdBQVcsT0FBT0gsT0FBT0csV0FBVztRQUVoRTtRQUNBLElBQUlDLEtBQUs7WUFDUEwsaUJBQWlCQSxlQUFlRSxNQUFNLENBQ3BDLENBQUNDLFFBQVVBLE1BQU1HLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixTQUFTO1FBRTVDO1FBRUFaLFVBQVVPO0lBQ1osR0FBRztRQUFDVjtRQUFZVztRQUFRSTtLQUFJO0lBRTVCLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaakIsT0FBT2tCLEdBQUcsQ0FBQyxDQUFDUCxzQkFDWCw4REFBQ25CLDZEQUFTQTtvQkFBZ0IyQixXQUFXUjttQkFBckJBLE1BQU1TLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQTVDTXZCO0tBQUFBO0FBOENOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ldmVudHMvcGFnZS5qcz8zOGJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgRXZlbnRDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvRXZlbnRDYXJkXCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtldmVudHNEYXRhLCBzZXRFdmVudHNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgLy8gY29uc3QgYXJ0aXN0ID0gc2VhcmNoUGFyYW1zLmdldCgnYXJ0aXN0Jyk7XG4gIC8vIGNvbnN0IHRhZyA9IHNlYXJjaFBhcmFtcy5nZXQoJ3RhZycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcWV2ZW50LWJhY2tlbmQubGFicy5jcmlvLmRvL2V2ZW50c1wiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0RXZlbnRzRGF0YShkYXRhKTtcbiAgICB9O1xuICAgIGZldGNoRXZlbnRzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChldmVudHNEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbHRlcmVkRXZlbnRzID0gZXZlbnRzRGF0YTtcbiAgICBpZiAoYXJ0aXN0KSB7XG4gICAgICBmaWx0ZXJlZEV2ZW50cyA9IGZpbHRlcmVkRXZlbnRzLmZpbHRlcihcbiAgICAgICAgKGV2ZW50KSA9PiBldmVudC5hcnRpc3QudG9Mb3dlckNhc2UoKSA9PT0gYXJ0aXN0LnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0YWcpIHtcbiAgICAgIGZpbHRlcmVkRXZlbnRzID0gZmlsdGVyZWRFdmVudHMuZmlsdGVyKFxuICAgICAgICAoZXZlbnQpID0+IGV2ZW50LnRhZ3MuaW5jbHVkZXModGFnKSA9PT0gdHJ1ZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRFdmVudHMoZmlsdGVyZWRFdmVudHMpO1xuICB9LCBbZXZlbnRzRGF0YSwgYXJ0aXN0LCB0YWddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBtdC04IG1iLTMyXCI+XG4gICAgICAgIHtldmVudHMubWFwKChldmVudCkgPT4gKFxuICAgICAgICAgIDxFdmVudENhcmQga2V5PXtldmVudC5pZH0gZXZlbnREYXRhPXtldmVudH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiJdLCJuYW1lcyI6WyJFdmVudENhcmQiLCJ1c2VTZWFyY2hQYXJhbXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXZlbnRzIiwiZXZlbnRzRGF0YSIsInNldEV2ZW50c0RhdGEiLCJldmVudHMiLCJzZXRFdmVudHMiLCJmZXRjaEV2ZW50cyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJsZW5ndGgiLCJmaWx0ZXJlZEV2ZW50cyIsImFydGlzdCIsImZpbHRlciIsImV2ZW50IiwidG9Mb3dlckNhc2UiLCJ0YWciLCJ0YWdzIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJldmVudERhdGEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/events/page.js\n"));

/***/ })

});