import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Teams from './components/Teams-Screen';
import SingleTeam from './components/Single-Team-Screen';
import NotFound from './components/Not-Found';

const App = props => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Teams} />
          <Route
            path={process.env.PUBLIC_URL + '/team'}
            exact
            component={SingleTeam}
          />
          <Route path={process.env.PUBLIC_URL} component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
