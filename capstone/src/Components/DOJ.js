import React, { Component } from 'react';
import '../Header.css';



class DOJ extends Component {
  render() {
    let DOJ = this.props.programs
    let result = [];
    DOJ.map(programs => {
      if(programs.AgencyShort === "DOJ"){
        return result.push(programs)
      }
    })
    console.log("result", result);

    return (
      <div className="AgencyByShort"> DOJ Programs
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
export default DOJ;
