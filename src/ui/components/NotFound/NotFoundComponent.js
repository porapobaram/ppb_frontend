import React from 'react';

const NotFoundComponent = () => {
	return (
		<div className="notfound-wrapper">
			<div className="notfound-container">
				<div className="notfound-text-wrapper">
					<h1 className="notfound-title">404</h1>
					<p className="notfound-text">page not found</p>
				</div>
			</div>
			<div className="wave-container" />
		</div>
	);
};

export { NotFoundComponent };
