import React, { Component } from 'react';
import '../App.css';
import '../Card.css';




class Card extends Component {
    render(){
      return (
        <div>
           <div className="card">
            <h3>{this.props.title}</h3>
            <img id='rcorners3' src={this.props.image}></img>
          </div>
        </div>
      )
    }
  }


export default Card;
