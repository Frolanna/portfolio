import React from "react";

import CanvasJSReact from '../lib/canvasjs.react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface ChartDataPoints {
    selected: string,
    dataPoints: ChartDataPoint[];
}

interface ChartDataPoint {
    label: string, y: number, color: string
}

interface skillDescription {
    label: string, images: string[], text: string
}

const skillDescriptions: skillDescription[] = [
    { label: "Apple", images: ["./images/skill_icons/csharp.png"], text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat, sunt temporibus explicabo adipisci nam nihil cupiditate sed cum totam dolorem reprehenderit a soluta! Hic autem quam facilis dolore totam." },
    { label: "Orange", images: ["./images/skill_icons/redux.png"], text: ";kk jsn;askjn kmnlaks" },
    { label: "Banana", images: ["./images/skill_icons/sharepoint.png"], text: "" }
];

const transitionProps = {
    transitionEnter: true,
    transitionLeave: false,
    transitionAppear: true,
    transitionAppearTimeout: 1000,
    transitionEnterTimeout: 300,
}

export default class Skills extends React.Component<{}, ChartDataPoints> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            selected: "Apple",
            dataPoints: [
                { label: "Apple", y: 30, color: '#ac5e27' },
                { label: "Orange", y: 57, color: '#dc9d36' },
                { label: "Banana", y: 23, color: '#dc9d36' },
                { label: "Mango", y: 88, color: '#dc9d36' },
                { label: "Grape", y: 67, color: '#dc9d36' }
            ]
        };
    }

    selectSkill = (event: any) => {
        let label = event.dataPoint.label;
        let points: ChartDataPoint[] = [...this.state.dataPoints];
        points.forEach((item) => item.color = (item.label == label ? '#ac5e27' : '#dc9d36'));
        this.setState({ selected: label, dataPoints: points });
    }

    render() {
        const options = {
            data: [{
                type: "column",
                cursor: "pointer",
                click: this.selectSkill,
                dataPoints: this.state.dataPoints,
            }],
            axisY: {
                maximum: 100,
                interval: 20
            },
            axisX: {
                labelFontSize: 14,
                labelFontFamily: "'Roboto', sans-serif",
                labelFontWeight: "bold",
                labelFontColor: "#dc9d36",
            },
            animationEnabled: true,
            theme: "light2",
            height: 200,
        };

        let description = skillDescriptions.find((item) => item.label === this.state.selected);
        let images = description?.images.map((item, index) => <div key={item} className="skills-image"><img src={`${item}`} /></div>)
        let text = description?.text;

        return (
            <div id="main-skills" className="row">
                <h1>Навыки</h1>
                <div className="charts-skills">
                    <CanvasJSChart options={options} />
                </div>

                <hr />
                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity" >
                    <div key={this.state.selected} className="skills-description">
                        <div className="skills-images">
                            {images}
                        </div>
                        <div className="skills-text">
                            {text}
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}