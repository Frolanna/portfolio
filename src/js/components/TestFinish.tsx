import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { transitionProps } from "./Test";

export interface TestFinishProps {
    correctAnswersCount: number,
    commonAnswersCount: number
}

export default class TestFinish extends React.Component<TestFinishProps, {}> {
    constructor(props: TestFinishProps) {
        super(props);
    }

    render() {
        let description = "";

        if (this.props.correctAnswersCount < this.props.commonAnswersCount / 2) {
            description = "К сожалению, маловероятно, что мы станем близкими друзьями. Но вот хорошими коллегами - почему бы и нет! :)";
        }
        else {
            description = "Ого, у нас так много общего! Думаю, что мы легко сможем подружиться! :)";
        }
        return (
            <div id="main-test" className="row">
                <h1>Результат</h1>
                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity" >
                    <h2>
                        Количество правильных ответов {this.props.correctAnswersCount} из {this.props.commonAnswersCount}.
                </h2>
                    <div className="test-result-description">
                        {description}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}