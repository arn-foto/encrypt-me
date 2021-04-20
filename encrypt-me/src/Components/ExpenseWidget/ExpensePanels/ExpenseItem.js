import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../../../Context/AppContext";

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: props.id,
		});
	};

	return (
		<li>
			{props.name}
			<div>
				<span>${props.cost}</span>
				<TiDelete size="1.5em" onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;
