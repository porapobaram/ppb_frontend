import React, { Component } from 'react';
import { NotFoundComponent } from './NotFoundComponent';

class NotFoundContainer extends Component {
	componentDidMount() {
		console.log('NotFoundContainer did mount');
	}

	render() {
		return <NotFoundComponent />;
	}
}

export { NotFoundContainer };
