import React, { memo } from "react";

import { parseDate } from "./ParseDate";

export const Date = memo(({ date, className, children }) => {
	return (
		<time className={className || ""} dateTime={date}>
			{children} {parseDate(date)}
		</time>
	);
});
