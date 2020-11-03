import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './header.css';
// import logo from '../logo.svg';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className={classes.Header}>
          <div className={classes.Font}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
              Job Board</div>
          <div>
            <Nav className="d-flex pull-right">
              <Link to="/jobpost">Create a Job</Link>
              <Link to="/myjobs">My Jobs</Link>
              <Link to="/applyjob">Apply Job</Link>
              {/* <Nav.Item>
                <Nav.Link to="/jobpost">Create a Job</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Network
    </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </div>
        </header>
        {/* <Nav defaultActiveKey="/user" className={classes.Sidebar}>
          <Link to="/user">User Form</Link>
          <Link to="/userlist">Users List</Link>
          <Link to="/fake">Fake Users</Link>
          <Link to="/products">Products</Link>
        </Nav> */}
      </div>
    );
  }
}

export default HeaderComponent