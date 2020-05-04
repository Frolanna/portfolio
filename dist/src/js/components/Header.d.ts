import React from "react";
import { HeaderItemProps } from "./HeaderItem";
interface HeaderState {
    headerNavItems: HeaderItemProps[];
}
export default class Header extends React.Component<{}, HeaderState> {
    constructor(props: Readonly<{}>);
    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number): void;
    render(): JSX.Element;
}
export {};
