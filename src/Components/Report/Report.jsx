import Card from "../Card/Card";
import React from "react";

const Report = ({ ReportData }) => {
	// console.log(ReportData);
	return (
		<div className="report__container">
			{ReportData.map((report, index) => {
				return <Card key={index} report={report} />;
			})}
		</div>
	);
};

export default Report;
