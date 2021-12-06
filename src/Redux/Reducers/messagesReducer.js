import { initialState } from "../initialState";

const SET_MESSAGES = "dearFa/messages/SET_MESSAGES";
const ADD_MESSAGE = "dearFa/messages/ADD_MESSAGE";
const ADD_MESSAGES = "dearFa/messages/ADD_MESSAGES";

export default function reducer(state = initialState.messages, action) {
	switch (action.type) {
		case SET_MESSAGES: {
			return {
				...state,
				[action.payload.dialogId]: {
					...state[action.payload.dialogId],
					totalCount: action.payload.dialog.totalCount,
					list: [
						...action.payload.dialog.list,
						...(state[action.payload.dialogId]?.list || []),
					],
				},
			};
		}
		case ADD_MESSAGE: {
			return {
				...state,
				[action.payload.dialogId]: {
					...state[action.payload.dialogId],
					list: [
						...state[action.payload.dialogId].list,
						action.payload.message,
					],
					totalCount: state[action.payload.dialogId].totalCount + 1,
				},
			};
		}
		case ADD_MESSAGES: {
			return {
				...state,
				[action.payload.dialogId]: {
					...state[action.payload.dialogId],
					list: [
						...action.payload.messages,
						...state[action.payload.dialogId].list,
					],
				},
			};
		}
		default: {
			return state;
		}
	}
}

export const setMessages = (dialogId, messages, totalCount) => {
	return {
		type: SET_MESSAGES,
		payload: {
			dialogId,
			dialog: {
				list: messages,
				totalCount,
			},
		},
	};
};

export const addMessage = (dialogId, message) => {
	return {
		type: ADD_MESSAGE,
		payload: {
			dialogId,
			message,
		},
	};
};

export const addMessages = (dialogId, messages) => {
	return {
		type: ADD_MESSAGES,
		payload: {
			dialogId,
			messages,
		},
	};
};
