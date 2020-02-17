import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Link from './components/Link/Link';

function App() {
	return (
		<React.Fragment>
			<Navbar>
				<Link className='navbar navbar-link'>Hello Navbar</Link>
			</Navbar>
			<h1>Hello App</h1>
			<div>Hello SliceLine</div>
		</React.Fragment>
	);
}

export default App;
