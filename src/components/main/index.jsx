import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
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
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/login">Login</Link> </li>
      </ul>
    </p>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
  </div>
);

export default Main;
