import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './mapPageComponent.scss';
import CustomMarker from './CustomMarker';

const MapPageComponent = () => {
	let [position, setPosition] = useState({});
	let [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading((isLoading = true));
		navigator.geolocation.getCurrentPosition(currentPos => {
			setPosition(
				(position = {
					lat: currentPos.coords.latitude,
					lng: currentPos.coords.longitude,
				})
			);
			console.log(position);
			setIsLoading((isLoading = false));
		});
	}, []);

	return (
		<div>
			{console.log(isLoading)}

			<LoadScript id="script-loader" googleMapsApiKey="AIzaSyAYFIY83DbXl4KzBvUyXjiwfBrOr9feuCc">
				{!isLoading ? (
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
						<CustomMarker lat={position.lat} lng={position.lng} info="my location" />
					</GoogleMap>
				) : null}
			</LoadScript>
		</div>
	);
};

export default MapPageComponent;
