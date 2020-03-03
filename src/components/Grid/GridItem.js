import React from 'react';
import './Grid.scss';

export const GridItem = ({ ...props }) => {
	const { children, handleEvent, content } = props;
	return (
		<div
			style={{ backgroundImage: `url(${content.img})` }}
			className='grid-item btn-hover'
			onClick={event => {
				handleEvent(event, content);
			}}
		>
			{children}
		</div>
	);
};

// backgroundImage passed @file where it is used with the background prop
//
