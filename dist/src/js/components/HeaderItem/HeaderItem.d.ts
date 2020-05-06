import React from "react";
export interface HeaderItemProps {
    text: string;
    url: string;
    isActive: boolean;
    activateHeaderItem?: (event: React.MouseEvent<HTMLLIElement>) => void;
}
export declare class HeaderItem extends React.Component<HeaderItemProps, {}> {
    render(): JSX.Element;
}
