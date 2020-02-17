import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { number, string } from 'prop-types';

const propTypes = {
	info: string,
	// lat: number,
	// lng: number,
};

const CustomMarker = ({ info, lat, lng }) => {
	return (
		<Marker position={{ lat, lng }}>
			<InfoWindow position={{ lat, lng }}>
				<h4>{info}</h4>
			</InfoWindow>
		</Marker>
	);
};

CustomMarker.propTypes = propTypes;
export default CustomMarker;
