import React from "react";
import { HeaderItemProps } from "./HeaderItem";
export interface HeaderProps {
    headerNavItems: HeaderItemProps[];
}
export default class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps);
    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number): void;
    render(): JSX.Element;
}