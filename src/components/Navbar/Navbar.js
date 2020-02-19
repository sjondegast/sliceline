import React from 'react';
import './Navbar.scss';
import List from '../List/List';

const Navbar = ({ children }) => <List>{children}</List>;

export default Navbar;

/*
A navigation bar is basically a list of links, so using the <ul> and <li> elements makes perfect sense
*/
