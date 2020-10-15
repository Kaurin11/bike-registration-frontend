import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  getAllBikeUrl,
  getCreateBikeUrl,
  getDashboardUrl,
} from "../../constants/routeConstants";

import AllBike from "./allBike/allBike";
import CreateBike from "./createBike/createBike";
import OneBike from "./oneBike/oneBike";

const Dashboard = () => {
  return (
    <div>
      <Switch>
        <Route exact path={getAllBikeUrl()} component={AllBike} />
        <Route path={getCreateBikeUrl()} component={CreateBike} />
        <Route path={`${getDashboardUrl()}/:bike/:id`} component={OneBike} />
        {/* <Route path={getOneBike()} component={OneBike} /> */}
        <Redirect to={getAllBikeUrl()} />
      </Switch>
    </div>
  );
};

export default Dashboard;
