import React, { Component } from 'react';
import '../Header.css';



class ED extends Component {
  render() {
    let ED = this.props.programs
    let result = [];
    ED.forEach(programs => {
      if(programs.AgencyShort === "ED"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> ED Programs
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
export default ED;
