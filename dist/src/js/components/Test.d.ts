import React from "react";
import { TestFinishProps } from "./TestFinish";
declare enum TestStatus {
    NotStarted = 0,
    InProcess = 1,
    Finished = 2
}
interface TestState {
    status: TestStatus;
    result?: TestFinishProps;
}
export declare const transitionProps: {
    transitionEnter: boolean;
    transitionLeave: boolean;
    transitionAppear: boolean;
    transitionAppearTimeout: number;
};
export default class Test extends React.Component<{}, TestState> {
    constructor(props: Readonly<{}>);
    startTest: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    finishTest: (result: TestFinishProps) => void;
    render(): JSX.Element;
}
export {};
