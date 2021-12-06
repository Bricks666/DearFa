import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadMessagesThunk } from "../Redux/Thunks/loadMessagesThunk";
import { loadMoreMessagesThunk } from "../Redux/Thunks/loadMoreMessagesThunk";

export const useLoadMessages = (dialogId) => {
	const dispatch = useDispatch();
	const loadMessages = useCallback(() => {
		dispatch(loadMessagesThunk(dialogId, 1));
	}, [dispatch, dialogId]);

	const loadMoreMessages = useCallback(
		(page) => {
			dispatch(loadMoreMessagesThunk(dialogId, page));
		},
		[dispatch, dialogId]
	);

	return { loadMessages, loadMoreMessages };
};
