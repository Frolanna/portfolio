import React from "react";

import { HeaderItem } from "./HeaderItem";
import { HeaderItemProps } from "./HeaderItem";

export interface HeaderState {
    headerNavItems: HeaderItemProps[],
}

export default class Header extends React.Component<{}, HeaderState> {
    constructor(props: HeaderState) {
        super(props);

        this.state = {
            headerNavItems: [
                { text: "Обо мне", url: "/", isActive: false },
                { text: "Навыки", url: "/skills", isActive: false },
                { text: "Совместимость", url: "/test", isActive: false }
            ]
        };

        this.activateHeaderItem = this.activateHeaderItem.bind(this);
    }

    componentWillMount(){
        var currentPath = window.location.pathname;
        let items: HeaderItemProps[] = [...this.state.headerNavItems];
        items.forEach((item) => item.isActive = (item.url == currentPath ? true : false));
        this.setState({ headerNavItems: items });
    }

    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number) {
        let items: HeaderItemProps[] = [...this.state.headerNavItems];
        items.forEach((item, i) => item.isActive = (i == index ? true : false));
        this.setState({ headerNavItems: items });
    }

    render() {
        const headerNavItems = this.state.headerNavItems.map((item, index) =>
            <HeaderItem
                key={index}
                text={item.text}
                url={item.url}
                isActive={item.isActive}
                activateHeaderItem={(event: React.MouseEvent<HTMLLIElement>) => this.activateHeaderItem(event, index)}
            />
        )
        return (
            <header id="header">
                <div className="row">
                    <nav>
                        <ul className="header-nav">
                            {headerNavItems}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}