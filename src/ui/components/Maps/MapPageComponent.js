import React from 'react';
import { MAP_STAGE } from '../../../config';
import { string, func } from 'prop-types';

const propTypes = {
	mapStage: string,
	renderBarNotChoose: func,
	renderDirection: func,
	renderCurrentUsers: func,
};

class MapPageComponent extends React.Component {
	render() {
		const { mapStage, renderBarNotChoose, renderDirection, renderCurrentUsers } = this.props;
		switch (mapStage) {
			case MAP_STAGE.DIRECTION: {
				return <div>{renderDirection()}</div>;
			}
			case MAP_STAGE.PEOPLENEARBY: {
				return <div>{renderCurrentUsers()}</div>;
			}
			default:
				return <div>{renderBarNotChoose()}</div>;
		}
	}
}
MapPageComponent.propTypes = propTypes;

export default MapPageComponent;
