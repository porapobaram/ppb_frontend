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
				<InfoWindow
					position={offsetInfoWindow}
					icon="https://www.google.com/search?q=%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0&rlz=1C1CHBD_ruUA868UA868&sxsrf=ALeKk00TgvsmGUrWmitv_YThNGLRGnSb9Q:1582723244864&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjer6bGp-_nAhXokYsKHRe0AsgQ_AUoAXoECA8QAw&biw=1366&bih=625#imgrc=3Y9aTJggHq0ATM"
				>
					<div>
						<h4>{name}</h4>
						{/* <img src={image}  alt={`user${name}`} width="50" height="50" /> */}
						<p>link={link}</p>
					</div>
				</InfoWindow>
			</Marker>
		</div>
	);
}

CustomMarker.propTypes = propTypes;
export default CustomMarker;
