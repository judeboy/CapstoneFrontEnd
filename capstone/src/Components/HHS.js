import React, { Component } from 'react';
import '../Header.css';

class HHS extends Component {
  render() {
    let HHS = this.props.programs
    let result = [];
    HHS.map(programs => {
      if(programs.AgencyShort === "HHS"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> HHS Programs
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

export default HHS;
