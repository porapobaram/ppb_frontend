import React from 'react';
import './notFound.styles.scss';

const NotFoundComponent = () => {
	return (
		<div className="notfound-wrapper">
			<h1 className="notfound-title">404</h1>
			<p className="notfound-text">page not found</p>
		</div>
	);
};

export { NotFoundComponent };
