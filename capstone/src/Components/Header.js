import React, { Component } from 'react';
import '../Header.css';

class Header extends Component {

  render() {

    return (
      <div className="Header">
      {this.props.greeting}
      </div>
    );
  }
}
export default Header;
