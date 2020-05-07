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
var activateHeaderNavItem = function (headerNavItems, activeItemIndex) { return ({
    type: HEADER_NAV_ITEM_ACTIVATE,
    headerNavItems: headerNavItems,
    activeItemIndex: activeItemIndex
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
            var items = __spreadArrays(action.headerNavItems);
            items.forEach(function (item, i) { return item.isActive = (i == action.activeItemIndex ? true : false); });
            return __assign(__assign({}, state), { headerNavItems: items });
    }
    return state;
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvSGVhZGVyL2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9IZWFkZXIvcmVkdWNlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUU2QjtBQUVZO0FBQ3JDO0FBRTlCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBMkI7SUFDaEQsT0FBTztRQUNILGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWM7S0FDOUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUc7SUFDdkIscUJBQXFCLEVBQUUsMkVBQXFCO0NBQy9DLENBQUM7QUFFSyxJQUFNLFNBQVMsR0FBRywyREFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztBQUlyRTtJQUE4QixtQ0FBMEI7SUFBeEQ7O0lBSUEsQ0FBQztJQUhHLGdDQUFNLEdBQU47UUFDSSxPQUFPLDJEQUFDLCtDQUFNLElBQUMscUJBQXFCLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUc7SUFDNUgsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQUo2Qiw0Q0FBSyxDQUFDLFNBQVMsR0FJNUM7QUFDYyx3RUFBUyxDQUFDLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hCekM7QUFBQTtBQUFBO0FBQU8sSUFBTSx3QkFBd0IsR0FBRywwQkFBMEIsQ0FBQztBQVE1RCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsY0FBaUMsRUFBRSxlQUF1QixJQUEwQixRQUFDO0lBQ3ZILElBQUksRUFBRSx3QkFBd0I7SUFDOUIsY0FBYztJQUNkLGVBQWU7Q0FDbEIsQ0FBQyxFQUp3SCxDQUl4SCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpRDtBQUk3QyxJQUFNLFlBQVksR0FBZ0I7SUFDckMsY0FBYyxFQUFFO1FBQ1osRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtRQUM5QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1FBQy9DLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7UUFDL0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtLQUNsRDtDQUNKLENBQUM7QUFFSyxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQWlDLEVBQUUsTUFBMkI7SUFBOUQsNENBQWlDO0lBQzNELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBQztRQUNoQixLQUFLLGlFQUF3QjtZQUU3QixJQUFJLEtBQUssa0JBQTJCLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMzRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSyxXQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQTVELENBQTRELENBQUMsQ0FBQztZQUVyRiw2QkFDTyxLQUFLLEtBQ1IsY0FBYyxFQUFFLEtBQUssSUFDdkI7S0FDVDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMiLCJmaWxlIjoiaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyAgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGFjdGl2YXRlSGVhZGVyTmF2SXRlbSB9IGZyb20gXCIuLi8uLi9zdG9yZS9IZWFkZXIvYWN0aW9uc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWFjdC5Db21wb25lbnRTdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXJOYXZJdGVtczogc3RhdGUuaGVhZGVyLmhlYWRlck5hdkl0ZW1zXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgYWN0aXZhdGVIZWFkZXJOYXZJdGVtOiBhY3RpdmF0ZUhlYWRlck5hdkl0ZW1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG5cclxudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+XHJcblxyXG5jbGFzcyBIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7ICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxIZWFkZXIgYWN0aXZhdGVIZWFkZXJOYXZJdGVtID0ge3RoaXMucHJvcHMuYWN0aXZhdGVIZWFkZXJOYXZJdGVtfSBoZWFkZXJOYXZJdGVtcyA9IHt0aGlzLnByb3BzLmhlYWRlck5hdkl0ZW1zfS8+ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihIZWFkZXJDb250YWluZXIpXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IEhlYWRlckl0ZW1Qcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlckl0ZW0vSGVhZGVySXRlbVwiXHJcblxyXG5leHBvcnQgY29uc3QgSEVBREVSX05BVl9JVEVNX0FDVElWQVRFID0gJ0hFQURFUl9OQVZfSVRFTV9BQ1RJVkFURSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlck5hdkl0ZW1BY3Rpb24ge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaGVhZGVyTmF2SXRlbXM6IEhlYWRlckl0ZW1Qcm9wc1tdLFxyXG4gICAgYWN0aXZlSXRlbUluZGV4OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlSGVhZGVyTmF2SXRlbSA9IChoZWFkZXJOYXZJdGVtczogSGVhZGVySXRlbVByb3BzW10sIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyKTogSGVhZGVyTmF2SXRlbUFjdGlvbiA9PiAoe1xyXG4gICAgdHlwZTogSEVBREVSX05BVl9JVEVNX0FDVElWQVRFLFxyXG4gICAgaGVhZGVyTmF2SXRlbXMsXHJcbiAgICBhY3RpdmVJdGVtSW5kZXhcclxufSk7IiwiaW1wb3J0IHsgSGVhZGVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IEhFQURFUl9OQVZfSVRFTV9BQ1RJVkFURSB9IGZyb20gXCIuL2FjdGlvbnNcIlxyXG5pbXBvcnQgeyBIZWFkZXJOYXZJdGVtQWN0aW9uIH0gZnJvbSBcIi4vYWN0aW9uc1wiXHJcbmltcG9ydCB7IEhlYWRlckl0ZW1Qcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlckl0ZW0vSGVhZGVySXRlbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogSGVhZGVyU3RhdGUgPSB7XHJcbiAgICBoZWFkZXJOYXZJdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogXCLQodGB0YvQu9C60LAgMVwiLCB1cmw6IFwiI1wiLCBpc0FjdGl2ZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQodGB0YvQu9C60LAgMlwiLCB1cmw6IFwiI1wiLCBpc0FjdGl2ZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0KHRgdGL0LvQutCwIDNcIiwgdXJsOiBcIiNcIiwgaXNBY3RpdmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCh0YHRi9C70LrQsCA0XCIsIHVybDogXCIjXCIsIGlzQWN0aXZlOiBmYWxzZSB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyUmVkdWNlciA9IChzdGF0ZTogSGVhZGVyU3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogSGVhZGVyTmF2SXRlbUFjdGlvbik6IEhlYWRlclN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgSEVBREVSX05BVl9JVEVNX0FDVElWQVRFOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgaXRlbXMgOiBIZWFkZXJJdGVtUHJvcHNbXSA9IFsuLi5hY3Rpb24uaGVhZGVyTmF2SXRlbXNdO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IGl0ZW0uaXNBY3RpdmUgPSAoaSA9PSBhY3Rpb24uYWN0aXZlSXRlbUluZGV4ID8gdHJ1ZSA6IGZhbHNlKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlck5hdkl0ZW1zOiBpdGVtc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==