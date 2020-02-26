import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const propTypes = {
	path: string,
};

// eslint-disable-next-line react/prefer-stateless-function
class HeaderContainer extends Component {
	render() {
		const { path } = this.props;
		return path !== '/barPage' ? <HeaderComponent /> : null;
	}
}

const mapStateToProps = state => {
	return {
		path: state.router.location.pathname,
	};
};
HeaderContainer.propTypes = propTypes;

export default connect(mapStateToProps, null)(HeaderContainer);