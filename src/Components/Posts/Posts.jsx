import React from "react";
import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { MakePostContainer } from "../MakePost/MakePostContainer";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

function Posts(props) {
    return (
        <section className={`${props.className ?? ""} ${PostsStyle.posts}`}>
            <SubsectionHeader className={`${PostsStyle.heading}`}>
                Мои посты
            </SubsectionHeader>
            <MakePostContainer
                className={PostsStyle.makeMessage}
                placeholder="Чем вы хотите поделиться сегодня"
                buttonMessage="Опубликовать"
                content={props.posts.newPostContent}
                id={props.id}
            />
            <CreatedPosts posts={props.posts.list} />
        </section>
    );
}

export { Posts };
