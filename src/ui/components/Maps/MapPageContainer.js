import React, { Component } from 'react';
import MapPageComponent from './MapPageComponent';
import { getCurrentUsers, setMapState, setMyLocation } from '../../../reduxStore/map/actions';

// import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { func, string, object, array } from 'prop-types';
import { MAP_STAGE } from '../../../config';

const propTypes = {
	getCurrentUsers: func,
	setMapState: func,
	setMyLocation: func,
	positionBar: object,
	locationToBar: object,
	currentUsers: array,
	mapStage: string,
};

// eslint-disable-next-line react/prefer-stateless-function
class MapPageContainer extends Component {
	componentDidMount() {
		this.props.getCurrentUsers();
		// this.props.setMapState(MAP_STAGE.DIRECTION);
		this.props.setMapState(MAP_STAGE.PEOPLENEARBY);
		// this.props.setMapState(MAP_STAGE.DISABLED);
	}

	render() {
		const { positionBar, mapStage, locationToBar, setMyLocation, currentUsers } = this.props;

		return (
			<MapPageComponent
				barPosition={positionBar}
				mapStage={mapStage}
				locationToBar={locationToBar}
				setMyLocation={setMyLocation}
				currentUsers={currentUsers}
			/>
		);
	}
}

MapPageContainer.propTypes = propTypes;

const mapStateToProps = state => {
	return {
		currentUsers: state.mapReducer.currentUsers,
		mapStage: state.mapReducer.mapStage,
		positionBar: {
			lat: state.randomBarReducer.randomBar.location.lat,
			lng: state.randomBarReducer.randomBar.location.lng,
		},
		locationToBar: state.mapReducer.locationToBar,
	};
};
const mapDispatchToProps = {
	getCurrentUsers,
	setMapState,
	setMyLocation,
	// push,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPageContainer);
