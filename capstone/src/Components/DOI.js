import React, { Component } from 'react';
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
      <div id='containerOfColumns'>
        <div >
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
      <div className="trelloColumns"> Intersting</div>
      <div className="trelloColumns"> Applied</div>
      <div className="trelloColumns"> Follow Up</div>
      <div className="trelloColumns"> Completed</div>
     </div>
    );

  }
}

export default DOI;
