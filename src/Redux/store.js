import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { chatsReducers } from "./Reducers/chatsReducers";
import { postsReducers } from "./Reducers/postsReducers";
import { loginReducers } from "./Reducers/loginReducers";
import { registrationReducers } from "./Reducers/registrationReducer";
import { profileReducers } from "./Reducers/profileReducers";
import { navigationReducers } from "./Reducers/navigationReducers";
import { initialState } from "./initialState";
import { authReducers } from "./Reducers/authReducers";
import { friendsReducer } from "./Reducers/friendsReducer";
import { favoriteFriends } from "./Reducers/favoriteFriends";
import { usersReducers } from "./Reducers/usersReducers";
import { loadings } from "./Reducers/loadings";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	profile: profileReducers,
	auth: authReducers,
	chats: chatsReducers,
	posts: postsReducers,
	friends: friendsReducer,
	users: usersReducers,
	login: loginReducers,
	registration: registrationReducers,
	navigation: navigationReducers,
	favoriteFriends: favoriteFriends,
	loadings: loadings,
});

const store = createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

window.store = store;

export { store };
