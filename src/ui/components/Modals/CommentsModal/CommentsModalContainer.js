import React, { Component } from 'react';
import { CommentsModalComponent } from './CommentsModalComponent';
import { closeModal } from '../../../../reduxStore/modal/actions';
import { func } from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
	closeModal: func,
};

class CommentsModalContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	componentDidMount() {
		console.log('TestContainer did mount');
	}

	onClickHandler = () => {
		this.props.closeModal('CLOSE_MODAL');
	};

	render() {
		return <CommentsModalComponent comments={this.props.modalProps} onClickHandler={this.onClickHandler} />;
	}
}

CommentsModalContainer.propTypes = propTypes;

const mapDispatchToProps = {
	closeModal,
};

const mapStateToProps = ({ modalReducer }) => {
	return {
		modalProps: modalReducer.modalProps,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsModalContainer);
