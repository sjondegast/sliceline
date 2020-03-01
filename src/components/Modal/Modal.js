import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
// import './Modal.scss';
import './Modal.scss';

// const Container = () => <div className='modal-container'></div>;

export const Modal = props => {
	return (
		<>
			<div className='Modal'>{props.children}</div>
			<Backdrop show={props.show} clicked={props.modalClosed} />
		</>
	);
};
