import React, { Component } from 'react';
import MapPageComponent from './MapPageComponent';

// eslint-disable-next-line react/prefer-stateless-function
class MapPageComponentContainer extends Component {
	render() {
		return (
			<div>
				<MapPageComponent />
			</div>
		);
	}
}

export default MapPageComponentContainer;
