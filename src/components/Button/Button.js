import React from 'react';
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
const Button = ({ children, type = 'primary', size = 'm' }) => (
	<button className={`btn ${type} ${size}`}>{children}</button>
);

export default Button;
