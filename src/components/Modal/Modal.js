import React from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop/Backdrop';
// import './Modal.scss';
import './Modal.scss';

// const Container = () => <div className='modal-container'></div>;

const DialogBanner = styled.div`
	min-height: 200px;
	margin-bottom: 20px;
`;

export const Modal = ({ children, openFood }) => {
	return (
		<>
			<div className='modal'>
				<DialogBanner
					style={{ backgroundImage: `url(${openFood.backgroundImage})` }}
				/>
				{children}
			</div>
			<Backdrop />
		</>
	);
};
