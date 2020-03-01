import React from 'react';
import { Navbar } from './components/Navbar';
import Link from './components/Link/Link';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/';
import { Modal } from './components/Modal/index';

function App() {
	return (
		<React.Fragment>
			<Navbar className='navbar'>
				<Link className='navbar navbar-brand'>
					SliceLine{' '}
					<span role='img' aria-label='app logo'>
						🍕
					</span>
				</Link>
			</Navbar>
			<Banner
				background={
					'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
				}
				classNames='banner'
			/>
			<Menu />
			<Modal show='false'>
				<div>Hello Modal</div>
			</Modal>
		</React.Fragment>
	);
}

export default App;
