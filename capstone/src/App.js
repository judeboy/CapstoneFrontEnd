
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';



class App extends Component {
  // handleStart = (event, ui) => {
  //   console.log('Event: ', event);
  //   console.log('Position: ', ui.position);
  // }
  //
  // handleDrag = (event, ui) => {
  //   console.log('Event: ', event);
  //   console.log('Position: ', ui.position);
  // }
  //
  //
  // handleStop = (event, ui) => {
  //   console.log('Event: ', event);
  //   console.log('Position: ', ui.position);
  // }


  render() {
    return (
      <Draggable>
        <div className='draggableDiv'>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}

export default App
