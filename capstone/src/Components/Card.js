import React, {Component} from 'react'
import { DragSource } from 'react-dnd';
import '../Card.css'



const cardSource = {
  beginDrag: function (props, monitor){
    console.log(props, monitor);
    return {
      cardId: props.ProgNumber
    }
  }
}

function collect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Card extends Component{
  handleClick = (e) => {
    e.preventDefault();
    this.props.setSelected(this.props.ProgNumber)
    console.log(this.props.selected);

  }
    render(){
        const {connectDragSource, isDragging} = this.props
        return connectDragSource(
            <div onClick={this.handleClick} id={this.props.ProgNumber} className='singleProgram'>
              {this.props.ProgTitle}
              {this.props.WebURL}
            </div>
        )
    }
}

export default DragSource('card', cardSource, collect)(Card)
