import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
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

  renderList = (number, matchingPrograms) => {
    var piece = null;
    if(this.props.cardPosition === number){
        piece = <Card />
    }
    // console.log('matchingPrograms', matchingPrograms);
    return (
      <TrelloColumn number={number}>
      </TrelloColumn>
    )
    }

  render(){
    return(
      <div id='containerOfColumns'>
          {this.renderList('one')}
          {this.renderList('two')}
          {this.renderList('three')}
          {this.renderList('four')}
      </div>
    )
  }


}; //App Component

export default App;
