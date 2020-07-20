import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Teams from './components/teams-screen';
import SingleTeam from './components/single-team-screen';
import NotFound from './components/not-found';

const App = props => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + '/'}
            exact
            component={Teams}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + '/team'}
            exact
            component={SingleTeam}
          ></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
