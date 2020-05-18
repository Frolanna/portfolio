import React from "react";
interface ChartDataPoints {
    selected: string;
    dataPoints: ChartDataPoint[];
}
interface ChartDataPoint {
    label: string;
    y: number;
    color: string;
}
export default class Skills extends React.Component<{}, ChartDataPoints> {
    constructor(props: Readonly<{}>);
    selectSkill: (event: any) => void;
    render(): JSX.Element;
}
export {};
