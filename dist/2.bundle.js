(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/js/components/Test.tsx":
/*!************************************!*\
  !*** ./src/js/components/Test.tsx ***!
  \************************************/
/*! exports provided: transitionProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionProps", function() { return transitionProps; });
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
var transitionProps = {
    transitionEnter: false,
    transitionLeave: false,
    transitionAppear: true,
    transitionAppearTimeout: 500,
};
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
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Test */ "./src/js/components/Test.tsx");
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, _Test__WEBPACK_IMPORTED_MODULE_2__["transitionProps"], { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null,
                    "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ",
                    this.props.correctAnswersCount,
                    " \u0438\u0437 ",
                    this.props.commonAnswersCount,
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-result-description" }, description))));
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
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Test */ "./src/js/components/Test.tsx");
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



var TestStart = /** @class */ (function (_super) {
    __extends(TestStart, _super);
    function TestStart(props) {
        return _super.call(this, props) || this;
    }
    TestStart.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "main-test", className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, _Test__WEBPACK_IMPORTED_MODULE_2__["transitionProps"], { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-description" }, "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u044D\u0442\u043E\u0442 \u0442\u0435\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C, \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043B\u0438 \u0412\u044B \u0441\u043E \u043C\u043D\u043E\u0439 \u043F\u043E\u0434\u0440\u0443\u0436\u0438\u0442\u044C\u0441\u044F!")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, _Test__WEBPACK_IMPORTED_MODULE_2__["transitionProps"], { transitionName: "opacity-test" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "test-start" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn", onClick: this.props.startTest }, "\u041D\u0430\u0447\u0430\u0442\u044C")))));
    };
    return TestStart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (TestStart);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0QW5zd2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0RmluaXNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9UZXN0UXVlc3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Rlc3RTdGFydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1U7QUFDTTtBQUNpQjtBQUUzRCxJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDWCx1REFBVTtJQUNWLHFEQUFTO0lBQ1QsbURBQVE7QUFDWixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQU9NLElBQU0sZUFBZSxHQUFHO0lBQzNCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsdUJBQXVCLEVBQUUsR0FBRztDQUMvQjtBQUVEO0lBQWtDLHdCQUE4QjtJQUM1RCxjQUFZLEtBQW1CO1FBQS9CLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFFRCxlQUFTLEdBQUcsVUFBQyxLQUEwQztZQUNuRCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRCxnQkFBVSxHQUFHLFVBQUMsTUFBdUI7WUFDakMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sVUFBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQVhHLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxNQUFNLEVBQUUsVUFBVSxDQUFDLFVBQVU7U0FD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TTtZQUNOLDJEQUFDLHdFQUF1QixlQUFLLHFEQUFlLElBQUUsY0FBYyxFQUFDLGNBQWM7Z0JBQ3ZFLG9FQUFLLFNBQVMsRUFBQyxjQUFjLElBQ3hCLE9BQU8sQ0FDTixDQUNnQixDQUN4QixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBM0Z5Qyw0Q0FBSyxDQUFDLFNBQVMsR0EyRnhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIeUI7QUFDOEM7QUFDL0I7QUFNekM7SUFBdUMsNkJBQW1DO0lBQ3RFLG1CQUFZLEtBQXFCO2VBQzdCLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCxvRUFBSyxFQUFFLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxLQUFLO1lBQy9CLHdKQUFzQjtZQUN0QiwyREFBQyx3RUFBdUIsZUFBSyxxREFBZSxJQUFFLGNBQWMsRUFBQyxjQUFjO2dCQUN2RSxvRUFBSyxTQUFTLEVBQUMsa0JBQWtCLDhWQUUzQixDQUNnQjtZQUMxQixzRUFBTTtZQUNOLDJEQUFDLHdFQUF1QixlQUFLLHFEQUFlLElBQUUsY0FBYyxFQUFDLGNBQWM7Z0JBQ3ZFLG9FQUFLLFNBQVMsRUFBQyxZQUFZO29CQUN2Qix1RUFBUSxTQUFTLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsMkNBRWhELENBQ0gsQ0FDZ0IsQ0FDeEIsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXpCc0MsNENBQUssQ0FBQyxTQUFTLEdBeUJyRCIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRlc3RTdGFydCBmcm9tIFwiLi9UZXN0U3RhcnRcIjtcclxuaW1wb3J0IFRlc3RRdWVzdGlvbiBmcm9tIFwiLi9UZXN0UXVlc3Rpb25cIjtcclxuaW1wb3J0IFRlc3RGaW5pc2gsIHsgVGVzdEZpbmlzaFByb3BzIH0gZnJvbSBcIi4vVGVzdEZpbmlzaFwiO1xyXG5cclxuZW51bSBUZXN0U3RhdHVzIHtcclxuICAgIE5vdFN0YXJ0ZWQsXHJcbiAgICBJblByb2Nlc3MsXHJcbiAgICBGaW5pc2hlZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVzdFN0YXRlIHtcclxuICAgIHN0YXR1czogVGVzdFN0YXR1cyxcclxuICAgIHJlc3VsdD86IFRlc3RGaW5pc2hQcm9wc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvblByb3BzID0ge1xyXG4gICAgdHJhbnNpdGlvbkVudGVyOiBmYWxzZSxcclxuICAgIHRyYW5zaXRpb25MZWF2ZTogZmFsc2UsXHJcbiAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxyXG4gICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IDUwMCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgVGVzdFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUmVhZG9ubHk8e30+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IFRlc3RTdGF0dXMuTm90U3RhcnRlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydFRlc3QgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogVGVzdFN0YXR1cy5JblByb2Nlc3MgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoVGVzdCA9IChyZXN1bHQ6IFRlc3RGaW5pc2hQcm9wcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFRlc3RTdGF0dXMuRmluaXNoZWQsIHJlc3VsdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGVzdENvbXBvbmVudDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGVzdFN0YXR1cy5Ob3RTdGFydGVkOlxyXG4gICAgICAgICAgICAgICAgdGVzdENvbXBvbmVudCA9IDxUZXN0U3RhcnQgc3RhcnRUZXN0PXt0aGlzLnN0YXJ0VGVzdH0gLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZXN0U3RhdHVzLkluUHJvY2VzczpcclxuICAgICAgICAgICAgICAgIHRlc3RDb21wb25lbnQgPSA8VGVzdFF1ZXN0aW9uIGZpbmlzaFRlc3Q9e3RoaXMuZmluaXNoVGVzdH0vPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlc3RTdGF0dXMuRmluaXNoZWQ6XHJcbiAgICAgICAgICAgICAgICB0ZXN0Q29tcG9uZW50ID0gPFRlc3RGaW5pc2ggY29ycmVjdEFuc3dlcnNDb3VudD17dGhpcy5zdGF0ZS5yZXN1bHQhLmNvcnJlY3RBbnN3ZXJzQ291bnR9IGNvbW1vbkFuc3dlcnNDb3VudD17dGhpcy5zdGF0ZS5yZXN1bHQhLmNvbW1vbkFuc3dlcnNDb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAge3Rlc3RDb21wb25lbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RBbnN3ZXJQcm9wcyB7XHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIHRleHQ6IHN0cmluZywgXHJcbiAgICBpbWFnZT86IHN0cmluZywgXHJcbiAgICBsYWJlbD86IHN0cmluZyxcclxuICAgIHNlbGVjdEFuc3dlcjogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiwgYW5zd2VySW5mbz86IFRlc3RBbnN3ZXJQcm9wcykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBpbWFnZURpciA9IFwiLi9pbWFnZXMvdGVzdC9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBbnN3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgPFRlc3RBbnN3ZXJQcm9wcywge30+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRlc3QtYW5zd2VyIGJ0blwiIHRpdGxlPXt0aGlzLnByb3BzLmxhYmVsID8gdGhpcy5wcm9wcy5sYWJlbCA6IFwiXCJ9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLnNlbGVjdEFuc3dlcihlKX0+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaW1hZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRlc3QtYW5zd2VyLWltZ1wiIHNyYz17aW1hZ2VEaXIgKyB0aGlzLnByb3BzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnRleHQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LWFuc3dlci10ZXh0XCI+e3RoaXMucHJvcHMudGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7IHRyYW5zaXRpb25Qcm9wcyB9IGZyb20gXCIuL1Rlc3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVzdEZpbmlzaFByb3BzIHtcclxuICAgIGNvcnJlY3RBbnN3ZXJzQ291bnQ6IG51bWJlcixcclxuICAgIGNvbW1vbkFuc3dlcnNDb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RGaW5pc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGVzdEZpbmlzaFByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRlc3RGaW5pc2hQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29ycmVjdEFuc3dlcnNDb3VudCA8IHRoaXMucHJvcHMuY29tbW9uQW5zd2Vyc0NvdW50IC8gMikge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IFwi0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQvNCw0LvQvtCy0LXRgNC+0Y/RgtC90L4sINGH0YLQviDQvNGLINGB0YLQsNC90LXQvCDQsdC70LjQt9C60LjQvNC4INC00YDRg9C30YzRj9C80LguINCd0L4g0LLQvtGCINGF0L7RgNC+0YjQuNC80Lgg0LrQvtC70LvQtdCz0LDQvNC4IC0g0L/QvtGH0LXQvNGDINCx0Ysg0Lgg0L3QtdGCISA6KVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBcItCe0LPQviwg0YMg0L3QsNGBINGC0LDQuiDQvNC90L7Qs9C+INC+0LHRidC10LPQviEg0JTRg9C80LDRjiwg0YfRgtC+INC80Ysg0LvQtdCz0LrQviDRgdC80L7QttC10Lwg0L/QvtC00YDRg9C20LjRgtGM0YHRjyEgOilcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tdGVzdFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPtCg0LXQt9GD0LvRjNGC0LDRgjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLnRyYW5zaXRpb25Qcm9wc30gdHJhbnNpdGlvbk5hbWU9XCJvcGFjaXR5LXRlc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmtC+0LvQuNGH0LXRgdGC0LLQviDQv9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7QsiB7dGhpcy5wcm9wcy5jb3JyZWN0QW5zd2Vyc0NvdW50fSDQuNC3IHt0aGlzLnByb3BzLmNvbW1vbkFuc3dlcnNDb3VudH0uXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXN1bHQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGVzdEFuc3dlclByb3BzIH0gZnJvbSBcIi4vVGVzdEFuc3dlclwiO1xyXG5pbXBvcnQgVGVzdEFuc3dlciBmcm9tIFwiLi9UZXN0QW5zd2VyXCI7XHJcbmltcG9ydCB7IFRlc3RGaW5pc2hQcm9wcyB9IGZyb20gXCIuL1Rlc3RGaW5pc2hcIjtcclxuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHsgdHJhbnNpdGlvblByb3BzIH0gZnJvbSBcIi4vVGVzdFwiO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RRdWVzdGlvblN0YXRlIHtcclxuICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIsXHJcbiAgICBhbnN3ZXJzOiBUZXN0U2VsZWN0ZWRBbnN3ZXJbXSxcclxuICAgIHF1ZXN0aW9ucz86IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBhdmFpbGFibGVBbnN3ZXJzOiBUZXN0QW5zd2VyUHJvcHNbXVxyXG4gICAgfVtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXN0U2VsZWN0ZWRBbnN3ZXIge1xyXG4gICAgcXVlc3Rpb25JZDogbnVtYmVyLFxyXG4gICAgYW5zd2VySWQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVzdFF1ZXN0aW9uUHJvcHMge1xyXG4gICAgZmluaXNoVGVzdDogKHJlc3VsdDogVGVzdEZpbmlzaFByb3BzKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RRdWVzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUZXN0UXVlc3Rpb25Qcm9wcywgVGVzdFF1ZXN0aW9uU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXN0UXVlc3Rpb25Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGFuc3dlcnM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBmZXRjaCgnL3Rlc3QvZ2V0VGVzdFF1ZXN0aW9ucycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uLnRoZW4oZXJyID0+IHt0aHJvdyBlcnI7fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXVlc3Rpb25zOiBkYXRhLnF1ZXN0aW9ucyB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUuY29kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEFuc3dlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIGFuc3dlckluZm86IFRlc3RBbnN3ZXJQcm9wcykgPT4ge1xyXG4gICAgICAgIGxldCBxdWVzdGlvbklkID0gdGhpcy5zdGF0ZS5xdWVzdGlvbnMhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uSW5kZXhdLmlkO1xyXG4gICAgICAgIGxldCBhbnN3ZXJzID0gWy4uLnRoaXMuc3RhdGUuYW5zd2VycywgeyBxdWVzdGlvbklkLCBhbnN3ZXJJZDogYW5zd2VySW5mbz8uaWQgfV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSAodGhpcy5zdGF0ZS5xdWVzdGlvbnMhLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVzdFJlc3VsdChhbnN3ZXJzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25JbmRleCArIDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UXVlc3Rpb25JbmRleCwgYW5zd2VycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXN0UmVzdWx0ID0gKGFuc3dlcnM6IFRlc3RTZWxlY3RlZEFuc3dlcltdKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy90ZXN0L2dldFRlc3RSZXN1bHQnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYW5zd2VycylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb24udGhlbihlcnIgPT4ge3Rocm93IGVycjt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmluaXNoVGVzdChkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUuY29kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucXVlc3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25JbmRleDtcclxuICAgICAgICBsZXQgcXVlc3Rpb24gPSB0aGlzLnN0YXRlLnF1ZXN0aW9uc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHRleHQgPSBxdWVzdGlvbi50ZXh0O1xyXG4gICAgICAgIGxldCBhbnN3ZXJzID0gcXVlc3Rpb24uYXZhaWxhYmxlQW5zd2Vycy5tYXAoKGl0ZW0pID0+IDxUZXN0QW5zd2VyIHsuLi5pdGVtfSBrZXk9e2l0ZW0uaWR9IHNlbGVjdEFuc3dlcj17KGUpID0+IHRoaXMuc2VsZWN0QW5zd2VyKGUsIGl0ZW0pfSAvPilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi10ZXN0XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+0JLQvtC/0YDQvtGBIHtpbmRleCArIDF9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHktdGVzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcXVlc3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLnRyYW5zaXRpb25Qcm9wc30gdHJhbnNpdGlvbk5hbWU9XCJvcGFjaXR5LXRlc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LWFuc3dlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Fuc3dlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSBcInJlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uUHJvcHMgfSBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFN0YXJ0UHJvcHMge1xyXG4gICAgc3RhcnRUZXN0OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RTdGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUZXN0U3RhcnRQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXN0U3RhcnRQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tdGVzdFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPtCh0L7QstC80LXRgdGC0LjQvNC+0YHRgtGMPC9oMT5cclxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4udHJhbnNpdGlvblByb3BzfSB0cmFuc2l0aW9uTmFtZT1cIm9wYWNpdHktdGVzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LnQtNC40YLQtSDRjdGC0L7RgiDRgtC10YHRgiwg0YfRgtC+0LHRiyDRg9C30L3QsNGC0YwsINGB0LzQvtC20LXRgtC1INC70Lgg0JLRiyDRgdC+INC80L3QvtC5INC/0L7QtNGA0YPQttC40YLRjNGB0Y8hXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLnRyYW5zaXRpb25Qcm9wc30gdHJhbnNpdGlvbk5hbWU9XCJvcGFjaXR5LXRlc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5zdGFydFRlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==