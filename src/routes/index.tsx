import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Success from '../pages/Success';
import Dashboard from '../pages/Dashboard';

import Test from '../pages/Test';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Test} />
    <Route path="/success" exact component={Success} />
    <Route path="/dashboard" exact component={Dashboard} />

  </Switch>
);

export default Routes;