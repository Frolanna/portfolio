import React from "react";

import {HeaderItem} from "../HeaderItem/HeaderItem";
import {HeaderItemProps} from "../HeaderItem/HeaderItem";

export interface HeaderState {
    headerNavItems: HeaderItemProps[]
}

export interface HeaderProps {
    headerNavItems: HeaderItemProps[],
    activateHeaderNavItem: (headerNavItems: HeaderItemProps[]) => void ;
}

export default class Header extends React.Component<HeaderProps, {}> {
    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number){
        console.log(index);

        let items : HeaderItemProps[] = [...this.props.headerNavItems];
        items.forEach((item, i) => item.isActive = (i == index ? true : false));
        this.props.activateHeaderNavItem(items);
    }

    render() {    
        let headerItems = this.props.headerNavItems.map((item, index) =>
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
                            {headerItems}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}