import React, { Component } from 'react';
import Board from 'react-trello'
import './App.css';




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Hello',
      mounted:false,
      programs: {},
      urls: {},
      data: {
      lanes: [
        {
          id: 'lane1',
          title: 'Planned Tasks',
          label: '2/2',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
            {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
          ]
        },
        {
          id: 'lane2',
          title: 'Completed',
          label: '0/0',
          cards: []
        }
      ]
    }
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


  render(){
    return(
      <Board data={this.state.programs}/>
    )
  }

}; //App Component

export default App
