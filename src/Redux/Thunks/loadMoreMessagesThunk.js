import { api } from "../../DAL/api";
import { addMessages } from "../Reducers/messagesReducer";

export const loadMoreMessagesThunk = (dialogId, page) => {
	return async (dispatch) => {
		try {
			const response = await api.getMessagesWith(dialogId, page);
			console.log(response);
			if (response.error === null) {
				dispatch(addMessages(dialogId, response.items));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};
