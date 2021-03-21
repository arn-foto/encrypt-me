import styled from "styled-components";

const AppBody = styled.div`
	display: flex;
	justify-content: center;
	background-color: lightgray;
`;

const LinkBody = styled.div`
	display: flex;
	justify-content: space-evenly;

	> a {
		font-size: 2em;
		color: red;
		text-decoration: none;
	}
`;

export { AppBody, LinkBody };
