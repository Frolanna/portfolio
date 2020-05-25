(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u041E\u0431\u043E \u043C\u043D\u0435"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, transitionProps, { transitionName: "left-to-right" }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BYm91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUN1QztBQUl2RSxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQW9CO0lBQzlCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDcEMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUMxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDdkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsYUFBYSxFQUFFLE1BQU07SUFDckIsWUFBWSxFQUFFLENBQUM7SUFDZixLQUFLLEVBQUUsR0FBRztJQUNWLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFFBQVEsRUFBRSxJQUFJO0lBQ2QsYUFBYSxFQUFFLElBQUk7Q0FDdEIsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsdUJBQXVCLEVBQUUsR0FBRztDQUMvQjtBQUVEO0lBQW1DLHlCQUF1QjtJQUN0RCxlQUFZLEtBQW1CO2VBQzNCLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3pCLDBFQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFBRTtvQkFBSSxJQUFJLENBQUMsTUFBTTt3QkFBTTs7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBTTtRQUF4RCxDQUF3RCxDQUMzRCxDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxvRUFBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBa0IsQ0FBQyxTQUFNLEdBQVEsQ0FBQztTQUNuRTtRQUVELE9BQU8sQ0FDSCxvRUFBSyxFQUFFLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxLQUFLO1lBQ2hDLCtHQUFnQjtZQUNoQiwyREFBQyx3RUFBdUIsZUFBSyxlQUFlLElBQUUsY0FBYyxFQUFDLGVBQWU7Z0JBQ3hFLG9FQUFLLFNBQVMsRUFBQyxXQUFXOztvQkFJdEIsbUVBQUksU0FBUyxFQUFDLGdCQUFnQixJQUN6QixJQUFJLENBQ0osQ0FDSCxDQUNnQjtZQUUxQiwyREFBQyx3RUFBdUIsZUFBSyxlQUFlLElBQUUsY0FBYyxFQUFDLGVBQWU7Z0JBQ3hFLG9FQUFLLFNBQVMsRUFBQyxVQUFVO29CQUNyQixvRUFBSyxHQUFHLEVBQUMseUJBQXlCLEdBQU8sQ0FDdkMsQ0FDZ0I7WUFFMUIsc0VBQU07WUFFTiwyREFBQyx3RUFBdUIsZUFBSyxlQUFlLElBQUUsY0FBYyxFQUFDLFNBQVMsRUFBQyx1QkFBdUIsRUFBRSxJQUFJO2dCQUNoRyxvRUFBSyxFQUFFLEVBQUMsYUFBYTtvQkFDakIsMkRBQUMsa0RBQU0sZUFBSyxjQUFjLEdBQ3JCLE1BQU0sQ0FDRixDQUNQLENBQ2dCLENBQ3hCLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxDQS9Da0MsNENBQUssQ0FBQyxTQUFTLEdBK0NqRCIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdERhdGEge1xyXG4gICAgaWQ6IG51bWJlciwgaGVhZGVyOiBzdHJpbmcsIGRhdGE6IHN0cmluZ1xyXG59O1xyXG5cclxuY29uc3QgbGlzdERhdGE6IEFycmF5PExpc3REYXRhPiA9IFtcclxuICAgIHsgaWQ6IDAsIGhlYWRlcjogJ9CT0L7RgNC+0LQnLCBkYXRhOiAnJyB9LFxyXG4gICAgeyBpZDogMSwgaGVhZGVyOiAn0J7QsdGA0LDQt9C+0LLQsNC90LjQtScsIGRhdGE6ICcnIH0sXHJcbiAgICB7IGlkOiAyLCBoZWFkZXI6ICfQntC/0YvRgiDRgNCw0LHQvtGC0YsnLCBkYXRhOiAnJyB9LFxyXG4gICAgeyBpZDogMywgaGVhZGVyOiAnRW1haWwnLCBkYXRhOiAnJyB9XHJcbl07XHJcblxyXG5jb25zdCBzbGlkZXJTZXR0aW5ncyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcclxuICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDBcclxufTtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHtcclxuICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXHJcbiAgICB0cmFuc2l0aW9uRW50ZXI6IGZhbHNlLFxyXG4gICAgdHJhbnNpdGlvbkxlYXZlOiBmYWxzZSxcclxuICAgIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0OiA1MDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUmVhZG9ubHk8e30+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbGlzdCA9IGxpc3REYXRhLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+PGI+e2l0ZW0uaGVhZGVyfTo8L2I+IHtpdGVtLmRhdGF9PC9saT5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgaW1hZ2VzLnB1c2goPGltZyBrZXk9e2l9IHNyYz17YC4vaW1hZ2VzL3Bob3RvXyR7aX0uanBnYH0+PC9pbWc+KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tYWJvdXRcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMT7QntCx0L4g0LzQvdC1PC9oMT5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cImxlZnQtdG8tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGViaXRpcywgYWNjdXNhbXVzLiBDb25zZXF1YXR1ciBjdWxwYSBvbW5pcyBkaXN0aW5jdGlvIGVsaWdlbmRpIG5vYmlzIGVhIG1vbGVzdGlhcyBldCBkb2xvcnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3JlIGNvcnBvcmlzIGVuaW0sIGVycm9yIGV2ZW5pZXQgdW5kZSwgdGVtcG9yaWJ1cyBhY2N1c2FudGl1bSBxdWkgZWFydW0/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLXRleHQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cInJpZ2h0LXRvLWxlZnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3Bob3RvX21haW4uanBnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHlcIiB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=