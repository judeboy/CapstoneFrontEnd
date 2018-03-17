import React, { Component } from 'react';
import '../Header.css';



class DOI extends Component {
  render() {
    var DOI = []
    var URL = []
    var array = []
    if(this.props.mounted === true){
      console.log('we are good');
      DOI = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < DOI.length; i++){
        let arr=[]
        arr.push(DOI[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div className="AgencyByShort">
        {array.map((ele,i) => {
          return(
            <a target="_blank" href={`${ele[1]}`}>
            <div className="ResultDiv">
              <div className="ProgResult" key={i}>{ele[0]}</div>
              <div className="LinkResult" key={i}></div>
            </div>
            </a>
          )
        })}
       </div>
    );

  }
}

export default DOI;
