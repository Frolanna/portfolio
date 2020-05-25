import React from "react";
import { TestAnswerProps } from "./TestAnswer";
import { TestFinishProps } from "./TestFinish";
interface TestQuestionState {
    currentQuestionIndex: number;
    answers: TestSelectedAnswer[];
    questions?: {
        id: number;
        text: string;
        availableAnswers: TestAnswerProps[];
    }[];
}
interface TestSelectedAnswer {
    questionId: number;
    answerId: number;
}
interface TestQuestionProps {
    finishTest: (result: TestFinishProps) => void;
}
export default class TestQuestion extends React.Component<TestQuestionProps, TestQuestionState> {
    constructor(props: TestQuestionProps);
    componentDidMount(): void;
    selectAnswer: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, answerInfo: TestAnswerProps) => void;
    getTestResult: (answers: TestSelectedAnswer[]) => void;
    render(): JSX.Element | "";
}
export {};
