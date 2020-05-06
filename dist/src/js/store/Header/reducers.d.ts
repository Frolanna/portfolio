import { HeaderState } from "../../components/Header/Header";
import { HeaderNavItemAction } from "./actions";
export declare const defaultState: HeaderState;
export declare const headerReducer: (state: HeaderState | undefined, action: HeaderNavItemAction) => HeaderState;
