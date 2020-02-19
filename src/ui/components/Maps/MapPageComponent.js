import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './mapPageComponent.scss';
import CustomMarker from './CustomMarker';
import { GOOGLE_API_KEY } from '../../../config';

class MapPageComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			position: {},
		};
	}

	componentDidMount() {
		this.setState(
			{
				isLoading: true,
			},
			() => {
				console.log(this.state);
				navigator.geolocation.getCurrentPosition(currentPos => {
					this.setState(
						{
							position: {
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
	}

	render() {
		return (
			<div>
				<LoadScript id="script-loader" googleMapsApiKey={GOOGLE_API_KEY}>
					{!this.state.isLoading ? (
						<GoogleMap
							id="example-app"
							mapContainerStyle={{
								height: '800px',
								width: '375px',
							}}
							zoom={8}
							center={this.state.position}
						>
							<CustomMarker position={this.state.position} info="my location" />
						</GoogleMap>
					) : null}
				</LoadScript>
			</div>
		);
	}
}

export default MapPageComponent;
