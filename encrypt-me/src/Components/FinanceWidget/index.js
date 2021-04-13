import React from "react";
import AllocationPanel from "../FinanceWidget/Panels/AllocationPanel";
import InfoPanel from "../FinanceWidget/Panels/InfoPanel";
import PerformancePanel from "../FinanceWidget/Panels/PerformancePanel";
import PositionsPanel from "./Panels/PositionsPanel";
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
						{" "}
						<PerformancePanel />
						<AllocationPanel />
						<PositionsPanel />
					</FinancePanelPoistion>
				</FinancePanels>
			</FinanceContainer>
		</div>
	);
}

export default FinanceWidget;
