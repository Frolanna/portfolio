webpackHotUpdate(2,{

/***/ "./src/js/components/TestAnswer.tsx":
/*!******************************************!*\
  !*** ./src/js/components/TestAnswer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var imageDir = "./images/test/";
var TestAnswer = /** @class */ (function (_super) {
    __extends(TestAnswer, _super);
    function TestAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestAnswer.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "test-answer btn", title: this.props.label ? this.props.label : "", onClick: function (e) { return _this.props.selectAnswer(e); } },
            this.props.image &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "test-answer-img", src: imageDir + this.props.image }),
            this.props.text &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "test-answer-text" }, this.props.text)));
    };
    return TestAnswer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestAnswer);


/***/ }),

/***/ "./src/js/components/TestQuestion.tsx":
/*!********************************************!*\
  !*** ./src/js/components/TestQuestion.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TestAnswer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestAnswer */ "./src/js/components/TestAnswer.tsx");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Test */ "./src/js/components/Test.tsx");
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};




var TestQuestion = /** @class */ (function (_super) {
    __extends(TestQuestion, _super);
    function TestQuestion(props) {
        var _this = _super.call(this, props) || this;
        _this.selectAnswer = function (event, answerInfo) {
            var questionId = _this.state.questions[_this.state.currentQuestionIndex].id;
            var answers = __spreadArrays(_this.state.answers, [{ questionId: questionId, answerId: answerInfo === null || answerInfo === void 0 ? void 0 : answerInfo.id }]);
            if (_this.state.currentQuestionIndex === (_this.state.questions.length - 1)) {
                _this.getTestResult(answers);
                return;
            }
            var currentQuestionIndex = _this.state.currentQuestionIndex + 1;
            _this.setState({ currentQuestionIndex: currentQuestionIndex, answers: answers });
        };
        _this.getTestResult = function (answers) {
            fetch('/test/getTestResult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answers)
            })
                .then(function (response) {
                var json = response.json();
                if (response.ok) {
                    return json;
                }
                else {
                    return json.then(function (err) { throw err; });
                }
            })
                .then(function (data) {
                _this.props.finishTest(data);
            })
                .catch(function (e) { return console.error(e.code); });
        };
        _this.state = {
            currentQuestionIndex: 0,
            answers: []
        };
        return _this;
    }
    TestQuestion.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/test/getTestQuestions')
            .then(function (response) {
            var json = response.json();
            if (response.ok) {
                return json;
            }
            else {
                return json.then(function (err) { throw err; });
            }
        })
            .then(function (data) {
            _this.setState({ questions: data.questions });
        })
            .catch(function (e) { return console.error(e.code); });
    };
    TestQuestion.prototype.render = function () {
        var _this = this;
        if (!this.state.questions) {
            return "";
        }
        var index = this.state.currentQuestionIndex;
        var question = this.state.questions[index];
        var text = question.text;
        var answers = question.availableAnswers.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TestAnswer__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, item, { key: item.id, selectAnswer: function (e) { return _this.selectAnswer(e, item); } })); });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "main-test", className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null,
                "\u0412\u043E\u043F\u0440\u043E\u0441 ",
                index + 1),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, _Test__WEBPACK_IMPORTED_MODULE_3__["transitionProps"], { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-question" }, text)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, _Test__WEBPACK_IMPORTED_MODULE_3__["transitionProps"], { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-answers" }, answers))));
    };
    return TestQuestion;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestQuestion);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0QW5zd2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0UXVlc3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBVTFCLElBQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDO0FBRWxDO0lBQXdDLDhCQUFxQztJQUE3RTs7SUFhQSxDQUFDO0lBWkcsMkJBQU0sR0FBTjtRQUFBLGlCQVdDO1FBVkcsT0FBTyxDQUNILHVFQUFRLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFlBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUExQixDQUEwQjtZQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ2Qsb0VBQUssU0FBUyxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUk7WUFFdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNiLHFFQUFNLFNBQVMsRUFBQyxrQkFBa0IsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBUSxDQUUxRCxDQUNaLENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBYnVDLDRDQUFLLENBQUMsU0FBUyxHQWF0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeUI7QUFFWTtBQUVrQztBQUMvQjtBQXFCekM7SUFBMEMsZ0NBQXFEO0lBQzNGLHNCQUFZLEtBQXdCO1FBQXBDLFlB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ZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVzdEFuc3dlclByb3BzIHtcclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgdGV4dDogc3RyaW5nLCBcclxuICAgIGltYWdlPzogc3RyaW5nLCBcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgc2VsZWN0QW5zd2VyOiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBhbnN3ZXJJbmZvPzogVGVzdEFuc3dlclByb3BzKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlRGlyID0gXCIuL2ltYWdlcy90ZXN0L1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFuc3dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCA8VGVzdEFuc3dlclByb3BzLCB7fT4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGVzdC1hbnN3ZXIgYnRuXCIgdGl0bGU9e3RoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogXCJcIn0gb25DbGljaz17KGUpID0+IHRoaXMucHJvcHMuc2VsZWN0QW5zd2VyKGUpfT5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pbWFnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGVzdC1hbnN3ZXItaW1nXCIgc3JjPXtpbWFnZURpciArIHRoaXMucHJvcHMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtYW5zd2VyLXRleHRcIj57dGhpcy5wcm9wcy50ZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGVzdEFuc3dlclByb3BzIH0gZnJvbSBcIi4vVGVzdEFuc3dlclwiO1xyXG5pbXBvcnQgVGVzdEFuc3dlciBmcm9tIFwiLi9UZXN0QW5zd2VyXCI7XHJcbmltcG9ydCB7IFRlc3RGaW5pc2hQcm9wcyB9IGZyb20gXCIuL1Rlc3RGaW5pc2hcIjtcclxuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHsgdHJhbnNpdGlvblByb3BzIH0gZnJvbSBcIi4vVGVzdFwiO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RRdWVzdGlvblN0YXRlIHtcclxuICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIsXHJcbiAgICBhbnN3ZXJzOiBUZXN0U2VsZWN0ZWRBbnN3ZXJbXSxcclxuICAgIHF1ZXN0aW9ucz86IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBhdmFpbGFibGVBbnN3ZXJzOiBUZXN0QW5zd2VyUHJvcHNbXVxyXG4gICAgfVtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXN0U2VsZWN0ZWRBbnN3ZXIge1xyXG4gICAgcXVlc3Rpb25JZDogbnVtYmVyLFxyXG4gICAgYW5zd2VySWQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVzdFF1ZXN0aW9uUHJvcHMge1xyXG4gICAgZmluaXNoVGVzdDogKHJlc3VsdDogVGVzdEZpbmlzaFByb3BzKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RRdWVzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUZXN0UXVlc3Rpb25Qcm9wcywgVGVzdFF1ZXN0aW9uU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXN0UXVlc3Rpb25Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGFuc3dlcnM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBmZXRjaCgnL3Rlc3QvZ2V0VGVzdFF1ZXN0aW9ucycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uLnRoZW4oZXJyID0+IHt0aHJvdyBlcnI7fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXVlc3Rpb25zOiBkYXRhLnF1ZXN0aW9ucyB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUuY29kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEFuc3dlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIGFuc3dlckluZm86IFRlc3RBbnN3ZXJQcm9wcykgPT4ge1xyXG4gICAgICAgIGxldCBxdWVzdGlvbklkID0gdGhpcy5zdGF0ZS5xdWVzdGlvbnMhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uSW5kZXhdLmlkO1xyXG4gICAgICAgIGxldCBhbnN3ZXJzID0gWy4uLnRoaXMuc3RhdGUuYW5zd2VycywgeyBxdWVzdGlvbklkLCBhbnN3ZXJJZDogYW5zd2VySW5mbz8uaWQgfV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSAodGhpcy5zdGF0ZS5xdWVzdGlvbnMhLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVzdFJlc3VsdChhbnN3ZXJzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25JbmRleCArIDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UXVlc3Rpb25JbmRleCwgYW5zd2VycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXN0UmVzdWx0ID0gKGFuc3dlcnM6IFRlc3RTZWxlY3RlZEFuc3dlcltdKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy90ZXN0L2dldFRlc3RSZXN1bHQnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYW5zd2VycylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb24udGhlbihlcnIgPT4ge3Rocm93IGVycjt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmluaXNoVGVzdChkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUuY29kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucXVlc3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25JbmRleDtcclxuICAgICAgICBsZXQgcXVlc3Rpb24gPSB0aGlzLnN0YXRlLnF1ZXN0aW9uc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHRleHQgPSBxdWVzdGlvbi50ZXh0O1xyXG4gICAgICAgIGxldCBhbnN3ZXJzID0gcXVlc3Rpb24uYXZhaWxhYmxlQW5zd2Vycy5tYXAoKGl0ZW0pID0+IDxUZXN0QW5zd2VyIHsuLi5pdGVtfSBrZXk9e2l0ZW0uaWR9IHNlbGVjdEFuc3dlcj17KGUpID0+IHRoaXMuc2VsZWN0QW5zd2VyKGUsIGl0ZW0pfSAvPilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi10ZXN0XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+0JLQvtC/0YDQvtGBIHtpbmRleCArIDF9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHktdGVzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcXVlc3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLnRyYW5zaXRpb25Qcm9wc30gdHJhbnNpdGlvbk5hbWU9XCJvcGFjaXR5LXRlc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LWFuc3dlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Fuc3dlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==