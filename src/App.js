import React from 'react';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
import Link from './components/Link/Link';
import { Heading, Text } from './components/Typography';
import Banner from './components/Banner/Banner';

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
			<Banner className='banner'>test</Banner>
			<Heading>Hello App</Heading>
			<Text>Hello SliceLine</Text>
		</React.Fragment>
	);
}

export default App;
