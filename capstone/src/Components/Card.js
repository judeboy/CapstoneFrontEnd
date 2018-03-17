import React, {Component} from 'react'
import { DragSource } from 'react-dnd';
import '../Card.css'

const cardSource = {
    beginDrag: function (props, monitor){
        return {cardId: 1}
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
            <div key={this.props.ProgNumber} url={this.props.WebURL} className='singleProgram'>
              {this.props.ProgTitle}
            </div>
        )
    }
}

export default DragSource('card', cardSource, collection)(Card)
