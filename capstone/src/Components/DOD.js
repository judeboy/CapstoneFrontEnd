import React, { Component } from 'react';
import '../Header.css';



class DOD extends Component {
  render() {
    var DOD= []
    var URL
    var array=[]
    if(this.props.mounted == true){
      console.log('we are good');
      DOD = this.props.programs
      URL = this.props.urls
      console.log(Array.isArray(DOD));
      console.log(DOD[0],URL[0]);
      for(let i=0; i<DOD.length; i++){
        let arr=[]
        arr.push(DOD[i],URL[i])
        array.push(arr)
      }
      console.log(array[0][1].toString());
      console.log(array[0][1]);
    }
    return (
      <div className="AgencyByShort">
        {array.map((ele,i) => {
          return(
            <div>
              <div key={i}>{ele[0]}</div>
              <div key={i}><a href={`${ele[1]}`}>Link</a></div>
            </div>
          )
        })}
       </div>
    );
  }
}

export default DOD;
