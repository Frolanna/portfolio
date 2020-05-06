import { HeaderState } from "../../components/Header/Header";
import { HeaderItemProps } from "../../components/HeaderItem/HeaderItem";
export declare const HEADER_NAV_ITEM_SELECT = "HEADER_NAV_ITEM_SELECT";
export interface HeaderNavItemAction {
    type: string;
    payload: HeaderItemProps[];
}
export declare const activateHeaderNavItem: (header: HeaderState) => HeaderNavItemAction;
