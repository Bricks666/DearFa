import React from "react";
import { RenderPost } from "./RenderPost";

import CreatedPostsStyle from "./CreatedPosts.module.css";

function CreatedPosts(props) {
    return (
        <section className={CreatedPostsStyle.createdPosts}>
            {RenderPost(props.posts)}
        </section>
    );
}

export { CreatedPosts };
