import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import Link from './components/Link/Link';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/';
import { Modal } from './components/Modal/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalToggle: false
		};
	}

	modalHandler = e => {
		e.preventDefault(); //i added this to prevent the default behavior
		this.setState({ modalToggle: true });
	};
	render() {
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
				{this.state.modalToggle ? (
					<Modal show={this.state.modalToggle}>
						<div>Hello Modal</div>
					</Modal>
				) : null}
			</React.Fragment>
		);
	}
}

export default App;
