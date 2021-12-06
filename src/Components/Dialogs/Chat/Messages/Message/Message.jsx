import classNames from "classnames";
import React, { memo } from "react";
import { Date } from "../../../../Shared";

import MessageStyle from "./Message.module.css";

export const Message = memo(
	({ className, children, author, isViewed, dateTime }) => {
		return (
			<article
				className={classNames(MessageStyle.message, className, {
					[MessageStyle.notViewed]: isViewed == false,
				})}
			>
				<span className={MessageStyle.author}>{author}</span>
				<p className={MessageStyle.content}>{children}</p>
				<Date className={MessageStyle.dateTime} date={dateTime} />
			</article>
		);
	}
);
