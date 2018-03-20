import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
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
      <div>
      <h1>Department of Commerce</h1>
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
export default DOC;
