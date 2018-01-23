import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';

import Home from '../pages/home';
import Login from '../pages/login';
import logo from '../../logo.svg';

const Main = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>

    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <ul>
      <li>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </li>
    </ul>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
  </div>
);

export default Main;
