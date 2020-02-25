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
				<button type="button" onClick={onClickHandler}>
					Close
				</button>
				<p>Комментарии</p>
			</div>
			<div className="modalItem-wrapper">
				{comments && comments.map(item => <CommentsModalItem item={item} key={item.userId} />)}
			</div>
		</div>
	);
};

CommentsModalComponent.propTypes = propTypes;

export { CommentsModalComponent };
