import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import DOD from './Components/DOD';
import HHS from './Components/HHS';
import DOI from './Components/DOI';
import USDA from './Components/USDA';
import DOJ from './Components/DOJ';
import HUD from './Components/HUD';
import ED from './Components/ED';
import DOT from './Components/DOT';
import EPA from './Components/EPA';
import DOC from './Components/DOC';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Hello',
      programs: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://judahhh.herokuapp.com/')
    const json = await response.json()
    this.setState({
      programs: json
    })
  }

  render() {
    return (
      <div className="App">
        <Header greeting={this.state.greeting} name="Judah"/>
        {/* <Menu /> */}
        {/* <DOD programs={this.state.programs} /> */}
        {/* <HHS programs={this.state.programs}/> */}
        <DOI programs={this.state.programs} />
        {/* <USDA programs={this.state.programs}/> */}
        {/* <DOJ programs={this.state.programs} /> */}
        {/* <HUD programs={this.state.programs} /> */}
        {/* <ED programs={this.state.programs} /> */}
        {/* <DOT programs={this.state.programs} /> */}
        {/* <EPA programs={this.state.programs} /> */}
        {/* <DOC programs={this.state.programs} /> */}
      </div>
    );
  }

}; //App Component

export default App;
