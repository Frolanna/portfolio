import { HeaderState } from "../../components/Header/Header";
import { HEADER_NAV_ITEM_ACTIVATE } from "./actions"
import { HeaderNavItemAction } from "./actions"

export const defaultState: HeaderState = {
    headerNavItems: [
        { text: "Ссылка 1", url: "#", isActive: true },
        { text: "Ссылка 2", url: "#", isActive: false },
        { text: "Ссылка 3", url: "#", isActive: false },
        { text: "Ссылка 4", url: "#", isActive: false }
    ]
};

export const headerReducer = (state: HeaderState = defaultState, action: HeaderNavItemAction): HeaderState => {
    switch (action.type){
        case HEADER_NAV_ITEM_ACTIVATE:
            return {
                ...state,
                headerNavItems: action.headerNavItems
            };
    }
    return state;
}