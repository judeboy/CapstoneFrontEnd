import React, { Component } from 'react';
import '../Header.css';



class USDA extends Component {
  render() {
    let USDA = this.props.programs
    let result = [];
    USDA.map(programs => {
      if(programs.AgencyShort === "USDA"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> USDA Programs
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
export default USDA;
