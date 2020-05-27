import React from "react";
import Slider from "react-slick";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface ListData {
    id: number, header: string, data: string
};

const listData: Array<ListData> = [
    { id: 0, header: 'Город', data: 'Волгоград' },
    { id: 1, header: 'Возраста', data: '24 года' },
    { id: 2, header: 'Образование', data: '2018 г. - Волгоградский государственный технический университет, факультет Электроники и вычислительной техники, направление Программная инженерия' },
    { id: 3, header: 'Опыт работы', data: '1.5 года full stack разработчиком Sharepoint на ASP.NET WebForms'},
    { id: 4, header: 'Email', data: 'frolann23@gmail.com' }
];

const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000
};

const transitionProps = {
    transitionAppear: true,
    transitionEnter: false,
    transitionLeave: false,
    transitionAppearTimeout: 500
}

export default class About extends React.Component<{}, {}> {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    render() {
        let list = listData.map((item) =>
            <li key={item.id}><b>{item.header}:</b> {item.data}</li>
        );

        let images = [];
        for (let i: number = 1; i < 15; i++) {
            images.push(<img key={i} src={`./images/photo_${i}.jpg`}></img>)
        }

        return (
            <div id="main-about" className="row">
                <h1>Обо мне</h1>
                <ReactCSSTransitionGroup {...transitionProps} transitionName="left-to-right">
                    <div className="main-text">
                        Привет! Меня зовут Фролова Анна. На данный момент проживаю в г. Волгоград, но планирую переехать в Москву, как только снимут режим самоизоляции. Работала full stack разработчиком Sharepoint. Сейчас решила углубиться во frontend, т.к. хочется создавать прекрасное :)
                        <ul className="main-text-list">
                            {list}
                        </ul>
                    </div>
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup {...transitionProps} transitionName="right-to-left" >
                    <div className="main-img">
                        <img src="./images/photo_main.jpg"></img>
                    </div>
                </ReactCSSTransitionGroup>

                <hr />

                <ReactCSSTransitionGroup {...transitionProps} transitionName="opacity" transitionAppearTimeout={1000}>
                    <div id="main-slider">
                        <Slider {...sliderSettings}>
                            {images}
                        </Slider>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}