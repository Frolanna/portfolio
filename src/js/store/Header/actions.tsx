import { HeaderItemProps } from "../../components/HeaderItem/HeaderItem"

export const HEADER_NAV_ITEM_ACTIVATE = 'HEADER_NAV_ITEM_ACTIVATE';

export interface HeaderNavItemAction {
    type: string;
    headerNavItems: HeaderItemProps[]
}

export const activateHeaderNavItem = (headerNavItems: HeaderItemProps[]): HeaderNavItemAction => ({
    type: HEADER_NAV_ITEM_ACTIVATE,
    headerNavItems
});