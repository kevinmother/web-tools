/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import AppLayout from './components/layout/Layout';
import Error from './pages/error/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/home" />} />
        <LayoutRoute path="/app" component={AppLayout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );

  function LayoutRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => React.createElement(component, props)}
      />
    );
  }
}

export default App;
