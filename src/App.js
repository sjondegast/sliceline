import React from 'react';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
import Link from './components/Link/Link';

function App() {
	return (
		<React.Fragment>
			<Header className='header'>
				<Link className='navbar navbar-brand'>
					SliceLine{' '}
					<span role='img' aria-label='app logo'>
						🍕
					</span>
				</Link>
			</Header>
			<h1>Hello App</h1>
			<div>Hello SliceLine</div>
		</React.Fragment>
	);
}

export default App;
