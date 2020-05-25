import React from "react";
export interface TestFinishProps {
    correctAnswersCount: number;
    commonAnswersCount: number;
}
export default class TestFinish extends React.Component<TestFinishProps, {}> {
    constructor(props: TestFinishProps);
    render(): JSX.Element;
}
