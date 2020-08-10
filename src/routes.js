import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Drinks from './pages/Drinks';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Drinks" component={Drinks} />
      </Switch>
    </BrowserRouter>
  );
}
