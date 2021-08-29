import React from "react";
import { MyContext } from "../../Context";
import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { MakePostContainer } from "../MakePost/MakePostContainer";
import { Profile } from "../Profile/Profile";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

function Posts(props) {
    return (
        <section className={`${props.className ?? ""} ${PostsStyle.posts}`}>
            <SubsectionHeader className={`${PostsStyle.heading}`}>
                Мои посты
            </SubsectionHeader>
            <MyContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <MakePostContainer
                                className={PostsStyle.makeMessage}
                                placeholder="Чем вы хотите поделиться сегодня"
                                buttonMessage="Опубликовать"
                                content={value.getState().posts.newPostContent}
                                id={props.id}
                                dispatch={value.dispatch}
                            />
                            <CreatedPosts
                                posts={value.getState().posts.list}
                                dispatch={value.dispatch}
                            />
                        </>
                    );
                }}
            </MyContext.Consumer>
        </section>
    );
}

export { Posts };
