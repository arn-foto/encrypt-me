import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../../../Context/AppContext";
import { ExpenseListStyle } from "../styles";

function ExpenseItem(props) {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: props.id,
		});
	};

	return (
		<ExpenseListStyle>
			<div>${props.cost}</div> {props.name}
			<TiDelete size="1.5em" onClick={handleDeleteExpense} />
		</ExpenseListStyle>
	);
}

export default ExpenseItem;
