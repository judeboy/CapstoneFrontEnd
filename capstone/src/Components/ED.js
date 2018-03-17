import React, { Component } from 'react';
import '../Header.css';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag: function(props, monitor){
    return {cardId: 1}
  }
}

function collect(connect, monitor){
  return {
    connectedDragSource: connect.DragSource(),
    isDragging: monitor.isDragging()
  }
}


class ED extends Component {

  render() {
    var EDU = []
    var URL = []
    var array = []
    if(this.props.mounted === true){
      console.log('we are good');
      EDU = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < EDU.length; i++){
        let arr=[]
        arr.push(EDU[i],URL[i])
        array.push(arr)
      }
    }

    const {connectedDragSource, isDragging} = this.props;


    return connectedDragSource(
      <div className="divOfProgs">
        {array.map((ele,i) => {
          return(
            <a target="_blank" href={`${ele[1]}`}>
            <div className="singleProgram">
              <div className="ProgTitleText" key={i}>{ele[0]}</div>
              <div className="ProgTitleLink" key={i+1}></div>
            </div>
            </a>
          )
        })}
       </div>
    );

  }
}
export default DragSource('card', cardSource, collect )(ED);
