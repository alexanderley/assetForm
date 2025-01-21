import React from "react";
import useDynamicForm from "../customHooks/useDynamicForm";

import { InputFieldConfig } from "../../types/InputTypes";

interface DynamicFormProps {
  formConfig: InputFieldConfig[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig }) => {
  console.log("formConfig in dynamicForm: ", formConfig);

  // const { formData, renderFields } = useDynamicForm(formConfig);
  const { formData, renderFields } = useDynamicForm(formConfig);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
