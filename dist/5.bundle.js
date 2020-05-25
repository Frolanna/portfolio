(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/js/components/Test.tsx":
/*!************************************!*\
  !*** ./src/js/components/Test.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TestStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestStart */ "./src/js/components/TestStart.tsx");
/* harmony import */ var _TestQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestQuestion */ "./src/js/components/TestQuestion.tsx");
/* harmony import */ var _TestFinish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestFinish */ "./src/js/components/TestFinish.tsx");
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




var TestStatus;
(function (TestStatus) {
    TestStatus[TestStatus["NotStarted"] = 0] = "NotStarted";
    TestStatus[TestStatus["InProcess"] = 1] = "InProcess";
    TestStatus[TestStatus["Finished"] = 2] = "Finished";
})(TestStatus || (TestStatus = {}));
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(props) {
        var _this = _super.call(this, props) || this;
        _this.startTest = function (event) {
            _this.setState({ status: TestStatus.InProcess });
        };
        _this.finishTest = function (result) {
            _this.setState({ status: TestStatus.Finished, result: result });
        };
        _this.state = {
            status: TestStatus.NotStarted
        };
        return _this;
    }
    Test.prototype.render = function () {
        var testComponent;
        switch (this.state.status) {
            case TestStatus.NotStarted:
                testComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TestStart__WEBPACK_IMPORTED_MODULE_1__["default"], { startTest: this.startTest });
                break;
            case TestStatus.InProcess:
                testComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TestQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], { finishTest: this.finishTest });
                break;
            case TestStatus.Finished:
                testComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TestFinish__WEBPACK_IMPORTED_MODULE_3__["default"], { correctAnswersCount: this.state.result.correctAnswersCount, commonAnswersCount: this.state.result.commonAnswersCount });
                break;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "main" }, testComponent));
    };
    return Test;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (Test);


/***/ }),

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

var TestAnswer = /** @class */ (function (_super) {
    __extends(TestAnswer, _super);
    function TestAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestAnswer.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "test-answer btn", "data-title": this.props.label ? this.props.label : "", onClick: function (e) { return _this.props.selectAnswer(e); } },
            this.props.image &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "test-answer-img", src: this.props.image }),
            this.props.text &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "test-answer-text" }, this.props.text)));
    };
    return TestAnswer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestAnswer);


/***/ }),

/***/ "./src/js/components/TestFinish.tsx":
/*!******************************************!*\
  !*** ./src/js/components/TestFinish.tsx ***!
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

var TestFinish = /** @class */ (function (_super) {
    __extends(TestFinish, _super);
    function TestFinish(props) {
        return _super.call(this, props) || this;
    }
    TestFinish.prototype.render = function () {
        var description = "";
        if (this.props.correctAnswersCount < this.props.commonAnswersCount / 2) {
            description = "К сожалению, маловероятно, что мы станем близкими друзьями. Но вот хорошими коллегами - почему бы и нет! :)";
        }
        else {
            description = "Ого, у нас так много общего! Думаю, что мы легко сможем подружиться! :)";
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "main-test", className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null,
                "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ",
                this.props.correctAnswersCount,
                " \u0438\u0437 ",
                this.props.commonAnswersCount,
                "."),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-result-description" }, description)));
    };
    return TestFinish;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestFinish);


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
                return response.json();
            })
                .then(function (data) {
                _this.props.finishTest(data);
            })
                .catch(function (e) { return console.log(e); });
            ;
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
            return response.json();
        })
            .then(function (data) {
            _this.setState({ questions: data.questions });
        });
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-question" }, text),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-answers" }, answers)));
    };
    return TestQuestion;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestQuestion);


/***/ }),

/***/ "./src/js/components/TestStart.tsx":
/*!*****************************************!*\
  !*** ./src/js/components/TestStart.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__);
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


var transitionProps = {
    transitionEnter: false,
    transitionLeave: false,
    transitionAppear: true,
    transitionAppearTimeout: 1000,
};
var TestStart = /** @class */ (function (_super) {
    __extends(TestStart, _super);
    function TestStart(props) {
        return _super.call(this, props) || this;
    }
    TestStart.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "main-test", className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, transitionProps, { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-description" }, "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u044D\u0442\u043E\u0442 \u0442\u0435\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C, \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043B\u0438 \u0412\u044B \u0441\u043E \u043C\u043D\u043E\u0439 \u043F\u043E\u0434\u0440\u0443\u0436\u0438\u0442\u044C\u0441\u044F!")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, transitionProps, { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-start" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn", onClick: this.props.startTest }, "\u041D\u0430\u0447\u0430\u0442\u044C")))));
    };
    return TestStart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestStart);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0QW5zd2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0RmluaXNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0UXVlc3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Rlc3RTdGFydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNNO0FBQ2lCO0FBRTNELElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLHVEQUFVO0lBQ1YscURBQVM7SUFDVCxtREFBUTtBQUNaLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBT0Q7SUFBa0Msd0JBQThCO0lBQzVELGNBQVksS0FBbUI7UUFBL0IsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FLZjtRQUVELGVBQVMsR0FBRyxVQUFDLEtBQTBDO1lBQ25ELEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELGdCQUFVLEdBQUcsVUFBQyxNQUF1QjtZQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxVQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBWEcsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxVQUFVLENBQUMsVUFBVTtTQUNoQzs7SUFDTCxDQUFDO0lBVUQscUJBQU0sR0FBTjtRQUNJLElBQUksYUFBYSxDQUFDO1FBQ2xCLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdkIsS0FBSyxVQUFVLENBQUMsVUFB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QUNULENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBekJzQyw0Q0FBSyxDQUFDLFNBQVMsR0F5QnJEIiwiZmlsZSI6IjUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGVzdFN0YXJ0IGZyb20gXCIuL1Rlc3RTdGFydFwiO1xyXG5pbXBvcnQgVGVzdFF1ZXN0aW9uIGZyb20gXCIuL1Rlc3RRdWVzdGlvblwiO1xyXG5pbXBvcnQgVGVzdEZpbmlzaCwgeyBUZXN0RmluaXNoUHJvcHMgfSBmcm9tIFwiLi9UZXN0RmluaXNoXCI7XHJcblxyXG5lbnVtIFRlc3RTdGF0dXMge1xyXG4gICAgTm90U3RhcnRlZCxcclxuICAgIEluUHJvY2VzcyxcclxuICAgIEZpbmlzaGVkXHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXN0U3RhdGUge1xyXG4gICAgc3RhdHVzOiBUZXN0U3RhdHVzLFxyXG4gICAgcmVzdWx0PzogVGVzdEZpbmlzaFByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIFRlc3RTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PHt9Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBUZXN0U3RhdHVzLk5vdFN0YXJ0ZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRUZXN0ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFRlc3RTdGF0dXMuSW5Qcm9jZXNzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaFRlc3QgPSAocmVzdWx0OiBUZXN0RmluaXNoUHJvcHMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBUZXN0U3RhdHVzLkZpbmlzaGVkLCByZXN1bHR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRlc3RDb21wb25lbnQ7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIFRlc3RTdGF0dXMuTm90U3RhcnRlZDpcclxuICAgICAgICAgICAgICAgIHRlc3RDb21wb25lbnQgPSA8VGVzdFN0YXJ0IHN0YXJ0VGVzdD17dGhpcy5zdGFydFRlc3R9IC8+O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVzdFN0YXR1cy5JblByb2Nlc3M6XHJcbiAgICAgICAgICAgICAgICB0ZXN0Q29tcG9uZW50ID0gPFRlc3RRdWVzdGlvbiBmaW5pc2hUZXN0PXt0aGlzLmZpbmlzaFRlc3R9Lz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZXN0U3RhdHVzLkZpbmlzaGVkOlxyXG4gICAgICAgICAgICAgICAgdGVzdENvbXBvbmVudCA9IDxUZXN0RmluaXNoIGNvcnJlY3RBbnN3ZXJzQ291bnQ9e3RoaXMuc3RhdGUucmVzdWx0IS5jb3JyZWN0QW5zd2Vyc0NvdW50fSBjb21tb25BbnN3ZXJzQ291bnQ9e3RoaXMuc3RhdGUucmVzdWx0IS5jb21tb25BbnN3ZXJzQ291bnR9Lz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIHt0ZXN0Q29tcG9uZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXN0QW5zd2VyUHJvcHMge1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICB0ZXh0OiBzdHJpbmcsIFxyXG4gICAgaW1hZ2U/OiBzdHJpbmcsIFxyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICBzZWxlY3RBbnN3ZXI6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIGFuc3dlckluZm8/OiBUZXN0QW5zd2VyUHJvcHMpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFuc3dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCA8VGVzdEFuc3dlclByb3BzLCB7fT4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGVzdC1hbnN3ZXIgYnRuXCIgZGF0YS10aXRsZT17dGhpcy5wcm9wcy5sYWJlbCA/IHRoaXMucHJvcHMubGFiZWwgOiBcIlwifSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5zZWxlY3RBbnN3ZXIoZSl9PlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmltYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0ZXN0LWFuc3dlci1pbWdcIiBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtYW5zd2VyLXRleHRcIj57dGhpcy5wcm9wcy50ZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVzdEZpbmlzaFByb3Bze1xyXG4gICAgY29ycmVjdEFuc3dlcnNDb3VudDogbnVtYmVyLCBcclxuICAgIGNvbW1vbkFuc3dlcnNDb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RGaW5pc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGVzdEZpbmlzaFByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRlc3RGaW5pc2hQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvcnJlY3RBbnN3ZXJzQ291bnQgPCB0aGlzLnByb3BzLmNvbW1vbkFuc3dlcnNDb3VudCAvIDIpe1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IFwi0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQvNCw0LvQvtCy0LXRgNC+0Y/RgtC90L4sINGH0YLQviDQvNGLINGB0YLQsNC90LXQvCDQsdC70LjQt9C60LjQvNC4INC00YDRg9C30YzRj9C80LguINCd0L4g0LLQvtGCINGF0L7RgNC+0YjQuNC80Lgg0LrQvtC70LvQtdCz0LDQvNC4IC0g0L/QvtGH0LXQvNGDINCx0Ysg0Lgg0L3QtdGCISA6KVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IFwi0J7Qs9C+LCDRgyDQvdCw0YEg0YLQsNC6INC80L3QvtCz0L4g0L7QsdGJ0LXQs9C+ISDQlNGD0LzQsNGOLCDRh9GC0L4g0LzRiyDQu9C10LPQutC+INGB0LzQvtC20LXQvCDQv9C+0LTRgNGD0LbQuNGC0YzRgdGPISA6KVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi10ZXN0XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+0KDQtdC30YPQu9GM0YLQsNGCPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICDQmtC+0LvQuNGH0LXRgdGC0LLQviDQv9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7QsiB7dGhpcy5wcm9wcy5jb3JyZWN0QW5zd2Vyc0NvdW50fSDQuNC3IHt0aGlzLnByb3BzLmNvbW1vbkFuc3dlcnNDb3VudH0uXHJcbiAgICAgICAgICAgICAgICA8L2gyPiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlc3VsdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUZXN0QW5zd2VyUHJvcHMgfSBmcm9tIFwiLi9UZXN0QW5zd2VyXCI7XHJcbmltcG9ydCBUZXN0QW5zd2VyIGZyb20gXCIuL1Rlc3RBbnN3ZXJcIjtcclxuaW1wb3J0IHsgVGVzdEZpbmlzaFByb3BzIH0gZnJvbSBcIi4vVGVzdEZpbmlzaFwiO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RRdWVzdGlvblN0YXRlIHtcclxuICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIsXHJcbiAgICBhbnN3ZXJzOiBUZXN0U2VsZWN0ZWRBbnN3ZXJbXSxcclxuICAgIHF1ZXN0aW9ucz86IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBhdmFpbGFibGVBbnN3ZXJzOiBUZXN0QW5zd2VyUHJvcHNbXVxyXG4gICAgfVtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXN0U2VsZWN0ZWRBbnN3ZXIge1xyXG4gICAgcXVlc3Rpb25JZDogbnVtYmVyLFxyXG4gICAgYW5zd2VySWQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVzdFF1ZXN0aW9uUHJvcHN7XHJcbiAgICBmaW5pc2hUZXN0OiAocmVzdWx0OiBUZXN0RmluaXNoUHJvcHMpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdFF1ZXN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRlc3RRdWVzdGlvblByb3BzLCBUZXN0UXVlc3Rpb25TdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRlc3RRdWVzdGlvblByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25JbmRleDogMCxcclxuICAgICAgICAgICAgYW5zd2VyczogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGZldGNoKCcvdGVzdC9nZXRUZXN0UXVlc3Rpb25zJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXN0aW9uczogZGF0YS5xdWVzdGlvbnMgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEFuc3dlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIGFuc3dlckluZm86IFRlc3RBbnN3ZXJQcm9wcykgPT4ge1xyXG4gICAgICAgIGxldCBxdWVzdGlvbklkID0gdGhpcy5zdGF0ZS5xdWVzdGlvbnMhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uSW5kZXhdLmlkO1xyXG4gICAgICAgIGxldCBhbnN3ZXJzID0gWy4uLnRoaXMuc3RhdGUuYW5zd2VycywgeyBxdWVzdGlvbklkLCBhbnN3ZXJJZDogYW5zd2VySW5mbz8uaWQgfV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSAodGhpcy5zdGF0ZS5xdWVzdGlvbnMhLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVzdFJlc3VsdChhbnN3ZXJzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25JbmRleCArIDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UXVlc3Rpb25JbmRleCwgYW5zd2VycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXN0UmVzdWx0ID0gKGFuc3dlcnM6IFRlc3RTZWxlY3RlZEFuc3dlcltdKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy90ZXN0L2dldFRlc3RSZXN1bHQnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhbnN3ZXJzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmluaXNoVGVzdChkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucXVlc3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25JbmRleDtcclxuICAgICAgICBsZXQgcXVlc3Rpb24gPSB0aGlzLnN0YXRlLnF1ZXN0aW9uc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHRleHQgPSBxdWVzdGlvbi50ZXh0O1xyXG4gICAgICAgIGxldCBhbnN3ZXJzID0gcXVlc3Rpb24uYXZhaWxhYmxlQW5zd2Vycy5tYXAoKGl0ZW0pID0+IDxUZXN0QW5zd2VyIHsuLi5pdGVtfSBrZXk9e2l0ZW0uaWR9IHNlbGVjdEFuc3dlcj17KGUpID0+IHRoaXMuc2VsZWN0QW5zd2VyKGUsIGl0ZW0pfSAvPilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi10ZXN0XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+0JLQvtC/0YDQvtGBIHtpbmRleCArIDF9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1xdWVzdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1hbnN3ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Fuc3dlcnN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmludGVyZmFjZSBUZXN0U3RhcnRQcm9wcyB7XHJcbiAgICBzdGFydFRlc3Q6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgdHJhbnNpdGlvblByb3BzID0ge1xyXG4gICAgdHJhbnNpdGlvbkVudGVyOiBmYWxzZSxcclxuICAgIHRyYW5zaXRpb25MZWF2ZTogZmFsc2UsXHJcbiAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxyXG4gICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IDEwMDAsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RTdGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUZXN0U3RhcnRQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXN0U3RhcnRQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tdGVzdFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPtCh0L7QstC80LXRgdGC0LjQvNC+0YHRgtGMPC9oMT5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHktdGVzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LnQtNC40YLQtSDRjdGC0L7RgiDRgtC10YHRgiwg0YfRgtC+0LHRiyDRg9C30L3QsNGC0YwsINGB0LzQvtC20LXRgtC1INC70Lgg0JLRiyDRgdC+INC80L3QvtC5INC/0L7QtNGA0YPQttC40YLRjNGB0Y8hXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLnRyYW5zaXRpb25Qcm9wc30gdHJhbnNpdGlvbk5hbWU9XCJvcGFjaXR5LXRlc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5zdGFydFRlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==