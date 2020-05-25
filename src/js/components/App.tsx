import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";

const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Test = lazy(() => import('./Test'));

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <div className="main">
                    <Suspense fallback={<div className="row">Загрузка...</div>}>
                        <Switch>
                            <Route path="/" exact component={About} />
                            <Route path="/skills" exact component={Skills} />
                            <Route path="/test" exact component={Test} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        );
    }
}
