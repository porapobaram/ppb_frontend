import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { string, func, bool, number } from 'prop-types';
import './mapPageComponent.scss';

const propTypes = {
	position: string,
	name: string,
	link: string,
	image: string,
	sex: string,
	marker: string,
	onMarkerClick: func,
	clickedMarker: bool,
	idx: number,
};

const CustomMarker = ({ position, name, link, image, sex, onMarkerClick, clickedMarker, idx, marker }) => {
	const arr = position.split(',');
	const markerPosition = { lat: +arr[0], lng: +arr[1] };
	const offsetInfoWindow = { lat: markerPosition.lat + 0.000014, lng: markerPosition.lng };
	let iconCustom = {};

	if (sex === 'm') {
		iconCustom = { url: require('./assets/man.png'), scaledSize: { width: 70, height: 70 } };
	} else iconCustom = { url: require('./assets/woman.png'), scaledSize: { width: 70, height: 70 } };

	return (
		<div>
			<Marker position={markerPosition} icon={iconCustom} onClick={() => onMarkerClick(idx)}>
				{clickedMarker && marker === idx ? (
					<InfoWindow position={offsetInfoWindow} icon={image}>
						<div className="wrapperWindow">
							{sex === 'm' ? (
								<div className="wrapperImg">
									<img
										src="https://scontent.fiev23-1.fna.fbcdn.net/v/t1.0-9/34319927_381165959060750_3422982299463974912_n.jpg?_nc_cat=105&_nc_ohc=i8v1I9oi76QAX_Oh6DC&_nc_ht=scontent.fiev23-1.fna&oh=8bd3a0c98f74768517d6ac084e9f1df8&oe=5EBB4AAF"
										alt={`user${name}`}
									/>
								</div>
							) : (
								<div className="wrapperImg">
									<img
										src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										alt={`user${name}`}
									/>
								</div>
							)}

							<h4>{name}</h4>
							<div className="linkMessage">
								<a href={link}>message</a>
							</div>
						</div>
					</InfoWindow>
				) : null}
			</Marker>
		</div>
	);
};

CustomMarker.propTypes = propTypes;
export default CustomMarker;
