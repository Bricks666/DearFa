import React from "react";

import { Link } from "react-router-dom";

import FullNameStyle from "./FullName.module.css";

export const FullName = (props) => {
	return (
		<Link
			className={`${FullNameStyle.link} ${props.className ?? ""}`}
			to={`/profile/${props.id}`}
		>
			<h4 className={FullNameStyle.name}>{props.fullName}</h4>
		</Link>
	);
};
