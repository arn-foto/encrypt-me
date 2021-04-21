import styled from "styled-components";

const AppBody = styled.div`
	display: flex;
	flex-direction: row;
	background-color: lightcyan;
	background: url(https:images.unsplash.com/photo-1544306094-e2dcf9479da3)
		no-repeat;
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
