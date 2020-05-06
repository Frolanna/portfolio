import { HeaderItemProps } from "../../components/HeaderItem/HeaderItem";
export declare const HEADER_NAV_ITEM_ACTIVATE = "HEADER_NAV_ITEM_ACTIVATE";
export interface HeaderNavItemAction {
    type: string;
    headerNavItems: HeaderItemProps[];
}
export declare const activateHeaderNavItem: (headerNavItems: HeaderItemProps[]) => HeaderNavItemAction;
