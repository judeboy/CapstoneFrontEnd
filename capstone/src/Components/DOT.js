import React, { Component } from 'react';
import '../Header.css';



class DOT extends Component {
  render() {
    let DOT = this.props.programs
    let result = [];
    DOT.forEach(programs => {
      if(programs.AgencyShort === "DOT"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> DOT Programs
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
export default DOT;
