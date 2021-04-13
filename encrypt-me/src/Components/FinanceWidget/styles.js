import styled from "styled-components";

const FinanceContainer = styled.div`
	background-color: whitesmoke;
	padding: 100px;
	margin: 100px;
	border: 1px solid black;
`;

const FinancePanels = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 225px auto auto;
	grid-template-rows: auto auto;
`;

const FinancePanelInfo = styled.div`
	grid-row: span 2;
`;

const FinancePanelPoistion = styled.div`
	grid-column: span 2;
`;

export {
	FinanceContainer,
	FinancePanels,
	FinancePanelInfo,
	FinancePanelPoistion,
};
