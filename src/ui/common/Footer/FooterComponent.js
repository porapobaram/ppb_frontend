import React from 'react';
import './footerComponent.styles.scss';
import { NavLink } from 'react-router-dom';
import newsBarImg from './png/NewsBar.png';
import barCrawlImg from './png/BarCrawl.png';
import randomizeImg from './png/Randomize.png';
import mapBarImg from './png/MapBar.png';

const FooterComponent = () => (
	<footer className="footer">
		<NavLink to="/feed" className="navLink" activeClassName="is-active">
			<img className="imgbar" src={newsBarImg} alt="newsbar" />
			<span>Новости</span>
		</NavLink>

		<NavLink to="/barcrawl" className="navLink" activeClassName="is-active">
			<img className="imgbar" src={barCrawlImg} alt="barcrawlbar" />
			<span>Bar crawl</span>
		</NavLink>

		<NavLink to="/randomizer" exact className="navLink" activeClassName="is-active">
			<img className="imgbar" src={randomizeImg} alt="randombar" />
			<span>Randomize</span>
		</NavLink>

		<NavLink to="/map" className="navLink" activeClassName="is-active">
			<img className="imgbar" src={mapBarImg} alt="mapbar" />
			<span>Карта</span>
		</NavLink>
	</footer>
);

export { FooterComponent };
