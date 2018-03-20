import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import '../Header.css';
import '../App.css'



class SBA extends Component {
  render() {
    var SBA = []
    var URL = []
    var array = []
    if (this.props.mounted === true) {
      SBA = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < SBA.length; i++){
        let arr=[]
        arr.push(SBA[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div id='containerOfColumns'>
        <div className='trelloColumns'>
          Available Programs
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
      <div className="trelloColumns"> Interesting</div>
      <div className="trelloColumns"> Applied</div>
      <div className="trelloColumns"> Follow-Up</div>
      <div className="trelloColumns"> Completed!</div>
     </div>
    );

  }
}
export default SBA;
