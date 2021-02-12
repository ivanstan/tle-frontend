import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Docs } from "./pages/Docs";
import { Navigation } from "./components/Navigation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b3d91',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#f1f1f1",
      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/docs" exact component={Docs}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
