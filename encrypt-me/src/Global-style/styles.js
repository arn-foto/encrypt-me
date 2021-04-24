import styled from "styled-components";

// this is the main container that holds all of the components.
// This is so I don't have to repeat the same code in other folders.
// One stop shop!

const GlobalContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
	box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
	padding: 20px;
	margin: 20px;
	width: 160vh;
	height: 100vh;
`;

export { GlobalContainer };
