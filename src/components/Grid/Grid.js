import React from 'react';
import './Grid.scss';

export const Grid = ({ children, columns, gap }) => (
	<div className='grid-container'>{children}</div>
);

// TODO: implement ABEM naming convention for className(s)
// SCSS
// container, item
// box?
// cols, gap, use percentage for resonsiveness
