import React from 'react';
import styled from 'styled-components';
import './Modal.scss';

export const Box = styled.div`
	height: 10000px;
`;

export const ModalContent = () => (
	<div className='modalContent'>
		<Box></Box>
	</div>
);
