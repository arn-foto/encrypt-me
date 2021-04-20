import React from "react";
import AddExpenseForm from "./ExpensePanels/AddExpenseForm";
import Budget from "./ExpensePanels/Budget";
import ExpenseList from "./ExpensePanels/ExpenseList";
import RemainingBudget from "./ExpensePanels/RemainingTotal";

import { ExpenseContainer } from "./styles";

function FinanceWidget() {
	return (
		<div>
			<h2>Expenses</h2>
			<ExpenseContainer>
				<AddExpenseForm />
				<Budget />
				<RemainingBudget />
				<ExpenseList />
			</ExpenseContainer>
		</div>
	);
}

export default FinanceWidget;
