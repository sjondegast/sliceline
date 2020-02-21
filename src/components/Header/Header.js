import React from 'react';
import './Header.scss';

const Header = ({ children, className }) => (
	<header className={className}>{children}</header>
);

export default Header;
