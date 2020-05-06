webpackHotUpdate("main",{

/***/ "./src/js/components/Header/HeaderContainer.tsx":
/*!******************************************************!*\
  !*** ./src/js/components/Header/HeaderContainer.tsx ***!
  \******************************************************/
/*! exports provided: connector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connector", function() { return connector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Header_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Header/actions */ "./src/js/store/Header/actions.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/js/components/Header/Header.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var mapStateToProps = function (state) {
    return {
        headerNavItems: state.header.headerNavItems
    };
};
var mapDispatchToProps = {
    activateHeaderNavItem: _store_Header_actions__WEBPACK_IMPORTED_MODULE_2__["activateHeaderNavItem"]
};
var connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps);
var HeaderContainer = /** @class */ (function (_super) {
    __extends(HeaderContainer, _super);
    function HeaderContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderContainer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], { activateHeaderNavItem: this.props.activateHeaderNavItem, headerNavItems: this.props.headerNavItems });
    };
    return HeaderContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (connector(HeaderContainer));


/***/ }),

/***/ "./src/js/store/Header/actions.tsx":
/*!*****************************************!*\
  !*** ./src/js/store/Header/actions.tsx ***!
  \*****************************************/
/*! exports provided: HEADER_NAV_ITEM_ACTIVATE, activateHeaderNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_NAV_ITEM_ACTIVATE", function() { return HEADER_NAV_ITEM_ACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateHeaderNavItem", function() { return activateHeaderNavItem; });
var HEADER_NAV_ITEM_ACTIVATE = 'HEADER_NAV_ITEM_ACTIVATE';
var activateHeaderNavItem = function (headerNavItems) { return ({
    type: HEADER_NAV_ITEM_ACTIVATE,
    headerNavItems: headerNavItems
}); };


/***/ }),

/***/ "./src/js/store/Header/reducers.tsx":
/*!******************************************!*\
  !*** ./src/js/store/Header/reducers.tsx ***!
  \******************************************/
/*! exports provided: defaultState, headerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerReducer", function() { return headerReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/js/store/Header/actions.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var defaultState = {
    headerNavItems: [
        { text: "Ссылка 1", url: "#", isActive: true },
        { text: "Ссылка 2", url: "#", isActive: false },
        { text: "Ссылка 3", url: "#", isActive: false },
        { text: "Ссылка 4", url: "#", isActive: false }
    ]
};
var headerReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["HEADER_NAV_ITEM_ACTIVATE"]:
            return __assign(__assign({}, state), { headerNavItems: action.headerNavItems });
    }
    return state;
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvSGVhZGVyL2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9IZWFkZXIvcmVkdWNlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUc2QjtBQUdZO0FBQ3JDO0FBRTlCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBMkI7SUFDaEQsT0FBTztRQUNILGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWM7S0FDOUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUc7SUFDdkIscUJBQXFCLEVBQUUsMkVBQXFCO0NBQy9DLENBQUM7QUFFSyxJQUFNLFNBQVMsR0FBRywyREFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztBQUlyRTtJQUE4QixtQ0FBMEI7SUFBeEQ7O0lBSUEsQ0FBQztJQUhHLGdDQUFNLEdBQU47UUFDSSxPQUFPLDJEQUFDLCtDQUFNLElBQUMscUJBQXFCLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUc7SUFDNUgsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQUo2Qiw0Q0FBSyxDQUFDLFNBQVMsR0FJNUM7QUFDYyx3RUFBUyxDQUFDLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFCekM7QUFBQTtBQUFBO0FBQU8sSUFBTSx3QkFBd0IsR0FBRywwQkFBMEIsQ0FBQztBQU81RCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsY0FBaUMsSUFBMEIsUUFBQztJQUM5RixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCLGNBQWM7Q0FDakIsQ0FBQyxFQUgrRixDQUcvRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGlEO0FBRzdDLElBQU0sWUFBWSxHQUFnQjtJQUNyQyxjQUFjLEVBQUU7UUFDWixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1FBQzlDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7UUFDL0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtRQUMvQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0tBQ2xEO0NBQ0osQ0FBQztBQUVLLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBaUMsRUFBRSxNQUEyQjtJQUE5RCw0Q0FBaUM7SUFDM0QsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFDO1FBQ2hCLEtBQUssaUVBQXdCO1lBQ3pCLDZCQUNPLEtBQUssS0FDUixjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWMsSUFDdkM7S0FDVDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMiLCJmaWxlIjoiaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJJdGVtUHJvcHMgfSBmcm9tIFwiLi4vSGVhZGVySXRlbS9IZWFkZXJJdGVtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzICB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL0hlYWRlci9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUhlYWRlck5hdkl0ZW0gfSBmcm9tIFwiLi4vLi4vc3RvcmUvSGVhZGVyL2FjdGlvbnNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVhY3QuQ29tcG9uZW50U3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyTmF2SXRlbXM6IHN0YXRlLmhlYWRlci5oZWFkZXJOYXZJdGVtc1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIGFjdGl2YXRlSGVhZGVyTmF2SXRlbTogYWN0aXZhdGVIZWFkZXJOYXZJdGVtXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuXHJcbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPlxyXG5cclxuY2xhc3MgSGVhZGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4geyAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8SGVhZGVyIGFjdGl2YXRlSGVhZGVyTmF2SXRlbSA9IHt0aGlzLnByb3BzLmFjdGl2YXRlSGVhZGVyTmF2SXRlbX0gaGVhZGVyTmF2SXRlbXMgPSB7dGhpcy5wcm9wcy5oZWFkZXJOYXZJdGVtc30vPiAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoSGVhZGVyQ29udGFpbmVyKVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBIZWFkZXJJdGVtUHJvcHMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJJdGVtL0hlYWRlckl0ZW1cIlxyXG5cclxuZXhwb3J0IGNvbnN0IEhFQURFUl9OQVZfSVRFTV9BQ1RJVkFURSA9ICdIRUFERVJfTkFWX0lURU1fQUNUSVZBVEUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJOYXZJdGVtQWN0aW9uIHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGhlYWRlck5hdkl0ZW1zOiBIZWFkZXJJdGVtUHJvcHNbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZhdGVIZWFkZXJOYXZJdGVtID0gKGhlYWRlck5hdkl0ZW1zOiBIZWFkZXJJdGVtUHJvcHNbXSk6IEhlYWRlck5hdkl0ZW1BY3Rpb24gPT4gKHtcclxuICAgIHR5cGU6IEhFQURFUl9OQVZfSVRFTV9BQ1RJVkFURSxcclxuICAgIGhlYWRlck5hdkl0ZW1zXHJcbn0pOyIsImltcG9ydCB7IEhlYWRlclN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBIRUFERVJfTkFWX0lURU1fQUNUSVZBVEUgfSBmcm9tIFwiLi9hY3Rpb25zXCJcclxuaW1wb3J0IHsgSGVhZGVyTmF2SXRlbUFjdGlvbiB9IGZyb20gXCIuL2FjdGlvbnNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogSGVhZGVyU3RhdGUgPSB7XHJcbiAgICBoZWFkZXJOYXZJdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogXCLQodGB0YvQu9C60LAgMVwiLCB1cmw6IFwiI1wiLCBpc0FjdGl2ZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQodGB0YvQu9C60LAgMlwiLCB1cmw6IFwiI1wiLCBpc0FjdGl2ZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0KHRgdGL0LvQutCwIDNcIiwgdXJsOiBcIiNcIiwgaXNBY3RpdmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCh0YHRi9C70LrQsCA0XCIsIHVybDogXCIjXCIsIGlzQWN0aXZlOiBmYWxzZSB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyUmVkdWNlciA9IChzdGF0ZTogSGVhZGVyU3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogSGVhZGVyTmF2SXRlbUFjdGlvbik6IEhlYWRlclN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgSEVBREVSX05BVl9JVEVNX0FDVElWQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJOYXZJdGVtczogYWN0aW9uLmhlYWRlck5hdkl0ZW1zXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9