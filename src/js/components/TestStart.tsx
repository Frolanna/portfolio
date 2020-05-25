import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { transitionProps } from "./Test";

interface TestStartProps {
    startTest: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class TestStart extends React.Component<TestStartProps, {}> {
    constructor(props: TestStartProps) {
        super(props);
    }

    render() {
        return (
            <div id="main-test" className="row">
                <h1>Совместимость</h1>
                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity-test" >
                    <div className="test-description">
                        Пройдите этот тест, чтобы узнать, сможете ли Вы со мной подружиться!
                    </div>
                </ReactCSSTransitionGroup>
                <hr />
                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity-test" >
                    <div className="test-start">
                        <button className="btn" onClick={this.props.startTest}>
                            Начать
                    </button>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}