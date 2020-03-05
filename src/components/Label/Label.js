import React from 'react';
import classNames from 'classnames';
import './Label.scss';

export const Label = ({ value, classes }) => {
	let labelClassNames = classNames('label', classes);
	return <div className={labelClassNames}>{value}</div>;
};

// const classNames = classes.map(name) => (classNames + ' ' + name);

// TODO: refactor to take a value, string variable to render as the label.
// TODO: props = ({ value }) then render the value instead of the children
// TODO: classNames from props + the origional class(es)
// TODO: write classes function, combine classes from project with default generic classes
