import React from "react";
import { RenderFriends } from "./RenderFriends";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
    return (
        <ul
            className={`${FriendsListStyle.list} ${
                FriendsListStyle[props.size] ?? ""
            } ${props.className ?? ""} `}
        >
            {RenderFriends(props.friends, props.size, FriendsListStyle.friend)}
        </ul>
    );
}

export { FriendsList };
