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
			modalActive: false,
			modalContent: undefined
		};
	}

	handleShowModal = e => {
		console.log(e);
		this.setState(() => ({ modalActive: true, modalContent: e }));
	};

	handleCloseModal = e => {
		this.setState({ modalActive: false });
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
				<Menu handleShowModal={this.handleShowModal} />
				{this.state.modalActive ? (
					<Modal handleCloseModal={this.handleCloseModal}>
						<div>{this.state.modalContent.name}</div>
					</Modal>
				) : null}
			</React.Fragment>
		);
	}
}

export default App;
