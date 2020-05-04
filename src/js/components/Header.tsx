import React from "react";

import {HeaderItem} from "./HeaderItem";
import {HeaderItemProps} from "./HeaderItem";
export interface HeaderProps {
    headerNavItems: HeaderItemProps[],
}

export default class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);

        this.activateHeaderItem = this.activateHeaderItem.bind(this);
    }

    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number){
        console.log(index);
        let items : HeaderItemProps[] = this.props.headerNavItems;
        items.forEach((item, i) => item.isActive = (i == index ?  true : false));
        this.setState({headerNavItems: items});
    }

    render() {
        const headerNavItems = this.props.headerNavItems.map((item, index) =>
            <HeaderItem key={index} text={item.text} url={item.url} isActive={item.isActive} activateHeaderItem={(event: React.MouseEvent<HTMLLIElement>) => this.activateHeaderItem(event, index)}/> 
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