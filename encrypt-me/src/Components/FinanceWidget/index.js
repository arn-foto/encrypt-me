import React from "react";
import {
	FinanceContainer,
	FinancePanels,
	FinancePanelInfo,
	FinancePanelPoistion,
} from "./styles";

function FinanceWidget() {
	return (
		<div>
			<FinanceContainer>
				<FinancePanels>
					<FinancePanelInfo></FinancePanelInfo>
					<FinancePanelPoistion></FinancePanelPoistion>
				</FinancePanels>
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
