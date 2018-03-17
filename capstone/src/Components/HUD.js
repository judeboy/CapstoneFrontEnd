import React, { Component } from 'react';
import '../Header.css';



class HUD extends Component {
  render() {
    var HUD = []
    var URL = []
    var array = []
    if(this.props.mounted === true){
      console.log('we are good');
      HUD = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < HUD.length; i++){
        let arr=[]
        arr.push(HUD[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div className="AgencyByShort"> HUD Programs
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
export default HUD;
