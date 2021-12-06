import classNames from "classnames";
import React, { memo, useCallback, useEffect, useRef } from "react";
import {
	useAuth,
	useCompanion,
	useLoadMessages,
	useMessages,
	useScrollObserver,
} from "../../../../Hooks";
import { Message } from "./Message/Message";

import MessagesStyle from "./Messages.module.css";

const Messages = memo(({ className, dialogId }) => {
	const { userId: authId } = useAuth();
	const { messages, allMessagesLoaded, currentPage } = useMessages(dialogId);
	const {
		companion: { name: companionName },
	} = useCompanion(dialogId);
	const parent = useRef();
	const childRef = useRef();

	useEffect(() => {
		console.log("SCROLL");
		console.log(parent.current.scrollTo(0, parent.current.scrollHeight));
	}, []);

	const { loadMoreMessages } = useLoadMessages(dialogId);
	const subscriber = useCallback(() => {
		loadMoreMessages(currentPage + 1);
	}, [currentPage, loadMoreMessages]);
	useScrollObserver(subscriber, childRef, parent, allMessagesLoaded === false);

	return (
		<div
			className={classNames(MessagesStyle.wrapper, className)}
			aria-label={`чат с ${companionName}`}
			ref={parent}
		>
			<div ref={childRef}></div>
			<section className={MessagesStyle.messages}>
				{messages.map((message) => {
					return (
						<Message
							className={classNames(MessagesStyle.message, {
								[MessagesStyle.myMessage]: authId === message.senderId,
							})}
							isViewed={message.viewed}
							author={message.senderName}
							dateTime={message.addedAt}
							key={message.id}
						>
							{message.body}
						</Message>
					);
				})}
			</section>
		</div>
	);
});

export { Messages };
