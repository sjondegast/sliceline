import React from 'react';
import classNames from 'classnames';
import './Aside.scss';

export const Aside = ({ className, children }) => {
	let classes = classNames('aside', { className: false });
	return <div className={classes}>{children}</div>;
};
