import React from 'react';
import { foods } from '../../data/FoodData';
import styled from 'styled-components';
// import { Food, FoodGrid } from './FoodGrid';
import { Grid, GridItem } from '../Grid/index';
import { Heading } from '../Typography';
import { Label } from '../Label/index';

const MenuStyled = styled.div`
	margin: 0px 400px 50px 50px;
	height: 1000px;
`;

// TODO: Make MenuStyled a Container component, or Build a Generic container component
// Container component is used to wrap components, generic css attributes for a container component?

const Menu = ({ handleShowModal }) => (
	<MenuStyled>
		{Object.entries(foods).map(([SectionName, foods]) => (
			<>
				<Heading title={SectionName} />
				<Grid>
					{foods.map(food => (
						<GridItem handleEvent={handleShowModal} content={food}>
							<Label className='a-gridItem__label' value={food.name} />
						</GridItem>
					))}
				</Grid>
			</>
		))}
	</MenuStyled>
);

export default Menu;

// added <> and </> because there should always be one parent component
