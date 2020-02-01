import React, { Component } from 'react';
import './footerComponent.styles.scss';
import { NavLink } from 'react-router-dom';
import newsBarImg from './png/NewsBar.png';
import barCrawlImg from './png/BarCrawl.png';
import randomizeImg from './png/Randomize.png';
import mapBarImg from './png/MapBar.png';

class Nav extends Component {
  render(){
      return (
          <div className="footer">
              <NavLink 
                  to="/feed" 
                  className="navlink" 
                  activeClassName='is-active'>
                  <img className="imgbar" src={newsBarImg} alt="newsbar" />
                  <span>Новости</span>
              </NavLink>
          
              <NavLink 
                  to="/barcrawl" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={barCrawlImg} alt="barcrawlbar" />
                  <span>Bar crawl</span>
              </NavLink>
          
              <NavLink 
                  to="/randomizer" 
                  exact={true} 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={randomizeImg} alt="randombar" />
                  <span>Randomize</span>
              </NavLink>
          
              <NavLink 
                  to="/map" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={mapBarImg} alt="mapbar" />
                  <span>Карта</span>
              </NavLink>
          </div>
          );
      };
  };

export default Nav;
