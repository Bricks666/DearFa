import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context";
import { LikeContainer } from "../Like/LikeContainer";
import { Picture } from "../Picture/Picture";
import { ParseDate } from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
    return (
        <article className={PostStyle.post}>
            <Link className={PostStyle.authorLink} to={`/profile`}>
                <h5 className={PostStyle.author}>{"Цыганков Кирилл"}</h5>
            </Link>

            <time className={PostStyle.dateTime} dateTime={props.post.date}>
                {ParseDate(props.post.date)}
            </time>
            <Link className={PostStyle.photoLink} to={`/profile`}>
                <Picture
                    className={`${PostStyle.photo} fake-photo`}
                    oneXSrc={""}
                    twoXSrc=""
                    alt={""}
                />
            </Link>

            <p className={PostStyle.content}>{props.post.content.text}</p>
            <MyContext.Consumer>
                {(value) => {
                    return (
                        <LikeContainer
                            className={PostStyle.like}
                            status={props.post.like}
                            postId={props.post.id}
                            dispatch={value.dispatch}
                        />
                    );
                }}
            </MyContext.Consumer>
        </article>
    );
}

export { Post };
