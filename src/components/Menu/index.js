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

// TODO: Make MenuStyled a Container component

const Menu = () => (
	<MenuStyled>
		<Heading title='menu' />
		<Grid>
			{foods.map(food => (
				<GridItem img={food.img}>
					<Label>{food.name}</Label>
				</GridItem>
			))}
		</Grid>
	</MenuStyled>
);

export default Menu;
