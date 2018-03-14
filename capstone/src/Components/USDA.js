import React, { Component } from 'react';
import '../Header.css';



class USDA extends Component {
  constructor(props){
    super(props)
    this.state={
      search : '',
      result : []
    }
  }

  // let result = [];
  // USDA.forEach(programs => {
  //   if(programs.AgencyShort === "USDA"){
  //     result.push(programs)
  //   }
  // })

  // updateSearch(event){
  //   let filteredProgs = result.filter(
  //     (program) => {
  //       return program.ProgTitle.indexOf(this.state.search) != -1;
  //       this.setState({result: filteredProgs})
  //     })
  //     // console.log('result array', result);
  //     // console.log(filteredProgs);
  //   this.setState({search: event.target.value})
  // }

  render() {
    console.log(this.props);
    return (
      <div className="AgencyByShort"> USDA Programs<br></br>
        <input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} />

        {this.state.result.map(ele=>{
          return(
            <div>
              <div>{ele.ProgTitle}</div>
              <div>{ele.GovAgency}</div>
              <div>{ele.WebURL}</div>
            <br/>
            </div>)
        })}
       </div>
    );

  }
}
export default USDA;
