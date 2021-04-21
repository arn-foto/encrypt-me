import React from "react";
import AddExpenseForm from "./ExpensePanels/AddExpenseForm";
import Budget from "./ExpensePanels/Budget";
import ExpenseList from "./ExpensePanels/ExpenseList";
import ExpenseTotal from "./ExpensePanels/ExpenseTotal";
import RemainingBudget from "./ExpensePanels/RemainingTotal";

import { GlobalContainer } from "../../Global-style/styles";
import { ExpenseContainer } from "./styles";

function FinanceWidget() {
	return (
		<div>
			<h2>Expenses</h2>
			<GlobalContainer>
				<ExpenseContainer>
					{" "}
					<AddExpenseForm />
					<Budget />
					<RemainingBudget />
					<ExpenseTotal />
					<ExpenseList />
				</ExpenseContainer>
			</GlobalContainer>
		</div>
	);
}

export default FinanceWidget;
