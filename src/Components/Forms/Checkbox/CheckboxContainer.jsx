import { inputLoginActionCreator } from "../../../Redux/ActionCreators/inputLoginActionCreator";
import { Consumer } from "../../../Context";
import { Checkbox } from "./Checkbox";

export const CheckboxContainer = (props) => {
    return (
        <Consumer>
            {(value) => {
                const toggleLike = (isChecked) => {
                    const action = inputLoginActionCreator(
                        props.children,
                        isChecked
                    );

                    value.dispatch(action);
                };

                return (
                    <Checkbox
                        className={props.className}
                        value={props.value}
                        onChange={toggleLike}
                    >
                        {props.children}
                    </Checkbox>
                );
            }}
        </Consumer>
    );
};
