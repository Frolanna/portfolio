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
    label: string, images?: string[], text: string
}

const imageIconDir = "./images/skill_icons/";

const skillDescriptions: skillDescription[] = [
    { label: "JS/TS", images: ["javascript.png", "typescript.png"], text: "Умею работать как с чистым JS, так и использованием jQuery. TypeScript изучала самостоятельно." },
    { label: "HTML/CSS", images: ["html.png", "css.png", "sass.png"], text: "Знаю HTML5, CSS3, люблю использовать flexbox, изучала grid layout. Знакома с языками Less и Sass." },
    { label: "React", images: ["react.png"], text: "Хорошо знаю React, изучала его в университете и использовала на прошлой работе." },
    { label: "Redux", images: ["redux.png"], text: "Изучала Redux самостоятельно, к сожалению, практического опыта использования пока не много." },
    { label: "SQL", images: ["mssql.png"], text: "Работала с MS SQL, писала простые запросы и процедуры, создавала отчеты через SQL Server Reporting Services." },
    { label: "Backend", images: ["aspnet.png", "csharp.png", "sharepoint.png"], text: "На прошлом месте работала с Sharepoint 2013, 2016 на ASP.NET WebForms. Помимо этого есть опыт написания приложений на Node.js, Java, немного PHP." },
    { label: "Gulp/Webpack", images: ["gulp.png", "webpack.png"], text: "Умею настраивать сборку проектов через Webpack. C Gulp последний раз работала достаточно давно, ещё в университете, но вспомнить не будет проблемой :)" },
    { label: "VCS", images: ["git.png", "mercurial.png", "tfs.jpg"], text: "На прошлой работе использовали TFVC (централизованная система контроля версий), но так же хорошо знаю Git и имею небольшой опыт работы с Mercurial. " },
    { label: "Английский", text: "Английский на уровне чтения документации :)" }
];

const chartColor = "#dc9d36";
const chartSelectedColor = "#ac5e27";

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
            selected: "JS/TS",
            dataPoints: [
                { label: "JS/TS", y: 85, color: chartSelectedColor },
                { label: "React", y: 85, color: chartColor },
                { label: "HTML/CSS", y: 75, color: chartColor },
                { label: "VCS", y: 70, color: chartColor },
                { label: "Backend", y: 65, color: chartColor },
                { label: "Redux", y: 55, color: chartColor },
                { label: "Gulp/Webpack", y: 50, color: chartColor },  
                { label: "SQL", y: 40, color: chartColor },                                           
                { label: "Английский", y: 40, color: chartColor }
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
        let images = description?.images?.map((item, index) => <div key={item} className="skills-image"><img src={`${imageIconDir}${item}`} /></div>)
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