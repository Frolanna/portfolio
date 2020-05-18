import React from "react";
import { HeaderItemProps } from "./HeaderItem";
export interface HeaderState {
    headerNavItems: HeaderItemProps[];
}
export default class Header extends React.Component<{}, HeaderState> {
    constructor(props: HeaderState);
    componentWillMount(): void;
    activateHeaderItem(event: React.MouseEvent<HTMLLIElement>, index: number): void;
    render(): JSX.Element;
}
