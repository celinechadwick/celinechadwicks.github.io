import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";



import Index from "./components/Index";


ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={Index} />
  </Router>
, document.getElementById("app"));
