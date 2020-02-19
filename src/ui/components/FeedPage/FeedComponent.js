import React from 'react';
import './FeedComponent.scss';
import FeedItem from './FeedItem';

const FeedComponent = ({ allNews }) => {
	return (
		<>
			<div className="container">
				{allNews && allNews.map((item, index) => (
					<FeedItem index={index} newsItem={item} key={item._id} />
				))}
			</div>
		</>
	);
};

export default FeedComponent;
