import React, {Fragment} from "react";
// routes
import {Route, Switch} from "react-router-dom";
// page

import FourOhFour from "../../pages/fourohfour";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route component={FourOhFour}/>
            </Switch>
        </Fragment>
    );
};

export default Routes;
