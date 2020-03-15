import React, { Component } from 'react';
import MapPageComponent from './MapPageComponent';
import { getCurrentUsers, setMapState, setMyLocation } from '../../../reduxStore/map/actions';
import './mapPageComponent.scss';
// import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { func, string, object, array } from 'prop-types';
import { GOOGLE_API_KEY, MAP_STAGE } from '../../../config';
import {
	DirectionsRenderer,
	DirectionsService,
	GoogleMap,
	LoadScript,
	MarkerClusterer,
	Marker,
} from '@react-google-maps/api';
import { Spinner } from '../Spinner';
import CustomMarker from './CustomMarker';

const propTypes = {
	getCurrentUsers: func,
	renderDirection: func,
	renderCurrentUsers: func,
	renderBarNotChoose: func,
	currentPosition: func,
	directionsCallback: func,
	setMapState: func,
	setMyLocation: func,
	positionBar: object,
	locationToBar: object,
	locationPosition: object,
	currentUsers: array,
	mapStage: string,
};

// eslint-disable-next-line react/prefer-stateless-function
class MapPageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			locationPosition: {},
			travelMode: 'WALKING',
			response: null,
			clickedMarker: false,
			marker: '',
		};

		this.directionsCallback = this.directionsCallback.bind(this);
		this.renderDirection = this.renderDirection.bind(this);
		this.renderCurrentUsers = this.renderCurrentUsers.bind(this);
		this.renderBarNotChoose = this.renderBarNotChoose.bind(this);
		this.currentPosition = this.currentPosition.bind(this);
		this.onMarkerClick = this.onMarkerClick.bind(this);
	}

	componentDidMount() {
		this.props.getCurrentUsers();
		// this.props.setMapState(MAP_STAGE.DIRECTION);
		this.props.setMapState(MAP_STAGE.PEOPLENEARBY);
		// this.props.setMapState(MAP_STAGE.DISABLED);

		// setTimeout(this.currentPosition(), 5000);
		this.currentPosition();
		// const TEST = { lat: 48.379433, lng: 31.16558 };
		// this.props.setMyLocation(TEST);
	}

	componentDidUpdate(prevProps) {
		const { setMyLocation, positionBar } = this.props;
		const { locationPosition } = this.state;

		if (JSON.stringify(locationPosition) !== '{}' && locationPosition !== prevProps.locationPosition) {
			const locationPositionToRedux = {
				lat: parseFloat(locationPosition.lat).toFixed(3),
				lng: parseFloat(locationPosition.lng).toFixed(3),
			};

			console.log(`locationPositionSHORT${JSON.stringify(locationPositionToRedux)}`);

			const barPositionForCompare = {
				lat: parseFloat(positionBar.lat).toFixed(3),
				lng: parseFloat(positionBar.lng).toFixed(3),
			};

			console.log(`barPositionSHORT${JSON.stringify(barPositionForCompare)}`);

			if (JSON.stringify(barPositionForCompare) === JSON.stringify(locationPositionToRedux)) {
				console.log(`осталось 50 м`);
				// <ModalRoot />;
			}
			// setTimeout(() => {
			// 	setMyLocation(locationPositionToRedux);
			// }, 1000);
		}
	}

	currentPosition = () => {
		this.setState(
			{
				isLoading: true,
			},
			() => {
				navigator.geolocation.getCurrentPosition(currentPos => {
					this.setState(
						{
							locationPosition: {
								lat: currentPos.coords.latitude,
								lng: currentPos.coords.longitude,
							},
						},
						() => {
							this.setState({
								isLoading: false,
							});
						}
					);
				});
			}
		);
	};

	onMarkerClick = idx => {
		this.state.clickedMarker
			? this.setState({ clickedMarker: false })
			: this.setState({ clickedMarker: true, marker: idx });
	};

	directionsCallback = (response, result) => {
		console.log({ response });
		if (response !== null) {
			if (response.status === 'OK') {
				this.setState(() => ({
					response,
				}));
			}
		} else {
			console.error(`error fetching directions ${JSON.stringify(result)}`);
		}
	};

	renderDirection = () => {
		const { isLoading, locationPosition, travelMode, response } = this.state;
		const { positionBar, locationToBar /* , setMyLocation */ } = this.props;
		console.log(`barLONG${JSON.stringify(positionBar)}`);
		console.log(`locationPositionLONG${JSON.stringify(locationPosition)}`);

		return (
			<div>
				<LoadScript id="script-loader" loadingElement={<Spinner />} googleMapsApiKey={GOOGLE_API_KEY}>
					{!isLoading ? (
						<GoogleMap id="map-style" zoom={8} center={locationPosition}>
							{positionBar !== '' && locationPosition !== '' && (
								<DirectionsService
									options={{
										destination: positionBar,
										origin: locationPosition,
										travelMode,
									}}
									callback={JSON.stringify(locationToBar) === '{}' ? this.directionsCallback : null}
								/>
							)}
							{response !== 'null' && (
								<DirectionsRenderer
									options={{
										directions: response,
									}}
								/>
							)}
						</GoogleMap>
					) : null}
				</LoadScript>
			</div>
		);
	};

	renderCurrentUsers = () => {
		const { isLoading, locationPosition, clickedMarker, marker } = this.state;
		const { currentUsers } = this.props;
		const locations = [
			{ lat: 50.4397541, lng: 30.516102 },
			{ lat: 50.4401, lng: 30.518 },
			{ lat: 50.4397543, lng: 30.516105 },
			{ lat: 50.4403, lng: 30.521 },
			{ lat: 50.4397545, lng: 30.516107 },
			{ lat: 50.4405, lng: 30.524 },
		];

		const iconCustom = { url: require('./assets/man.png'), scaledSize: { width: 70, height: 70 } };
		const options = {
			imagePath: 'https://i.ibb.co/WH9NwrR/clusters.png/m',
			maxZoom: 50,
			gridSize: 25,
			// imagePath: './assets/clusters.png/m',
		};

		return (
			<div>
				<LoadScript id="script-loader" loadingElement={<Spinner />} googleMapsApiKey={GOOGLE_API_KEY}>
					{!isLoading ? (
						<GoogleMap id="map-style" zoom={8} center={locationPosition}>
							<MarkerClusterer options={options}>
								{clusterer =>
									locations.map((location, i) => (
										<Marker key={i} position={location} clusterer={clusterer} icon={iconCustom} />
									))
								}
							</MarkerClusterer>

							{currentUsers.map((user, id) => {
								return (
									<CustomMarker
										key={id}
										name={user.name}
										image={user.image}
										sex={user.sex}
										link={user.link}
										position={user.ll}
										onMarkerClick={this.onMarkerClick}
										clickedMarker={clickedMarker}
										idx={id}
										marker={marker}
									/>
								);
							})}
						</GoogleMap>
					) : null}
				</LoadScript>
			</div>
		);
	};

	renderBarNotChoose = () => {
		return <p>Выберите бар!</p>;
	};

	render() {
		const { mapStage } = this.props;

		return (
			<MapPageComponent
				mapStage={mapStage}
				renderCurrentUsers={this.renderCurrentUsers}
				renderDirection={this.renderDirection}
				renderBarNotChoose={this.renderBarNotChoose}
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
