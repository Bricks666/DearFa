import React from "react";
import { Picture } from "../Picture/Picture";
import { Posts } from "../Posts/Posts";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { UserInfo } from "../UserInfo/UserInfo";

import ProfileStyle from "./Profile.module.css";

function Profile(props) {
    return (
        <main className={`${props.className ?? ""} ${ProfileStyle.profile}`}>
            <SectionHeader className="visibility-hidden">Профиль</SectionHeader>
            <Picture
                className={`${ProfileStyle.image} fake-photo`}
                oneXSrc={props.user.profile.backgroundPhoto.url}
                alt={props.user.profile.backgroundPhoto.alt}
            />
            <UserInfo
                className={ProfileStyle.userInfo}
                user={props.user.info}
            />
            <Posts
                className={ProfileStyle.posts}
                id={props.user.info.id}
                posts={props.posts}
            />
        </main>
    );
}

export { Profile };
