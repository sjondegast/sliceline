import React from 'react';
import Header from './components/Header/Header';
import Link from './components/Link/Link';
import { Heading, Text } from './components/Typography';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/';

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
			<Banner
				background={
					'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
				}
				classNames='banner'
			/>
			<Menu />
			<Heading>Hello App</Heading>
			<Text>Hello SliceLine</Text>
		</React.Fragment>
	);
}

export default App;
