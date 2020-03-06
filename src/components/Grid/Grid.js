import React from 'react';
import './Grid.scss';

export const Grid = ({ children, columns, rows, gap }) => (
	<div className='grid-container'>{children}</div>
);

// TODO: use grid container instead of a div, so component Grid returns the Container with className Grid
// Use SCSS mixins and other SCSS, SASS functions to manipulate the styling for Grids etc.
// A Grid can render different types of components, like a li ? so the Grid/container can also be a ul or ol
// dynamic import
// use default values, the component must work on it's own...?!

// TODO: implement ABEM naming convention for className(s)
// SCSS
// container, item
// box?
// cols, gap, use percentage for resonsiveness
