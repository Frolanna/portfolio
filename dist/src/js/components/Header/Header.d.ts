import React from "react";
import { HeaderItemProps } from "../HeaderItem/HeaderItem";
export interface HeaderState {
    headerNavItems: HeaderItemProps[];
}
export interface HeaderProps {
    headerNavItems: HeaderItemProps[];
    activateHeaderNavItem: (headerNavItems: HeaderItemProps[]) => void;
}
export default class Header extends React.Component<HeaderProps, {}> {
    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number): void;
    render(): JSX.Element;
}
