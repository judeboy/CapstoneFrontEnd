import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
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
        <div>
        <h1>U.S. Department of Agriculture</h1>
        <div id='containerOfColumns'>
          <div className='trelloColumnScrollable'>
            <span className='columnTitles'>Available Programs</span>
          {array.map((ele,i) => {
            return(
              <Draggable>
                  <div className="singleProgramDiv">
                    <a target="_blank" href={`${ele[1]}`}><div className="ProgResult" key={i}>{ele[0]}</div></a>
                  </div>
              </Draggable>
            )
          })}
         </div>
         <div className="trelloColumns"> <span className='columnTitles'>Interesting</span></div>
         <div className="trelloColumns"> <span className='columnTitles'>Applied</span></div>
         <div className="trelloColumns"> <span className='columnTitles'>Follow-Up</span></div>
         <div className="trelloColumns"> <span className='columnTitles'>Completed!</span></div>
        </div>
        </div>
      );

    }
  }
export default USDA;
