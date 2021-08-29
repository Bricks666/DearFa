import { StandardField } from "./StandardFields";
import { Consumer } from "../../../Context";

export const StandardFieldContainer = (props) => {
    return (
        <Consumer>
            {(value) => {
                const onChange = (text) => {
                    const action = props.actionCreator(
                        props.fieldInfo.content,
                        text
                    );

                    value.dispatch(action);
                };

                return (
                    <StandardField
                        className={props.className}
                        fieldInfo={props.fieldInfo}
                        inputField={onChange}
                    />
                );
            }}
        </Consumer>
    );
};
