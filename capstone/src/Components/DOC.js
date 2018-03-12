import React, { Component } from 'react';
import '../Header.css';



class DOC extends Component {
  render() {
    let DOC = this.props.programs
    let result = [];
    DOC.map(programs => {
      if(programs.AgencyShort === "DOC"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> DOC Programs
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
export default DOC;
