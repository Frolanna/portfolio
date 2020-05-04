import React from "react";

import Header from "./Header";
import { HeaderProps } from "./Header"

export default class App extends React.Component {
    render() {
        const header: HeaderProps = {
            headerNavItems: [
                { text: "Ссылка 1", url: "#", isActive: true },
                { text: "Ссылка 2", url: "#", isActive: false },
                { text: "Ссылка 3", url: "#", isActive: false },
                { text: "Ссылка 4", url: "#", isActive: false }
            ]
        };

        return (
            <Header headerNavItems={header.headerNavItems} />
        );
    }
}
