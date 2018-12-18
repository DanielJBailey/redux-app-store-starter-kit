import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import FetchApps from './components/FetchApps';
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apps" component={FetchApps}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
