import { api } from "../../DAL/api";
import {
	endLoadingMessages,
	startLoadingMessages,
} from "../Reducers/loadingsReducer";
import { setMessages } from "../Reducers/messagesReducer";

export const loadMessagesThunk = (userId, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingMessages());
			const response = await api.getMessagesWith(userId, page);
			console.log(response);
			dispatch(setMessages(+userId, response.items, response.totalCount));
		} catch (e) {
			console.log(e.message);
		} finally {
			dispatch(endLoadingMessages());
		}
	};
};
