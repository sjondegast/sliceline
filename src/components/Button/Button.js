import React from 'react';
import classnames from 'classnames';
import './Button.scss';

/*
type: primary, disabled, secondary, link, reset, etc.
build className helper function, if type is not null and one of the options use it.

how to use is:

import Button from './components/Button/Button';

			<Button type='secondary' size='l'>
				btn component
			</Button>
*/
export const Button = ({ children, type = 'primary', size = 'm' }) => (
	<button className={`btn ${type} ${size}`}>{children}</button>
);

export const Button2 = ({ text, className, disabled = false }) => {
	let classes = classnames('btn', { className, disabled: disabled });
	return <button className={classes}>{text}</button>;
};

// TODO: use default for Button.js, import this button in SubmitButton and add Submit button class.
// TODO: all buttons should have a disabled prop (part of default props for all buttons.), switch off by passing the prop disabled to dynamicly turn off/on
// TODO: https://www.npmjs.com/package/classnames
