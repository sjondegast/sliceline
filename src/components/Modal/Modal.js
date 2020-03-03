import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
// import './Modal.scss';
import './Modal.scss';

// const Container = () => <div className='modal-container'></div>;

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
