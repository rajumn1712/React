import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import HeaderComponent from './Layout/header';
import UserComponent from './Users/User';

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
        <HeaderComponent/>
      <div className="container">
        <h4>React Application</h4>
        <UserComponent/>
      </div>
      {/* </Layout> */}
    </div>
  );
}

export default App;
