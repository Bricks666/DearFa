import { FriendsListItem } from "./FriendListItem";
import { removeFriendActionCreator } from "../../../Redux/ActionCreators/removeFriend";
import { MyContext } from "../../../Context";

export const FriendListItemContainer = (props) => {
    return (
        <MyContext.Consumer>
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
        </MyContext.Consumer>
    );
};
