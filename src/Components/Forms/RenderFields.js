import { MyContext } from "../../Context";
import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, actionCreator, className) => {
  return fields.map((field) => {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <FormField
              className={className}
              fieldInfo={field}
              actionCreator={actionCreator}
              dispatch={value.dispatch}
            />
          );
        }}
      </MyContext.Consumer>
    );
  });
};
