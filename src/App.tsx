import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';
import {defaultTheme} from "./components/Theme";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Know position of any satellite anytime. Past, future or present.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <RedocStandalone
          options={{
              "disableSearch": true,
              "expandResponses": "200",
              "hideDownloadButton": true,
              "hideHostname": false,
              "hideLoading": true,
              "pathInMiddlePanel": true,
              "sortPropsAlphabetically": true,
              "theme": defaultTheme,
          }}
          specUrl="https://tle.ivanstanojevic.me/api/tle/json"/>

    </div>
  );
};

export default App;
