import React from "react";
export interface TestAnswerProps {
    id: number;
    text: string;
    image?: string;
    label?: string;
    selectAnswer: (event: React.MouseEvent<HTMLButtonElement>, answerInfo?: TestAnswerProps) => void;
}
export default class TestAnswer extends React.Component<TestAnswerProps, {}> {
    render(): JSX.Element;
}
