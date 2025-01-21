import React, { useContext } from "react";
import useDynamicForm from "../customHooks/useDynamicForm";

import { InputFieldConfig } from "../../types/InputTypes";
import { FormContext } from "../../context/form.context";

interface DynamicFormProps {
  formConfig: InputFieldConfig[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig }) => {
  console.log("formConfig in dynamicForm: ", formConfig);

  const formContext = useContext(FormContext);
  // important for typescript to make shure the state is defined
  if (!formContext) {
    return null;
  }
  const { formContextData, setFormContextData } = formContext;

  console.log("🚕🚕🚕: ", formContextData, setFormContextData);

  const { formData, renderFields } = useDynamicForm(formConfig);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormContextData((prev) => ({
      ...prev,
      ...formData,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
