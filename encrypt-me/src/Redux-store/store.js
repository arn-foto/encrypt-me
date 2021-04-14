import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux-features/features";

export default configureStore({
	reducer: {
		user: userReducer,
	},
});
