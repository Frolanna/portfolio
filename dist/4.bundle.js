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
    { id: 0, header: 'Город', data: 'Волгоград' },
    { id: 1, header: 'Возраста', data: '24 года' },
    { id: 2, header: 'Образование', data: '2018 г. - Волгоградский государственный технический университет, факультет Электроники и вычислительной техники, направление Программная инженерия' },
    { id: 3, header: 'Опыт работы', data: '1.5 года full stack разработчиком Sharepoint на ASP.NET WebForms' },
    { id: 4, header: 'Email', data: 'frolann23@gmail.com' }
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
                    "\u041F\u0440\u0438\u0432\u0435\u0442! \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u0424\u0440\u043E\u043B\u043E\u0432\u0430 \u0410\u043D\u043D\u0430. \u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u044E \u0432 \u0433. \u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434, \u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u0442\u044C \u0432 \u041C\u043E\u0441\u043A\u0432\u0443, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043D\u0438\u043C\u0443\u0442 \u0440\u0435\u0436\u0438\u043C \u0441\u0430\u043C\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0438. \u0420\u0430\u0431\u043E\u0442\u0430\u043B\u0430 full stack \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C Sharepoint. \u0421\u0435\u0439\u0447\u0430\u0441 \u0440\u0435\u0448\u0438\u043B\u0430 \u0443\u0433\u043B\u0443\u0431\u0438\u0442\u044C\u0441\u044F \u0432\u043E frontend, \u0442.\u043A. \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0435 :)",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BYm91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUN1QztBQUl2RSxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQW9CO0lBQzlCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDN0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUM5QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0pBQW9KLEVBQUU7SUFDNUwsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGtFQUFrRSxFQUFDO0lBQ3pHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtDQUMxRCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUc7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsVUFBVSxFQUFFLElBQUk7SUFDaEIsUUFBUSxFQUFFLElBQUk7SUFDZCxhQUFhLEVBQUUsTUFBTTtJQUNyQixZQUFZLEVBQUUsQ0FBQztJQUNmLEtBQUssRUFBRSxHQUFHO0lBQ1YsYUFBYSxFQUFFLElBQUk7SUFDbkIsUUFBUSxFQUFFLElBQUk7SUFDZCxhQUFhLEVBQUUsSUFBSTtDQUN0QixDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUc7SUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsS0FBSztJQUN0QixlQUFlLEVBQUUsS0FBSztJQUN0Qix1QkFBdUIsRUFBRSxHQUFHO0NBQy9CO0FBRUQ7SUFBbUMseUJBQXVCO0lBQ3RELGVBQVksS0FBbUI7ZUFDM0Isa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDekIsMEVBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUFFO29CQUFJLElBQUksQ0FBQyxNQUFNO3dCQUFNOztnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFNO1FBQXhELENBQXdELENBQzNELENBQUM7UUFFRixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9FQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFrQixDQUFDLFNBQU0sR0FBUSxDQUFDO1NBQ25FO1FBRUQsT0FBTyxDQUNILG9FQUFLLEVBQUUsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLEtBQUs7WUFDaEMsK0dBQWdCO1lBQ2hCLDJEQUFDLHdFQUF1QixlQUFLLGVBQWUsSUFBRSxjQUFjLEVBQUMsZUFBZTtnQkFDeEUsb0VBQUssU0FBUyxFQUFDLFdBQVc7O29CQUV0QixtRUFBSSxTQUFTLEVBQUMsZ0JBQWdCLElBQ3pCLElBQUksQ0FDSixDQUNILENBQ2dCO1lBRTFCLDJEQUFDLHdFQUF1QixlQUFLLGVBQWUsSUFBRSxjQUFjLEVBQUMsZUFBZTtnQkFDeEUsb0VBQUssU0FBUyxFQUFDLFVBQVU7b0JBQ3JCLG9FQUFLLEdBQUcsRUFBQyx5QkFBeUIsR0FBTyxDQUN2QyxDQUNnQjtZQUUxQixzRUFBTTtZQUVOLDJEQUFDLHdFQUF1QixlQUFLLGVBQWUsSUFBRSxjQUFjLEVBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFFLElBQUk7Z0JBQ2hHLG9FQUFLLEVBQUUsRUFBQyxhQUFhO29CQUNqQiwyREFBQyxrREFBTSxlQUFLLGNBQWMsR0FDckIsTUFBTSxDQUNGLENBQ1AsQ0FDZ0IsQ0FDeEIsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBN0NrQyw0Q0FBSyxDQUFDLFNBQVMsR0E2Q2pEIiwiZmlsZSI6IjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmludGVyZmFjZSBMaXN0RGF0YSB7XHJcbiAgICBpZDogbnVtYmVyLCBoZWFkZXI6IHN0cmluZywgZGF0YTogc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBsaXN0RGF0YTogQXJyYXk8TGlzdERhdGE+ID0gW1xyXG4gICAgeyBpZDogMCwgaGVhZGVyOiAn0JPQvtGA0L7QtCcsIGRhdGE6ICfQktC+0LvQs9C+0LPRgNCw0LQnIH0sXHJcbiAgICB7IGlkOiAxLCBoZWFkZXI6ICfQktC+0LfRgNCw0YHRgtCwJywgZGF0YTogJzI0INCz0L7QtNCwJyB9LFxyXG4gICAgeyBpZDogMiwgaGVhZGVyOiAn0J7QsdGA0LDQt9C+0LLQsNC90LjQtScsIGRhdGE6ICcyMDE4INCzLiAtINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIsINGE0LDQutGD0LvRjNGC0LXRgiDQrdC70LXQutGC0YDQvtC90LjQutC4INC4INCy0YvRh9C40YHQu9C40YLQtdC70YzQvdC+0Lkg0YLQtdGF0L3QuNC60LgsINC90LDQv9GA0LDQstC70LXQvdC40LUg0J/RgNC+0LPRgNCw0LzQvNC90LDRjyDQuNC90LbQtdC90LXRgNC40Y8nIH0sXHJcbiAgICB7IGlkOiAzLCBoZWFkZXI6ICfQntC/0YvRgiDRgNCw0LHQvtGC0YsnLCBkYXRhOiAnMS41INCz0L7QtNCwIGZ1bGwgc3RhY2sg0YDQsNC30YDQsNCx0L7RgtGH0LjQutC+0LwgU2hhcmVwb2ludCDQvdCwIEFTUC5ORVQgV2ViRm9ybXMnfSxcclxuICAgIHsgaWQ6IDQsIGhlYWRlcjogJ0VtYWlsJywgZGF0YTogJ2Zyb2xhbm4yM0BnbWFpbC5jb20nIH1cclxuXTtcclxuXHJcbmNvbnN0IHNsaWRlclNldHRpbmdzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMFxyXG59O1xyXG5cclxuY29uc3QgdHJhbnNpdGlvblByb3BzID0ge1xyXG4gICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcclxuICAgIHRyYW5zaXRpb25FbnRlcjogZmFsc2UsXHJcbiAgICB0cmFuc2l0aW9uTGVhdmU6IGZhbHNlLFxyXG4gICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IDUwMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBSZWFkb25seTx7fT4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gbGlzdERhdGEubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT48Yj57aXRlbS5oZWFkZXJ9OjwvYj4ge2l0ZW0uZGF0YX08L2xpPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBpbWFnZXMucHVzaCg8aW1nIGtleT17aX0gc3JjPXtgLi9pbWFnZXMvcGhvdG9fJHtpfS5qcGdgfT48L2ltZz4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1hYm91dFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPtCe0LHQviDQvNC90LU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHsuLi50cmFuc2l0aW9uUHJvcHN9IHRyYW5zaXRpb25OYW1lPVwibGVmdC10by1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNCy0LXRgiEg0JzQtdC90Y8g0LfQvtCy0YPRgiDQpNGA0L7Qu9C+0LLQsCDQkNC90L3QsC4g0J3QsCDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINC/0YDQvtC20LjQstCw0Y4g0LIg0LMuINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0L3QviDQv9C70LDQvdC40YDRg9GOINC/0LXRgNC10LXRhdCw0YLRjCDQsiDQnNC+0YHQutCy0YMsINC60LDQuiDRgtC+0LvRjNC60L4g0YHQvdC40LzRg9GCINGA0LXQttC40Lwg0YHQsNC80L7QuNC30L7Qu9GP0YbQuNC4LiDQoNCw0LHQvtGC0LDQu9CwIGZ1bGwgc3RhY2sg0YDQsNC30YDQsNCx0L7RgtGH0LjQutC+0LwgU2hhcmVwb2ludC4g0KHQtdC50YfQsNGBINGA0LXRiNC40LvQsCDRg9Cz0LvRg9Cx0LjRgtGM0YHRjyDQstC+IGZyb250ZW5kLCDRgi7Qui4g0YXQvtGH0LXRgtGB0Y8g0YHQvtC30LTQsNCy0LDRgtGMINC/0YDQtdC60YDQsNGB0L3QvtC1IDopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLXRleHQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cInJpZ2h0LXRvLWxlZnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3Bob3RvX21haW4uanBnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHlcIiB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=