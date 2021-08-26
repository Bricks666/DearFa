import { Profile } from "../Profile/Profile";
import { Route } from "react-router-dom";

export const RenderProfile = (state, dispatch, className) => {
  const arr = Object.values(state.users);
  return arr.map((user) => {
    return (
      <Route path={`/profile/${user.info.id}`} key={user.info.id}>
        <Profile
          className={className}
          user={user}
          posts={state.posts}
          dispatch={dispatch}
        />
      </Route>
    );
  });
};
