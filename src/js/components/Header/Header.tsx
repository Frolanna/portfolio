import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {HeaderItem} from "../HeaderItem/HeaderItem";
import {HeaderItemProps} from "../HeaderItem/HeaderItem";

export interface HeaderState {
    headerNavItems: HeaderItemProps[]
}

export interface HeaderProps {
    headerNavItems: HeaderItemProps[],
    activateHeaderNavItem: (headerNavItems: HeaderItemProps[], activeItemIndex: number) => void ;
}

export default class Header extends React.Component<HeaderProps, {}> {
    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number){
        console.log(index);

        this.props.activateHeaderNavItem(this.props.headerNavItems, index);
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
                <Router>
                <div className="row">
                    <nav>
                        <ul className="header-nav">
                            {headerItems}
                        </ul>
                    </nav>
                </div>
                </Router>
            </header>
        );
    }
}