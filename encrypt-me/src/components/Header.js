import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<div>
			<HeaderBody>
				<h1>Header.</h1>
			</HeaderBody>
		</div>
	);
}

export default Header;

const HeaderBody = styled.div`
	background-color: red;
`;
