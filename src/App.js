import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import Link from './components/Link/Link';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/';
// import { Modal } from './components/Modal/index';
import FoodDialog from './components/FoodDialog';

function App() {
	// openFood is the variable name "identifier" and set is the handler (setters and getters)
	const [openFood, setOpenFood] = useState();

	// modalHandler = e => {
	// 	e.preventDefault(); //i added this to prevent the default behavior
	// 	this.setState({ modalToggle: true });
	// };
	return (
		<React.Fragment>
			<FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
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
			<Menu setOpenFood={setOpenFood} />
		</React.Fragment>
	);
}

export default App;
