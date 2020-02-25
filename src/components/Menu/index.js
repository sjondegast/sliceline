import React from 'react';
import { foods } from '../../data/FoodData';
import styled from 'styled-components';
import { Food, FoodGrid } from './FoodGrid';

const MenuStyled = styled.div`
	margin: 0px 400px 50px 50px;
	height: 1000px;
`;

const Menu = () => (
	<MenuStyled>
		<FoodGrid>
			{foods.map(food => (
				<Food img={food.img}>{food.name}</Food>
			))}
		</FoodGrid>
	</MenuStyled>
);

export default Menu;
