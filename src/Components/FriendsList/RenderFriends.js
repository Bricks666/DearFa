import { MyContext } from "../../Context";
import { FriendListItemContainer } from "./FriendsListItem/FriendListItemContainer";

export const RenderFriends = (friends, size, className) => {
  return friends.map((friend) => {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <FriendListItemContainer
              className={className}
              friend={friend.info}
              size={size}
              dispatch={value.dispatch}
            />
          );
        }}
      </MyContext.Consumer>
    );
  });
};
