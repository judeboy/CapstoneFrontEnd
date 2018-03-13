import React, { Component } from 'react';
import '../Header.css';



class DOI extends Component {
  render() {
    let DOI = this.props.programs
    let result = [];
    DOI.forEach(programs => {
      if(programs.AgencyShort === "DOI"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> DOI Programs
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
export default DOI;
