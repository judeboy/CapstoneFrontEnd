import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import '../App.css'
import '../Header.css';


class SBA extends Component {
  render() {
    var SBA = []
    var URL = []
    var array = []
    if (this.props.mounted === true) {
      SBA = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < 6; i++){
        let arr=[]
        arr.push(SBA[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div>
        <h1>Small Business Administration</h1>
      <div id='containerOfColumns'>
        <div className='trelloColumns'>
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
export default SBA;
