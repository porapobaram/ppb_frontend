import React from 'react';
import './FeedComponent.scss';
import FeedItemContainer from './FeedItem';

const FeedComponent = ({ allNews }) => {
	return (
		<>
			<div className="container">
				{allNews &&
					allNews.map((item, index) => <FeedItemContainer index={index} newsItem={item} key={item._id} />)}
			</div>
		</>
	);
};

export default FeedComponent;
