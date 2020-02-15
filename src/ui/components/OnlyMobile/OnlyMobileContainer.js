import React, { Component } from 'react';
import { OnlyMobileComponent } from './OnlyMobileComponent';

class OnlyMobileContainer extends Component {
	componentDidMount() {
		console.log('OnlyMobileContainer did mount');
	}

	render() {
		return <OnlyMobileComponent />;
	}
}

export { OnlyMobileContainer };
