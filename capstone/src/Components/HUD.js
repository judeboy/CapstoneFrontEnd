import React, { Component } from 'react';
import '../Header.css';



class HUD extends Component {
  render() {
    let HUD = this.props.programs
    let result = [];
    HUD.forEach(programs => {
      if(programs.AgencyShort === "HUD"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> HUD Programs
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
export default HUD;
