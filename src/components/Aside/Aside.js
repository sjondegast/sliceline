import React from 'react';
import classNames from 'classnames';
import './Aside.scss';

export const Aside = ({ className }) => {
	let classes = classNames('aside', className);
	return <div className={classes}>aside</div>;
};
