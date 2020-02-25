import React from 'react';
import './commentsItem.styles.scss';

const CommentsModalItem = ({ item }) => {
	const { userName, userComment } = item;
	return (
		<div className="modalItem-container">
			<h2>{userName}</h2>
			<p>{userComment}</p>
		</div>
	);
};

export default CommentsModalItem;
