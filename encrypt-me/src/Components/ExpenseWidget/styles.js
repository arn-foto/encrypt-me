import styled from "styled-components";

const ExpenseContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
`;

const TopBudgetContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 40px;
	font-size: 2em;
`;

const AddExpenseStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 20px;
	margin: 20px;
`;

const ExpenseListStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	font-size: 1.5rem;
`;

export {
	ExpenseContainer,
	TopBudgetContainer,
	AddExpenseStyle,
	ExpenseListStyle,
};
