import { unfollow } from "../../DAL/api";
import { endFollowingUser } from "../Actions/Loadings/endFollowingUser";
import { startFollowingUser } from "../Actions/Loadings/startFollowingUser";
import { unfollowUserActionCreator } from "../Actions/Users/unfollowUser";

export const unfollowFriendThunk = (userId) => {
	return async (dispatch) => {
		dispatch(startFollowingUser(userId));

		const response = await unfollow(userId);

		if (response.resultCode === 0) {
			dispatch(unfollowUserActionCreator(userId));
		}

		dispatch(endFollowingUser(userId));
	};
};
