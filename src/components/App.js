import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import { MovieInformation, Actors, Movies, Navbar, Profile } from './';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/movie/:id' component={MovieInformation} />
          <Route exact path='/actors/:id' component={Actors} />
          <Route exact path='/profile/:id' component={Profile} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
