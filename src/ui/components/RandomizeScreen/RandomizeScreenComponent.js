import React from 'react';
import './RandomizeScreenComponent.scss';

const RandomizeScreenComponent = ({ onClickHandler }) => {
	return (
		<>
			<div className="button_wrapper">
				<div className="button_container">
					<button className="button" onClick={onClickHandler}>
						Пора!
					</button>
				</div>
			</div>
		</>
	);
};

export default RandomizeScreenComponent;
