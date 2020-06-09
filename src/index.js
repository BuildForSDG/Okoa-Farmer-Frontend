import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import ExampleIndex from 'views/examples/ExampleIndex.js';
import Landing from 'views/examples/Landing.js';
import Profile from 'views/examples/Profile.js';
import Index from 'views/Index.js';
import Login from 'views/Authentication/Login.js';
import Register from 'views/Authentication/Register.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route path="/register" exact render={(props) => <Register {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/index-page" exact render={(props) => <ExampleIndex {...props} />} />
      <Route path="/landing-page" exact render={(props) => <Landing {...props} />} />
      <Route path="/profile-page" exact render={(props) => <Profile {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
