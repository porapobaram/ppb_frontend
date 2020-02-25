import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { string } from 'prop-types';

const propTypes = {
	position: string,
	name: string,
	link: string,
	image: string,
	sex: string,
};

function CustomMarker({ position, name, link, image, sex }) {
	const arr = position.split(',');
	const markerPosition = { lat: +arr[0], lng: +arr[1] };
	const offsetInfoWindow = { lat: markerPosition.lat + 0.00001, lng: markerPosition.lng };
	return (
		<div>
			<Marker position={markerPosition}>
				{/* //add check on marker style based on user.sex */}
				<InfoWindow position={offsetInfoWindow}>
					<div>
						<h4>{name}</h4>
						<img src={image} alt={`user${name}`} width="50" height="50" />
						<p>link={link}</p>
					</div>
				</InfoWindow>
			</Marker>
		</div>
	);
}

CustomMarker.propTypes = propTypes;
export default CustomMarker;
