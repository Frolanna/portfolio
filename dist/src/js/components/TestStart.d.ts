import React from "react";
interface TestStartProps {
    startTest: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class TestStart extends React.Component<TestStartProps, {}> {
    constructor(props: TestStartProps);
    render(): JSX.Element;
}
export {};
