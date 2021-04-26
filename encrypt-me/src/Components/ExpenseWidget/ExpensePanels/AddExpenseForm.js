import React, { useContext, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { AddExpenseStyle } from "../styles";
import { GlobalButtonStyle } from "../../../Global-style/styles";
import firebase from "../../../firebase";
const AddExpenseForm = (props) => {
	// const { dispatch } = useContext(AppContext);

	const [name, setName] = useState("");
	const [cost, setCost] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		// const expense = {
		// 	id: uuidv4(),
		// 	name,
		// 	cost: parseInt(cost),
		// };

		// dispatch({
		// 	type: "ADD_EXPENSE",
		// 	payload: expense,
		// });
		firebase.firestore().collection("expenses").add({
			id: uuidv4(),
			name,
			cost,
		});

		setName("");
		setCost("");
	};

	return (
		<form onSubmit={onSubmit}>
			<AddExpenseStyle>
				<div>
					<label for="name">Add Expense</label>
					<input
						required="required"
						type="text"
						id="name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<label for="cost">Expense Cost</label>
					<input
						required="required"
						type="number"
						id="cost"
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
					<GlobalButtonStyle type="submit">Add</GlobalButtonStyle>
				</div>
			</AddExpenseStyle>
		</form>
	);
};

export default AddExpenseForm;
