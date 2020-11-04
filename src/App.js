import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';
import HeaderComponent from './Layout/header';
import PostAJob from './containers/PostJobs/PostJob';
import MyJob from './containers/MyJobs/MyJobs';

function App() {
  return (
    <div className={classes.App}>
        <HeaderComponent/>
        <main className={classes.mainClass}>
          <Switch>
          <Route path="/jobpost" component={PostAJob}/>
          <Route path="/myjobs" component={MyJob}/>
          <Route path="/" component={PostAJob}/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
