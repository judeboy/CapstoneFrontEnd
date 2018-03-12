import React, { Component } from 'react';
import '../Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header"> {this.props.greeting} {this.props.name}!</div>
    );
  }
}
export default Header;
