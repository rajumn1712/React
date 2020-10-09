import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import HeaderComponent from './Layout/header';
import UserComponent from './Users/User';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <div className="container">
        <h4>Hi Welcome to React Application Development</h4>
        <UserComponent/>
      </div>
    </div>
  );
}

export default App;
