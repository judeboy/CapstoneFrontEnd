import React, { Component } from 'react';
import '../Header.css';
import '../App.css'



class SBA extends Component {
  constructor(props){
    super(props)
    this.state = {
      search:''
    }
  }
  updateSearch(event){
    this.setState({search: event.target.value})
    console.log(this.state.search);
  }
  render() {
    var SBA = []
    var URL = []
    var array = []
    if (this.props.mounted === true) {
      SBA = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < SBA.length; i++){
        let arr=[]
        arr.push(SBA[i],URL[i])
        array.push(arr)
      }
    }

    return (
        <div>
        <input id='searchbar' type='text' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <div className="AgencyByShort">
        {array.map((ele,i) => {
          return(
            <a target="_blank" href={`${ele[1]}`}>
            <div className="ResultDiv">
              <div className="ProgResult" key={i}>{ele[0]}</div>
              <div className="LinkResult"></div>
            </div>
            </a>
          )
        })}
       </div>
     </div>
    );

  }
}
export default SBA;
