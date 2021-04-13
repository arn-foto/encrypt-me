import React from "react";
import AllocationPanel from "./AllocationPanel";
import InfoPanel from "./InfoPanel";
import PerformancePanel from "./PerformancePanel";
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
					<FinancePanelPoistion>
						<PerformancePanel />
						<AllocationPanel />
					</FinancePanelPoistion>
				</FinancePanels>
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
