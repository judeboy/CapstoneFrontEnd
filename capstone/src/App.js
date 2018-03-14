import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'
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
      programs: {},
      urls: {},
      mounted:false
    }
  }

  async componentDidMount() {
    const response = await fetch('https://judahhh.herokuapp.com/')
    const json = await response.json()
    this.organizeProgs(json);
    this.organizeURLs(json)
    this.setState({
      mounted:true
    })
  }

  organizeURLs(json){
    let obj = {}
    let urls = json
    for (let i in urls){
      if (!obj[urls[i].AgencyShort]){
        obj[urls[i].AgencyShort] = [urls[i].WebURL]
      } else {
        obj[urls[i].AgencyShort].push(urls[i].WebURL)
        this.setState({urls: obj})
      }
    }
  }

  organizeProgs(json){
    // console.log('organizeProgs');
    let obj = {}
    let progs = json
    // console.log("progs", progs);
    for (let i in progs){
      // console.log("i", progs[i].AgencyShort, progs[i].ProgTitle);
      if (!obj[progs[i].AgencyShort]){
        obj[progs[i].AgencyShort] = [progs[i].ProgTitle]
        // obj[progs[i].AgencyShort] = [progs[i].ProgTitle]
      } else {
        obj[progs[i].AgencyShort].push(progs[i].ProgTitle)
        this.setState({programs: obj})
      }
    }
    // console.log("function Object", this.state.programs.DOD)
  }

  render() {
    // console.log('render fire');
    return (
      <Router>
        <div className="App">
          <Header greeting={this.state.greeting} name="Judah"/>
          <Route exact path="/" render={() => (
            <Menu  />
            )}/>
          <Route exact path="/dod" render={() => (
            <DOD programs={this.state.programs.DOD} urls={this.state.urls.DOD} mounted={this.state.mounted}/>
            )}/>
        </div>
    </Router>
    );
  }

}; //App Component

export default App;

{/* <Menu /> */}
{/* <DOD programs={this.state.programs.DOD} urls={this.state.urls.DOD} mounted={this.state.mounted}/> */}
{/* <HHS programs={this.state.programs}/> */}
{/* <DOI programs={this.state.programs} /> */}
{/* <USDA programs={this.state.programs}/> */}
{/* <DOJ programs={this.state.programs} /> */}
{/* <HUD programs={this.state.programs} /> */}
{/* <ED programs={this.state.programs} /> */}
{/* <DOT programs={this.state.programs} /> */}
{/* <EPA programs={this.state.programs} /> */}
{/* <DOC programs={this.state.programs} /> */}
