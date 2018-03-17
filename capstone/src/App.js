import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'
import PropTypes from 'prop-types';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Favorites from './Components/Favorites';
import Card from './Components/Card'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ids: [],
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

  organizeIds(json){
    let obj = {}
    let ids = json
    for (let i in ids){
      if (!obj[ids[i].AgencyShort]){
        obj[ids[i].AgencyShort] = [ids[i].id]
      } else {
        obj[ids[i].AgencyShort].push(ids[i].id)
        this.setState({ids: obj})
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

  renderList(number){
          var piece = null;
          if(this.props.cardPosition === number){
              piece = <Card />
          }
          return (
              <Favorites number={number}>
                  {piece}
              </Favorites>
          )
      }

      render(){
          return(
              <div style={{

                  width: '900px',
                  height: '900px',
                  display: 'flex'
              }}>
                  {this.renderList('one')}
                  {this.renderList('two')}
                  {this.renderList('three')}
              </div>
          )
      }

}; //App Component

export default DragDropContext(HTML5Backend)(App)
