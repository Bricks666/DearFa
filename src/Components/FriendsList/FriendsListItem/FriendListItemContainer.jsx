import { FriendsListItem } from "./FriendListItem";
import { removeFriendActionCreator } from "../../../Redux/ActionCreators/removeFriend";
import { Consumer } from "../../../Context";

export const FriendListItemContainer = (props) => {
    return (
        <Consumer>
            {(value) => {
                const removeFriend = (id) => {
                    const action = removeFriendActionCreator(id);

                    value.dispatch(action);
                };

                return (
                    <FriendsListItem
                        className={props.className}
                        size={props.size}
                        friend={props.friend}
                        removeFriend={removeFriend}
                    />
                );
            }}
        </Consumer>
    );
};
