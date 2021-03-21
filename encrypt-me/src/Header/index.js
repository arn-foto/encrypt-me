import React from "react";
import { HeaderContainer, HeaderLeft } from "../Header/styles";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<HeaderLeft>
					{" "}
					<h1>Welcome back, Anthony</h1>
				</HeaderLeft>
			</HeaderContainer>
		</div>
	);
}

export default Header;
