import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../logo.svg';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="header-access">
            <div className="header-search flex-auto">
              <img src={logo} className="App-logo" alt="logo" />React</div>
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