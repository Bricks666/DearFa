import { useSelector } from "react-redux";
import { messagesSelectors } from "../Selectors";

export const useMessages = (dialogId) => {
	const messages = useSelector((state) =>
		messagesSelectors.getDialogMessages(state, dialogId)
	);

	const totalMessageCount = useSelector((state) =>
		messagesSelectors.getDialogTotalCount(state, dialogId)
	);

	const allMessagesLoaded = totalMessageCount === messages.length;
	const currentPage = Math.ceil(messages.length / 10);
	return { messages, totalMessageCount, allMessagesLoaded, currentPage };
};
