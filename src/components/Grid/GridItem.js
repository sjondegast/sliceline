import React from 'react';
import './Grid.scss';

export const GridItem = ({ children, handleShowModal, content }) => (
	<div
		style={{ backgroundImage: `url(${content.img})` }}
		className='grid-item btn-hover'
		onClick={e => {
			handleShowModal(content);
		}}
	>
		{children}
	</div>
);

// backgroundImage passed @file where it is used with the background prop
//
