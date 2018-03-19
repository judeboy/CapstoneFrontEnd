import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import '../Header.css';
import '../App.css'



class SBA extends Component {
  constructor(props){
    super(props)
    this.state = {
      search:''
    }
  }
  updateSearch(event){
    this.setState({search: event.target.value})
    console.log(this.state.search);
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
        <div className='trelloColumn'>
        {array.map((ele,i) => {
          return(
              <Draggable>
                <div className="ResultDiv">
                  <a target="_blank" href={`${ele[1]}`}><div className="ProgResult" key={i}>{ele[0]}</div></a>
                </div>
              </Draggable>
          )
        })}
       </div>
    );

  }
}
export default SBA;
