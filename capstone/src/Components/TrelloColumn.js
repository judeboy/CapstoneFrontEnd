import React, {Component} from 'react'
import '../App.css'
import {DropTarget} from 'react-dnd'
import {moveCard} from './Game'

const listTarget = {
    drop: function (props, monitor){
      console.log('listTarget props', props);
        moveCard(props.number)
    }
}

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget()
    }
}

class TrelloColumn extends Component{
    render(){
        const {connectDropTarget} = this.props
        return connectDropTarget(
            <div className="trelloColumns">
                {this.props.children}
            </div>
        )
    }
}

export default DropTarget('card', listTarget, collect)(TrelloColumn)
