import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

export const Modal = ({ children, handleCloseModal }) => {
	return (
		<>
			<div className='modal' onClick={handleCloseModal}>
				{children}
			</div>
			<Backdrop />
		</>
	);
};

// TODO: close btn, z-index more then Modal and will be a icon component / btn #onHover modal show it!
// TODO: props: add icon inside <i className="fas fa-arrow-alt-circle-right">icon</i>
