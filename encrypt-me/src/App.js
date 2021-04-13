import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<Header />
			<BodyContainer>
				<Body />
			</BodyContainer>
			<Footer />
		</div>
	);
}

export default App;

const BodyContainer = styled.div`
	display: flex;
`;
