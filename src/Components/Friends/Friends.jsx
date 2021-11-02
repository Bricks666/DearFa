import React from "react";

import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { FriendsListContainer } from "./FriendsListContainer/FriendsListContainer";
import { PageListConnect } from "./PagesList/PageListConnect";
import { FriendListItemContainer } from "./FriendsListContainer/FriendsListItemContainer/FriendsListItemContainer";

import FriendsStyle from "./Friends.module.css";

export function Friends(props) {
	return (
		<main className={props.className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsListContainer
				className={FriendsStyle.list}
				friendsCount={props.friendsCount}
				Card={FriendListItemContainer}
			/>
			<PageListConnect friendsCount={props.friendsCount} />
		</main>
	);
}
