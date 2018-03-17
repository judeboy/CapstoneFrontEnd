import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import '../App.css';
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
// import Header from './Header.js'


class Menu extends Component {

  render() {
    return (
      <div className="Menu">
        {/* <Header /> */}
        <h1>Choose from one of the panes below</h1>
        <div className="MenuDivs">
          <Link to='/epa'>
            <Card title={'Env Protection Agency'} image={epa}/>
          </Link>
          <Link to='hhs'>
            <Card title={'Health & Human Services'} image={hhs}/>
          </Link>
          <Link to='/doi'>
            <Card title={'Dept of Interior'} image={doi}/>
          </Link>
          <Link to='/Commerce'>
            <Card title={'Dept of Commerce'} image={coin}/>
          </Link>
          <Link to="/edu">
            <Card title={'Dept of Education'} image={book}/>
          </Link>
          <Link to='/usda'>
            <Card title={'US Dept of Agriculture'} image={doa}/>
          </Link>
          <Link to='/hud'>
            <Card title={'Housing & Urban Development'} image={city}/>
          </Link>
          <Link to='/sba'>
          <Card title={'Small Business Administration'} image={car}/>
          </Link>
        </div>
      </div>
    );
  }
}
export default Menu;
