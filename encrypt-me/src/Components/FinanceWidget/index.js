import React from "react";
import BudgetPanel from "./Panels/BudgetPanel";
import ExpenseTotalPanel from "./Panels/ExpenseTotalPanel";
import RemainingPanel from "./Panels/RemainingPanel";

import { FinanceContainer } from "./styles";

function FinanceWidget() {
	return (
		<div>
			<h2>Finances.</h2>
			<FinanceContainer>
				<BudgetPanel />
				<ExpenseTotalPanel />
				<RemainingPanel />
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
