import React from 'react';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
import Link from './components/Link/Link';
import { Heading, Text } from './components/Typography';
import Banner from './components/Banner/Banner';
// import Image from './components/Image/Image';

function App() {
	const banner_background =
		'https://images.unsplash.com/photo-1532768778661-1b347c5f02ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
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
			<Banner background={banner_background} classNames='banner' />
			<Heading>Hello App</Heading>
			<Text>Hello SliceLine</Text>
		</React.Fragment>
	);
}

export default App;
