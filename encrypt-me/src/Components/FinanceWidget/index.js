import React from "react";
import InfoPanel from "./InfoPanel";
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
					<FinancePanelInfo>
						<InfoPanel />
					</FinancePanelInfo>
					<FinancePanelPoistion></FinancePanelPoistion>
				</FinancePanels>
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
