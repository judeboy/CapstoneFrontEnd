import React, { Component } from 'react';
// import './App.css';
import Header from './Components/Header';
import DOD from './Components/DOD';
import HHS from './Components/HHS';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Hello',
      programs: [],
      filteredProgram: []
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
        {/* <DOD programs={this.state.programs} /> */}
        <HHS programs={this.state.programs}/>
      </div>
    );
  }

}; //App Component

export default App;
