import { HeaderItemProps } from "../../components/HeaderItem/HeaderItem"

export const HEADER_NAV_ITEM_ACTIVATE = 'HEADER_NAV_ITEM_ACTIVATE';

export interface HeaderNavItemAction {
    type: string;
    headerNavItems: HeaderItemProps[],
    activeItemIndex: number
}

export const activateHeaderNavItem = (headerNavItems: HeaderItemProps[], activeItemIndex: number): HeaderNavItemAction => ({
    type: HEADER_NAV_ITEM_ACTIVATE,
    headerNavItems,
    activeItemIndex
});