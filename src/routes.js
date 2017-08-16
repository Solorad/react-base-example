import React from "react";
import {IndexRoute, Route} from "react-router";
import {LandingPage, LoginPage, NotFoundPage} from "./containers";

const routes = (
  <Route path="/">
    <IndexRoute component={LandingPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
