import React, { Component } from 'react';
import { OnlyPortraitComponent } from './OnlyPortraitComponent';

class OnlyPortraitContainer extends Component {
	componentDidMount() {
		console.log('OnlyPortraitContainer did mount');
	}

	render() {
		return <OnlyPortraitComponent />;
	}
}

export { OnlyPortraitContainer };
