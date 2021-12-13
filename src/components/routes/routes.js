import React, { Fragment } from "react";
// routes
import { Route, Switch } from "react-router-dom";
// page
import About from "../../pages/about";
import Menu from "../../pages/menu";
import FourOhFour from "../../pages/fourohfour";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
