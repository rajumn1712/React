import React from 'react';
import classes from './App.css';
import HeaderComponent from './Layout/header';
import UserComponent from './Users/User';

function App() {
  return (
    <div className={classes.App}>
        <HeaderComponent/>
        <main className={classes.mainClass}>
        <UserComponent/>
        </main>
    </div>
  );
}

export default App;
