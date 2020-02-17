import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './mapPageComponent.scss';
import CustomMarker from './CustomMarker';
import { GOOGLE_API_KEY } from '../../../config';

// eslint-disable-next-line react/prefer-stateless-function
class MapPageComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { setIsLoading: true };
	}

	render() {
		// let [position, setPosition] = useState({});
		// let [isLoading, setIsLoading] = useState(false);

		// useEffect(() => {
		// 	setIsLoading((isLoading = true));
		// 	navigator.geolocation.getCurrentPosition(currentPos => {
		// 		setPosition(
		// 			(position = {
		// 				lat: currentPos.coords.latitude,
		// 				lng: currentPos.coords.longitude,
		// 			})
		// 		);
		// 		console.log(position);
		// 		setIsLoading((isLoading = false));
		// 	});
		// }, []);

		let position = {};
		let isLoad = false;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				console.log(`latitude: ${pos.coords.latitude}  longitude: ${pos.coords.longitude}`);
				position = {
					lat: pos.coords.latitude,
					long: pos.coords.longitude,
				};
				console.log(`eto=${position.lat}`);
				isLoad = true;
			});
		}

		// let position = {
		// 	lat: latt,
		// 	long: longg,
		// };
		//
		// this.componentDidMount(){
		//
		// }

		// const position = {};
		// const isLoading = false;
		// const geolocation = () => {
		// 	navigator.geolocation.getCurrentPosition(currentPos => {
		// 		return {
		// 			lat: currentPos.coords.latitude,
		// 			lng: currentPos.coords.longitude,
		// 		};
		// 	});
		// };
		//
		// const { lat, lng } = geolocation();
		// console.log(geolocation());

		return (
			<div>
				{/* {console.log(isLoading)} */}

				<LoadScript id="script-loader" googleMapsApiKey={GOOGLE_API_KEY}>
					{isLoad ? (
						<GoogleMap
							id="example-app"
							// mapContainerStyle = {{
							//    height: '800px',
							//    width: '375px'
							// }}

							zoom={8}
							center={position}
							// lat: 50.37,//50.9120,//
							// lng:  30.30//34.7955//
						>
							<CustomMarker lat={position.lat} lng={position.long} info="my location" />
						</GoogleMap>
					) : null}
				</LoadScript>
			</div>
		);
	}
}

export default MapPageComponent;
