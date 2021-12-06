import classNames from "classnames";
import React, { memo } from "react";

import { Link } from "react-router-dom";

import LogoStyle from "./Logo.module.css";

const Logo = memo(({ className, alt, src }) => {
	return (
		<Link className={classNames(LogoStyle.logo, className)} to="/">
			<img className={LogoStyle.image} src={src ?? ""} alt={alt ?? ""} />
		</Link>
	);
});

export { Logo };
