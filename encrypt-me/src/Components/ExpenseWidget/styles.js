import styled from "styled-components";

const ExpenseContainer = styled.div`
	display: flex;

	flex-direction: column;
`;

const TopBudgetContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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
	justify-content: space-between;
	padding: 10px;
	font-size: 1.5rem;
	font-weight: bold;
`;

const ExpenseSearchStyle = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const DeleteStyle = styled.div`
	:hover {
		opacity: 0.9;
		background-color: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(5px);
	}
`;

export {
	DeleteStyle,
	ExpenseContainer,
	TopBudgetContainer,
	AddExpenseStyle,
	ExpenseListStyle,
	ExpenseSearchStyle,
};
