import React, { useState } from 'react';
// import { Backdrop } from '../Backdrop';
import './Modal.module.scss';

export const Modal = props => {
	const { children, show } = props;

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	const setInitialState = show => setModal(!modal);
	setInitialState();

	return (
		<>
			{show ? (
				<div className='modal' onClick={toggle}>
					{children}
				</div>
			) : null}
		</>
	);
};

// TODO: close btn, z-index more then Modal and will be a icon component / btn #onHover modal show it!
// TODO: props: add icon inside <i className="fas fa-arrow-alt-circle-right">icon</i>
