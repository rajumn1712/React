import React from 'react';
import classes from './App.css';
// import ImgMediaCard from './containers/ProductsComponents/Products';
// import FakeComponent from './components/FakeComponents/FakeData';
import HeaderComponent from './Layout/header';
import UserComponent from './Users/User';

function App() {
  return (
    <div className={classes.App}>
        <HeaderComponent/>
        <main className={classes.mainClass}>
        <UserComponent/>
        {/* <FakeComponent/> */}
        {/* <ImgMediaCard/> */}
        </main>
    </div>
  );
}

export default App;
