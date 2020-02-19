import React from 'react';

const Link = ({ href, name }) => <a href={href}>{name}</a>;

const ListItem = () => <li></li>;

// ordered prop boolean value, true or false
// call a function that returns <ol></ol> || <ul></ul>
const List = ({ ordered }) => (ordered ? <ol></ol> : <ul></ul>);

const Nav = () => <nav></nav>;

export default Nav;
