import React, { Component } from 'react';
import '../Header.css';



class USDA extends Component {
    render() {
      var USDA = []
      var URL = []
      var array = []
      if(this.props.mounted === true){
        console.log('we are good');
        USDA = this.props.programs
        URL = this.props.urls
        for(let i = 0; i < USDA.length; i++){
          let arr=[]
          arr.push(USDA[i],URL[i])
          array.push(arr)
        }
      }

      return (
        <div className="AgencyByShort"> USDA Programs
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
export default USDA;
