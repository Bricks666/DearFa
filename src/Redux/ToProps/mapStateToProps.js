import {
	LOGIN,
	CREATED_POSTS,
	MAKE_POST,
	MAKE_MESSAGE,
	FAVORITE_FRIENDS,
	FRIENDS_LIST,
	USERS_PAGES_LIST,
	DIALOG,
	USERS_LIST,
	MESSAGES,
	REG,
	PROFILE,
	NAVIGATION,
	HEADER,
	APP,
	MAIN,
	ME,
	USERS,
	FRIENDS,
	FRIENDS_LIST_ITEM,
	LOGIN_EMAIL,
	LOGIN_PASSWORD,
	LOGIN_CHECKBOX,
	REG_EMAIL,
	REG_FULLNAME,
	REG_PASSWORD,
	REG_PASSWORD_AGAIN,
	FRIENDS_PAGES_LIST,
	USERS_LIST_ITEM,
} from "./componentsConstants";

export const mapStateToProps = (componentName) => {
	switch (componentName) {
	case APP: {
		return (state) => {
			return {
				isLogin: state.auth.isLogin,
			};
		};
	}
	case HEADER: {
		return (state) => {
			return {
				isLogin: state.auth.isLogin,
				login: state.auth.fullName,
			};
		};
	}
	case ME: {
		return (state) => {
			return {
				me: state.auth,
				isLoading: state.auth.isLoading,
				isLoaded: state.loadings.loadingAuth,
				id: state.auth.userId,
			};
		};
	}
	case MAIN: {
		return (state) => {
			return {
				isLoading: state.loadings.loadingAuth,
			};
		};
	}
	case PROFILE: {
		return (state) => {
			return {
				user: state.profile,
				isLoading: state.loadings.loadingProfile,
			};
		};
	}
	case NAVIGATION: {
		return (state) => {
			return {
				navigationItems: state.navigation,
			};
		};
	}
	case CREATED_POSTS: {
		return (state) => {
			return {
				posts: state.posts.list,
			};
		};
	}
	case MAKE_POST: {
		return (state) => {
			return {
				content: state.posts.newPostContent,
			};
		};
	}
	case MAKE_MESSAGE: {
		return (state) => {
			return {
				content: state.chats[0].newMessageContent,
			};
		};
	}
	case MESSAGES: {
		return (state) => {
			return {
				messages: state.chats[0].messages,
			};
		};
	}
	case FRIENDS: {
		return (state) => {
			return {
				currentPage: state.friends.currentPage,
				friendsCount: state.friends.friendsCount,
			};
		};
	}
	case FAVORITE_FRIENDS: {
		return (state) => {
			return {
				friends: state.favoriteFriends.list,
				isLoading: state.loadings.loadingFavoriteFriends,
				isLoaded: state.favoriteFriends.isLoaded,
			};
		};
	}
	case FRIENDS_LIST: {
		return (state) => {
			return {
				friends: state.friends.list,
				isLoading: state.loadings.loadingFriends,
				isLoaded: state.friends.isLoaded,
			};
		};
	}
	case FRIENDS_LIST_ITEM: {
		return (state, ownProps) => {
			return {
				isFollowing: state.loadings.following.includes(ownProps.user.id),
			};
		};
	}
	case FRIENDS_PAGES_LIST: {
		return (state) => {
			return {
				pageCount: state.friends.pageCount,
			};
		};
	}
	case REG: {
		return (state) => {
			return {
				fields: state.registrationFields,
			};
		};
	}
	case LOGIN: {
		return (state) => {
			return {
				isDisabled: state.login.isDisabled,
			};
		};
	}
	case REG_EMAIL: {
		return (state) => {
			return {
				value: state.registration.email,
				required: true,
				autocomplete: false,
				type: "email",
			};
		};
	}
	case REG_FULLNAME: {
		return (state) => {
			return {
				value: state.registration.fullName,
				required: true,
				autocomplete: false,
			};
		};
	}
	case REG_PASSWORD: {
		return (state) => {
			return {
				value: state.registration.password,
				required: true,
				autocomplete: false,
				type: "password",
			};
		};
	}
	case REG_PASSWORD_AGAIN: {
		return (state) => {
			return {
				value: state.registration.passwordAgain,
				required: true,
				autocomplete: false,
				type: "password",
			};
		};
	}
	case LOGIN_EMAIL: {
		return (state) => {
			return {
				value: state.login.email,
				required: true,
				autocomplete: true,
			};
		};
	}
	case LOGIN_PASSWORD: {
		return (state) => {
			return {
				value: state.login.password,
				required: true,
				type: "password",
				autocomplete: true,
			};
		};
	}
	case LOGIN_CHECKBOX: {
		return (state) => {
			return {
				checked: state.login.isRemember,
			};
		};
	}
	case USERS: {
		return (state) => {
			return {
				currentPage: state.users.currentPage,
				usersCount: state.users.usersCount,
			};
		};
	}
	case USERS_PAGES_LIST: {
		return (state) => {
			return {
				pageCount: state.users.pageCount,
			};
		};
	}
	case USERS_LIST: {
		return (state) => {
			return {
				users: state.users.list,
				isLoading: state.loadings.loadingUsers,
			};
		};
	}
	case USERS_LIST_ITEM: {
		return (state, ownProps) => {
			return {
				isFollowing: state.loadings.following.includes(ownProps.user.id),
			};
		};
	}
	case DIALOG: {
		return (state) => {
			return {
				companion: state.auth,
			};
		};
	}
	default: {
		return () => {
			return {};
		};
	}
	}
};
