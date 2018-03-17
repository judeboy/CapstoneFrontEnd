import React, { Component } from 'react';
import '../Header.css';



class DOC extends Component {
  render() {
    var DOC = [];
    var URL = [];
    var array = [];

    if(this.props.mounted === true){
      console.log('we are good');
      DOC = this.props.programs
      URL = this.props.urls
      // console.log(URL)
      console.log(Array.isArray(DOC));
      console.log(DOC[0],URL[0]);
      for(let i = 0; i < DOC.length; i++){
        let arr = []
        arr.push(DOC[i], URL[i])
        array.push(arr)
      }
      // console.log(array[0][1].toString());
      // console.log(array[0][1]);
    }
    return (
      <div className="AgencyByShort">
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
export default DOC;
