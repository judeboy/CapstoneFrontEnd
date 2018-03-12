import React, { Component } from 'react';
import '../Header.css';



class EPA extends Component {
  render() {
    let EPA = this.props.programs
    let result = [];
    EPA.map(programs => {
      if(programs.AgencyShort === "EPA"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> EPA Programs
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
export default EPA;
