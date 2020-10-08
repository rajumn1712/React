import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-access">
        <div className="header-search flex-auto">
        <img src={logo} className="App-logo" alt="logo" />React</div>
        <nav className="d-flex pull-right">
            <a className="header-link py-3">Home</a>
            <a className="header-link py-3">About</a>
            <a className="header-link py-3">Contact</a>
            <a className="header-link py-3">Network</a>
          </nav>
        </div>
      </header>
      <div>
        <h1>Hi Welcome to React Application Development</h1>
      </div>
    </div>
  );
}

export default App;
