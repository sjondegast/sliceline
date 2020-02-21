import React from 'react';
import { foods } from '../../data/FoodData';
import styled from 'styled-components';

const MenuStyled = styled.div`
	border: 2px solid black;
	margin: 0px 400px 50px 50px;
	height: 1000px;
`;

const Menu = () => (
	<MenuStyled>
		{foods.map(food => (
			<div>{food.name}</div>
		))}
	</MenuStyled>
);

export default Menu;
