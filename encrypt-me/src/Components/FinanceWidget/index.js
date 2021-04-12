import React from "react";
import { FinanceContainer, FinancePanels, FinancePanelInfo } from "./styles";

function FinanceWidget() {
	return (
		<div>
			<FinanceContainer>
				<h1>Finance.</h1>
				<FinancePanels>
					<h1>panels</h1>
					<FinancePanelInfo>
						<h1>panel info</h1>
					</FinancePanelInfo>
				</FinancePanels>
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
