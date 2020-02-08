import React from 'react';
import { Link } from 'react-router-dom';
import './headerComponent.styles.scss';
import ArrowHeaderImg from './png/ArrowHeader.png';
import LogoHeader from './png/LogoHeader.png';
import ProfileHeader from './png/ProfileHeader.png';

const HeaderComponent = () => (
	<header className="header">
		<div className="arrow_back-header">
			<Link to="/">
				<img src={ArrowHeaderImg} alt="back" />
			</Link>
		</div>
		<div className="logo_header">
			<Link to="/randomizer">
				<img src={LogoHeader} alt="logo" />
			</Link>
		</div>
		<div className="profile_header">
			<Link to="/barcrawl">
				<img src={ProfileHeader} alt="profile" />
				<p>Profile</p>
			</Link>
		</div>
	</header>
);

export default HeaderComponent;
