(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/js/components/About.tsx":
/*!*************************************!*\
  !*** ./src/js/components/About.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var listData = [
    { id: 0, header: 'Город', data: '' },
    { id: 1, header: 'Образование', data: '' },
    { id: 2, header: 'Опыт работы', data: '' },
    { id: 3, header: 'Email', data: '' }
];
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
var transitionProps = {
    transitionAppear: true,
    transitionEnter: false,
    transitionLeave: false,
    transitionAppearTimeout: 500
};
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About(props) {
        return _super.call(this, props) || this;
    }
    About.prototype.render = function () {
        var list = listData.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: item.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null,
                    item.header,
                    ":"),
                " ",
                item.data);
        });
        var images = [];
        for (var i = 1; i < 15; i++) {
            images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { key: i, src: "./images/photo_" + i + ".jpg" }));
        }
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
/* harmony default export */ __webpack_exports__["default"] = (About);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BYm91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUN1QztBQUl2RSxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQW9CO0lBQzlCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDcEMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUMxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDdkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsYUFBYSxFQUFFLE1BQU07SUFDckIsWUFBWSxFQUFFLENBQUM7SUFDZixLQUFLLEVBQUUsR0FBRztJQUNWLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFFBQVEsRUFBRSxJQUFJO0lBQ2QsYUFBYSxFQUFFLElBQUk7Q0FDdEIsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsdUJBQXVCLEVBQUUsR0FBRztDQUMvQjtBQUVEO0lBQW1DLHlCQUF1QjtJQUN0RCxlQUFZLEtBQW1CO2VBQzNCLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3pCLDBFQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFBRTtvQkFBSSxJQUFJLENBQUMsTUFBTTt3QkFBTTs7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBTTtRQUF4RCxDQUF3RCxDQUMzRCxDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxvRUFBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBa0IsQ0FBQyxTQUFNLEdBQVEsQ0FBQztTQUNuRTtRQUVELE9BQU8sQ0FDSCxvRUFBSyxFQUFFLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxLQUFLO1lBQ2hDLDJEQUFDLHdFQUF1QixlQUFLLGVBQWUsSUFBRSxjQUFjLEVBQUMsZUFBZTtnQkFDeEUsK0dBQWdCO2dCQUNoQixvRUFBSyxTQUFTLEVBQUMsV0FBVzs7b0JBSXRCLG1FQUFJLFNBQVMsRUFBQyxnQkFBZ0IsSUFDekIsSUFBSSxDQUNKLENBQ0gsQ0FDZ0I7WUFFMUIsMkRBQUMsd0VBQXVCLGVBQUssZUFBZSxJQUFFLGNBQWMsRUFBQyxlQUFlO2dCQUN4RSxvRUFBSyxTQUFTLEVBQUMsVUFBVTtvQkFDckIsb0VBQUssR0FBRyxFQUFDLHlCQUF5QixHQUFPLENBQ3ZDLENBQ2dCO1lBRTFCLHNFQUFNO1lBRU4sMkRBQUMsd0VBQXVCLGVBQUssZUFBZSxJQUFFLGNBQWMsRUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUUsSUFBSTtnQkFDaEcsb0VBQUssRUFBRSxFQUFDLGFBQWE7b0JBQ2pCLDJEQUFDLGtEQUFNLGVBQUssY0FBYyxHQUNyQixNQUFNLENBQ0YsQ0FDUCxDQUNnQixDQUN4QixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQ0EvQ2tDLDRDQUFLLENBQUMsU0FBUyxHQStDakQiLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5cclxuaW50ZXJmYWNlIExpc3REYXRhIHtcclxuICAgIGlkOiBudW1iZXIsIGhlYWRlcjogc3RyaW5nLCBkYXRhOiBzdHJpbmdcclxufTtcclxuXHJcbmNvbnN0IGxpc3REYXRhOiBBcnJheTxMaXN0RGF0YT4gPSBbXHJcbiAgICB7IGlkOiAwLCBoZWFkZXI6ICfQk9C+0YDQvtC0JywgZGF0YTogJycgfSxcclxuICAgIHsgaWQ6IDEsIGhlYWRlcjogJ9Ce0LHRgNCw0LfQvtCy0LDQvdC40LUnLCBkYXRhOiAnJyB9LFxyXG4gICAgeyBpZDogMiwgaGVhZGVyOiAn0J7Qv9GL0YIg0YDQsNCx0L7RgtGLJywgZGF0YTogJycgfSxcclxuICAgIHsgaWQ6IDMsIGhlYWRlcjogJ0VtYWlsJywgZGF0YTogJycgfVxyXG5dO1xyXG5cclxuY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwXHJcbn07XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB7XHJcbiAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxyXG4gICAgdHJhbnNpdGlvbkVudGVyOiBmYWxzZSxcclxuICAgIHRyYW5zaXRpb25MZWF2ZTogZmFsc2UsXHJcbiAgICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dDogNTAwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PHt9Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7ICAgICAgIFxyXG4gICAgICAgIGxldCBsaXN0ID0gbGlzdERhdGEubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT48Yj57aXRlbS5oZWFkZXJ9OjwvYj4ge2l0ZW0uZGF0YX08L2xpPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBpbWFnZXMucHVzaCg8aW1nIGtleT17aX0gc3JjPXtgLi9pbWFnZXMvcGhvdG9fJHtpfS5qcGdgfT48L2ltZz4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1hYm91dFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHsuLi50cmFuc2l0aW9uUHJvcHN9IHRyYW5zaXRpb25OYW1lPVwibGVmdC10by1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT7QntCx0L4g0LzQvdC1PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGViaXRpcywgYWNjdXNhbXVzLiBDb25zZXF1YXR1ciBjdWxwYSBvbW5pcyBkaXN0aW5jdGlvIGVsaWdlbmRpIG5vYmlzIGVhIG1vbGVzdGlhcyBldCBkb2xvcnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3JlIGNvcnBvcmlzIGVuaW0sIGVycm9yIGV2ZW5pZXQgdW5kZSwgdGVtcG9yaWJ1cyBhY2N1c2FudGl1bSBxdWkgZWFydW0/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLXRleHQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cInJpZ2h0LXRvLWxlZnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3Bob3RvX21haW4uanBnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHlcIiB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=