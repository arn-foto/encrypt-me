import React from "react";
import LoginContainer from "./styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	// redux
	const dispatch = useDispatch();

	const register = () => {
		if (!name) {
			alert("Please enter a full name!");
		}
		// these are keys that refer to firebase
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};

	const logIntoApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
					})
				);
			})
			.catch((error) => alert(error));
	};

	return (
		<div>
			<LoginContainer>
				<form>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Name (required if registering)"
						type="text"
					/>

					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						type="text"
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						type="password"
					/>

					<button type="submit" onClick={logIntoApp}>
						Sign In
					</button>
				</form>
				<p>
					Not a member?{" "}
					<span className="login__register" onClick={register}>
						Register Now
					</span>
				</p>
			</LoginContainer>
		</div>
	);
};

export default Login;
