import React from "react";
import { createStore } from "redux";
import { Provider } from 'react-redux'

import rootReducer from '../../store/reducers'
import HeaderContainer from "../Header/HeaderContainer";

const store = createStore(rootReducer);

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <HeaderContainer/>
            </Provider>
        );
    }
}
