import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getDashboardUrl } from "./constants/routeConstants";
import Dashboard from "./view/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getDashboardUrl()} component={Dashboard} />
          <Redirect to={getDashboardUrl()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
