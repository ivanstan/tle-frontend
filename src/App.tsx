import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Docs } from "./pages/Docs";
import { Navigation } from "./components/Navigation";

function App() {
  return (
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/docs" exact component={Docs}/>
        </Switch>
      </Router>
  );
}

export default App;
