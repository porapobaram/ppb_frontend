import React from 'react';
import './ModalComponent.scss';

const ModalComponent = ({onClickHandler1, onClickHandler2}) => {
	return (
		<div className="modal_wrapper">
			<div className="modal_container">
				<h2>ALERT</h2>
				<p>You drunk</p>
				<div className="modal_buttons">
					<button onClick={onClickHandler1}>Continue?</button>
					<button onClick={onClickHandler2}>Continue!</button>
				</div>
			</div>
		</div>
	);
};

export default ModalComponent;
