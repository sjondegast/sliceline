import React from 'react';
import './Header.scss';

const Header = ({ children, className }) => (
	<header className={className}>{children}</header>
);

export default Header;

// TODO: make a few variations of Header component, header fixed etc. or use scss to give it a className
