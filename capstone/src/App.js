import React, { Component } from 'react';
// import './App.css';
import Header from './Components/Header';

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
    console.log(json[0].ProgTitle);
    // this.setState({
    //   programs: json._embedded
    // })
    // console.log(this.state.programs);
  }

  render() {
    return (
      <div className="App">
        <Header greeting={this.state.greeting} name="Judah"/>

      </div>
    );
  }
}; //App Component

export default App;
