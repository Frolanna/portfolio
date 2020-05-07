import React from "react";
import { ConnectedProps } from "react-redux";
export declare const connector: import("react-redux").InferableComponentEnhancerWithProps<{
    headerNavItems: any;
} & {
    activateHeaderNavItem: (headerNavItems: import("../HeaderItem/HeaderItem").HeaderItemProps[], activeItemIndex: number) => import("../../store/Header/actions").HeaderNavItemAction;
}, {}>;
declare type Props = ConnectedProps<typeof connector>;
declare class HeaderContainer extends React.Component<Props, {}> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof HeaderContainer, Pick<React.ClassAttributes<typeof HeaderContainer> & {
    headerNavItems: any;
} & {
    activateHeaderNavItem: (headerNavItems: import("../HeaderItem/HeaderItem").HeaderItemProps[], activeItemIndex: number) => import("../../store/Header/actions").HeaderNavItemAction;
}, "ref" | "key">>;
export default _default;
