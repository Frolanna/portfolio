import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import { About } from "./About";
import { Hobby } from "./Hobby";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header/>   
                <div className="main">       
                    <Switch>
                        <Route path="/" exact component={About} />
                        <Route path="/hobby" exact component={Hobby} />
                    </Switch>
                </div>  
            </Router>
        );
    }
}
