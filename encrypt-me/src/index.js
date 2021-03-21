import React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import App from "./App";
import store from "./Redux-store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./Tests/serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
