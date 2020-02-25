import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './mapPageComponent.scss';
import CustomMarker from './CustomMarker';
import ModalRoot from '../ModalRoot';
import { GOOGLE_API_KEY, MAP_STAGE } from '../../../config';
import { Spinner } from '../Spinner';
import { object, string, func } from 'prop-types';

const propTypes = {
	info: string,
	barName: string,
	mapStage: string,
	position: object,
	locationToBar: object,
	barPosition: object,
	locationPosition: object,
	setMyLocation: func,
};

class MapPageComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			locationPosition: {},
			travelMode: 'WALKING',
			response: null,
		};

		this.directionsCallback = this.directionsCallback.bind(this);
		this.renderMap = this.renderMap.bind(this);
		this.renderCurrentUsers = this.renderCurrentUsers.bind(this);
		this.renderBarNotChoose = this.renderBarNotChoose.bind(this);
		this.currentPosition = this.currentPosition.bind(this);
	}

	componentDidMount() {
		// setTimeout(this.currentPosition(), 5000);
		this.currentPosition();
	}

	componentDidUpdate(prevProps) {
		const { setMyLocation, barPosition } = this.props;
		const { locationPosition } = this.state;

		if (JSON.stringify(locationPosition) !== '{}' && locationPosition !== prevProps.locationPosition) {
			const locationPositionToRedux = {
				lat: parseFloat(locationPosition.lat).toFixed(3),
				lng: parseFloat(locationPosition.lng).toFixed(3),
			};

			console.log(`locationPositionSHORT${JSON.stringify(locationPositionToRedux)}`);

			const barPositionForCompare = {
				lat: parseFloat(barPosition.lat).toFixed(3),
				lng: parseFloat(barPosition.lng).toFixed(3),
			};

			console.log(`barPositionSHORT${JSON.stringify(barPositionForCompare)}`);

			if (JSON.stringify(barPositionForCompare) === JSON.stringify(locationPositionToRedux)) {
				console.log(`осталось 50 м`);
				// <ModalRoot />;
			}
			// setTimeout(setMyLocation(locationPositionToRedux), 10000);
			// const TEST = { lat: 48.379433, lng: 31.16558 };
			// setMyLocation(TEST);

			console.log(`myLocationPositionCHANGE`);
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

	directionsCallback = (response, result) => {
		console.log({ response });
		// let delayFactor = 0;
		if (response !== null) {
			if (response.status === 'OK') {
				this.setState(() => ({
					response,
					// directions: result,
				}));
			}
		}
		// else if ( JSON.stringify(result) === 'OVER_QUERY_LIMIT') {
		// 	delayFactor++;
		// 	setTimeout(this.directionsCallback, delayFactor * 10000);
		// }
		else {
			console.error(`error fetching directions ${JSON.stringify(result)}`);
		}
	};

	renderMap = () => {
		const { isLoading, locationPosition, travelMode, response } = this.state;
		const { barPosition, locationToBar, setMyLocation } = this.props;
		console.log(`barLONG${JSON.stringify(barPosition)}`);
		console.log(`locationPositionLONG${JSON.stringify(locationPosition)}`);

		// const options = {
		// 	strokeColor: '#8c9fff',
		// 	strokeOpacity: 0.8,
		// 	strokeWeight: 2,
		// 	fillColor: '#ff60b1',
		// 	fillOpacity: 0.35,
		// 	clickable: false,
		// 	draggable: false,
		// 	editable: false,
		// 	visible: true,
		// 	radius: 50,
		// 	zIndex: 1,
		// };

		return (
			<div>
				<LoadScript id="script-loader" loadingElement={<Spinner />} googleMapsApiKey={GOOGLE_API_KEY}>
					{!isLoading ? (
						<GoogleMap id="example-app" zoom={8} center={locationPosition}>
							{/* <CustomMarker position={barPosition} /> */}
							{/* <CustomMarker position={locationPosition} /> */}
							{barPosition !== '' && locationPosition !== '' && (
								<DirectionsService
									options={{
										destination: barPosition,
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
							{/* <Circle center={barPosition} options={options} /> */}
						</GoogleMap>
					) : null}
				</LoadScript>
			</div>
		);
	};

	renderCurrentUsers = () => {
		const { isLoading, locationPosition } = this.state;
		const { barPosition, currentUsers } = this.props;

		return (
			<div>
				<LoadScript id="script-loader" loadingElement={<Spinner />} googleMapsApiKey={GOOGLE_API_KEY}>
					{!isLoading ? (
						<GoogleMap id="example-app" zoom={8} center={locationPosition}>
							{currentUsers.map((user, id) => {
								return (
									<CustomMarker
										key={id}
										name={user.name}
										image={user.image}
										sex={user.sex}
										link={user.link}
										position={user.ll}
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
		switch (mapStage) {
			case MAP_STAGE.DIRECTION: {
				return this.renderMap();
			}
			case MAP_STAGE.PEOPLENEARBY: {
				return this.renderCurrentUsers();
			}
			default:
				return this.renderBarNotChoose();
		}
	}
}
MapPageComponent.propTypes = propTypes;

export default MapPageComponent;
