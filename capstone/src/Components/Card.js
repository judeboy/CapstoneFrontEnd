import React, {Component} from 'react'
import { DragSource } from 'react-dnd';
import '../Card.css'

const cardSource = {
    beginDrag: function (props, monitor){
      console.log('card props', props);
        return {cardId: props.cardId}
    }
}

function collection(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component{
    render(){
        const {connectDragSource, isDragging} = this.props
        return connectDragSource(
            <div className='singleProgram'>
              {this.props.ProgTitle}
              {this.props.WebURL}
            </div>
        )
    }
}

export default DragSource('card', cardSource, collection)(Card)
