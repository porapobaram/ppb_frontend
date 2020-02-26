import React from 'react';
import CommentsModalItem from './CommentsModalItem';
import './comments.styles.scss';
import { func, arr } from 'prop-types';

const propTypes = {
	onClickHandler: func,
	comments: arr,
};

const CommentsModalComponent = ({ onClickHandler, comments }) => {
	console.log(comments);
	return (
		<div className="modal-wrapper">
			<div className="modal-header">
				<p className="modal-title">Комментарии</p>
				<div className="closed-btn-wrapper">
					<div className="closed-btn" onClick={onClickHandler} />
				</div>
			</div>
			<div className="modal-container">
				{comments && comments.map(item => <CommentsModalItem item={item} key={item.userId} />)}
			</div>
			<form className="modal-form">
				<input className="modal-input" type="text" label="label" />
				{/* <div className="add-btn" /> */}
				{/* <button className="add-btn" type="submit">
					Add
				</button> */}
			</form>
		</div>
	);
};

CommentsModalComponent.propTypes = propTypes;

export { CommentsModalComponent };
