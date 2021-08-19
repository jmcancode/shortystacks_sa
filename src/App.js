import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/navigation/nav";
import Routes from "./components/routes/routes";
import Landing from "./pages/main";

function App() {
  return (
    <Router>
      <Fragment>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
