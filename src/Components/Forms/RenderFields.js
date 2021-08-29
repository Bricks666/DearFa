import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, actionCreator, className) => {
  return fields.map((field) => {
    return (
      <FormField
        className={className}
        fieldInfo={field}
        actionCreator={actionCreator}
      />
    );
  });
};
