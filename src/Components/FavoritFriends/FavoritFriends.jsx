import React from "react";
import { FriendsList } from "../FriendsList/FriendsList";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

function FavoritFriends(props) {
    const friends = props.friends.slice(0, 6);
    if (friends.length !== 0) {
        return (
            <aside
                className={`${FavoritFriendsStyle.lastCommunications} ${
                    props.className ?? ""
                }`}
            >
                <SubsectionHeader className>Избранные друзья</SubsectionHeader>
                <FriendsList
                    className={FavoritFriendsStyle.friendsList}
                    size="small"
                    friends={friends}
                />
            </aside>
        );
    }
    return <></>;
}

export { FavoritFriends };
