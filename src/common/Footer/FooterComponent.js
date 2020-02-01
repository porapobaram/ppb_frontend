import React, { Component } from 'react';
import './footerComponent.styles.scss';
import { NavLink } from 'react-router-dom';
import NewsBarimg from './png/NewsBar.png';
import BarCrawlimg from './png/BarCrawl.png';
import Randomizeimg from './png/Randomize.png';
import MapBarimg from './png/MapBar.png';

class Nav extends Component {
  render(){
      return (
          <div className="footer">
              <NavLink 
                  to="/feed" 
                  className="navlink" 
                  activeClassName='is-active'>
                  <img className="imgbar" src={NewsBarimg} alt="newsbar"></img> 
                  <span>Новости</span>
              </NavLink>
          
              <NavLink 
                  to="/barcrawl" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={BarCrawlimg} alt="barcrawlbar"></img> 
                  <span>Bar crawl</span>
              </NavLink>
          
              <NavLink 
                  to="/randomizer" 
                  exact={true} 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={Randomizeimg} alt="randombar"></img> 
                  <span>Randomize</span>
              </NavLink>
          
              <NavLink 
                  to="/map" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={MapBarimg} alt="mapbar"></img> 
                  <span>Карта</span>
              </NavLink>
          </div>
          );
      };
  };

export default Nav;
