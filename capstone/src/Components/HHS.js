import React, { Component } from 'react';
import '../Header.css';

class HHS extends Component {
  render() {
    return (
      <div className="HHS" > HHS Programs {this.props.hhs}</div>
    );
  }
}
export default HHS;
