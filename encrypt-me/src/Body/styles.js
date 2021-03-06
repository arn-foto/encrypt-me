import styled from "styled-components";

const AppBody = styled.div`
	display: flex;
	flex-direction: row;
	overflow: hidden;
	overflow-y: hidden;
	overflow-x: hidden;
	background: url(https:images.unsplash.com/photo-1550684848-86a5d8727436?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
		no-repeat;
	background-attachment: fixed;
	background-size: cover;
	padding-left: 20px;
`;

const LinkBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	/* background-color: whitesmoke; */

	> a {
		display: flex;
		justify-content: center;
		font-size: 2em;
		color: black;
		text-decoration: none;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
		:hover {
			background-color: rgba(255, 255, 255, 0.15);
			backdrop-filter: blur(5px);
			cursor: pointer;
		}
	}
`;

export { AppBody, LinkBody };
