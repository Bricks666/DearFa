import { Post } from "../Post/Post";

export const RenderPost = (posts) => {
  return posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });
};
