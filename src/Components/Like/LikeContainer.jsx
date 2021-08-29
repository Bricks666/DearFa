import { Like } from "./Like";
import { toggleLikeActionCreator } from "../../Redux/ActionCreators/toggleLike";
import { MyContext } from "../../Context";

export const LikeContainer = (props) => {
    return (
        <MyContext.Consumer>
            {(value) => {
                const toggle = (id) => {
                    const action = toggleLikeActionCreator(props.postId);

                    value.dispatch(action);
                };

                return (
                    <Like
                        className={props.className}
                        status={props.status}
                        toggle={toggle}
                    />
                );
            }}
        </MyContext.Consumer>
    );
};
