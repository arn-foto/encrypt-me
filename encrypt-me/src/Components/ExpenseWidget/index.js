import React from "react";
import AddExpenseForm from "./ExpensePanels/AddExpenseForm";
import Budget from "./ExpensePanels/Budget";
import ExpenseList from "./ExpensePanels/ExpenseList";
import ExpenseTotal from "./ExpensePanels/ExpenseTotal";
import RemainingBudget from "./ExpensePanels/RemainingTotal";
import { GlobalContainer } from "../../Global-style/styles";
import {
	AddExpenseStyle,
	ExpenseContainer,
	TopBudgetContainer,
} from "./styles";

function FinanceWidget() {
	return (
		<div>
			<h2>Expenses</h2>
			<GlobalContainer>
				<TopBudgetContainer>
					<RemainingBudget />
					<ExpenseTotal />
					<Budget />
				</TopBudgetContainer>

				<ExpenseContainer>
					<AddExpenseForm />

					<ExpenseList />
				</ExpenseContainer>
			</GlobalContainer>
		</div>
	);
}

export default FinanceWidget;
