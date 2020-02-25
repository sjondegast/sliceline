import React from 'react';
import './Grid.scss';

const Grid = ({ className }) => {
	let classNames = `grid ${className}`;
	return <div className={classNames}>test</div>;
};

export default Grid;

// container, item, box
