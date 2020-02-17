import React from 'react';
import './Link.scss';

// TODO: className via props

const Link = ({ href = '/', children = 'link', className }) => (
	<a className={className} href={`${href}`}>
		{children}
	</a>
);

export default Link;
