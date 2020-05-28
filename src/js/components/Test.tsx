import React from "react";
import TestStart from "./TestStart";
import TestQuestion from "./TestQuestion";
import TestFinish, { TestFinishProps } from "./TestFinish";

enum TestStatus {
    NotStarted,
    InProcess,
    Finished
}

interface TestState {
    status: TestStatus,
    result?: TestFinishProps
}

export const transitionProps = {
    transitionEnter: true,
    transitionLeave: false,
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnterTimeout: 300,
}

export default class Test extends React.Component<{}, TestState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            status: TestStatus.NotStarted
        }
    }

    startTest = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ status: TestStatus.InProcess });
    }

    finishTest = (result: TestFinishProps) => {
        this.setState({ status: TestStatus.Finished, result});
    }

    render() {
        let testComponent;
        switch (this.state.status) {
            case TestStatus.NotStarted:
                testComponent = <TestStart startTest={this.startTest} />;
                break;
            case TestStatus.InProcess:
                testComponent = <TestQuestion finishTest={this.finishTest}/>;
                break;
            case TestStatus.Finished:
                testComponent = <TestFinish correctAnswersCount={this.state.result!.correctAnswersCount} commonAnswersCount={this.state.result!.commonAnswersCount}/>
                break;
        }
        return (
            <div className="main">
                {testComponent}
            </div>
        );
    }
}