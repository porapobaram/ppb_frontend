// import React from 'react';
// import CommentsModalItem from './CommentsModalItem';
// import './comments.styles.scss';
// import { func, arr } from 'prop-types';
// import { data } from './data';

// const propTypes = {
// 	onClickHandler: func,
// 	comments: arr,
// };

// const CommentsModalComponent = ({ onClickHandler, comments }) => {
// 	console.log(comments);
// 	return (
// 		<div className="modal-wrapper">
// 			<div className="modal-header">
// 				<p className="modal-title">Комментарии</p>
// 				<div className="closed-btn-wrapper">
// 					<div className="closed-btn" onClick={onClickHandler} />
// 				</div>
// 			</div>
// 			<div className="modal-container">
// 				{data && data.map(item => <CommentsModalItem item={item} key={item.userId} />)}
// 			</div>
// 			<form className="modal-form">
// 				{/* <input className="modal-input" type="text" label="label" /> */}
// 				<textarea rows="3" className="modal-input" placeholder="Оставить комментарий..." />
// 				<button className="add-btn" type="button">
// 					Добавить
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// CommentsModalComponent.propTypes = propTypes;

// export { CommentsModalComponent };

import React from 'react';
import CommentsModalItem from './CommentsModalItem';
import './comments.styles.scss';
import { func, arr } from 'prop-types';
import { data } from './data';

const propTypes = {
	onClickHandler: func,
	comments: arr,
};

const CommentsModalComponent = ({ onClickHandler, comments }) => {
	console.log(comments);
	return (
		<div className="commentsModal-wrapper">
			<div className="commentsModal-container">
				<div className="commentsModal-header">
					<p className="commentsModal-header-title">Комментарии</p>
					<div className="commentsModal-closed-btn-wrapper">
						<div className="commentsModal-closed-btn" onClick={onClickHandler} />
					</div>
				</div>
				<div className="commentsModalItem-wrapper">
					{data && data.map(item => <CommentsModalItem item={item} key={item.userId} />)}
				</div>
				<form className="commentsModal-form">
					{/* <input className="modal-input" type="text" label="label" /> */}
					<textarea rows="3" className="commentsModal-textarea" placeholder="Оставить комментарий..." />
					<button className="commentsModal-add-btn" type="button">
						<span>+</span>
					</button>
				</form>
			</div>
		</div>
	);
};

CommentsModalComponent.propTypes = propTypes;

export { CommentsModalComponent };
