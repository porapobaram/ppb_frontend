import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { object, string } from 'prop-types';

const propTypes = {
	info: string,
	position: object,
};

const CustomMarker = ({ info, position }) => {
	return (
		<Marker position={position}>
			<InfoWindow position={position}>
				<h4>{info}</h4>
			</InfoWindow>
		</Marker>
	);
};

CustomMarker.propTypes = propTypes;
export default CustomMarker;
