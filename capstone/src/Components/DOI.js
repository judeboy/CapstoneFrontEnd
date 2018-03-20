import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
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
      <div>
      <h1>Department of the Interior</h1>
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

export default DOI;
