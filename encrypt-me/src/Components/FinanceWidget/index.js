import React from "react";
import { FinanceContainer, FinancePanels } from "./styles";

function FinanceWidget() {
	return (
		<div>
			<FinanceContainer>
				<h1>Finance.</h1>
				<FinancePanels>
					<h1>panels</h1>
				</FinancePanels>
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
