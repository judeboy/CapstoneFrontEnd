import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import '../App.css';
import flamingo from '../images/flamingo.jpg';
import boat from '../images/boat.jpg';
import justice from '../images/justice.png'
import epa from '../images/factory.png'
import hhs from '../images/hhs.png'
import doi from '../images/doi.png'
import coin from '../images/coin.png'
import dod from '../images/dod.png'
import book from '../images/book.png'
import doa from '../images/doa.png'
import city from '../images/city.png'
import car from '../images/car.png'
import Card from './Card.js'



class Menu extends Component {

  render() {
    return (
      <div className="Landing">
        <h1>Choose from one of the panes below</h1>
        <div className="MenuDivs">
          <Card title={'Env Protection Agency'} image={epa}/>
          <Card title={'Health & Human Services'} image={hhs}/>
          <Card title={'Dept of Interior'} image={doi}/>
          <Card title={'Dept of Commerce'} image={coin}/>
          <Card title={'Dept of Education'} image={book}/>
          <Card title={'Dept of Justice'} image={justice}/>
          <Link to='/dod'>
            <Card key="DODcard" title={'Dept of Defense'} image={dod}/>
          </Link>
          <Card title={'US Dept of Agriculture'} image={doa}/>
          <Card title={'Housing & Urban Development'} image={city}/>
          <Card title={'Dept of Transportation'} image={car}/>
        </div>
      </div>
    );
  }
}
export default Menu;
