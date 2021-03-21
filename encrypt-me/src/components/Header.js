import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<h1>Welcome back, Anthony</h1>
			</HeaderContainer>
		</div>
	);
}

export default Header;

const HeaderContainer = styled.div`
	background-color: grey;
`;
