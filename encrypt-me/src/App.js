import React, { useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { selectUser, login, logout } from "../src/Redux-features/features";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
				// user is logged in
			} else {
				dispatch(logout());
				// user is logged out
			}
		});
	}, []);

	return (
		<div className="App">
			{!user ? (
				<Login />
			) : (
				<div>
					<Header />
					<Body />
					<Footer />
				</div>
			)}
		</div>
	);
}

export default App;
