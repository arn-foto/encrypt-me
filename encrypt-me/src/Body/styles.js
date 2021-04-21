import styled from "styled-components";

const AppBody = styled.div`
	display: flex;
	flex-direction: row;
	background-color: lightcyan;
	background: url(https:images.unsplash.com/photo-1470217407524-b1e77afc6ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80)
		no-repeat;
	background-attachment: fixed;
	background-size: cover;
`;

const LinkBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: whitesmoke;

	> a {
		font-size: 2em;
		color: black;
		text-decoration: none;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
		:hover {
			opacity: 0.9;
			background-color: white;
			cursor: pointer;
		}
	}
`;

export { AppBody, LinkBody };
