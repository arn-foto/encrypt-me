import React from "react";
import { HeaderContainer, HeaderLeft } from "../Header/styles";

var user = "Anthony";

function Header() {
	return (
		<div>
			<HeaderContainer>
				<HeaderLeft>
					<h1>Welcome back, {user}</h1>
				</HeaderLeft>
			</HeaderContainer>
		</div>
	);
}

export default Header;
