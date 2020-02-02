import React from 'react';
import './DotsParallax.scss';
import Dots from './dots.png';

const DotsParallax = () => {
	return (
		<div>
			<img className="dotsLogo" src={Dots} alt="Dots" />
		</div>
	);
};

export default DotsParallax;