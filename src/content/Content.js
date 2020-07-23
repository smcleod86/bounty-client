import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Bounties from './pages/Bounties';
// import NewMuseum from './pages/museums/NewMuseum';

export default function Content() { 
  
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/museums/add" component={NewMuseum} /> */}
        {/* <Route path="/museums/:dbid" component={ShowMuseum} /> */}
        <Route path="/bounties" component={Bounties} />
      </Switch>
    </main>
  )
}