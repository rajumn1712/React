import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';
import FormUser from './components/Users/UserForm';
import ImgMediaCard from './containers/ProductsComponents/Products';
import FakeComponent from './components/FakeComponents/FakeData';
import HeaderComponent from './Layout/header';
import UserComponent from './components/Users/User';

function App() {
  return (
    <div className={classes.App}>
        <HeaderComponent/>
        <main className={classes.mainClass}>
          <Switch>
          <Route path="/user" component={FormUser}/>
          <Route path="/userlist" component={UserComponent}/>
          <Route path="/fake" component={FakeComponent}/>
          <Route path="/products" component={ImgMediaCard}/>
          <Route path="/" component={FormUser}/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
