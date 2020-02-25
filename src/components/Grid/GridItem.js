import React from 'react';
import './Grid.scss';

export const GridItem = ({ children, img }) => (
	<div style={{ backgroundImage: `url(${img})` }} className='grid-item'>
		{children}
	</div>
);

// backgroundImage passed @file where it is used with the background prop
//
