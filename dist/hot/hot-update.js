webpackHotUpdate("main",{

/***/ "./src/js/components/About.tsx":
/*!*************************************!*\
  !*** ./src/js/components/About.tsx ***!
  \*************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__);
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



;
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About(props) {
        return _super.call(this, props) || this;
    }
    About.prototype.render = function () {
        var listData = [
            { id: 0, header: 'Город', data: '' },
            { id: 1, header: 'Образование', data: '' },
            { id: 2, header: 'Опыт работы', data: '' },
            { id: 3, header: 'Email', data: '' }
        ];
        var list = listData.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: item.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null,
                    item.header,
                    ":"),
                " ",
                item.data);
        });
        var sliderSettings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 5000
        };
        var images = [];
        for (var i = 1; i < 15; i++) {
            images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { key: i, src: "./images/photo_" + i + ".jpg" }));
        }
        var transitionProps = {
            transitionAppear: true,
            transitionEnter: false,
            transitionLeave: false,
            transitionAppearTimeout: 500
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "main-about", className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, transitionProps, { transitionName: "left-to-right" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041E\u0431\u043E \u043C\u043D\u0435"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "main-text" },
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, accusamus. Consequatur culpa omnis distinctio eligendi nobis ea molestias et dolorum, tempore corporis enim, error eveniet unde, temporibus accusantium qui earum?",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "main-text-list" }, list))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, transitionProps, { transitionName: "right-to-left" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "main-img" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: "./images/photo_main.jpg" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, transitionProps, { transitionName: "opacity", transitionAppearTimeout: 1000 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "main-slider" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, sliderSettings), images)))));
    };
    return About;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));



/***/ }),

/***/ "./src/js/components/App.tsx":
/*!***********************************!*\
  !*** ./src/js/components/App.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/js/components/Header.tsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ "./src/js/components/About.tsx");
/* harmony import */ var _Hobby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hobby */ "./src/js/components/Hobby.tsx");
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





var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "main" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/", exact: true, component: _About__WEBPACK_IMPORTED_MODULE_3__["About"] }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/hobby", exact: true, component: _Hobby__WEBPACK_IMPORTED_MODULE_4__["Hobby"] })))));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BYm91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUN1QztBQUl2RSxDQUFDO0FBRUY7SUFBMkIseUJBQXVCO0lBQzlDLGVBQVksS0FBbUI7ZUFDM0Isa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0ksSUFBTSxRQUFRLEdBQW9CO1lBQzlCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDcEMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUMxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7U0FDdkMsQ0FBQztRQUVGLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3pCLDBFQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFBRTtvQkFBSSxJQUFJLENBQUMsTUFBTTt3QkFBTTs7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBTTtRQUF4RCxDQUF3RCxDQUMzRCxDQUFDO1FBRUYsSUFBTSxjQUFjLEdBQUc7WUFDbkIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxhQUFhLEVBQUUsTUFBTTtZQUNyQixZQUFZLEVBQUUsQ0FBQztZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsYUFBYSxFQUFFLElBQUk7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxhQUFhLEVBQUUsSUFBSTtTQUN0QixDQUFDO1FBRUYsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxvRUFBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBa0IsQ0FBQyxTQUFNLEdBQVEsQ0FBQztTQUNuRTtRQUVELElBQU0sZUFBZSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsdUJBQXVCLEVBQUUsR0FBRztTQUMvQjtRQUVELE9BQU8sQ0FDSCxvRUFBSyxFQUFFLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxLQUFLO1lBQ2hDLDJEQUFDLHdFQUF1QixlQUFLLGVBQWUsSUFBRSxjQUFjLEVBQUMsZUFBZTtnQkFDeEUsK0dBQWdCO2dCQUNoQixvRUFBSyxTQUFTLEVBQUMsV0FBVzs7b0JBSXRCLG1FQUFJLFNBQVMsRUFBQyxnQkFBZ0IsSUFDekIsSUFBSSxDQUNKLENBQ0gsQ0FDZ0I7WUFFMUIsMkRBQUMsd0VBQXVCLGVBQUssZUFBZSxJQUFFLGNBQWMsRUFBQyxlQUFlO2dCQUN4RSxvRUFBSyxTQUFTLEVBQUMsVUFBVTtvQkFDckIsb0VBQUssR0FBRyxFQUFDLHlCQUF5QixHQUFPLENBQ3ZDLENBQ2dCO1lBRTFCLHNFQUFNO1lBRU4sMkRBQUMsd0VBQXVCLGVBQUssZUFBZSxJQUFFLGNBQWMsRUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUUsSUFBSTtnQkFDaEcsb0VBQUssRUFBRSxFQUFDLGFBQWE7b0JBQ2pCLDJEQUFDLGtEQUFNLGVBQUssY0FBYyxHQUNyQixNQUFNLENBQ0YsQ0FDUCxDQUNnQixDQUN4QixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQ0F6RTBCLDRDQUFLLENBQUMsU0FBUyxHQXlFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnlCO0FBQ2dEO0FBRTVDO0FBQ0U7QUFDQTtBQUVoQztJQUFpQyx1QkFBZTtJQUFoRDs7SUFjQSxDQUFDO0lBYkcsb0JBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCwyREFBQyw4REFBTTtZQUNILDJEQUFDLCtDQUFNLE9BQUU7WUFDVCxvRUFBSyxTQUFTLEVBQUMsTUFBTTtnQkFDakIsMkRBQUMsdURBQU07b0JBQ0gsMkRBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLEtBQUssUUFBQyxTQUFTLEVBQUUsNENBQUssR0FBSTtvQkFDMUMsMkRBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssUUFBQyxTQUFTLEVBQUUsNENBQUssR0FBSSxDQUMxQyxDQUNQLENBQ0QsQ0FDWixDQUFDO0lBQ04sQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLENBZGdDLDRDQUFLLENBQUMsU0FBUyxHQWMvQyIsImZpbGUiOiJob3QvaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdERhdGEge1xyXG4gICAgaWQ6IG51bWJlciwgaGVhZGVyOiBzdHJpbmcsIGRhdGE6IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PHt9Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdERhdGE6IEFycmF5PExpc3REYXRhPiA9IFtcclxuICAgICAgICAgICAgeyBpZDogMCwgaGVhZGVyOiAn0JPQvtGA0L7QtCcsIGRhdGE6ICcnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDEsIGhlYWRlcjogJ9Ce0LHRgNCw0LfQvtCy0LDQvdC40LUnLCBkYXRhOiAnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAyLCBoZWFkZXI6ICfQntC/0YvRgiDRgNCw0LHQvtGC0YsnLCBkYXRhOiAnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBoZWFkZXI6ICdFbWFpbCcsIGRhdGE6ICcnIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IGxpc3REYXRhLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+PGI+e2l0ZW0uaGVhZGVyfTo8L2I+IHtpdGVtLmRhdGF9PC9saT5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBzbGlkZXJTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBpbWFnZXMucHVzaCg8aW1nIGtleT17aX0gc3JjPXtgLi9pbWFnZXMvcGhvdG9fJHtpfS5qcGdgfT48L2ltZz4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0OiA1MDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWFib3V0XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLnRyYW5zaXRpb25Qcm9wc30gdHJhbnNpdGlvbk5hbWU9XCJsZWZ0LXRvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPtCe0LHQviDQvNC90LU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWJpdGlzLCBhY2N1c2FtdXMuIENvbnNlcXVhdHVyIGN1bHBhIG9tbmlzIGRpc3RpbmN0aW8gZWxpZ2VuZGkgbm9iaXMgZWEgbW9sZXN0aWFzIGV0IGRvbG9ydW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmUgY29ycG9yaXMgZW5pbSwgZXJyb3IgZXZlbmlldCB1bmRlLCB0ZW1wb3JpYnVzIGFjY3VzYW50aXVtIHF1aSBlYXJ1bT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tdGV4dC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHsuLi50cmFuc2l0aW9uUHJvcHN9IHRyYW5zaXRpb25OYW1lPVwicmlnaHQtdG8tbGVmdFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcGhvdG9fbWFpbi5qcGdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHsuLi50cmFuc2l0aW9uUHJvcHN9IHRyYW5zaXRpb25OYW1lPVwib3BhY2l0eVwiIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0PXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1zbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2xpZGVyU2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBBYm91dCB9IGZyb20gXCIuL0Fib3V0XCI7XHJcbmltcG9ydCB7IEhvYmJ5IH0gZnJvbSBcIi4vSG9iYnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17QWJvdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvYmJ5XCIgZXhhY3QgY29tcG9uZW50PXtIb2JieX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==