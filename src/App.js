import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import Link from './components/Link/Link';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/';
import { Modal } from './components/Modal';
import { Label } from './components/Label';
import { Aside } from './components/Aside';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalContent: undefined
		};
	}

	// refactor code show and close modal to only take the content, if there is any show the modal.
	// refactor code to use prevState and currentState if they match don't update the state and don't set is directly!
	handleShowModal = (event, content) => {
		event.preventDefault();
		this.setState(() => ({ modalActive: true, modalContent: content }));
	};

	handleCloseModal = e => {
		this.setState(() => ({ modalActive: false, modalContent: undefined }));
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
				<Aside className='test' />
				<Menu handleShowModal={this.handleShowModal} />
				{this.state.modalContent ? (
					<Modal handleCloseModal={this.handleCloseModal}>
						<Banner
							background={this.state.modalContent.img}
							classNames='banner'
						>
							<Label
								className='a-modalBanner__label'
								value={this.state.modalContent.name}
							/>
						</Banner>
					</Modal>
				) : null}
			</React.Fragment>
		);
	}
}

export default App;
