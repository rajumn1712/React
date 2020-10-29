import React from 'react';
import './App.css';
import HeaderComponent from './Layout/header';
import UserComponent from './Users/User';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <main className="mainClass">
        <UserComponent/>
        </main>
      <div className="container">
      </div>
    </div>
  );
}

export default App;
