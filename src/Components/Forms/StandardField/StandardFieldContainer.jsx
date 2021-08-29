import { StandardField } from "./StandardFields";
import { MyContext } from "../../../Context";

export const StandardFieldContainer = (props) => {
    return (
        <MyContext.Consumer>
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
        </MyContext.Consumer>
    );
};
