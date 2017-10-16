import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;