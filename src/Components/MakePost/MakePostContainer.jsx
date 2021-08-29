import { MyContext } from "../../Context";
import { addPostActionCreator } from "../../Redux/ActionCreators/addPost";
import { inputPostActionCreator } from "../../Redux/ActionCreators/inputPostActionCreator";
import { MakePost } from "./MakePost";

export const MakePostContainer = (props) => {
    return (
        <MyContext.Consumer>
            {(value) => {
                const addPost = () => {
                    const action = addPostActionCreator();

                    value.dispatch(action);
                };

                const inputPost = (text) => {
                    const action = inputPostActionCreator(text);

                    value.dispatch(action);
                };

                return (
                    <MakePost
                        className={props.className}
                        placeholder={props.placeholder}
                        buttonMessage={props.buttonMessage}
                        content={props.content}
                        addPost={addPost}
                        inputPost={inputPost}
                    />
                );
            }}
        </MyContext.Consumer>
    );
};
