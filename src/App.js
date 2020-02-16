import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
  }
`;

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<h1>Hello App</h1>
			<div>Hello SliceLine</div>
			<Navbar />
		</React.Fragment>
	);
}

export default App;
