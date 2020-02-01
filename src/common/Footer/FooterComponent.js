import React, { Component } from 'react';
import './footerComponent.styles.scss';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render(){
      return (
          <div className="footer">
              <NavLink 
                  to="/feed" 
                  className="navlink" 
                  activeClassName='is-active'>
                  <img className="imgbar" src={require('./png/NewsBar.png')} alt="newsbar"></img> 
                  <span>Новости</span>
              </NavLink>
          
              <NavLink 
                  to="/barcrawl" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={require('./png/BarCrawl.png')} alt="barcrawlbar"></img> 
                  <span>Bar crawl</span>
              </NavLink>
          
              <NavLink 
                  to="/randomizer" 
                  exact={true} 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={require('./png/Randomize.png')} alt="randombar"></img> 
                  <span>Randomize</span>
              </NavLink>
          
              <NavLink 
                  to="/map" 
                  className="navlink" 
                  activeClassName='is-active'
                  onClick={this.onClickHandler}>
                  <img className="imgbar" src={require('./png/MapBar.png')} alt="mapbar"></img> 
                  <span>Карта</span>
              </NavLink>
          </div>
          );
      };
  };

export default Nav;