import React, { Component } from 'react';
import '../App.css';
import flamingo from '../public/flamingo.jpg';
import boat from '../public/boat.jpg';
import Card from './Card.js'
import tiles from '../menuTiles.json'



class Menu extends Component {

  render() {
    return (
      <div className="Landing">
        <h1>Choose from one of the panes below</h1>
        <div className="MenuDivs">
          <Card title={'Department of Education'} image={flamingo}/>
          <Card title={'Health & Human Services'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
          <Card title={'Dept of Defense'} image={boat}/>
        </div>
      </div>
    );
  }
}
export default Menu;
