import React from "react";
import {IndexRoute, Route} from "react-router";
import {Cart, NotFoundPage, Root} from "./containers";

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Cart}/>
    <Route path="*" component={NotFoundPage} />  </Route>
);

export default routes;
