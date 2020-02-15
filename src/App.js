import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`;

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<div>Hello SliceLine</div>
		</React.Fragment>
	);
}

export default App;
