import React from 'react';
import './Link.scss';

// TODO: className via props
// TODO: @readme usage with react-router import link as routerlink from 'react-router-dom'

const Link = ({ href = '/', children = 'link', className }) => (
	<a className={className} href={`${href}`}>
		{children}
	</a>
);

export default Link;
