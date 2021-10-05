import React from "react";

import LoadingStyle from "./Loading.module.css";

export const Loading = (props) => {
	return (
		<div className={`${LoadingStyle.wrapper} ${props.className ?? ""}`}>
			<div className={LoadingStyle.loading}></div>
		</div>
	);
};
