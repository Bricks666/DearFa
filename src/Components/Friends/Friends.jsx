import { FriendsList } from "../FriendsList/FriendsList";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import FriendsStyle from "./Friends.module.css";

export function Friends(props) {
    return (
        <main className={props.className}>
            <SectionHeader>Друзья</SectionHeader>
            <FriendsList
                className={FriendsStyle.list}
                size="medium"
                friends={props.friends}
            />
        </main>
    );
}
