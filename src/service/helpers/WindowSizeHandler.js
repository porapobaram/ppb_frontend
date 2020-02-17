import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OnlyMobileContainer from '../../ui/components/OnlyMobile';

const propTypes = {
	children: PropTypes.node,
};

class WindowSizeHandler extends Component {
	constructor(props) {
		super(props);
		this.state = { width: window.innerWidth };
	}

	render() {
		const { width } = this.state;
		const { children } = this.props;

		if (width >= 768) {
			return <OnlyMobileContainer />;
		}
		return <div>{children}</div>;
	}
}

WindowSizeHandler.propTypes = propTypes;

export default WindowSizeHandler;
