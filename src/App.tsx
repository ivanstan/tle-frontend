import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Docs } from "./pages/Docs";

function App() {
  return (
    <>
      <nav className="navbar bg-dark">
        <a className="navbar-brand" href="#!">TLE API</a>
      </nav>

      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/docs" exact component={Docs}/>
        </Switch>
      </Router>

      <div className="container bg-white my-3">
        <div className="row">
          <div className="col-12">
            bla
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
