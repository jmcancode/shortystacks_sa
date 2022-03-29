import React, {Fragment} from "react";
// routing
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// custom components
import Navigation from "./components/navigation/nav";
// routes
import Routes from "./components/routes/routes";
// pages
import Main from "./pages/main";

function App() {
    return (
        <Router>
            <Fragment>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route component={Routes}/>
                </Switch>
            </Fragment>

        </Router>
    );
}

export default App;
