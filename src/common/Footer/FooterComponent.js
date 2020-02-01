import React, { Component } from 'react';
import './footerComponent.styles.scss';
import { NavLink } from 'react-router-dom';
import NewsBar from './png/NewsBar.png';
import BarCrawl from './png/BarCrawl.png';
import Randomize from './png/Randomize.png';
import MapBar from './png/MapBar.png';

class Nav extends Component {
  render(){
      return (
          <div className="footer">
              <NavLink 
                  to="/feed" 
                  className="navlink" 
                  activeClassName='is-active'>
                  <img className="imgbar" src={NewsBar} alt="newsbar"></img> 
                  <span>Новости</span>
              </NavLink>
          
              <NavLink 
                  to="/barcrawl" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={BarCrawl} alt="barcrawlbar"></img> 
                  <span>Bar crawl</span>
              </NavLink>
          
              <NavLink 
                  to="/randomizer" 
                  exact={true} 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={Randomize} alt="randombar"></img> 
                  <span>Randomize</span>
              </NavLink>
          
              <NavLink 
                  to="/map" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={MapBar} alt="mapbar"></img> 
                  <span>Карта</span>
              </NavLink>
          </div>
          );
      };
  };

export default Nav;
