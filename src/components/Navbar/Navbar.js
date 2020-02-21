import React from 'react';
import './Navbar.scss';

export const Navbar = ({ children, className }) => (
	<div className={className}>{children}</div>
);

/*
A navigation bar is basically a list of links, so using the <ul> and <li> elements makes perfect sense
*/
