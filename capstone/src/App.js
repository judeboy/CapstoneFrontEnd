import React, { Component } from 'react';
// import {
//   Route,
//   Link,
//   BrowserRouter as Router,
// } from 'react-router-dom'
// import PropTypes from 'prop-types';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';
// import Header from './Components/Header';
// import Menu from './Components/Menu';
import TrelloColumn from './Components/TrelloColumn';
import Card from './Components/Card'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Hello',
      mounted:false,
      // programs: {},
      // urls: {},
      type: 'DOD',
      matchingPrograms: [],
      allIds: [],
      selected: '',
    }
  }

  setSelected = (progNum) => {
    this.setState({selected: progNum})
    console.log(this.state.selected);
  }

  async componentDidMount() {
    const response = await fetch('https://judahhh.herokuapp.com/')
    const json = await response.json()
    let idsArr = []
    const matchingPrograms = json.filter(program => program.AgencyShort === this.state.type);
    const idsList = json.filter(program => idsArr.push(program.ProgNumber));
    this.setState({matchingPrograms});
    this.setState({allIds: idsArr})
    this.setState({
      mounted:true
    })
  }

  // organizeURLs(json){
  //   let obj = {}
  //   let urls = json
  //   for (let i in urls){
  //     if (!obj[urls[i].AgencyShort]){
  //       obj[urls[i].AgencyShort] = [urls[i].WebURL]
  //     } else {
  //       obj[urls[i].AgencyShort].push(urls[i].WebURL)
  //       this.setState({urls: obj})
  //     }
  //   }
  // }
  // organizeProgs(json){
  //   // console.log('organizeProgs');
  //   let obj = {}
  //   let progs = json
  //   // console.log("progs", progs);
  //   for (let i in progs){
  //     // console.log("i", progs[i].AgencyShort, progs[i].ProgTitle);
  //     if (!obj[progs[i].AgencyShort]){
  //       obj[progs[i].AgencyShort] = [progs[i].ProgTitle]
  //       // obj[progs[i].AgencyShort] = [progs[i].ProgTitle]
  //     } else {
  //       obj[progs[i].AgencyShort].push(progs[i].ProgTitle)
  //       this.setState({programs: obj})
  //     }
  //   }
  //   // console.log("function Object", this.state.programs.DOD)
  // }

  renderList = (number, matchingPrograms) => {
    var piece = null;
    if(this.props.cardPosition === number && this.state.matchingPrograms.length > 0){
      piece = this.state.matchingPrograms.map((program,i) => <Card {...program} setSelected={this.setSelected} />)
    }
    return (
      <TrelloColumn number={number}>
       {piece}
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

export default DragDropContext(HTML5Backend)(App)
