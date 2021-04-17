import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { AppProvider } from "./Context/AppContext";

const App = () => {
	return (
		<AppProvider>
			{" "}
			<div className="App">
				<Header />
				<Body />
				<Footer />
			</div>
		</AppProvider>
	);
};

export default App;
