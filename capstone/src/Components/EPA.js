import React, { Component } from 'react';
import '../Header.css';



class EPA extends Component {
  render() {
    var EPA = []
    var URL = []
    var array = []
    if(this.props.mounted === true){
      console.log('we are good');
      EPA = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < EPA.length; i++){
        let arr=[]
        arr.push(EPA[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div className="AgencyByShort"> EPA Programs
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
export default EPA;
