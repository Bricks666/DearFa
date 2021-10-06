import React from "react";

import { Picture } from "../Picture/Picture";
import { Posts } from "../../Profile/Posts/Posts";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import ProfileStyle from "./Profile.module.css";

function Profile(props) {
	console.log(props);
	return (
		<main className={`${props.className ?? ""} ${ProfileStyle.profile}`}>
			<SectionHeader className="visibility-hidden">Профиль</SectionHeader>
			<Picture
				className={`${ProfileStyle.image} fake-photo`}
				oneXSrc={props.user.background ?? "/Images/ProfileBackground/SunSet"}
				alt={""}
			/>
			<props.ProfileInfo user={props.user} className={ProfileStyle.userInfo} />
			<Posts className={ProfileStyle.posts} />
		</main>
	);
}

export { Profile };