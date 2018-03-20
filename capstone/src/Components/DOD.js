import React, { Component } from 'react';
import '../Header.css';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';



class DOD extends Component {
  render() {
    var DOD= []
    var URL
    var array=[]
    if(this.props.mounted === true){
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
      <div>
      <h1>Department of Defense</h1>
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

export default DOD;
