import React, { Component } from 'react';
import '../Header.css';

class HHS extends Component {
  render() {
    var HHS = []
    var URL = []
    var array = []
    if(this.props.mounted === true){
      console.log('we are good');
      HHS = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < HHS.length; i++){
        let arr=[]
        arr.push(HHS[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div className="AgencyByShort"> HHS Programs
        {array.map((ele,i) => {
          return(
            <div>
              <div key={i}>{ele[0]}</div>
              <div key={i}><a href={`${ele[1]}`}>CLICK</a></div>
            </div>
          )
        })}
       </div>
    );

  }
}
export default HHS;
