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
		color: black;
		text-decoration: none;
		border: 2px solid black;
		border-radius: 10px;
		:hover {
			opacity: 0.9;
			background-color: whitesmoke;
		}
	}
`;

export { AppBody, LinkBody };
