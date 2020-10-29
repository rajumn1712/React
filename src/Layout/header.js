import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './header.css';
// import logo from '../logo.svg';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="Header">
        <div className="Font">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              React Application</div>
          <div>
            <Nav className="d-flex pull-right">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
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
              </Nav.Item>
            </Nav>
          </div>
        </header>
        <Nav defaultActiveKey="/home" className="d-none d-md-block sidebar">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
  </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default HeaderComponent