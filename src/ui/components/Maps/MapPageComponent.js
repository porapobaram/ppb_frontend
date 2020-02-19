import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './mapPageComponent.scss';
import CustomMarker from './CustomMarker';
import { GOOGLE_API_KEY } from '../../../config';

function MapPageComponent() {
	const [position, setPosition] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		navigator.geolocation.getCurrentPosition(currentPos => {
			setPosition({
				lat: currentPos.coords.latitude,
				lng: currentPos.coords.longitude,
			});
		});
	}, []);

	useEffect(() => {
		setIsLoading(false);
		console.log(position);
	}, [position]);

	return (
		<div>

			<LoadScript id="script-loader" googleMapsApiKey={GOOGLE_API_KEY}>
				{!isLoading ? (
					<GoogleMap
						id="example-app"
						mapContainerStyle={{
							height: '800px',
							width: '375px',
						}}
						zoom={8}
						center={position}
					>
						<CustomMarker position={position} info="my location" />
					</GoogleMap>
				) : null}
			</LoadScript>
		</div>
	);
}

export default MapPageComponent;
