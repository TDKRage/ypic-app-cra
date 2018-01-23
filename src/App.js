import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/pages/home';
import Login from './components/pages/login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
