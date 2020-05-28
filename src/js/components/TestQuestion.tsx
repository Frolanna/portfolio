import React from "react";
import { TestAnswerProps } from "./TestAnswer";
import TestAnswer from "./TestAnswer";
import { TestFinishProps } from "./TestFinish";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { transitionProps } from "./Test";

interface TestQuestionState {
    currentQuestionIndex: number,
    answers: TestSelectedAnswer[],
    questions?: {
        id: number,
        text: string,
        availableAnswers: TestAnswerProps[]
    }[]
}

interface TestSelectedAnswer {
    questionId: number,
    answerId: number
}

interface TestQuestionProps {
    finishTest: (result: TestFinishProps) => void
}

export default class TestQuestion extends React.Component<TestQuestionProps, TestQuestionState> {
    constructor(props: TestQuestionProps) {
        super(props);

        this.state = {
            currentQuestionIndex: 0,
            answers: []
        };
    }

    componentDidMount() {
        fetch('/test/getTestQuestions')
            .then((response) => {
                let json = response.json();
                if (response.ok) {
                    return json;
                }
                else {
                    return json.then(err => { throw err; });
                }
            })
            .then((data) => {
                this.setState({ questions: data.questions });
            })
            .catch((e) => console.error(e.code));
    }

    selectAnswer = (event: React.MouseEvent<HTMLButtonElement>, answerInfo: TestAnswerProps) => {
        let questionId = this.state.questions![this.state.currentQuestionIndex].id;
        let answers = [...this.state.answers, { questionId, answerId: answerInfo?.id }];

        if (this.state.currentQuestionIndex === (this.state.questions!.length - 1)) {
            this.getTestResult(answers);
            return;
        }

        let currentQuestionIndex = this.state.currentQuestionIndex + 1;

        this.setState({ currentQuestionIndex, answers });
    }

    getTestResult = (answers: TestSelectedAnswer[]) => {
        fetch('/test/getTestResult',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answers)
            })
            .then((response) => {
                let json = response.json();
                if (response.ok) {
                    return json;
                }
                else {
                    return json.then(err => { throw err; });
                }
            })
            .then((data) => {
                this.props.finishTest(data);
            })
            .catch((e) => console.error(e.code));
    }

    render() {
        if (!this.state.questions) {
            return "";
        }

        let index = this.state.currentQuestionIndex;
        let question = this.state.questions[index];
        let text = question.text;
        let answers = question.availableAnswers.map((item) => <TestAnswer {...item} key={item.id} selectAnswer={(e) => this.selectAnswer(e, item)} />)
        return (
            <div id="main-test" className="row">
                <h1>Вопрос {index + 1}</h1>
                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity" >
                    <div key={question.id} className="test-question">
                        {text}
                    </div>
                </ReactCSSTransitionGroup>
                <hr />
                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity" >
                    <div key={question.id} className="test-answers">
                        {answers}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}