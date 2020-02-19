import React, { Component } from 'react';
import { FooterComponent } from './FooterComponent';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const propTypes = {
	path: string,
};

// eslint-disable-next-line react/prefer-stateless-function
class FooterContainer extends Component {
	render() {
		const { path } = this.props;
		return path !== '/barPage' ? <FooterComponent /> : null;
	}
}

const mapStateToProps = state => {
	return {
		path: state.router.location.pathname,
	};
};
FooterContainer.propTypes = propTypes;

export default connect(mapStateToProps, null)(FooterContainer);
