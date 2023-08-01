import Profile from "../Components/Profile/Profile";
import React from "react";
import Report from "../Components/Report/Report";
import ReportData from "../ReportData";

const App = () => {
	return (
		<div className="app">
			<div className="app__container">
				<Profile />
				<Report ReportData={ReportData} />
			</div>
		</div>
	);
};

export default App;
