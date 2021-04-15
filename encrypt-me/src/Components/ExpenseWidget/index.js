import React from "react";
import AddExpenseForm from "./ExpensePanels/AddExpenseForm";

import { ExpenseContainer } from "./styles";

function FinanceWidget() {
	return (
		<div>
			<h2>Expenses</h2>
			<ExpenseContainer>
				<AddExpenseForm />
			</ExpenseContainer>
		</div>
	);
}

export default FinanceWidget;
