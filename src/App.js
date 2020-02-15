import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
		</React.Fragment>
	);
}

export default App;
