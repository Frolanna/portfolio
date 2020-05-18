import React from "react";
import { Link } from "react-router-dom";

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
                <Link to={this.props.url}>{this.props.text}</Link>
            </li>
        );
    }
}