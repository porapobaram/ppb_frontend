import React, { Component } from 'react';
import OnlyMobileContainer from '../../ui/components/OnlyMobile';
import OnlyPortraitContainer from '../../ui/components/OnlyPortrait';

class WindowSizeHandler extends Component {
	constructor(props) {
		super(props);
		this.state = { width: window.innerWidth, height: window.innerHeight };
	}

	render() {
		console.log(window);
		if (this.state.width >= 768 && this.state.width < this.state.height) {
			return <OnlyMobileContainer />;
		}
		if (false) {
			return <OnlyPortraitContainer />;
		}
		return <div>{this.props.children}</div>;
	}
}

export default WindowSizeHandler;
