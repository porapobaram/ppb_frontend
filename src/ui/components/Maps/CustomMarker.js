import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { string } from 'prop-types';

const propTypes = {
	info: string,
	position: string,
	name: string,
};

function CustomMarker({ info, position, name }) {
	const arr = position.split(',');
	const offset = { lat: +arr[1], lng: +arr[0] };
	console.log(offset, 'OFFSET');
	return (
		<div>
			{/*<h1 style={{ position: 'relative', top: '100px', left: '20px', zIndex: 999999 }}>{name}</h1>*/}
			<Marker position={offset}>
				<InfoWindow position={offset}>
					<h4>{info}</h4>
				</InfoWindow>
			</Marker>
		</div>
	);
}

CustomMarker.propTypes = propTypes;
export default CustomMarker;
