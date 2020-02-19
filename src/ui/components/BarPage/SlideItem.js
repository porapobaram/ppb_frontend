import React from 'react';

// eslint-disable-next-line react/prop-types
const SlideItem = ({ image }) => {
	const styles = {
		backgroundImage: `url(${image})`,
	};
	return <div className="slide-block" style={styles} />;
};

export default SlideItem;
