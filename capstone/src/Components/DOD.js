import React, { Component } from 'react';
import '../Header.css';



class DOD extends Component {

  render() {
    let DOD = this.props.programs
    let result = [];
    DOD.map(programs => {
      if(programs.AgencyShort === "DOD"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="DOD"> DOD Programs
        {result.map(ele=>{
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
export default DOD;
