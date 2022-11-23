import { RdsLabel, RdsCheckbox } from "../rds-elements";

export interface RdsCompOtherSettingsProps {}

const RdsCompOtherSettings = (props: RdsCompOtherSettingsProps) => {
	return (
		<ul className="ps-0 pt-4 list-unstyled">
			<div className="fw-medium mb-3">
				<RdsLabel label="Quick Theme Selection"></RdsLabel>
			</div>
			<li>
				<div className="form-group mb-3">
					<RdsCheckbox
						label={"Is Quick Theme Select Enabled"}
						checked={false}
					></RdsCheckbox>
				</div>
			</li>
		</ul>
	);
};

export default RdsCompOtherSettings;
