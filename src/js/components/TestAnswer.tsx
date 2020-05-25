import React from "react";

export interface TestAnswerProps {
    id: number, 
    text: string, 
    image?: string, 
    label?: string,
    selectAnswer: (event: React.MouseEvent<HTMLButtonElement>, answerInfo?: TestAnswerProps) => void
}

export default class TestAnswer extends React.Component <TestAnswerProps, {}> {
    render() {
        return (
            <button className="test-answer btn" data-title={this.props.label ? this.props.label : ""} onClick={(e) => this.props.selectAnswer(e)}>
                { this.props.image &&
                    <img className="test-answer-img" src={this.props.image} />
                }
                { this.props.text &&
                    <span className="test-answer-text">{this.props.text}</span>
                }
            </button>
        );
    }
}