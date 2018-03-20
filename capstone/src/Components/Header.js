import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import '../Header.css';

class Header extends Component {

  render() {

    return (
      <Link to='/menu'>
        <div className="Header">
        Civil Searcher<span className="headerSmallLetters">...funding that fits your needs</span>
        </div>
      </Link>
    );
  }
}
export default Header;
