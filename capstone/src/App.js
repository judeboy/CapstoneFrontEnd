import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import HTML5

import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import DOD from './Components/DOD';
import HHS from './Components/HHS';
import DOI from './Components/DOI';
import USDA from './Components/USDA';
import Favorites from './Components/Favorites';
import HUD from './Components/HUD';
import ED from './Components/ED';
import SBA from './Components/SBA';
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
    return (
      <Router>
        <div className="App">
          <Header greeting={this.state.greeting} name="Judah"/>
          <Favorites mounted={this.state.mounted}/>
          <Route exact path="/" render={() => (
            <Menu  />
            )}/>
          <Route exact path="/dod" render={() => (
            <DOD programs={this.state.programs.DOD} urls={this.state.urls.DOD} mounted={this.state.mounted}/>
            )}/>
          <Route exact path="/doi" render={() => (
            <DOI programs={this.state.programs.DOI} urls={this.state.urls.DOI} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/hhs" render={() => (
            <HHS programs={this.state.programs.HHS} urls={this.state.urls.HHS} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/usda" render={() => (
            <USDA programs={this.state.programs.USDA} urls={this.state.urls.USDA} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/hud" render={() => (
            <HUD programs={this.state.programs.HUD} urls={this.state.urls.HUD} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/edu" render={() => (
            <ED programs={this.state.programs.ED} urls={this.state.urls.ED} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/sba" render={() => (
            <SBA programs={this.state.programs.SBA} urls={this.state.urls.SBA} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/epa" render={() => (
            <EPA programs={this.state.programs.EPA} urls={this.state.urls.EPA} mounted={this.state.mounted}/>
          )}/>
          <Route exact path="/Commerce" render={() => (
            <DOC programs={this.state.programs.DOC} urls={this.state.urls.DOC} mounted={this.state.mounted}/>
          )}/>
        </div>
    </Router>
    );
  }

}; //App Component

export default App;
