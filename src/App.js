import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';
import HeaderComponent from './Layout/header';
import PostAJob from './containers/PostJobs/PostJob';

function App() {
  return (
    <div className={classes.App}>
        <HeaderComponent/>
        <main className={classes.mainClass}>
          <Switch>
          <Route path="/jobpost" component={PostAJob}/>
          <Route path="/" component={PostAJob}/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
