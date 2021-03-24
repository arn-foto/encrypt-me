import styled from "styled-components";

const AppBody = styled.div`
	display: flex;
	justify-content: center;
`;

const LinkBody = styled.div`
	display: flex;
	justify-content: space-evenly;

	> a {
		font-size: 2em;
		color: black;
		text-decoration: none;
		border: 2px solid whitesmoke;
		border-radius: 10px;
		box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
		:hover {
			opacity: 0.9;
			background-color: whitesmoke;
			cursor: pointer;
		}
	}
`;

export { AppBody, LinkBody };
