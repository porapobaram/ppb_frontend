import React from 'react';
import './RandomizeScreenComponent.scss';

import { func, bool } from 'prop-types';
import cookie from 'react-cookies';

const propTypes = {
	onClickHandler: func,
	buttonDisabled: bool,
};
const RandomizeScreenComponent = ({ onClickHandler, buttonDisabled }) => {
	return (
		<div className="button_wrapper">
			<div className="button_container">
				<button type="button" disabled={buttonDisabled} className="button" onClick={onClickHandler}>
					Пора!
				</button>
			</div>
		</div>
	);
};
RandomizeScreenComponent.propTypes = propTypes;
export default RandomizeScreenComponent;
