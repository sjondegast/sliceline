import React from 'react';
import classNames from 'classnames';
import './Label.scss';

export const Label = ({ value, className }) => {
	let classes = classNames('label', className);
	return <div className={classes}>{value}</div>;
};

// const classNames = classes.map(name) => (classNames + ' ' + name);

// TODO refactor to take a value, string variable to render as the label.
// TODO props = ({ value }) then render the value instead of the children
// TODO classNames from props + the origional class(es)
// TODO write classes function, combine classes from project with default generic classes
