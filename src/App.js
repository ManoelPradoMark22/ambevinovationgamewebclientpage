import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Drinks from './pages/Drinks';

import RouteWrapper from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={Main} />
        <RouteWrapper exact path="/Drinks" component={Drinks} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
