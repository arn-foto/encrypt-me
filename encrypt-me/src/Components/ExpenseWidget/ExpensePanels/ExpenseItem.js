import React, { useState, useEffect, useContext } from "react";
import { TiDelete } from "react-icons/ti";
// import { AppContext } from "../../../Context/AppContext";
import { ExpenseListStyle } from "../styles";
import firebase from "../../../firebase";

function ExpenseItem() {
	const [expenseList, setExpenselist] = useState([]);
	// // const { dispatch } = useContext(AppContext);

	// const handleDeleteExpense = () => {
	// 	dispatch({
	// 		type: "DELETE_EXPENSE",
	// 		payload: props.id,
	// 	});

	useEffect(() => {
		firebase
			.firestore()
			.collection("expenses")
			.onSnapshot((snapshot) => {
				const expenseList = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setExpenselist(expenseList);
			});
	}, []);

	return expenseList;
}

const ExpenseLine = () => {
	const expenseList = ExpenseItem();

	const handleOnDelete = (id) => {
		firebase.firestore().collection("expenses").doc(id).delete();
	};

	return (
		<ExpenseListStyle>
			{expenseList.map((expenseList) => {
				return (
					<div>
						{" "}
						<div>${expenseList.cost}</div>
						{expenseList.name}
						<TiDelete
							size="1.5em"
							onClick={() => handleOnDelete(expenseList.id)}
						/>
					</div>
				);
			})}
		</ExpenseListStyle>
	);
};

export default ExpenseLine;
