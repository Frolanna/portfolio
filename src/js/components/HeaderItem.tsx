import React from "react";

export interface HeaderItemProps {
    text: string;
    url: string;
    isActive: boolean;
    activateHeaderItem?: (event: React.MouseEvent<HTMLLIElement>) => void ;
}

export class HeaderItem extends React.Component<HeaderItemProps, {}> {
    render() {
        return (
            <li className={"header-nav-item" + (this.props.isActive ? " active" : "")} onClick={this.props.activateHeaderItem}>
                <a href={this.props.url}>{this.props.text}</a>
            </li>
        );
    }
}