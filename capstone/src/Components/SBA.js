import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import Card from './Card'
import TrelloColumn from './TrelloColumn'
import '../Header.css';
import '../App.css'



    // console.log('matchingPrograms', matchingPrograms);



class SBA extends Component {

  renderList = (number) => {
    return (
      <TrelloColumn number={number}>
      </TrelloColumn>
    )
  }

  render() {
    var SBA = []
    var URL = []
    var array = []
    if (this.props.mounted === true) {
      SBA = this.props.programs
      URL = this.props.urls
      for(let i = 0; i < SBA.length; i++){
        let arr=[]
        arr.push(SBA[i],URL[i])
        array.push(arr)
      }
    }

    return (
      <div id='containerOfColumns'>
          {this.renderList('one')}
          {this.renderList('two')}
          {this.renderList('three')}
          {this.renderList('four')}
      </div>

    );

  }
}
export default SBA;
{/* <div className='trelloColumn'>
{array.map((ele,i) => {
  return(
      <Draggable>
        <div className="ResultDiv">
          <a target="_blank" href={`${ele[1]}`}><div className="ProgResult" key={i}>{ele[0]}</div></a>
        </div>
      </Draggable>
  )
})}
</div> */}
