import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../../pages/contact";
import About from "../../pages/about";
import Menu from "../../pages/menu";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
