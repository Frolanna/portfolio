import React from "react";
import Slider from "react-slick";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface ListData {
    id: number, header: string, data: string
};

export class About extends React.Component<{}, {}> {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    render() {
        const listData: Array<ListData> = [
            { id: 0, header: 'Город', data: '' },
            { id: 1, header: 'Образование', data: '' },
            { id: 2, header: 'Опыт работы', data: '' },
            { id: 3, header: 'Email', data: '' }
        ];

        let list = listData.map((item) =>
            <li key={item.id}><b>{item.header}:</b> {item.data}</li>
        );

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

        const images = [];
        for (let i: number = 1; i < 15; i++) {
            images.push(<img key={i} src={`./images/photo_${i}.jpg`}></img>)
        }

        const transitionProps = {
            transitionAppear: true,
            transitionEnter: false,
            transitionLeave: false,
            transitionAppearTimeout: 500
        }

        return (
            <div id="main-about" className="row">
                <ReactCSSTransitionGroup {...transitionProps} transitionName="left-to-right">
                    <h1>Обо мне</h1>
                    <div className="main-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Debitis, accusamus. Consequatur culpa omnis distinctio eligendi nobis ea molestias et dolorum,
                        tempore corporis enim, error eveniet unde, temporibus accusantium qui earum?
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