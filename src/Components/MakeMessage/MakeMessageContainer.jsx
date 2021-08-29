import { addMessageActionCreator } from "../../Redux/ActionCreators/addMessage";
import { inputMessageActionCreator } from "../../Redux/ActionCreators/inputMessageActionCreator";
import { MakeMessage } from "./MakeMessage";
import { MyContext } from "../../Context";

export const MakeMessageContainer = (props) => {
    return (
        <MyContext.Consumer>
            {(value) => {
                const addMessage = () => {
                    const action = addMessageActionCreator();

                    value.dispatch(action);
                };

                const inputMessage = (text) => {
                    const action = inputMessageActionCreator(text);

                    value.dispatch(action);
                };

                return (
                    <MakeMessage
                        className={props.className}
                        placeholder={props.placeholder}
                        buttonMessage={props.buttonMessage}
                        content={props.content}
                        addMessage={addMessage}
                        inputMessage={inputMessage}
                    />
                );
            }}
        </MyContext.Consumer>
    );
};
